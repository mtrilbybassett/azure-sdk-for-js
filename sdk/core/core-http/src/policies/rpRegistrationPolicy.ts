// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import * as utils from "../util/utils";
import {
  BaseRequestPolicy,
  RequestPolicy,
  RequestPolicyFactory,
  RequestPolicyOptions,
} from "./requestPolicy";
import { HttpOperationResponse } from "../httpOperationResponse";
import { WebResourceLike } from "../webResource";
import { delay } from "../util/delay";

export function rpRegistrationPolicy(retryTimeout = 30): RequestPolicyFactory {
  return {
    create: (nextPolicy: RequestPolicy, options: RequestPolicyOptions) => {
      return new RPRegistrationPolicy(nextPolicy, options, retryTimeout);
    },
  };
}

export class RPRegistrationPolicy extends BaseRequestPolicy {
  constructor(
    nextPolicy: RequestPolicy,
    options: RequestPolicyOptions,
    readonly _retryTimeout = 30
  ) {
    super(nextPolicy, options);
  }

  public sendRequest(request: WebResourceLike): Promise<HttpOperationResponse> {
    return this._nextPolicy
      .sendRequest(request.clone())
      .then((response) => registerIfNeeded(this, request, response));
  }
}

function registerIfNeeded(
  policy: RPRegistrationPolicy,
  request: WebResourceLike,
  response: HttpOperationResponse
): Promise<HttpOperationResponse> {
  if (response.status === 409) {
    const rpName = checkRPNotRegisteredError(response.bodyAsText as string);
    if (rpName) {
      const urlPrefix = extractSubscriptionUrl(request.url);
      return (
        registerRP(policy, urlPrefix, rpName, request)
          // Autoregistration of ${provider} failed for some reason. We will not return this error
          // instead will return the initial response with 409 status code back to the user.
          // do nothing here as we are returning the original response at the end of this method.
          .catch(() => false)
          .then((registrationStatus) => {
            if (registrationStatus) {
              // Retry the original request. We have to change the x-ms-client-request-id
              // otherwise Azure endpoint will return the initial 409 (cached) response.
              request.headers.set("x-ms-client-request-id", utils.generateUuid());
              return policy._nextPolicy.sendRequest(request.clone());
            }
            return response;
          })
      );
    }
  }

  return Promise.resolve(response);
}

/**
 * Reuses the headers of the original request and url (if specified).
 * @param originalRequest - The original request
 * @param reuseUrlToo - Should the url from the original request be reused as well. Default false.
 * @returns A new request object with desired headers.
 */
function getRequestEssentials(
  originalRequest: WebResourceLike,
  reuseUrlToo = false
): WebResourceLike {
  const reqOptions: WebResourceLike = originalRequest.clone();
  if (reuseUrlToo) {
    reqOptions.url = originalRequest.url;
  }

  // We have to change the x-ms-client-request-id otherwise Azure endpoint
  // will return the initial 409 (cached) response.
  reqOptions.headers.set("x-ms-client-request-id", utils.generateUuid());

  // Set content-type to application/json
  reqOptions.headers.set("Content-Type", "application/json; charset=utf-8");

  return reqOptions;
}

/**
 * Validates the error code and message associated with 409 response status code. If it matches to that of
 * RP not registered then it returns the name of the RP else returns undefined.
 * @param body - The response body received after making the original request.
 * @returns The name of the RP if condition is satisfied else undefined.
 */
function checkRPNotRegisteredError(body: string): string {
  let result, responseBody;
  if (body) {
    try {
      responseBody = JSON.parse(body);
    } catch (err: any) {
      // do nothing;
    }
    if (
      responseBody &&
      responseBody.error &&
      responseBody.error.message &&
      responseBody.error.code &&
      responseBody.error.code === "MissingSubscriptionRegistration"
    ) {
      const matchRes = responseBody.error.message.match(/.*'(.*)'/i);
      if (matchRes) {
        result = matchRes.pop();
      }
    }
  }
  return result;
}

/**
 * Extracts the first part of the URL, just after subscription:
 * https://management.azure.com/subscriptions/00000000-0000-0000-0000-000000000000/
 * @param url - The original request url
 * @returns The url prefix as explained above.
 */
function extractSubscriptionUrl(url: string): string {
  let result;
  const matchRes = url.match(/.*\/subscriptions\/[a-f0-9-]+\//gi);
  if (matchRes && matchRes[0]) {
    result = matchRes[0];
  } else {
    throw new Error(`Unable to extract subscriptionId from the given url - ${url}.`);
  }
  return result;
}

/**
 * Registers the given provider.
 * @param policy - The RPRegistrationPolicy this function is being called against.
 * @param urlPrefix - https://management.azure.com/subscriptions/00000000-0000-0000-0000-000000000000/
 * @param provider - The provider name to be registered.
 * @param originalRequest - The original request sent by the user that returned a 409 response
 * with a message that the provider is not registered.
 */
async function registerRP(
  policy: RPRegistrationPolicy,
  urlPrefix: string,
  provider: string,
  originalRequest: WebResourceLike
): Promise<boolean> {
  const postUrl = `${urlPrefix}providers/${provider}/register?api-version=2016-02-01`;
  const getUrl = `${urlPrefix}providers/${provider}?api-version=2016-02-01`;
  const reqOptions = getRequestEssentials(originalRequest);
  reqOptions.method = "POST";
  reqOptions.url = postUrl;

  const response = await policy._nextPolicy.sendRequest(reqOptions);
  if (response.status !== 200) {
    throw new Error(`Autoregistration of ${provider} failed. Please try registering manually.`);
  }
  return getRegistrationStatus(policy, getUrl, originalRequest);
}

/**
 * Polls the registration status of the provider that was registered. Polling happens at an interval of 30 seconds.
 * Polling will happen till the registrationState property of the response body is "Registered".
 * @param policy - The RPRegistrationPolicy this function is being called against.
 * @param url - The request url for polling
 * @param originalRequest - The original request sent by the user that returned a 409 response
 * with a message that the provider is not registered.
 * @returns True if RP Registration is successful.
 */
async function getRegistrationStatus(
  policy: RPRegistrationPolicy,
  url: string,
  originalRequest: WebResourceLike
): Promise<boolean> {
  const reqOptions: any = getRequestEssentials(originalRequest);
  reqOptions.url = url;
  reqOptions.method = "GET";

  const res = await policy._nextPolicy.sendRequest(reqOptions);
  const obj = res.parsedBody;
  if (res.parsedBody && obj.registrationState && obj.registrationState === "Registered") {
    return true;
  } else {
    await delay(policy._retryTimeout * 1000);
    return getRegistrationStatus(policy, url, originalRequest);
  }
}
