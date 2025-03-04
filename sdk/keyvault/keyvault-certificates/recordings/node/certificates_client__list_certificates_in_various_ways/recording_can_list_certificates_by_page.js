let nock = require('nock');

module.exports.hash = "17be28854766e6e23798160603c48929";

module.exports.testInfo = {"uniqueName":{},"newDate":{}}

nock('https://keyvault_name.vault.azure.net:443', {"encodedQueryParams":true})
  .post('/certificates/listCertificateName-canlistcertificatesbypage-0/create')
  .query(true)
  .reply(401, {"error":{"code":"Unauthorized","message":"AKV10000: Request is missing a Bearer or PoP token."}}, [
  'Cache-Control',
  'no-cache',
  'Pragma',
  'no-cache',
  'Content-Length',
  '97',
  'Content-Type',
  'application/json; charset=utf-8',
  'Expires',
  '-1',
  'WWW-Authenticate',
  'Bearer authorization="https://login.windows.net/12345678-1234-1234-1234-123456789012", resource="https://vault.azure.net"',
  'x-ms-keyvault-region',
  'westus2',
  'x-ms-client-request-id',
  '9b293fb1-7e2b-4d6c-bf09-780193a873ad',
  'x-ms-request-id',
  '486598c0-4703-4e36-860c-d0ec19c5aca1',
  'x-ms-keyvault-service-version',
  '1.9.378.1',
  'x-ms-keyvault-network-info',
  'conn_type=Ipv4;addr=131.107.147.44;act_addr_fam=InterNetwork;',
  'X-Content-Type-Options',
  'nosniff',
  'Strict-Transport-Security',
  'max-age=31536000;includeSubDomains',
  'Date',
  'Thu, 28 Apr 2022 00:10:52 GMT'
]);

nock('https://login.microsoftonline.com:443', {"encodedQueryParams":true})
  .get('/common/discovery/instance')
  .query(true)
  .reply(200, {"tenant_discovery_endpoint":"https://login.microsoftonline.com/12345678-1234-1234-1234-123456789012/v2.0/.well-known/openid-configuration","api-version":"1.1","metadata":[{"preferred_network":"login.microsoftonline.com","preferred_cache":"login.windows.net","aliases":["login.microsoftonline.com","login.windows.net","login.microsoft.com","sts.windows.net"]},{"preferred_network":"login.partner.microsoftonline.cn","preferred_cache":"login.partner.microsoftonline.cn","aliases":["login.partner.microsoftonline.cn","login.chinacloudapi.cn"]},{"preferred_network":"login.microsoftonline.de","preferred_cache":"login.microsoftonline.de","aliases":["login.microsoftonline.de"]},{"preferred_network":"login.microsoftonline.us","preferred_cache":"login.microsoftonline.us","aliases":["login.microsoftonline.us","login.usgovcloudapi.net"]},{"preferred_network":"login-us.microsoftonline.com","preferred_cache":"login-us.microsoftonline.com","aliases":["login-us.microsoftonline.com"]}]}, [
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
  '328bbf08-fdb6-4005-8441-bf3cf8e30600',
  'x-ms-ests-server',
  '2.1.12651.9 - SCUS ProdSlices',
  'X-XSS-Protection',
  '0',
  'Set-Cookie',
  'fpc=ApOUF31t739BhdZMuPeX7n8; expires=Sat, 28-May-2022 00:10:52 GMT; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'esctx=AQABAAAAAAD--DLA3VO7QrddgJg7Wevrt8l8fa0mVxl2KhkxSB9l2R90KAMpQ18821EYAwTieEF6fBEwr1x6-btXfCociFdFs-u1l11WQyFMIU_xHsdLJ1PGXVDw6HLUpcmcwRYPVWz6RRIZFVVt1tZffQQSHXr2dXrPZxzmk-o1xsulklSe-0xrniw6M1bp6p56iOzLmrUgAA; domain=.login.microsoftonline.com; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'x-ms-gateway-slice=estsfd; path=/; secure; samesite=none; httponly',
  'Set-Cookie',
  'stsservicecookie=estsfd; path=/; secure; samesite=none; httponly',
  'Date',
  'Thu, 28 Apr 2022 00:10:52 GMT',
  'Content-Length',
  '980'
]);

nock('https://login.microsoftonline.com:443', {"encodedQueryParams":true})
  .get('/12345678-1234-1234-1234-123456789012/v2.0/.well-known/openid-configuration')
  .reply(200, {"token_endpoint":"https://login.microsoftonline.com/12345678-1234-1234-1234-123456789012/oauth2/v2.0/token","token_endpoint_auth_methods_supported":["client_secret_post","private_key_jwt","client_secret_basic"],"jwks_uri":"https://login.microsoftonline.com/12345678-1234-1234-1234-123456789012/discovery/v2.0/keys","response_modes_supported":["query","fragment","form_post"],"subject_types_supported":["pairwise"],"id_token_signing_alg_values_supported":["RS256"],"response_types_supported":["code","id_token","code id_token","id_token token"],"scopes_supported":["openid","profile","email","offline_access"],"issuer":"https://login.microsoftonline.com/12345678-1234-1234-1234-123456789012/v2.0","request_uri_parameter_supported":false,"userinfo_endpoint":"https://graph.microsoft.com/oidc/userinfo","authorization_endpoint":"https://login.microsoftonline.com/12345678-1234-1234-1234-123456789012/oauth2/v2.0/authorize","device_authorization_endpoint":"https://login.microsoftonline.com/12345678-1234-1234-1234-123456789012/oauth2/v2.0/devicecode","http_logout_supported":true,"frontchannel_logout_supported":true,"end_session_endpoint":"https://login.microsoftonline.com/12345678-1234-1234-1234-123456789012/oauth2/v2.0/logout","claims_supported":["sub","iss","cloud_instance_name","cloud_instance_host_name","cloud_graph_host_name","msgraph_host","aud","exp","iat","auth_time","acr","nonce","preferred_username","name","tid","ver","at_hash","c_hash","email"],"kerberos_endpoint":"https://login.microsoftonline.com/12345678-1234-1234-1234-123456789012/kerberos","tenant_region_scope":"WW","cloud_instance_name":"microsoftonline.com","cloud_graph_host_name":"graph.windows.net","msgraph_host":"graph.microsoft.com","rbac_url":"https://pas.windows.net"}, [
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
  '27b8e1b0-76ae-4b05-80f5-eebf809f2800',
  'x-ms-ests-server',
  '2.1.12707.9 - EUS ProdSlices',
  'X-XSS-Protection',
  '0',
  'Set-Cookie',
  'fpc=Aqr_nA1lL3BClXIaVjMOIE0; expires=Sat, 28-May-2022 00:10:52 GMT; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'esctx=AQABAAAAAAD--DLA3VO7QrddgJg7WevrAYD_pim8-mLqmbCtDHvFI1Uj0cV6xHBwHLSC5GCF2eNk2ArYxXQ1SZJBU6tYSJyGahnxGL2Ve7jFd1Nv0lkOR4cdpd5cLhvg2meXs_IWbzd7MqvdZGvnWv8KUqF2fo27uJTKN2iLB2E9NEcbZu_29Ui7pmhDSPRv4ky-Z_Wl17YgAA; domain=.login.microsoftonline.com; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'x-ms-gateway-slice=estsfd; path=/; secure; samesite=none; httponly',
  'Set-Cookie',
  'stsservicecookie=estsfd; path=/; secure; samesite=none; httponly',
  'Date',
  'Thu, 28 Apr 2022 00:10:52 GMT',
  'Content-Length',
  '1753'
]);

nock('https://login.microsoftonline.com:443', {"encodedQueryParams":true})
  .post('/12345678-1234-1234-1234-123456789012/oauth2/v2.0/token', "client_id=azure_client_id&scope=https%3A%2F%2Fsanitized%2F&grant_type=client_credentials&x-client-SKU=msal.js.node&x-client-VER=1.7.0&x-client-OS=win32&x-client-CPU=x64&x-ms-lib-capability=retry-after, h429&x-client-current-telemetry=5|771,2,,,|,&x-client-last-telemetry=5|0|||0,0&client-request-id=f2823047-52ad-4478-ab7d-e9883c70a1fe&client_secret=azure_client_secret&claims=%7B%22access_token%22%3A%7B%22xms_cc%22%3A%7B%22values%22%3A%5B%22cp1%22%5D%7D%7D%7D")
  .reply(200, {"token_type":"Bearer","expires_in":86399,"ext_expires_in":86399,"access_token":"access_token"}, [
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
  'aaf06e4c-d3cd-4c19-9a09-57e4a97e2800',
  'x-ms-ests-server',
  '2.1.12707.9 - EUS ProdSlices',
  'x-ms-clitelem',
  '1,0,0,,',
  'X-XSS-Protection',
  '0',
  'Set-Cookie',
  'fpc=Ag9_QJd9_zFNnUytnhK_UlRPlvakAQAAAIzS-9kOAAAA; expires=Sat, 28-May-2022 00:10:53 GMT; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'x-ms-gateway-slice=estsfd; path=/; secure; samesite=none; httponly',
  'Set-Cookie',
  'stsservicecookie=estsfd; path=/; secure; samesite=none; httponly',
  'Date',
  'Thu, 28 Apr 2022 00:10:52 GMT',
  'Content-Length',
  '1315'
]);

nock('https://keyvault_name.vault.azure.net:443', {"encodedQueryParams":true})
  .post('/certificates/listCertificateName-canlistcertificatesbypage-0/create', {"policy":{"key_props":{},"secret_props":{},"x509_props":{"subject":"cn=MyCert","sans":{}},"issuer":{"name":"Self"},"attributes":{}},"attributes":{}})
  .query(true)
  .reply(202, {"id":"https://keyvault_name.vault.azure.net/certificates/listCertificateName-canlistcertificatesbypage-0/pending","issuer":{"name":"Self"},"csr":"MIICoTCCAYkCAQAwETEPMA0GA1UEAxMGTXlDZXJ0MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAwWXDB2RBPRcy5SjWVLJmGsEmnNS0/KIMGMsOozqZFPCbUVfkMW6hy4Pwnm4wXVDlJcgEByBY6lxprA8xSyLSXpVI+zvgfa65GXdMW8Gp1HWs+hdgAwIt/R3r+/mT1647A2pLgCCL/uQ+AvX6u6QsbocH6kkLRWMKW2kd+2cbzeFPFVCC+8zQ8YsbE/wX35VwlxTB5I3vkrHqcMSxjrtUXSLMcDdxJlZIo2UPI93QlF0PDYAdvLoYr/fpwwesJKpfqT2ZBxSvf6Vo6lcyTYH+C1jjyaxZRqnyAp8NsCxDp1+u6zwp/ZkeUDIhf9TJprBhphrhe7OpQXyfWRe6O/RfNQIDAQABoEswSQYJKoZIhvcNAQkOMTwwOjAOBgNVHQ8BAf8EBAMCBaAwHQYDVR0lBBYwFAYIKwYBBQUHAwEGCCsGAQUFBwMCMAkGA1UdEwQCMAAwDQYJKoZIhvcNAQELBQADggEBABvLLo6Kn98Phmz/rRagXUoXkMKKExDEEo7ALsVyT8v0W00ePZDbE+4ReKaPeWlqPt6yo7JxflgDumk9ID281lORraD+prhUpbBlNJLkKmeey5iOPe+Dlp+J/m26s/OLiScUQ0CWxvLJd8Vjje9kKwTEs8KVSTfjVVeu0dpOptNBsxjTwy/c7pimvzFxX4ihsrb5j+Kf/bXgNA9UZ5CEtNuEG3SLX0qCCq8RLqv9jBsmFTOFkKKlteFFaHWEmyjZMarlRdL3pWYzwPaxTBINW5wFzILZ9eEKZjlr7li6kfSuzep+dkkA3BJeEAicXIx+nlJxdhXJCY975NEcNfHV7Us=","cancellation_requested":false,"status":"inProgress","status_details":"Pending certificate created. Certificate request is in progress. This may take some time based on the issuer provider. Please check again later.","request_id":"9900642a517e4164a6dfbcebb6dfa90f"}, [
  'Cache-Control',
  'no-cache',
  'Pragma',
  'no-cache',
  'Content-Type',
  'application/json; charset=utf-8',
  'Expires',
  '-1',
  'Location',
  'https://keyvault_name.vault.azure.net/certificates/listCertificateName-canlistcertificatesbypage-0/pending?api-version=7.3&request_id=9900642a517e4164a6dfbcebb6dfa90f',
  'Retry-After',
  '0',
  'x-ms-keyvault-region',
  'westus2',
  'x-ms-client-request-id',
  '9b293fb1-7e2b-4d6c-bf09-780193a873ad',
  'x-ms-request-id',
  'f1cc9c58-dc69-40f2-ad88-c087bdd8c43d',
  'x-ms-keyvault-service-version',
  '1.9.378.1',
  'x-ms-keyvault-network-info',
  'conn_type=Ipv4;addr=131.107.147.44;act_addr_fam=InterNetwork;',
  'x-ms-keyvault-rbac-assignment-id',
  '0cc3cf84-3de1-5005-ab06-0ef4d04fa1de',
  'x-ms-keyvault-rbac-cache',
  'ra_age=1486;da_age=1486;rd_age=1486;brd_age=12279;ra_notif_age=1956;dec_lev=1;',
  'X-Content-Type-Options',
  'nosniff',
  'Strict-Transport-Security',
  'max-age=31536000;includeSubDomains',
  'Date',
  'Thu, 28 Apr 2022 00:10:53 GMT',
  'Content-Length',
  '1337'
]);

nock('https://keyvault_name.vault.azure.net:443', {"encodedQueryParams":true})
  .get('/certificates/listCertificateName-canlistcertificatesbypage-0/pending')
  .query(true)
  .reply(200, {"id":"https://keyvault_name.vault.azure.net/certificates/listCertificateName-canlistcertificatesbypage-0/pending","issuer":{"name":"Self"},"csr":"MIICoTCCAYkCAQAwETEPMA0GA1UEAxMGTXlDZXJ0MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAwWXDB2RBPRcy5SjWVLJmGsEmnNS0/KIMGMsOozqZFPCbUVfkMW6hy4Pwnm4wXVDlJcgEByBY6lxprA8xSyLSXpVI+zvgfa65GXdMW8Gp1HWs+hdgAwIt/R3r+/mT1647A2pLgCCL/uQ+AvX6u6QsbocH6kkLRWMKW2kd+2cbzeFPFVCC+8zQ8YsbE/wX35VwlxTB5I3vkrHqcMSxjrtUXSLMcDdxJlZIo2UPI93QlF0PDYAdvLoYr/fpwwesJKpfqT2ZBxSvf6Vo6lcyTYH+C1jjyaxZRqnyAp8NsCxDp1+u6zwp/ZkeUDIhf9TJprBhphrhe7OpQXyfWRe6O/RfNQIDAQABoEswSQYJKoZIhvcNAQkOMTwwOjAOBgNVHQ8BAf8EBAMCBaAwHQYDVR0lBBYwFAYIKwYBBQUHAwEGCCsGAQUFBwMCMAkGA1UdEwQCMAAwDQYJKoZIhvcNAQELBQADggEBABvLLo6Kn98Phmz/rRagXUoXkMKKExDEEo7ALsVyT8v0W00ePZDbE+4ReKaPeWlqPt6yo7JxflgDumk9ID281lORraD+prhUpbBlNJLkKmeey5iOPe+Dlp+J/m26s/OLiScUQ0CWxvLJd8Vjje9kKwTEs8KVSTfjVVeu0dpOptNBsxjTwy/c7pimvzFxX4ihsrb5j+Kf/bXgNA9UZ5CEtNuEG3SLX0qCCq8RLqv9jBsmFTOFkKKlteFFaHWEmyjZMarlRdL3pWYzwPaxTBINW5wFzILZ9eEKZjlr7li6kfSuzep+dkkA3BJeEAicXIx+nlJxdhXJCY975NEcNfHV7Us=","cancellation_requested":false,"status":"inProgress","status_details":"Pending certificate created. Certificate request is in progress. This may take some time based on the issuer provider. Please check again later.","request_id":"9900642a517e4164a6dfbcebb6dfa90f"}, [
  'Cache-Control',
  'no-cache',
  'Pragma',
  'no-cache',
  'Content-Type',
  'application/json; charset=utf-8',
  'Expires',
  '-1',
  'Retry-After',
  '0',
  'x-ms-keyvault-region',
  'westus2',
  'x-ms-client-request-id',
  'b60261f2-be26-4717-9bbd-4b2c1a1c9c31',
  'x-ms-request-id',
  '5d9199e2-ca6a-4dd0-a597-d540a8b23b34',
  'x-ms-keyvault-service-version',
  '1.9.378.1',
  'x-ms-keyvault-network-info',
  'conn_type=Ipv4;addr=131.107.147.44;act_addr_fam=InterNetwork;',
  'x-ms-keyvault-rbac-assignment-id',
  '0cc3cf84-3de1-5005-ab06-0ef4d04fa1de',
  'x-ms-keyvault-rbac-cache',
  'ra_age=1487;da_age=1487;rd_age=1487;brd_age=12280;ra_notif_age=1956;dec_lev=0;',
  'X-Content-Type-Options',
  'nosniff',
  'Strict-Transport-Security',
  'max-age=31536000;includeSubDomains',
  'Date',
  'Thu, 28 Apr 2022 00:10:53 GMT',
  'Content-Length',
  '1337'
]);

nock('https://keyvault_name.vault.azure.net:443', {"encodedQueryParams":true})
  .get('/certificates/listCertificateName-canlistcertificatesbypage-0/pending')
  .query(true)
  .reply(200, {"id":"https://keyvault_name.vault.azure.net/certificates/listCertificateName-canlistcertificatesbypage-0/pending","issuer":{"name":"Self"},"csr":"MIICoTCCAYkCAQAwETEPMA0GA1UEAxMGTXlDZXJ0MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAwWXDB2RBPRcy5SjWVLJmGsEmnNS0/KIMGMsOozqZFPCbUVfkMW6hy4Pwnm4wXVDlJcgEByBY6lxprA8xSyLSXpVI+zvgfa65GXdMW8Gp1HWs+hdgAwIt/R3r+/mT1647A2pLgCCL/uQ+AvX6u6QsbocH6kkLRWMKW2kd+2cbzeFPFVCC+8zQ8YsbE/wX35VwlxTB5I3vkrHqcMSxjrtUXSLMcDdxJlZIo2UPI93QlF0PDYAdvLoYr/fpwwesJKpfqT2ZBxSvf6Vo6lcyTYH+C1jjyaxZRqnyAp8NsCxDp1+u6zwp/ZkeUDIhf9TJprBhphrhe7OpQXyfWRe6O/RfNQIDAQABoEswSQYJKoZIhvcNAQkOMTwwOjAOBgNVHQ8BAf8EBAMCBaAwHQYDVR0lBBYwFAYIKwYBBQUHAwEGCCsGAQUFBwMCMAkGA1UdEwQCMAAwDQYJKoZIhvcNAQELBQADggEBABvLLo6Kn98Phmz/rRagXUoXkMKKExDEEo7ALsVyT8v0W00ePZDbE+4ReKaPeWlqPt6yo7JxflgDumk9ID281lORraD+prhUpbBlNJLkKmeey5iOPe+Dlp+J/m26s/OLiScUQ0CWxvLJd8Vjje9kKwTEs8KVSTfjVVeu0dpOptNBsxjTwy/c7pimvzFxX4ihsrb5j+Kf/bXgNA9UZ5CEtNuEG3SLX0qCCq8RLqv9jBsmFTOFkKKlteFFaHWEmyjZMarlRdL3pWYzwPaxTBINW5wFzILZ9eEKZjlr7li6kfSuzep+dkkA3BJeEAicXIx+nlJxdhXJCY975NEcNfHV7Us=","cancellation_requested":false,"status":"inProgress","status_details":"Pending certificate created. Certificate request is in progress. This may take some time based on the issuer provider. Please check again later.","request_id":"9900642a517e4164a6dfbcebb6dfa90f"}, [
  'Cache-Control',
  'no-cache',
  'Pragma',
  'no-cache',
  'Content-Type',
  'application/json; charset=utf-8',
  'Expires',
  '-1',
  'Retry-After',
  '0',
  'x-ms-keyvault-region',
  'westus2',
  'x-ms-client-request-id',
  '64381d85-c0ab-4803-8a66-6c4f40e56cc5',
  'x-ms-request-id',
  'ce8aada9-098f-4b87-bdd3-6e52cfdac638',
  'x-ms-keyvault-service-version',
  '1.9.378.1',
  'x-ms-keyvault-network-info',
  'conn_type=Ipv4;addr=131.107.147.44;act_addr_fam=InterNetwork;',
  'x-ms-keyvault-rbac-assignment-id',
  '0cc3cf84-3de1-5005-ab06-0ef4d04fa1de',
  'x-ms-keyvault-rbac-cache',
  'ra_age=1487;da_age=1487;rd_age=1487;brd_age=12280;ra_notif_age=1956;dec_lev=0;',
  'X-Content-Type-Options',
  'nosniff',
  'Strict-Transport-Security',
  'max-age=31536000;includeSubDomains',
  'Date',
  'Thu, 28 Apr 2022 00:10:53 GMT',
  'Content-Length',
  '1337'
]);

nock('https://keyvault_name.vault.azure.net:443', {"encodedQueryParams":true})
  .get('/certificates/listCertificateName-canlistcertificatesbypage-0/pending')
  .query(true)
  .reply(200, {"id":"https://keyvault_name.vault.azure.net/certificates/listCertificateName-canlistcertificatesbypage-0/pending","issuer":{"name":"Self"},"csr":"MIICoTCCAYkCAQAwETEPMA0GA1UEAxMGTXlDZXJ0MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAwWXDB2RBPRcy5SjWVLJmGsEmnNS0/KIMGMsOozqZFPCbUVfkMW6hy4Pwnm4wXVDlJcgEByBY6lxprA8xSyLSXpVI+zvgfa65GXdMW8Gp1HWs+hdgAwIt/R3r+/mT1647A2pLgCCL/uQ+AvX6u6QsbocH6kkLRWMKW2kd+2cbzeFPFVCC+8zQ8YsbE/wX35VwlxTB5I3vkrHqcMSxjrtUXSLMcDdxJlZIo2UPI93QlF0PDYAdvLoYr/fpwwesJKpfqT2ZBxSvf6Vo6lcyTYH+C1jjyaxZRqnyAp8NsCxDp1+u6zwp/ZkeUDIhf9TJprBhphrhe7OpQXyfWRe6O/RfNQIDAQABoEswSQYJKoZIhvcNAQkOMTwwOjAOBgNVHQ8BAf8EBAMCBaAwHQYDVR0lBBYwFAYIKwYBBQUHAwEGCCsGAQUFBwMCMAkGA1UdEwQCMAAwDQYJKoZIhvcNAQELBQADggEBABvLLo6Kn98Phmz/rRagXUoXkMKKExDEEo7ALsVyT8v0W00ePZDbE+4ReKaPeWlqPt6yo7JxflgDumk9ID281lORraD+prhUpbBlNJLkKmeey5iOPe+Dlp+J/m26s/OLiScUQ0CWxvLJd8Vjje9kKwTEs8KVSTfjVVeu0dpOptNBsxjTwy/c7pimvzFxX4ihsrb5j+Kf/bXgNA9UZ5CEtNuEG3SLX0qCCq8RLqv9jBsmFTOFkKKlteFFaHWEmyjZMarlRdL3pWYzwPaxTBINW5wFzILZ9eEKZjlr7li6kfSuzep+dkkA3BJeEAicXIx+nlJxdhXJCY975NEcNfHV7Us=","cancellation_requested":false,"status":"completed","target":"https://keyvault_name.vault.azure.net/certificates/listCertificateName-canlistcertificatesbypage-0","request_id":"9900642a517e4164a6dfbcebb6dfa90f"}, [
  'Cache-Control',
  'no-cache',
  'Pragma',
  'no-cache',
  'Content-Type',
  'application/json; charset=utf-8',
  'Expires',
  '-1',
  'x-ms-keyvault-region',
  'westus2',
  'x-ms-client-request-id',
  'a2ca1bf3-53fc-45f1-b5be-5dee08585fc2',
  'x-ms-request-id',
  '06ce4d57-8d7a-4869-9511-8b944310ad4b',
  'x-ms-keyvault-service-version',
  '1.9.378.1',
  'x-ms-keyvault-network-info',
  'conn_type=Ipv4;addr=131.107.147.44;act_addr_fam=InterNetwork;',
  'x-ms-keyvault-rbac-assignment-id',
  '0cc3cf84-3de1-5005-ab06-0ef4d04fa1de',
  'x-ms-keyvault-rbac-cache',
  'ra_age=1497;da_age=1497;rd_age=1497;brd_age=12290;ra_notif_age=1966;dec_lev=0;',
  'X-Content-Type-Options',
  'nosniff',
  'Strict-Transport-Security',
  'max-age=31536000;includeSubDomains',
  'Date',
  'Thu, 28 Apr 2022 00:11:03 GMT',
  'Content-Length',
  '1301'
]);

nock('https://keyvault_name.vault.azure.net:443', {"encodedQueryParams":true})
  .get('/certificates/listCertificateName-canlistcertificatesbypage-0/')
  .query(true)
  .reply(200, {"id":"https://keyvault_name.vault.azure.net/certificates/listCertificateName-canlistcertificatesbypage-0/21e84aa2b1074c86b5f570da5c0dc5b8","kid":"https://keyvault_name.vault.azure.net/keys/listCertificateName-canlistcertificatesbypage-0/21e84aa2b1074c86b5f570da5c0dc5b8","sid":"https://keyvault_name.vault.azure.net/secrets/listCertificateName-canlistcertificatesbypage-0/21e84aa2b1074c86b5f570da5c0dc5b8","x5t":"j5bf74NHQ4m8t5YJ4H_k-6zKNSA","cer":"MIIDKDCCAhCgAwIBAgIQeCOAhfZqRf6oMBJvAEjywjANBgkqhkiG9w0BAQsFADARMQ8wDQYDVQQDEwZNeUNlcnQwHhcNMjIwNDI4MDAwMDU3WhcNMjMwNDI4MDAxMDU3WjARMQ8wDQYDVQQDEwZNeUNlcnQwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQDBZcMHZEE9FzLlKNZUsmYawSac1LT8ogwYyw6jOpkU8JtRV+QxbqHLg/CebjBdUOUlyAQHIFjqXGmsDzFLItJelUj7O+B9rrkZd0xbwanUdaz6F2ADAi39Hev7+ZPXrjsDakuAIIv+5D4C9fq7pCxuhwfqSQtFYwpbaR37ZxvN4U8VUIL7zNDxixsT/BfflXCXFMHkje+SsepwxLGOu1RdIsxwN3EmVkijZQ8j3dCUXQ8NgB28uhiv9+nDB6wkql+pPZkHFK9/pWjqVzJNgf4LWOPJrFlGqfICnw2wLEOnX67rPCn9mR5QMiF/1MmmsGGmGuF7s6lBfJ9ZF7o79F81AgMBAAGjfDB6MA4GA1UdDwEB/wQEAwIFoDAJBgNVHRMEAjAAMB0GA1UdJQQWMBQGCCsGAQUFBwMBBggrBgEFBQcDAjAfBgNVHSMEGDAWgBTw+Nlj/c86taDzfbPiJ4CQDZ3CYDAdBgNVHQ4EFgQU8PjZY/3POrWg832z4ieAkA2dwmAwDQYJKoZIhvcNAQELBQADggEBAI5Gbv8e9NeiyJmQXbBhIfL43yWA8fDZ9ggNni8yBy4z1oy2JC+/R8+fNYIoPB7bll6nUk1pwUmibofqJM3oKGZpQXy3IGEF+QmrRahHJOGp+mh2ZyNAdsC+SdknoDhSLGRskQ19VGLPPsgEU6K8jqMSkOLoyALbpyDdXCcPvCJAOebbI7udfWEzuwnLYoH3/r9BAmhvUbmnakcu+qm3EVNgN/ErXjwVovovlV0vCcreMj6U5sS2Qte5HgsotmDTknyrPl6KTNjP5b5mlh75i5vV/8CBbrBpHMCCyK1ZRmSx8fyGTTUHIRVryCbyRBzKTqEJrrnOwKwVIelAEGxhdnQ=","attributes":{"enabled":true,"nbf":1651104057,"exp":1682640657,"created":1651104657,"updated":1651104657,"recoveryLevel":"CustomizedRecoverable+Purgeable","recoverableDays":7},"policy":{"id":"https://keyvault_name.vault.azure.net/certificates/listCertificateName-canlistcertificatesbypage-0/policy","key_props":{"exportable":true,"kty":"RSA","key_size":2048,"reuse_key":false},"secret_props":{"contentType":"application/x-pkcs12"},"x509_props":{"subject":"cn=MyCert","sans":{},"ekus":["1.3.6.1.5.5.7.3.1","1.3.6.1.5.5.7.3.2"],"key_usage":["digitalSignature","keyEncipherment"],"validity_months":12,"basic_constraints":{"ca":false}},"lifetime_actions":[{"trigger":{"lifetime_percentage":80},"action":{"action_type":"AutoRenew"}}],"issuer":{"name":"Self"},"attributes":{"enabled":true,"created":1651104653,"updated":1651104653}},"pending":{"id":"https://keyvault_name.vault.azure.net/certificates/listCertificateName-canlistcertificatesbypage-0/pending"}}, [
  'Cache-Control',
  'no-cache',
  'Pragma',
  'no-cache',
  'Content-Type',
  'application/json; charset=utf-8',
  'Expires',
  '-1',
  'x-ms-keyvault-region',
  'westus2',
  'x-ms-client-request-id',
  '1b3e168b-1b47-41bd-a175-00418537a6dc',
  'x-ms-request-id',
  '078ee07d-c679-4277-895c-6e26ff496ace',
  'x-ms-keyvault-service-version',
  '1.9.378.1',
  'x-ms-keyvault-network-info',
  'conn_type=Ipv4;addr=131.107.147.44;act_addr_fam=InterNetwork;',
  'x-ms-keyvault-rbac-assignment-id',
  '0cc3cf84-3de1-5005-ab06-0ef4d04fa1de',
  'x-ms-keyvault-rbac-cache',
  'ra_age=1497;da_age=1497;rd_age=1497;brd_age=12290;ra_notif_age=1966;dec_lev=1;',
  'X-Content-Type-Options',
  'nosniff',
  'Strict-Transport-Security',
  'max-age=31536000;includeSubDomains',
  'Date',
  'Thu, 28 Apr 2022 00:11:03 GMT',
  'Content-Length',
  '2584'
]);

nock('https://keyvault_name.vault.azure.net:443', {"encodedQueryParams":true})
  .post('/certificates/listCertificateName-canlistcertificatesbypage-1/create', {"policy":{"key_props":{},"secret_props":{},"x509_props":{"subject":"cn=MyCert","sans":{}},"issuer":{"name":"Self"},"attributes":{}},"attributes":{}})
  .query(true)
  .reply(202, {"id":"https://keyvault_name.vault.azure.net/certificates/listCertificateName-canlistcertificatesbypage-1/pending","issuer":{"name":"Self"},"csr":"MIICoTCCAYkCAQAwETEPMA0GA1UEAxMGTXlDZXJ0MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAwuC5p3QelmvhM7JNWgQkQapb/ViYhUyRH1ZBHMFe7aZ6s/hksm5z3siHrqD33+UbevBKzEMTxXB+uzhcxQMNJHInOmiLrJLeG/h41uaQT40aMgKaUWy3ZGmpT3la6aBrFk6AbukljOIX2Pq++mnZEl/adu16EWplFF/hHQuHple8SF6sN2y3x6+DeWSAJvKFg4A+ajPzwrp4deO5CWtK/wQrGjVgZLuI4o21LmmJjSK+IpcXerT1QihMkOig3KNBiPI/9ZU7UfD3std0zb0hJ/n1G6g8BVk3jqru8gT2muslnCUsQKv0Y/sHg/ivcgA3aNG4/61wUi4Ijiw4DCZ6uQIDAQABoEswSQYJKoZIhvcNAQkOMTwwOjAOBgNVHQ8BAf8EBAMCBaAwHQYDVR0lBBYwFAYIKwYBBQUHAwEGCCsGAQUFBwMCMAkGA1UdEwQCMAAwDQYJKoZIhvcNAQELBQADggEBAAzb8sBFNRPc12np7czGIACIaGJAbG7PlWixUg8cC348bpvFjyMADH+Ya13RzvqLFhggLb3orzAXLm7TrvRFUQUhgIS181jmQQiQSlb5jul9rV6G9dczASDSJsPyEXfo8y+FmihR0GUSbREl7s50uuPNRsb7WG8u1tZcryr59onDcjoqsqCo0aCAQOJ1FI/Q3azp1skw+oBKnwXrtDoqBqkMsjvPJg+emqSb1Fry8EnYhEEi0sfZizAdRDcYQySk/1T0d4hkFDaiTd1GrKMzQ968TFORab2z1UfuaN43N3uWMtLZAIrj98mOBD4YVYWQRG1G8G8QPR5LqBgiES5sYUg=","cancellation_requested":false,"status":"inProgress","status_details":"Pending certificate created. Certificate request is in progress. This may take some time based on the issuer provider. Please check again later.","request_id":"b73cd17e0cb847c5a9ec0ffa0aa66677"}, [
  'Cache-Control',
  'no-cache',
  'Pragma',
  'no-cache',
  'Content-Type',
  'application/json; charset=utf-8',
  'Expires',
  '-1',
  'Location',
  'https://keyvault_name.vault.azure.net/certificates/listCertificateName-canlistcertificatesbypage-1/pending?api-version=7.3&request_id=b73cd17e0cb847c5a9ec0ffa0aa66677',
  'Retry-After',
  '0',
  'x-ms-keyvault-region',
  'westus2',
  'x-ms-client-request-id',
  '66658d07-8569-4c90-add4-51cea2d1c265',
  'x-ms-request-id',
  'b489888e-748e-481d-832a-65fcd524c2bb',
  'x-ms-keyvault-service-version',
  '1.9.378.1',
  'x-ms-keyvault-network-info',
  'conn_type=Ipv4;addr=131.107.147.44;act_addr_fam=InterNetwork;',
  'x-ms-keyvault-rbac-assignment-id',
  '0cc3cf84-3de1-5005-ab06-0ef4d04fa1de',
  'x-ms-keyvault-rbac-cache',
  'ra_age=1497;da_age=1497;rd_age=1497;brd_age=12290;ra_notif_age=1966;dec_lev=1;',
  'X-Content-Type-Options',
  'nosniff',
  'Strict-Transport-Security',
  'max-age=31536000;includeSubDomains',
  'Date',
  'Thu, 28 Apr 2022 00:11:04 GMT',
  'Content-Length',
  '1337'
]);

nock('https://keyvault_name.vault.azure.net:443', {"encodedQueryParams":true})
  .get('/certificates/listCertificateName-canlistcertificatesbypage-1/pending')
  .query(true)
  .reply(200, {"id":"https://keyvault_name.vault.azure.net/certificates/listCertificateName-canlistcertificatesbypage-1/pending","issuer":{"name":"Self"},"csr":"MIICoTCCAYkCAQAwETEPMA0GA1UEAxMGTXlDZXJ0MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAwuC5p3QelmvhM7JNWgQkQapb/ViYhUyRH1ZBHMFe7aZ6s/hksm5z3siHrqD33+UbevBKzEMTxXB+uzhcxQMNJHInOmiLrJLeG/h41uaQT40aMgKaUWy3ZGmpT3la6aBrFk6AbukljOIX2Pq++mnZEl/adu16EWplFF/hHQuHple8SF6sN2y3x6+DeWSAJvKFg4A+ajPzwrp4deO5CWtK/wQrGjVgZLuI4o21LmmJjSK+IpcXerT1QihMkOig3KNBiPI/9ZU7UfD3std0zb0hJ/n1G6g8BVk3jqru8gT2muslnCUsQKv0Y/sHg/ivcgA3aNG4/61wUi4Ijiw4DCZ6uQIDAQABoEswSQYJKoZIhvcNAQkOMTwwOjAOBgNVHQ8BAf8EBAMCBaAwHQYDVR0lBBYwFAYIKwYBBQUHAwEGCCsGAQUFBwMCMAkGA1UdEwQCMAAwDQYJKoZIhvcNAQELBQADggEBAAzb8sBFNRPc12np7czGIACIaGJAbG7PlWixUg8cC348bpvFjyMADH+Ya13RzvqLFhggLb3orzAXLm7TrvRFUQUhgIS181jmQQiQSlb5jul9rV6G9dczASDSJsPyEXfo8y+FmihR0GUSbREl7s50uuPNRsb7WG8u1tZcryr59onDcjoqsqCo0aCAQOJ1FI/Q3azp1skw+oBKnwXrtDoqBqkMsjvPJg+emqSb1Fry8EnYhEEi0sfZizAdRDcYQySk/1T0d4hkFDaiTd1GrKMzQ968TFORab2z1UfuaN43N3uWMtLZAIrj98mOBD4YVYWQRG1G8G8QPR5LqBgiES5sYUg=","cancellation_requested":false,"status":"inProgress","status_details":"Pending certificate created. Certificate request is in progress. This may take some time based on the issuer provider. Please check again later.","request_id":"b73cd17e0cb847c5a9ec0ffa0aa66677"}, [
  'Cache-Control',
  'no-cache',
  'Pragma',
  'no-cache',
  'Content-Type',
  'application/json; charset=utf-8',
  'Expires',
  '-1',
  'Retry-After',
  '0',
  'x-ms-keyvault-region',
  'westus2',
  'x-ms-client-request-id',
  'a276d4eb-b250-4ba2-afd9-b09547b1a02c',
  'x-ms-request-id',
  'e8d8dc61-72c0-4870-9e52-66595c9e44c9',
  'x-ms-keyvault-service-version',
  '1.9.378.1',
  'x-ms-keyvault-network-info',
  'conn_type=Ipv4;addr=131.107.147.44;act_addr_fam=InterNetwork;',
  'x-ms-keyvault-rbac-assignment-id',
  '0cc3cf84-3de1-5005-ab06-0ef4d04fa1de',
  'x-ms-keyvault-rbac-cache',
  'ra_age=1497;da_age=1497;rd_age=1497;brd_age=12290;ra_notif_age=1967;dec_lev=0;',
  'X-Content-Type-Options',
  'nosniff',
  'Strict-Transport-Security',
  'max-age=31536000;includeSubDomains',
  'Date',
  'Thu, 28 Apr 2022 00:11:04 GMT',
  'Content-Length',
  '1337'
]);

nock('https://keyvault_name.vault.azure.net:443', {"encodedQueryParams":true})
  .get('/certificates/listCertificateName-canlistcertificatesbypage-1/pending')
  .query(true)
  .reply(200, {"id":"https://keyvault_name.vault.azure.net/certificates/listCertificateName-canlistcertificatesbypage-1/pending","issuer":{"name":"Self"},"csr":"MIICoTCCAYkCAQAwETEPMA0GA1UEAxMGTXlDZXJ0MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAwuC5p3QelmvhM7JNWgQkQapb/ViYhUyRH1ZBHMFe7aZ6s/hksm5z3siHrqD33+UbevBKzEMTxXB+uzhcxQMNJHInOmiLrJLeG/h41uaQT40aMgKaUWy3ZGmpT3la6aBrFk6AbukljOIX2Pq++mnZEl/adu16EWplFF/hHQuHple8SF6sN2y3x6+DeWSAJvKFg4A+ajPzwrp4deO5CWtK/wQrGjVgZLuI4o21LmmJjSK+IpcXerT1QihMkOig3KNBiPI/9ZU7UfD3std0zb0hJ/n1G6g8BVk3jqru8gT2muslnCUsQKv0Y/sHg/ivcgA3aNG4/61wUi4Ijiw4DCZ6uQIDAQABoEswSQYJKoZIhvcNAQkOMTwwOjAOBgNVHQ8BAf8EBAMCBaAwHQYDVR0lBBYwFAYIKwYBBQUHAwEGCCsGAQUFBwMCMAkGA1UdEwQCMAAwDQYJKoZIhvcNAQELBQADggEBAAzb8sBFNRPc12np7czGIACIaGJAbG7PlWixUg8cC348bpvFjyMADH+Ya13RzvqLFhggLb3orzAXLm7TrvRFUQUhgIS181jmQQiQSlb5jul9rV6G9dczASDSJsPyEXfo8y+FmihR0GUSbREl7s50uuPNRsb7WG8u1tZcryr59onDcjoqsqCo0aCAQOJ1FI/Q3azp1skw+oBKnwXrtDoqBqkMsjvPJg+emqSb1Fry8EnYhEEi0sfZizAdRDcYQySk/1T0d4hkFDaiTd1GrKMzQ968TFORab2z1UfuaN43N3uWMtLZAIrj98mOBD4YVYWQRG1G8G8QPR5LqBgiES5sYUg=","cancellation_requested":false,"status":"inProgress","status_details":"Pending certificate created. Certificate request is in progress. This may take some time based on the issuer provider. Please check again later.","request_id":"b73cd17e0cb847c5a9ec0ffa0aa66677"}, [
  'Cache-Control',
  'no-cache',
  'Pragma',
  'no-cache',
  'Content-Type',
  'application/json; charset=utf-8',
  'Expires',
  '-1',
  'Retry-After',
  '0',
  'x-ms-keyvault-region',
  'westus2',
  'x-ms-client-request-id',
  '845ccfcb-2b57-416f-852d-e866fbc02bd0',
  'x-ms-request-id',
  '04fb5df4-6f1d-4181-bdd6-4a18ac29b0a0',
  'x-ms-keyvault-service-version',
  '1.9.378.1',
  'x-ms-keyvault-network-info',
  'conn_type=Ipv4;addr=131.107.147.44;act_addr_fam=InterNetwork;',
  'x-ms-keyvault-rbac-assignment-id',
  '0cc3cf84-3de1-5005-ab06-0ef4d04fa1de',
  'x-ms-keyvault-rbac-cache',
  'ra_age=1497;da_age=1497;rd_age=1497;brd_age=12291;ra_notif_age=1967;dec_lev=0;',
  'X-Content-Type-Options',
  'nosniff',
  'Strict-Transport-Security',
  'max-age=31536000;includeSubDomains',
  'Date',
  'Thu, 28 Apr 2022 00:11:04 GMT',
  'Content-Length',
  '1337'
]);

nock('https://keyvault_name.vault.azure.net:443', {"encodedQueryParams":true})
  .get('/certificates/listCertificateName-canlistcertificatesbypage-1/pending')
  .query(true)
  .reply(200, {"id":"https://keyvault_name.vault.azure.net/certificates/listCertificateName-canlistcertificatesbypage-1/pending","issuer":{"name":"Self"},"csr":"MIICoTCCAYkCAQAwETEPMA0GA1UEAxMGTXlDZXJ0MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAwuC5p3QelmvhM7JNWgQkQapb/ViYhUyRH1ZBHMFe7aZ6s/hksm5z3siHrqD33+UbevBKzEMTxXB+uzhcxQMNJHInOmiLrJLeG/h41uaQT40aMgKaUWy3ZGmpT3la6aBrFk6AbukljOIX2Pq++mnZEl/adu16EWplFF/hHQuHple8SF6sN2y3x6+DeWSAJvKFg4A+ajPzwrp4deO5CWtK/wQrGjVgZLuI4o21LmmJjSK+IpcXerT1QihMkOig3KNBiPI/9ZU7UfD3std0zb0hJ/n1G6g8BVk3jqru8gT2muslnCUsQKv0Y/sHg/ivcgA3aNG4/61wUi4Ijiw4DCZ6uQIDAQABoEswSQYJKoZIhvcNAQkOMTwwOjAOBgNVHQ8BAf8EBAMCBaAwHQYDVR0lBBYwFAYIKwYBBQUHAwEGCCsGAQUFBwMCMAkGA1UdEwQCMAAwDQYJKoZIhvcNAQELBQADggEBAAzb8sBFNRPc12np7czGIACIaGJAbG7PlWixUg8cC348bpvFjyMADH+Ya13RzvqLFhggLb3orzAXLm7TrvRFUQUhgIS181jmQQiQSlb5jul9rV6G9dczASDSJsPyEXfo8y+FmihR0GUSbREl7s50uuPNRsb7WG8u1tZcryr59onDcjoqsqCo0aCAQOJ1FI/Q3azp1skw+oBKnwXrtDoqBqkMsjvPJg+emqSb1Fry8EnYhEEi0sfZizAdRDcYQySk/1T0d4hkFDaiTd1GrKMzQ968TFORab2z1UfuaN43N3uWMtLZAIrj98mOBD4YVYWQRG1G8G8QPR5LqBgiES5sYUg=","cancellation_requested":false,"status":"completed","target":"https://keyvault_name.vault.azure.net/certificates/listCertificateName-canlistcertificatesbypage-1","request_id":"b73cd17e0cb847c5a9ec0ffa0aa66677"}, [
  'Cache-Control',
  'no-cache',
  'Pragma',
  'no-cache',
  'Content-Type',
  'application/json; charset=utf-8',
  'Expires',
  '-1',
  'x-ms-keyvault-region',
  'westus2',
  'x-ms-client-request-id',
  '1d44dcb4-6cbc-4972-a301-6c761bade5bc',
  'x-ms-request-id',
  'f652f42d-bc2d-4e5a-b29f-a42c53f0b146',
  'x-ms-keyvault-service-version',
  '1.9.378.1',
  'x-ms-keyvault-network-info',
  'conn_type=Ipv4;addr=131.107.147.44;act_addr_fam=InterNetwork;',
  'x-ms-keyvault-rbac-assignment-id',
  '0cc3cf84-3de1-5005-ab06-0ef4d04fa1de',
  'x-ms-keyvault-rbac-cache',
  'ra_age=1507;da_age=1507;rd_age=1507;brd_age=12301;ra_notif_age=1977;dec_lev=0;',
  'X-Content-Type-Options',
  'nosniff',
  'Strict-Transport-Security',
  'max-age=31536000;includeSubDomains',
  'Date',
  'Thu, 28 Apr 2022 00:11:14 GMT',
  'Content-Length',
  '1301'
]);

nock('https://keyvault_name.vault.azure.net:443', {"encodedQueryParams":true})
  .get('/certificates/listCertificateName-canlistcertificatesbypage-1/')
  .query(true)
  .reply(200, {"id":"https://keyvault_name.vault.azure.net/certificates/listCertificateName-canlistcertificatesbypage-1/0c1de352d47f43a2b2e9c1aabb0f2af8","kid":"https://keyvault_name.vault.azure.net/keys/listCertificateName-canlistcertificatesbypage-1/0c1de352d47f43a2b2e9c1aabb0f2af8","sid":"https://keyvault_name.vault.azure.net/secrets/listCertificateName-canlistcertificatesbypage-1/0c1de352d47f43a2b2e9c1aabb0f2af8","x5t":"urXeEc8CZVmtcsD0xjYybD7aqfI","cer":"MIIDKDCCAhCgAwIBAgIQeStYrZvqQfqCTRH7fzbOgTANBgkqhkiG9w0BAQsFADARMQ8wDQYDVQQDEwZNeUNlcnQwHhcNMjIwNDI4MDAwMTExWhcNMjMwNDI4MDAxMTExWjARMQ8wDQYDVQQDEwZNeUNlcnQwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQDC4LmndB6Wa+Ezsk1aBCRBqlv9WJiFTJEfVkEcwV7tpnqz+GSybnPeyIeuoPff5Rt68ErMQxPFcH67OFzFAw0kcic6aIuskt4b+HjW5pBPjRoyAppRbLdkaalPeVrpoGsWToBu6SWM4hfY+r76adkSX9p27XoRamUUX+EdC4emV7xIXqw3bLfHr4N5ZIAm8oWDgD5qM/PCunh147kJa0r/BCsaNWBku4jijbUuaYmNIr4ilxd6tPVCKEyQ6KDco0GI8j/1lTtR8Pey13TNvSEn+fUbqDwFWTeOqu7yBPaa6yWcJSxAq/Rj+weD+K9yADdo0bj/rXBSLgiOLDgMJnq5AgMBAAGjfDB6MA4GA1UdDwEB/wQEAwIFoDAJBgNVHRMEAjAAMB0GA1UdJQQWMBQGCCsGAQUFBwMBBggrBgEFBQcDAjAfBgNVHSMEGDAWgBQaNg70SsE6w/s1W4aOZXmL3UCrpzAdBgNVHQ4EFgQUGjYO9ErBOsP7NVuGjmV5i91Aq6cwDQYJKoZIhvcNAQELBQADggEBAEkSMmZlf8fV1X63zZzLtYhJp4/ib1KgIENro2s6iZOyK3Eyubh4XIplvavQAexkCIJZ8E01s9tSSB9HT2JavAnpoA8e4cG5bc95VyTM0886JXiSZ5GYGQbvQmzA39+ZcVIuCQuFsRULdmpNXNq78YFyOpBrqhbFfZzbxiSOYFvlMTUR3wDWwiSWeSIRyCA5ze+NK3UDmCopQ9Vj13VZzsWZBlvPawPBZNlrvYOTwx4eKM3vxe0BjyIAizPd6567m6Zot7f1NnXIescOflvu4myNVnoQOMnyrqM9ZtmXodznAaQrSBtzCrYYuMxwl+SDCRDS3RiaMDPoQXdQY3RdzbA=","attributes":{"enabled":true,"nbf":1651104071,"exp":1682640671,"created":1651104672,"updated":1651104672,"recoveryLevel":"CustomizedRecoverable+Purgeable","recoverableDays":7},"policy":{"id":"https://keyvault_name.vault.azure.net/certificates/listCertificateName-canlistcertificatesbypage-1/policy","key_props":{"exportable":true,"kty":"RSA","key_size":2048,"reuse_key":false},"secret_props":{"contentType":"application/x-pkcs12"},"x509_props":{"subject":"cn=MyCert","sans":{},"ekus":["1.3.6.1.5.5.7.3.1","1.3.6.1.5.5.7.3.2"],"key_usage":["digitalSignature","keyEncipherment"],"validity_months":12,"basic_constraints":{"ca":false}},"lifetime_actions":[{"trigger":{"lifetime_percentage":80},"action":{"action_type":"AutoRenew"}}],"issuer":{"name":"Self"},"attributes":{"enabled":true,"created":1651104664,"updated":1651104664}},"pending":{"id":"https://keyvault_name.vault.azure.net/certificates/listCertificateName-canlistcertificatesbypage-1/pending"}}, [
  'Cache-Control',
  'no-cache',
  'Pragma',
  'no-cache',
  'Content-Type',
  'application/json; charset=utf-8',
  'Expires',
  '-1',
  'x-ms-keyvault-region',
  'westus2',
  'x-ms-client-request-id',
  '3b80c07f-7c5e-468c-b20c-33fd04247269',
  'x-ms-request-id',
  'adf79d13-595a-458b-9831-3583910df95e',
  'x-ms-keyvault-service-version',
  '1.9.378.1',
  'x-ms-keyvault-network-info',
  'conn_type=Ipv4;addr=131.107.147.44;act_addr_fam=InterNetwork;',
  'x-ms-keyvault-rbac-assignment-id',
  '0cc3cf84-3de1-5005-ab06-0ef4d04fa1de',
  'x-ms-keyvault-rbac-cache',
  'ra_age=1507;da_age=1507;rd_age=1507;brd_age=12301;ra_notif_age=1977;dec_lev=1;',
  'X-Content-Type-Options',
  'nosniff',
  'Strict-Transport-Security',
  'max-age=31536000;includeSubDomains',
  'Date',
  'Thu, 28 Apr 2022 00:11:14 GMT',
  'Content-Length',
  '2584'
]);

nock('https://keyvault_name.vault.azure.net:443', {"encodedQueryParams":true})
  .get('/certificates')
  .query(true)
  .reply(200, {"value":[{"id":"https://keyvault_name.vault.azure.net/certificates/listCertificateName-canlistcertificates-73797823578902260","x5t":"8vqpeGD8486jqb6F6OcNe2BuNNU","attributes":{"enabled":true,"nbf":1651103988,"exp":1682640588,"created":1651104588,"updated":1651104588},"subject":""},{"id":"https://keyvault_name.vault.azure.net/certificates/listCertificateName-canlistcertificates-73797823578902261","x5t":"QScWSmlu98ZgobjNXfmHiNPSL84","attributes":{"enabled":true,"nbf":1651103995,"exp":1682640595,"created":1651104595,"updated":1651104595},"subject":""},{"id":"https://keyvault_name.vault.azure.net/certificates/listCertificateName-canlistcertificatesbypage-0","x5t":"j5bf74NHQ4m8t5YJ4H_k-6zKNSA","attributes":{"enabled":true,"nbf":1651104057,"exp":1682640657,"created":1651104657,"updated":1651104657},"subject":""},{"id":"https://keyvault_name.vault.azure.net/certificates/listCertificateName-canlistcertificatesbypage-1","x5t":"urXeEc8CZVmtcsD0xjYybD7aqfI","attributes":{"enabled":true,"nbf":1651104071,"exp":1682640671,"created":1651104672,"updated":1651104672},"subject":""}],"nextLink":null}, [
  'Cache-Control',
  'no-cache',
  'Pragma',
  'no-cache',
  'Content-Type',
  'application/json; charset=utf-8',
  'Expires',
  '-1',
  'x-ms-keyvault-region',
  'westus2',
  'x-ms-client-request-id',
  '69abeeb7-870b-48f8-a852-3e2cc6544615',
  'x-ms-request-id',
  '80ba12aa-5c50-450f-88e3-42221a91fb0c',
  'x-ms-keyvault-service-version',
  '1.9.378.1',
  'x-ms-keyvault-network-info',
  'conn_type=Ipv4;addr=131.107.147.44;act_addr_fam=InterNetwork;',
  'x-ms-keyvault-rbac-assignment-id',
  '0cc3cf84-3de1-5005-ab06-0ef4d04fa1de',
  'x-ms-keyvault-rbac-cache',
  'ra_age=1508;da_age=1508;rd_age=1508;brd_age=12301;ra_notif_age=1977;dec_lev=0;',
  'X-Content-Type-Options',
  'nosniff',
  'Strict-Transport-Security',
  'max-age=31536000;includeSubDomains',
  'Date',
  'Thu, 28 Apr 2022 00:11:14 GMT',
  'Content-Length',
  '1143'
]);
