/*
^http:\/\/api\.vnce\.top\/wenetverifyticket url 
script-response-body https://raw.githubusercontent.com/quantumultxx/qx/main/weicheng.js


hostname = api.vnce.top
*/


let obj = JSON.parse($response.body);
obj.state = 200;
obj.message = "正常";
obj.expires_date_ms = "1743258555";
obj.code = 200;
$done({ body: JSON.stringify(obj) });
