/*
新版需要自己抓包找域名

[rewrite_local]

#哔哩哔哩解锁大会员
^http[s]?:\/\/((app|api)\.(\w{2,15})?\.(com|cn)).*player\.(v3|v2|v1).Play(URL|View).*$ url script-request-header blbl.js

[mitm]
hostname = *.biliapi.*, *.bilibili.*

*/

var modifiedHeaders = $request.headers;

modifiedHeaders = '_uuid=FC4944A10-DEAD-4E72-D8C2-8175A25182FC04834infoc; b_nut=1700465805; buvid3=3AE290D2-E165-5A24-7B72-31C76CF8C93705124infoc; buvid4=CBCC0206-6EA7-00EF-78AC-7B87426F5C6305124-123112007-; Buvid=Z44C8B475ED914ED462FBF13DDC0D32F2DF4; DedeUserID=507342742; DedeUserID__ckMd5=c545b4bc2f45938a; SESSDATA=8449114e%2C1716018500%2C4a0790b1CjDw1sY95Kso5l909eWEMziufJu5Yr9AdsSmR9DXWEfMJ9EMTOpydcf9okO-hClnqDESVkhxcWpDNHFTSTc4bFM1c0xPLXFGdGp0Skk4Y0FqWmZ5eUdFMzg3NGdHRUdWWHF5MnR6OTYyWW83ZjN6UkdySzFsX2xfR3RGNjFnVUhaSUJrcXdoS21nIIEC; bili_jct=e1491d02f858e54d888d2afff16407e6; sid=8s53iamr';

modifiedHeaders = 'identify_v1 c3d0f026b932b1a98a6cbad655ca71b1CjDw1sY95Kso5l909eWEMziufJu5Yr9AdsSmR9DXWEfMJ9EMTOpydcf9okO-hClnqDESVkhxcWpDNHFTSTc4bFM1c0xPLXFGdGp0Skk4Y0FqWmZ5eUdFMzg3NGdHRUdWWHF5MnR6OTYyWW83ZjN6UkdySzFsX2xfR3RGNjFnVUhaSUJrcXdoS21nIIEC';

modifiedHeaders = 'bili-universal/75500200 os/ios model/iPhone XR mobi_app/iphone osVer/16.4 network/1;tf:ct;tf:ct';

$done({headers : modifiedHeaders});