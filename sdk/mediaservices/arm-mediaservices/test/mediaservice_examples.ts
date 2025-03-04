/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  env,
  Recorder,
  RecorderStartOptions,
  delay,
  isPlaybackMode,
} from "@azure-tools/test-recorder";
import { createTestCredential } from "@azure-tools/test-credential";
import { assert } from "chai";
import { Context } from "mocha";
import { AzureMediaServices } from "../src/azureMediaServices";
import { StorageManagementClient } from "@azure/arm-storage";

const replaceableVariables: Record<string, string> = {
  AZURE_CLIENT_ID: "azure_client_id",
  AZURE_CLIENT_SECRET: "azure_client_secret",
  AZURE_TENANT_ID: "88888888-8888-8888-8888-888888888888",
  SUBSCRIPTION_ID: "azure_subscription_id"
};

const recorderOptions: RecorderStartOptions = {
  envSetupForPlayback: replaceableVariables
};

export const testPollingOptions = {
  updateIntervalInMs: isPlaybackMode() ? 0 : undefined,
};

describe("MediaServices test", () => {
  let recorder: Recorder;
  let subscriptionId: string;
  let client: AzureMediaServices;
  let location: string;
  let resourceGroup: string;
  let mediaName: string;
  let storageAccountName: string;
  let storage_client: StorageManagementClient;

  beforeEach(async function (this: Context) {
    recorder = new Recorder(this.currentTest);
    await recorder.start(recorderOptions);
    subscriptionId = env.SUBSCRIPTION_ID || '';
    // This is an example of how the environment variables are used
    const credential = createTestCredential();
    client = new AzureMediaServices(credential, subscriptionId, recorder.configureClientOptions({}));
    storage_client = new StorageManagementClient(credential, subscriptionId, recorder.configureClientOptions({}));
    location = "eastus";
    resourceGroup = "myjstest";
    mediaName = "mymediaxxx";
    storageAccountName = "mystorageaccountxxx";
  });

  afterEach(async function () {
    await recorder.stop();
  });

  it("mediaservices create test", async function () {
    const storage_res = await storage_client.storageAccounts.beginCreateAndWait(resourceGroup, storageAccountName, {
      sku: {
        name: "Standard_GRS",
      },
      kind: "StorageV2",
      location: "westeurope",
      encryption: {
        services: {
          file: {
            keyType: "Account",
            enabled: true,
          },
          blob: {
            keyType: "Account",
            enabled: true,
          },
        },
        keySource: "Microsoft.Storage",
      },
      tags: {
        key1: "value1",
        key2: "value2",
      }
    }, testPollingOptions)
    const res = await client.mediaservices.beginCreateOrUpdateAndWait(resourceGroup, mediaName, {
      location: location,
      storageAccounts: [
        {
          id: "/subscriptions/" + subscriptionId + "/resourceGroups/" + resourceGroup + "/providers/Microsoft.Storage/storageAccounts/" + storageAccountName,
          type: "Primary"
        }
      ]
    }, testPollingOptions);
    assert.equal(res.name, mediaName);
  });

  it("mediaservices get test", async function () {
    const res = await client.mediaservices.get(resourceGroup, mediaName);
    assert.equal(res.name, mediaName);
  });

  it("mediaservices list test", async function () {
    const resArray = new Array();
    for await (let item of client.mediaservices.list(resourceGroup)) {
      resArray.push(item);
    }
    assert.equal(resArray.length, 1);
  });

  it("mediaservices delete test", async function () {
    const res = await client.mediaservices.delete(resourceGroup, mediaName);
    const resArray = new Array();
    for await (let item of client.mediaservices.list(resourceGroup)) {
      resArray.push(item);
    }
    assert.equal(resArray.length, 0);
  });
});
