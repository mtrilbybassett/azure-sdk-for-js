let nock = require('nock');

module.exports.hash = "bd8421f48be834cb51b404a6576a2583";

module.exports.testInfo = {"uniqueName":{},"newDate":{}}

nock('https://endpoint', {"encodedQueryParams":true})
  .get('/common/discovery/instance')
  .query(true)
  .reply(200, {"tenant_discovery_endpoint":"https://login.windows-ppe.net/SomeTenantId/v2.0/.well-known/openid-configuration","api-version":"1.1","metadata":[{"preferred_network":"login.microsoftonline.com","preferred_cache":"login.windows.net","aliases":["login.microsoftonline.com","login.windows.net","login.microsoft.com","sts.windows.net"]},{"preferred_network":"login.partner.microsoftonline.cn","preferred_cache":"login.partner.microsoftonline.cn","aliases":["login.partner.microsoftonline.cn","login.chinacloudapi.cn"]},{"preferred_network":"login.microsoftonline.de","preferred_cache":"login.microsoftonline.de","aliases":["login.microsoftonline.de"]},{"preferred_network":"login.microsoftonline.us","preferred_cache":"login.microsoftonline.us","aliases":["login.microsoftonline.us","login.usgovcloudapi.net"]},{"preferred_network":"login-us.microsoftonline.com","preferred_cache":"login-us.microsoftonline.com","aliases":["login-us.microsoftonline.com"]}]}, [
  'Cache-Control',
  'max-age=86400, private',
  'Content-Type',
  'application/json; charset=utf-8',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Methods',
  'GET, OPTIONS',
  'P3P',
  'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'x-ms-request-id',
  'sanitized',
  'x-ms-ests-server',
  '2.1.12651.10 - NEULR1 ProdSlices',
  'X-XSS-Protection',
  '0',
  'Set-Cookie',
  'fpc=AqxTKV8uOCBHkE3T896zN8Y; expires=Sat, 11-Jun-2022 13:57:39 GMT; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'esctx=AQABAAAAAAD--DLA3VO7QrddgJg7WevrmKDubeuNIZ2wgOyLekG94Ba09Hhb0_dEaDLOLZllpmjg0L2XArUvhDVyJ0wil0Xi1OQ-mZNUkjISOM4z1NlXPCz6x6OHU1kPo5CYElymLlWi55_3LOET0iEIjXgU9Kd3cMm3SP9ACoGNt98dVu0-Gy5MYiyqwyS1qmmg8T6yzYIgAA; domain=.login.microsoftonline.com; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'x-ms-gateway-slice=estsfd; path=/; secure; samesite=none; httponly',
  'Set-Cookie',
  'stsservicecookie=estsfd; path=/; secure; samesite=none; httponly',
  'Date',
  'Thu, 12 May 2022 13:57:38 GMT',
  'Content-Length',
  '976'
]);

nock('https://endpoint', {"encodedQueryParams":true})
  .get('/SomeTenantId/v2.0/.well-known/openid-configuration')
  .reply(200, {"token_endpoint":"https://login.windows-ppe.net/SomeTenantId/oauth2/v2.0/token","token_endpoint_auth_methods_supported":["client_secret_post","private_key_jwt","client_secret_basic"],"jwks_uri":"https://login.windows-ppe.net/SomeTenantId/discovery/v2.0/keys","response_modes_supported":["query","fragment","form_post"],"subject_types_supported":["pairwise"],"id_token_signing_alg_values_supported":["RS256"],"response_types_supported":["code","id_token","code id_token","id_token token"],"scopes_supported":["openid","profile","email","offline_access"],"issuer":"https://login.windows-ppe.net/SomeTenantId/v2.0","request_uri_parameter_supported":false,"userinfo_endpoint":"https://graph.microsoft-ppe.com/oidc/userinfo","authorization_endpoint":"https://login.windows-ppe.net/SomeTenantId/oauth2/v2.0/authorize","device_authorization_endpoint":"https://login.windows-ppe.net/SomeTenantId/oauth2/v2.0/devicecode","http_logout_supported":false,"frontchannel_logout_supported":false,"end_session_endpoint":"https://login.windows-ppe.net/SomeTenantId/oauth2/v2.0/logout","claims_supported":["sub","iss","cloud_instance_name","cloud_instance_host_name","cloud_graph_host_name","msgraph_host","aud","exp","iat","auth_time","acr","nonce","preferred_username","name","tid","ver","at_hash","c_hash","email"],"kerberos_endpoint":"https://login.windows-ppe.net/SomeTenantId/kerberos","tenant_region_scope":"NA","cloud_instance_name":"windows-ppe.net","cloud_graph_host_name":"graph.ppe.windows.net","msgraph_host":"graph.microsoft-ppe.com","rbac_url":"https://pas.windows-ppe.net"}, [
  'Cache-Control',
  'max-age=86400, private',
  'Content-Type',
  'application/json; charset=utf-8',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Methods',
  'GET, OPTIONS',
  'P3P',
  'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'x-ms-request-id',
  'sanitized',
  'x-ms-ests-server',
  '2.1.12818.0 - DMS PPE',
  'X-XSS-Protection',
  '0',
  'Set-Cookie',
  'fpc=ArfostUhOMhFg2_afGVqPfk; expires=Sat, 11-Jun-2022 13:57:39 GMT; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'esctx=AQABAAAAAABYrKuFWqWSRpp9FiMCi-70RMlUrjlhKTIdMZzcFCDDKoUM6Goe7J8kya724ftjdn_0z6K6zMiK2Ni3F6WeH6a4meSe6kGDNJMW0n-3h3m5xAjtJcgfGXk-xP63qa4RyWl4fjdVJcPfe-94ESd6fIJs9eaMx3yoCdORUJ0Pu07G4algbzvgrIRn_gsI7L95GTYgAA; domain=.login.windows-ppe.net; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'stsservicecookie=estsppe; path=/; secure; samesite=none; httponly',
  'Date',
  'Thu, 12 May 2022 13:57:38 GMT',
  'Content-Length',
  '1737'
]);

nock('https://endpoint', {"encodedQueryParams":true})
  .post('/SomeTenantId/oauth2/v2.0/token', "client_id=SomeClientId&scope=https%3A%2F%2Fsanitized%2F&grant_type=client_credentials&x-client-SKU=msal.js.node&x-client-VER=1.8.0&x-client-OS=win32&x-client-CPU=x64&x-ms-lib-capability=retry-after, h429&x-client-current-telemetry=5|771,2,,,|,&x-client-last-telemetry=5|0|||0,0&client-request-id=sanitized&client_secret=azure_client_secret&claims=%7B%22access_token%22%3A%7B%22xms_cc%22%3A%7B%22values%22%3A%5B%22cp1%22%5D%7D%7D%7D")
  .reply(200, {"token_type":"Bearer","expires_in":3599,"ext_expires_in":3599,"access_token":"access_token"}, [
  'Cache-Control',
  'no-store, no-cache',
  'Pragma',
  'no-cache',
  'Content-Type',
  'application/json; charset=utf-8',
  'Expires',
  '-1',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'P3P',
  'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'x-ms-request-id',
  'sanitized',
  'x-ms-ests-server',
  '2.1.12818.0 - DMS PPE',
  'x-ms-clitelem',
  '1,0,0,,',
  'X-XSS-Protection',
  '0',
  'Set-Cookie',
  'fpc=AhnuTxhmd9tDiwFFHrKSUtOnuRFPAQAAAFIJD9oOAAAA; expires=Sat, 11-Jun-2022 13:57:39 GMT; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'stsservicecookie=estsppe; path=/; secure; samesite=none; httponly',
  'Date',
  'Thu, 12 May 2022 13:57:39 GMT',
  'Content-Length',
  '1336'
]);

nock('https://endpoint', {"encodedQueryParams":true})
  .get('/phoneNumbers')
  .query(true)
  .reply(200, {"phoneNumbers":[{"id":"14155550100","phoneNumber":"+14155550100","countryCode":"US","phoneNumberType":"geographic","capabilities":{"calling":"outbound","sms":"none"},"assignmentType":"application","purchaseDate":"2022-03-14T18:26:44.3415816+00:00","cost":{"amount":1,"currencyCode":"USD","billingFrequency":"monthly"},"operatorId":"sanitized","operatorName":"Microsoft PPE (Dogfood)","phoneNumberSource":"cloud"},{"id":"14155550100","phoneNumber":"+14155550100","countryCode":"US","phoneNumberType":"geographic","capabilities":{"calling":"inbound+outbound","sms":"none"},"assignmentType":"application","purchaseDate":"2022-03-14T19:15:38.2651776+00:00","cost":{"amount":1,"currencyCode":"USD","billingFrequency":"monthly"},"operatorId":"sanitized","operatorName":"???","phoneNumberSource":"cloud"}]}, [
  'Transfer-Encoding',
  'chunked',
  'Content-Type',
  'application/json; charset=utf-8',
  'MS-CV',
  'NuSKG/rnW0GEZ++nFUzrmQ.0',
  'Strict-Transport-Security',
  'max-age=2592000',
  'api-supported-versions',
  '2021-03-07, 2022-01-11-preview2, 2022-06-01-preview',
  'X-Processing-Time',
  '1764ms',
  'X-Cache',
  'CONFIG_NOCACHE',
  'X-Azure-Ref',
  '0UxJ9YgAAAACfuoRfKGrTTIyCJnqnb+S/UFJHMDFFREdFMDcxOABjYzkyNzU4ZC0wNWY3LTRhZDYtYWE1ZS0wZmE5NzE4ZDg5ODU=',
  'Date',
  'Thu, 12 May 2022 13:57:41 GMT'
]);
