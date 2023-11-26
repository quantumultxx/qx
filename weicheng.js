/*
[rewrite_local]
^http:\/\/api\.vnce\.top\/wenetverifyticket url script-response-body https://raw.githubusercontent.com/quantumultxx/qx/main/weicheng.js

[mitm]
hostname = api.vnce.top
*/


let customExpiresDate = "3742732800000”; // 你想要设置的新的 expires_date_ms 变量

let response = {
  "message": "success",
  "data": {
    "state": 200,
    "message": "正常",
    "expires_date_ms": customExpiresDate
  },
  "code": 200
};

$done({ body: JSON.stringify(response) });
