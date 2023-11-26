/*
[rewrite_local]
^http:\/\/api\.vnce\.top\/wenetverifyticket url script-response-body https://raw.githubusercontent.com/quantumultxx/qx/main/weicheng.js

[mitm]
hostname = api.vnce.top
*/


var body = $response.body;
obj.expires_date_ms = "1743258555";
$done({ body: JSON.stringify(obj) });
