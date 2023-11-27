/*
[rewrite_local]
^http:\/\/api\.vnce\.top\/wenetproductid url script-response-body https://raw.githubusercontent.com/quantumultxx/qx/main/weicheng.js
^http:\/\/api\.vnce\.top\/wenetverifyticket url script-response-body https://raw.githubusercontent.com/quantumultxx/qx/main/weicheng.js

[mitm]
hostname = api.vnce.top
*/


let response1 = {
  "message": "success",
  "data": {
    "state": 200,
    "message": "正常",
    "expires_date_ms": "1711722555000"
  },
  "code": 200
};

let response2 = {
  "message": "成功",
  "data": {
    "productid": "wenet_fee_365day"
  },
  "code": "200"
};

let expires_date_ms_variable = "1912348800000000"; // 你想要的新 expires_date_ms 值
let productid_variable = "wenet_fee_2557day"; // 你想要的新 productid 值

response1.data.expires_date_ms = expires_date_ms_variable;
response2.data.productid = productid_variable;

$done({ body: JSON.stringify([response1, response2]) });
