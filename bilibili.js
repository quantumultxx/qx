/*
^https:\/\/app\.bilibili\.com\/bilibili\.app\.playerunite\.v1\.Player\/PlayViewUnite url script-request-header https://raw.githubusercontent.com/quantumultxx/qx/main/bilibili.js

hostname = app.bilibili.com
*/








var modifiedHeaders = $request['headers'];
modifiedHeaders['Cookie'] = '_uuid=FC4944A10-DEAD-4E72-D8C2-8175A25182FC04834infoc; b_nut=1700465805; buvid3=3AE290D2-E165-5A24-7B72-31C76CF8C93705124infoc; buvid4=CBCC0206-6EA7-00EF-78AC-7B87426F5C6305124-123112007-; Buvid=Z44C8B475ED914ED462FBF13DDC0D32F2DF4; DedeUserID=507342742; DedeUserID__ckMd5=c545b4bc2f45938a; SESSDATA=8449114e%2C1716018500%2C4a0790b1CjDw1sY95Kso5l909eWEMziufJu5Yr9AdsSmR9DXWEfMJ9EMTOpydcf9okO-hClnqDESVkhxcWpDNHFTSTc4bFM1c0xPLXFGdGp0Skk4Y0FqWmZ5eUdFMzg3NGdHRUdWWHF5MnR6OTYyWW83ZjN6UkdySzFsX2xfR3RGNjFnVUhaSUJrcXdoS21nIIEC; bili_jct=e1491d02f858e54d888d2afff16407e6; sid=8s53iamr';
modifiedHeaders['x-bili-device-bin'] = 'CAEQqJWAJBokWjQ0QzhCNDc1RUQ5MTRFRDQ2MkZCRjEzRERDMEQzMkYyREY0IgZpcGhvbmUqA2lvczIFcGhvbmU6BWFwcGxlQgVBcHBsZUoJaVBob25lIFhSUgQxNi40agY3LjU1LjByQDRCNjdDMTQ2QUY2OEI3QjJENjgwREI5Q0QzMjU4QzZBMjAxOTA5MDkxMjE1MzE1Qjk4NEU4OEFGMjIyMDk4RTl4oY+j3b4x';
modifiedHeaders['Authorization'] = 'identify_v1 c3d0f026b932b1a98a6cbad655ca71b1CjDw1sY95Kso5l909eWEMziufJu5Yr9AdsSmR9DXWEfMJ9EMTOpydcf9okO-hClnqDESVkhxcWpDNHFTSTc4bFM1c0xPLXFGdGp0Skk4Y0FqWmZ5eUdFMzg3NGdHRUdWWHF5MnR6OTYyWW83ZjN6UkdySzFsX2xfR3RGNjFnVUhaSUJrcXdoS21nIIEC';
modifiedHeaders['User-Agent'] = 'bili-universal/75500200 os/ios model/iPhone XR mobi_app/iphone osVer/16.4 network/1;tf:ct;tf:ct';
modifiedHeaders['buvid'] = 'Z44C8B475ED914ED462FBF13DDC0D32F2DF4';
modifiedHeaders['x-bili-metadata-bin'] = 'CtwBYzNkMGYwMjZiOTMyYjFhOThhNmNiYWQ2NTVjYTcxYjFDakR3MXNZOTVLc281bDkwOWVXRU16aXVmSnU1WXI5QWRzU21SOURYV0VmTUo5RU1UT3B5ZGNmOW9rTy1oQ2xucURFU1ZraHhjV3BETkhGVFNUYzRiRk0xYzB4UExYRkdkR3AwU2trNFkwRnFXbVo1ZVVkRk16ZzNOR2RIUlVkV1dIRjVNblI2T1RZeVdXODNaak42VWtkeVN6RnNYMnhmUjNSR05qRm5WVWhhU1VKcmNYZG9TMjFuSUlFQxIGaXBob25lGgVwaG9uZSColYAkKgVhcHBsZTIkWjQ0QzhCNDc1RUQ5MTRFRDQ2MkZCRjEzRERDMEQzMkYyREY0OgNpb3M=';
modifiedHeaders['x-bili-locale-bin'] = 'Eg4KAnpoEgRIYW5zGgJDTg==';
modifiedHeaders['x-bili-network-bin'] = 'CAIQBRoHdGVsZWNvbQ==';
modifiedHeaders['x-bili-fawkes-req-bin'] = 'CgZpcGhvbmUSBHByb2QaCGQ5YjM3MGVk';
modifiedHeaders['x-bili-trace-id'] = 'e93475db89b86c1a7e47bb978b656301:7e47bb978b656301:0:0';
modifiedHeaders['x-bili-exps-bin'] = '';
$done({'headers': modifiedHeaders});
