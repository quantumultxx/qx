/*

新版需要自己抓包找域名

[rewrite_local]

#哔哩哔哩解锁大会员
^http[s]?:\/\/((app|api)\.(\w{2,15})?\.(com|cn)).*player\.(v3|v2|v1).Play(URL|View).*$ url script-request-header https://raw.githubusercontent.com/quantumultxx/qx/main/bilibili.js

[mitm]
hostname = app.bilibili.com

*/

var modifiedHeaders = $request.headers;

//modifiedHeaders['Cookie'] = '';

modifiedHeaders['Authorization'] = 'identify_v1 c3d0f026b932b1a98a6cbad655ca71b1CjDw1sY95Kso5l909eWEMziufJu5Yr9AdsSmR9DXWEfMJ9EMTOpydcf9okO-hClnqDESVkhxcWpDNHFTSTc4bFM1c0xPLXFGdGp0Skk4Y0FqWmZ5eUdFMzg3NGdHRUdWWHF5MnR6OTYyWW83ZjN6UkdySzFsX2xfR3RGNjFnVUhaSUJrcXdoS21nIIEC';

modifiedHeaders['User-Agent'] = 'bili-universal/75500200 os/ios model/iPhone XR mobi_app/iphone osVer/16.4 network/1;tf:ct;tf:ct';

$done({headers : modifiedHeaders});
