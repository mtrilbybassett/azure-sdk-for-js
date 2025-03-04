# Release History

## 6.0.0-beta.1 (2022-05-19)

This new major version beta introduces a full redesign of the Azure Text Analytics client library, supports the new Azure Cognitive Language Service API  (version "2022-04-01-preview" and newer) and drops support for the Text Analytics service API. Application code must be updated to use the new client, please see the [Migration Guide](https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/textanalytics/ai-text-analytics/MIGRATION_v5_v6.md) for detailed instructions.

### Breaking Changes

- This version targets Azure Cognitive Language Service API version `2022-04-01-preview` and newer. It _is not_ compatible with the Text Analytics service API. To continue to use the Text Analytics API version 3.1, please use major version 5 of the client library (`@azure/ai-text-analytics@^5.1.0`).
- `TextAnalyticsClient` has been replaced by `TextAnalysisClient`.
  - The new `beginAnalyzeBatch` method replaces the previous `beginAnalyzeActions` and `beginAnalyzeHealthcareEntities` methods. The specification of actions and their results has changed to be a flat list instead of being an object where actions of the same kind are grouped into their own properties.
  - The new `analyze` method replaces the text analysis methods of the previous client. It provides a single method that can analyze documents using an action name. It replaces `analyzeSentiment`, `extractKeyPhrases`, `recognizeEntities`, `recognizePiiEntities`, `recognizeLinkedEntities`, and `detectLanguage`. The new method produces an `AnalyzeResult` that gets specialized to the type of results corresponding to the input action.
  - Previously, types were named such that they follow the naming convention of actions as verb phrases, e.g. `RecognizeEntitiesResult`. Actions are now renamed as nouns and so their corresponding types, so `RecognizeEntitiesResult` is now named `EntityRecognitionResult`. Please consult the migration guide for a full list of all renames.
  - In many output types, properties are now marked as read-only.
  - `SingleCategoryClassifyActionSuccessResult` is renamed to `CustomSingleLabelClassificationSuccessResult` and the `classification` property has been renamed to `classifications` and is now an array.
  - `statistics` and `modelVersion` has been removed from result arrays, e.g. `RecognizeEntitiesResultArray` has been replaced by `EntityRecognitionResult[]`.

### New Features

- Added support for healthcare analysis in the batching method (now `beginAnalyzeBatch`).
- Added support for FHIR (a standard for health care data exchange) representation of healthcare documents in the healthcare analysis action. To use it, pass `4.0.1` to the `fhirVersion` parameter.
- Added `restoreAnalyzeBatchPoller` to restore a poller for a batch analysis operation from a serialized poller state.
- `byPage` method on `PagedAnalyzeBatchResult` now supports passing a `continuationToken` to a particular page of results and start fetching paging from that position.

## 5.2.0-beta.2 (2021-11-02)

### Features Added

- We are now targeting the service's v3.2-preview.2 API as the default instead of v3.2-preview.1.
- Adding support for a three new actions in `beginAnalyzeActions`: `recognizeCustomEntities`, `singleCategoryClassify`, and `multiCategoryClassify`. The new actions allow you to use custom models to perform entity recognition and classification actions.

### Other Changes

- `beginAnalyzeActions` supports actions to be named and the name is now accessible in each action result.
- `beginAnalyzeActions` supports multiple actions of the same type so you can pass a list of any particular action type, e.g.

    ```typescript
    await client.beginAnalyzeActions(docs, { recognizePiiEntitiesActions: [
      { modelVersion: "latest", actionName: "action1" },
      { modelVersion: "2021-01-15", actionName: "action2" }] 
    });
    ```

## 5.2.0-beta.1 (2021-08-09)

### Features Added

- We are now targeting the service's v3.2-preview.1 API as the default instead of v3.1.
- `beginAnalyzeActions` now supports extract summary actions.

## 5.1.0 (2021-07-07)

### New Features

- We are now targeting the service's v3.1 API as the default instead of v3.1-preview.5.
- `beginAnalyzeHealthcareEntities` now works with Azure Active Directory credentials.
- `categoriesFilter` support was added to `RecognizePiiEntitiesAction`.
- Updated our internal core package dependencies to their latest versions in order to add support for Opentelemetry 1.0.0 which is compatible with the latest versions of our other client libraries.
- Changed TS compilation target to ES2017 in order to produce smaller bundles and use more native platform features

### Breaking Changes

- `PiiEntityDomainType` was renamed to `PiiEntityDomain`.
- `domain` property of `RecognizePiiEntitiesAction` was renamed to `domainFilter`.
- `beginAnalyzeActions` is now limited to accept up to one action only per type.

## 5.1.0-beta.6 (2021-05-18)

### New Features

- With the dropping of support for Node.js versions that are no longer in LTS, the dependency on `@types/node` has been updated to version 12. Read our [support policy](https://github.com/Azure/azure-sdk-for-js/blob/main/SUPPORT.md) for more details.
- We are now targeting the service's v3.1-preview.5 API as the default instead of v3.1-preview.4.
- `beginAnalyzeActions` adds support for analyze sentiment actions.
- `disableServiceLogs` parameter is added to most actions in `beginAnalyzeActions` that controls service-side logging.

### Breaking Changes

- `beginAnalyzeBatchActions` was renamed to `beginAnalyzeActions`.
- `TextElements_v8` is renamed to `TextElement_v8` in model `StringIndexType`.

### Key Bug Fixes

- Results of entity linking actions were not returned correctly by `beginAnalyzeActions` and that is now fixed.

## 5.1.0-beta.5 (2021-03-11)

- We are now targeting the service's v3.1-preview.4 API as the default instead of v3.1-preview.3.
- [Breaking] Aspects in opinions mining are now called targets and each individual opinion is now called an assessment. The new naming simplifies the naming of different parts of the response.
- `beginAnalyzeBatchActions` can now process recognize linked entities actions.
- `beginAnalyzeHealthcareEntities` returns `entityRelations` per document, a list of relations between healthcare entities.
- `beginAnalyzeHealthcareEntities` entities now include `assertions` instead of `isNegated` which gives more context about the respective entity.
- [Breaking] `beginAnalyzeHealthcareEntities` no longer returns `relatedEntities`.
- `recognizePiiEntities` takes a new option, `categoriesFilter`, that specifies a list of Pii categories to return.
- [Breaking] `statistics` is no longer part of `PagedAnalyzeBatchActionsResult`.

## 5.1.0-beta.4 (2021-02-10)

- [Breaking] `beginAnalyzeHealthcare` is renamed to `beginAnalyzeHealthcareEntities`.
- [Breaking] `beginAnalyze` is renamed to `beginAnalyzeBatchActions`.
- A new option to control how the offset is calculated by the service, `stringIndexType`, is added to `analyzeSentiment`, `recognizeEntities`, `recognizePiiEntities`, and `beginAnalyzeHealthcareEntities`. Furthermore, `stringIndexType` is added to task types `RecognizeEntitiesAction` and `RecognizePiiEntitiesAction`, which are the types of input actions to the `beginAnalyzeBatchActions` method. For more information, see [the Text Analytics documentation](https://docs.microsoft.com/azure/cognitive-services/text-analytics/concepts/text-offsets#offsets-in-api-version-31-preview).
- [Breaking] The healthcare entities returned by `beginAnalyzeHealthcare` are now organized as a directed graph where the edges represent a certain type of healthcare relationship between the source and target entities. Edges are stored in the `relatedEntities` property.
- [Breaking] The `links` property of `HealthcareEntity` is renamed to `dataSources`, a list of objects representing medical databases, where each object has `name` and `entityId` properties.
- The poller for the `beginAnalyzeBatchActions` long-running operation gained the ability to return certain metadata information about the currently running operation (e.g., when the operation was created, will be expired, and last time it was updated, and also how many actions completed and failed so far). Also, the poller for `beginAnalyzeHealthcareEntities` gained a similar ability.
- [Breaking] the words "operation" and "action" are used consistently in our names and documentation instead of "job" and "task" respectively.

## 5.1.0-beta.3 (2020-11-23)

- We are now targeting the service's v3.1-preview.3 API as the default instead of v3.1-preview.2.
- We introduced the `beginAnalyze` API which supports long-running batch process of Named Entity Recognition, Personally identifiable Information, and Key Phrase Extraction.
- We now have added support for the recognition of healthcare entities with the introduction of the `beginAnalyzeHealthcare` API. Since the Health API is currently only available in a gated preview, you need to have your subscription on the service's allow list. Note that since this is a gated preview, AAD is not supported. For more information, see [the Text Analytics for Health documentation](https://docs.microsoft.com/azure/cognitive-services/text-analytics/how-tos/text-analytics-for-health?tabs=ner#request-access-to-the-public-preview).

## 5.1.0-beta.2 (2020-10-06)

- [Breaking] The `length` property is removed from `SentenceSentiment`, `Entity`, `Match`, `PiiEntity`, and `CategorizedEntity` because the length information can be accessed from the text property itself using the string's length property.

## 5.1.0-beta.1 (2020-09-17)

- We are now targeting the service's v3.1-preview.2 API as the default instead of v3.0.
- We now have added support for opinion mining feature of Sentiment Analysis. To get this support, pass `includeOpinionMining` as True when calling the `analyzeSentiment` endpoint.
- We have added the `recognizePiiEntities` API which returns entities containing personal information for a batch of documents and also returns the redacted text.
- The `length` and `offset` properties are added to the `SentenceSentiment`, `Entity`, `Match`, `PiiEntity` and `CategorizedEntity` interfaces to represent the length of the sentence's text and its offset from the start of the document. The unit of distance used is UTF-16 code points.
- The `text` property of the `SentenceSentiment` interface is no longer marked as optional because the service has always returned it. This interface is used exclusively as an output type so this change does not break existing code.
- `bingEntitySearchApiId` property is now returned for entities returned by `recognizeLinkedEntities` API and is added to the `LinkedEntity` interface. This property is to be used in conjunction with the Bing Entity Search API to fetch additional relevant information about the returned entity.

## 5.0.1 (2020-08-18)

- Handles REST exceptions with code InvalidDocumentBatch in a way that maintains backward compatibility.

## 5.0.0 (2020-07-27)

- Updated the package version to be 5.0.0 instead of 1.0.0 in order to reduce confusion with older versions of the Azure Text Analytics SDKs.

## 1.0.0 (2020-06-09)

- This release marks the general availability of the `@azure/ai-text-analytics` package.

## 1.0.0-preview.5 (2020-05-26)

- [Breaking] Renamed all result array types that extend JavaScript's base `Array` class to end with the word `Array` instead of `Collection` (e.g. `AnalyzeSentimentResultCollection` is now `AnalyzeSentimentResultArray`)
- [Breaking] Renamed `score` to `confidenceScore` in the `Match`, `Entity`, and `DetectedLanguage` types.
- [Breaking] Removed the `graphemeOffset` and `graphemeLength` properties of the `Match`, `Entity`, and `SentenceSentiment` types.
- [Breaking] Renamed the `graphemeCount` property of `TextDocumentStatistics` back to `characterCount`
- Added a `text` property to `SentenceSentiment` that contains the sentence text
- [Breaking] Removed the `warnings` property of `SentenceSentiment`.
- Added `warnings` property to every document response object containing a list of `TextAnalyticsWarning` objects relevant to the corresponding document.
- Migrated to using the Text Analytics v3.0 (General Availability) service endpoint.

## 1.0.0-preview.4 (2020-04-07)

- Renamed the first parameter of all operation methods from `inputs` to `documents`
- [Breaking] Removed PII entity detection methods from `TextAnalyticsClient` as well as all associated samples and documentation
- [Breaking] Replaced `TextAnalyticsApiKeyCredential` with `AzureKeyCredential` (re-exported through this package from `@azure/core-auth`).
- `TextAnalyticsClient` methods now throw an error when the `documents` parameter is not an array or empty before sending a request to the Text Analytics service.

## 1.0.0-preview.3 (2020-03-10)

- [Breaking] Renamed `id` to `dataSourceEntityId` in the `LinkedEntity` type.
- Added special handling for the string `"none"` as the `countryHint` parameter of the `TextAnalyticsClient.detectLanguage`. `"none"` is now treated the same as the empty string, and indicates that the default language detection model should be used.
- [Breaking] Renamed `offset` to `graphemeOffset` and `length` to `graphemeLength` in fields of response objects as appropriate in order to make it clear that the offsets and lengths are in units of Unicode graphemes.
- [Breaking] Renamed `sentimentScores` on both `DocumentSentiment` and `SentenceSentiment` to `confidenceScores`, and renamed the type `SentimentScorePerLabel` to `SentimentConfidenceScores`.
- [Breaking] Renamed `characterCount` to `graphemeCount` in the `DocumentStatistics` interface, to align with the change to using `grapheme` in the lengths/offsets of response objects.

## 1.0.0-preview.2 (2020-02-11)

- Added support for rotating API keys via the `TextAnalyticsApiKeyCredential.updateKey` method.
- Added a discriminant type for `TextAnalyticsResult.error` to allow for easy differentiation between success and error types using `if (result.error) { ... }` in both TypeScript and JavaScript.
- [Breaking] Removed the `Entity` type and added new return types `CategorizedEntity` and `PiiEntity` for the `recognizeEntities` and `recognizePiiEntities` methods respectively. These types are equivalent to the previous `Entity` type.
- [Breaking] Removed the `detectedLanguages` property from `DetectLanguageResult`, as the service currently only returns one language.
- [Breaking] Renamed the `detectLanguages` method to `detectLanguage`, as the `detectedLanguages` property was removed from the `DetectLanguageResult` return type.
- [Breaking] Renamed `documentScores` and `sentenceScores` on the `DocumentSentiment` and `SentenceSentiment` types both to `sentimentScores`.
- [Breaking] Renamed `type` and `subtype` to `category` and `subcategory` respectively in the `CategorizedEntity` and `PiiEntity` types.
- [Breaking] Renamed `DocumentSentimentValue` and `SentenceSentimentValue` to `DocumentSentimentLabel` and `SentenceSentimentLabel` respectively.
- [Breaking] Renamed `SentimentConfidenceScorePerLabel` to `SentimentScorePerLabel`.
- [Breaking] Refactored `TextAnalyticsError` to flatten the error hierarchy and remove `innerError`. The new error model has properties for `code`, `message`, and an optional `target` only. The `code` property of `TextAnalyticsError` can now contain all of the codes from the previous `InnerErrorCodeValue` as well as those from the top-level `ErrorCodeValue`.

## 1.0.0-preview.1 (2020-01-09)

- This release is a preview of our efforts to create a client library that is user friendly and
  idiomatic to the JavaScript ecosystem. The reasons for most of the changes in this update can be found in the
  [Azure SDK Design Guidelines for TypeScript](https://azure.github.io/azure-sdk/typescript_introduction.html).
- Differences from previous public package `@azure/cognitiveservices-textanalytics`
  - Package name changed from `@azure/cognitiveservices-textanalytics` to `@azure/ai-text-analytics`.
  - Package targets version `3.0` of the service API.
  - Supports authentication via `@azure/identity`.
