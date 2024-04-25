/***************************
微橙

[rewrite_local]

^http:\/\/api\.vnce\.top\/wenetqueryaction url script-response-body https://raw.githubusercontent.com/quantumultxx/qx/main/we.js 


[mitm]
hostname = api.vnce.top

****************************/

let obj = {
  "message": "success",
  "data": {
    "state": 200,
    "message": "正常",
    "expires_date_ms": "3742732800000",
  },
  "code": 200
};

$done({ body: JSON.stringify(obj) });
