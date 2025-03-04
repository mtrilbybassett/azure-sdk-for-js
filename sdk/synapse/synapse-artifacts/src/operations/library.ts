/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { createSpan } from "../tracing";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { Library } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as coreRestPipeline from "@azure/core-rest-pipeline";
import * as coreTracing from "@azure/core-tracing";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { ArtifactsClient } from "../artifactsClient";
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl } from "../lroImpl";
import {
  LibraryResource,
  LibraryListNextOptionalParams,
  LibraryListOptionalParams,
  LibraryListOperationResponse,
  LibraryFlushOptionalParams,
  LibraryGetOperationResultOptionalParams,
  LibraryGetOperationResultResponse,
  LibraryDeleteOptionalParams,
  LibraryGetOptionalParams,
  LibraryGetResponse,
  LibraryCreateOptionalParams,
  LibraryAppendOptionalParams,
  LibraryListNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing Library operations. */
export class LibraryImpl implements Library {
  private readonly client: ArtifactsClient;

  /**
   * Initialize a new instance of the class Library class.
   * @param client Reference to the service client
   */
  constructor(client: ArtifactsClient) {
    this.client = client;
  }

  /**
   * Lists Library.
   * @param options The options parameters.
   */
  public list(
    options?: LibraryListOptionalParams
  ): PagedAsyncIterableIterator<LibraryResource> {
    const iter = this.listPagingAll(options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listPagingPage(options);
      }
    };
  }

  private async *listPagingPage(
    options?: LibraryListOptionalParams
  ): AsyncIterableIterator<LibraryResource[]> {
    let result = await this._list(options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listNext(continuationToken, options);
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listPagingAll(
    options?: LibraryListOptionalParams
  ): AsyncIterableIterator<LibraryResource> {
    for await (const page of this.listPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Lists Library.
   * @param options The options parameters.
   */
  private async _list(
    options?: LibraryListOptionalParams
  ): Promise<LibraryListOperationResponse> {
    const { span } = createSpan("ArtifactsClient-_list", options || {});
    try {
      const result = await this.client.sendOperationRequest(
        { options },
        listOperationSpec
      );
      return result as LibraryListOperationResponse;
    } catch (error: any) {
      span.setStatus({
        code: coreTracing.SpanStatusCode.UNSET,
        message: error.message
      });
      throw error;
    } finally {
      span.end();
    }
  }

  /**
   * Flush Library
   * @param libraryName file name to upload. Minimum length of the filename should be 1 excluding the
   *                    extension length.
   * @param options The options parameters.
   */
  async beginFlush(
    libraryName: string,
    options?: LibraryFlushOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>> {
    const { span } = createSpan("ArtifactsClient-beginFlush", options || {});
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<void> => {
      try {
        const result = await this.client.sendOperationRequest(args, spec);
        return result as void;
      } catch (error: any) {
        span.setStatus({
          code: coreTracing.SpanStatusCode.UNSET,
          message: error.message
        });
        throw error;
      } finally {
        span.end();
      }
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new LroImpl(
      sendOperation,
      { libraryName, options },
      flushOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * Flush Library
   * @param libraryName file name to upload. Minimum length of the filename should be 1 excluding the
   *                    extension length.
   * @param options The options parameters.
   */
  async beginFlushAndWait(
    libraryName: string,
    options?: LibraryFlushOptionalParams
  ): Promise<void> {
    const poller = await this.beginFlush(libraryName, options);
    return poller.pollUntilDone();
  }

  /**
   * Get Operation result for Library
   * @param operationId operation id for which status is requested
   * @param options The options parameters.
   */
  async getOperationResult(
    operationId: string,
    options?: LibraryGetOperationResultOptionalParams
  ): Promise<LibraryGetOperationResultResponse> {
    const { span } = createSpan(
      "ArtifactsClient-getOperationResult",
      options || {}
    );
    try {
      const result = await this.client.sendOperationRequest(
        { operationId, options },
        getOperationResultOperationSpec
      );
      return result as LibraryGetOperationResultResponse;
    } catch (error: any) {
      span.setStatus({
        code: coreTracing.SpanStatusCode.UNSET,
        message: error.message
      });
      throw error;
    } finally {
      span.end();
    }
  }

  /**
   * Delete Library
   * @param libraryName file name to upload. Minimum length of the filename should be 1 excluding the
   *                    extension length.
   * @param options The options parameters.
   */
  async beginDelete(
    libraryName: string,
    options?: LibraryDeleteOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>> {
    const { span } = createSpan("ArtifactsClient-beginDelete", options || {});
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<void> => {
      try {
        const result = await this.client.sendOperationRequest(args, spec);
        return result as void;
      } catch (error: any) {
        span.setStatus({
          code: coreTracing.SpanStatusCode.UNSET,
          message: error.message
        });
        throw error;
      } finally {
        span.end();
      }
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new LroImpl(
      sendOperation,
      { libraryName, options },
      deleteOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * Delete Library
   * @param libraryName file name to upload. Minimum length of the filename should be 1 excluding the
   *                    extension length.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    libraryName: string,
    options?: LibraryDeleteOptionalParams
  ): Promise<void> {
    const poller = await this.beginDelete(libraryName, options);
    return poller.pollUntilDone();
  }

  /**
   * Get Library
   * @param libraryName file name to upload. Minimum length of the filename should be 1 excluding the
   *                    extension length.
   * @param options The options parameters.
   */
  async get(
    libraryName: string,
    options?: LibraryGetOptionalParams
  ): Promise<LibraryGetResponse> {
    const { span } = createSpan("ArtifactsClient-get", options || {});
    try {
      const result = await this.client.sendOperationRequest(
        { libraryName, options },
        getOperationSpec
      );
      return result as LibraryGetResponse;
    } catch (error: any) {
      span.setStatus({
        code: coreTracing.SpanStatusCode.UNSET,
        message: error.message
      });
      throw error;
    } finally {
      span.end();
    }
  }

  /**
   * Creates a library with the library name.
   * @param libraryName file name to upload. Minimum length of the filename should be 1 excluding the
   *                    extension length.
   * @param options The options parameters.
   */
  async beginCreate(
    libraryName: string,
    options?: LibraryCreateOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>> {
    const { span } = createSpan("ArtifactsClient-beginCreate", options || {});
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<void> => {
      try {
        const result = await this.client.sendOperationRequest(args, spec);
        return result as void;
      } catch (error: any) {
        span.setStatus({
          code: coreTracing.SpanStatusCode.UNSET,
          message: error.message
        });
        throw error;
      } finally {
        span.end();
      }
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new LroImpl(
      sendOperation,
      { libraryName, options },
      createOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * Creates a library with the library name.
   * @param libraryName file name to upload. Minimum length of the filename should be 1 excluding the
   *                    extension length.
   * @param options The options parameters.
   */
  async beginCreateAndWait(
    libraryName: string,
    options?: LibraryCreateOptionalParams
  ): Promise<void> {
    const poller = await this.beginCreate(libraryName, options);
    return poller.pollUntilDone();
  }

  /**
   * Append the content to the library resource created using the create operation. The maximum content
   * size is 4MiB. Content larger than 4MiB must be appended in 4MiB chunks
   * @param libraryName file name to upload. Minimum length of the filename should be 1 excluding the
   *                    extension length.
   * @param content Library file chunk.
   * @param options The options parameters.
   */
  async append(
    libraryName: string,
    content: coreRestPipeline.RequestBodyType,
    options?: LibraryAppendOptionalParams
  ): Promise<void> {
    const { span } = createSpan("ArtifactsClient-append", options || {});
    try {
      const result = await this.client.sendOperationRequest(
        { libraryName, content, options },
        appendOperationSpec
      );
      return result as void;
    } catch (error: any) {
      span.setStatus({
        code: coreTracing.SpanStatusCode.UNSET,
        message: error.message
      });
      throw error;
    } finally {
      span.end();
    }
  }

  /**
   * ListNext
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private async _listNext(
    nextLink: string,
    options?: LibraryListNextOptionalParams
  ): Promise<LibraryListNextResponse> {
    const { span } = createSpan("ArtifactsClient-_listNext", options || {});
    try {
      const result = await this.client.sendOperationRequest(
        { nextLink, options },
        listNextOperationSpec
      );
      return result as LibraryListNextResponse;
    } catch (error: any) {
      span.setStatus({
        code: coreTracing.SpanStatusCode.UNSET,
        message: error.message
      });
      throw error;
    } finally {
      span.end();
    }
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path: "/libraries",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.LibraryListResponse
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion4],
  urlParameters: [Parameters.endpoint],
  headerParameters: [Parameters.accept],
  serializer
};
const flushOperationSpec: coreClient.OperationSpec = {
  path: "/libraries/{libraryName}/flush",
  httpMethod: "POST",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion4],
  urlParameters: [Parameters.endpoint, Parameters.libraryName],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationResultOperationSpec: coreClient.OperationSpec = {
  path: "/libraryOperationResults/{operationId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.LibraryResource
    },
    202: {
      bodyMapper: Mappers.OperationResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion4],
  urlParameters: [Parameters.endpoint, Parameters.operationId],
  headerParameters: [Parameters.accept],
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path: "/libraries/{libraryName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion4],
  urlParameters: [Parameters.endpoint, Parameters.libraryName],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path: "/libraries/{libraryName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.LibraryResource
    },
    304: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion4],
  urlParameters: [Parameters.endpoint, Parameters.libraryName],
  headerParameters: [Parameters.accept],
  serializer
};
const createOperationSpec: coreClient.OperationSpec = {
  path: "/libraries/{libraryName}",
  httpMethod: "PUT",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion4],
  urlParameters: [Parameters.endpoint, Parameters.libraryName],
  headerParameters: [Parameters.accept],
  serializer
};
const appendOperationSpec: coreClient.OperationSpec = {
  path: "/libraries/{libraryName}",
  httpMethod: "PUT",
  responses: {
    201: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.content,
  queryParameters: [Parameters.apiVersion4, Parameters.comp],
  urlParameters: [Parameters.endpoint, Parameters.libraryName],
  headerParameters: [
    Parameters.contentType1,
    Parameters.accept1,
    Parameters.blobConditionAppendPosition
  ],
  mediaType: "binary",
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.LibraryListResponse
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion4],
  urlParameters: [Parameters.endpoint, Parameters.nextLink],
  headerParameters: [Parameters.accept],
  serializer
};
