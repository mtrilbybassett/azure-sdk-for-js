// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { hmac } from "./hmac";
import { HTTPMethod, ResourceType, Constants } from "../common";

export async function generateHeaders(
  masterKey: string,
  method: HTTPMethod,
  resourceType: ResourceType = ResourceType.none,
  resourceId: string = "",
  date = new Date()
): Promise<{
  [x: string]: string;
}> {
  if (masterKey.startsWith("type=sas&")) {
    return {
      [Constants.HttpHeaders.Authorization]: encodeURIComponent(masterKey),
      [Constants.HttpHeaders.XDate]: date.toUTCString(),
    };
  }
  const sig = await signature(masterKey, method, resourceType, resourceId, date);

  return {
    [Constants.HttpHeaders.Authorization]: sig,
    [Constants.HttpHeaders.XDate]: date.toUTCString(),
  };
}

function getEffectiveResourceIdForSignature(resourceId: string) {
  const lastSlashPosition = resourceId.lastIndexOf("/");
  if (lastSlashPosition <= 0) {
    return resourceId;
  }

  const prefix: string = resourceId.substring(0, lastSlashPosition);
  if (!prefix.endsWith("/docs")) {
    return resourceId;
  }

  return prefix + "/" + decodeURIComponent(resourceId.substring(lastSlashPosition + 1));
}

async function signature(
  masterKey: string,
  method: HTTPMethod,
  resourceType: ResourceType,
  resourceId: string = "",
  date = new Date()
): Promise<string> {
  const type = "master";
  const version = "1.0";
  const text =
    method.toLowerCase() +
    "\n" +
    resourceType.toLowerCase() +
    "\n" +
    getEffectiveResourceIdForSignature(resourceId) +
    "\n" +
    date.toUTCString().toLowerCase() +
    "\n" +
    "" +
    "\n";

  const signed = await hmac(masterKey, text);

  return encodeURIComponent("type=" + type + "&ver=" + version + "&sig=" + signed);
}
