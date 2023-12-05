/***************************
微橙
[rewrite_local]
^https:\/\/translator\.felo\.me\/api\/plan\/current url script-response-body https://raw.githubusercontent.com/quantumultxx/qx/main/ty.js    


[mitm]
hostname = translator.felo.me
****************************/

let response = {
  "status": 200,
  "data": {
    "active_time": "2023-12-05T16:48:16+0000",
    "expire_time": "2099-09-09T16:48:16+0000",
    "now": "2023-12-05T16:54:43+0000",
    "user_product_total": [
      {
        "freeze": 0,
        "total_limit": "UNLIMITED",
        "deduction_type": "DURATIONS",
        "user_id": "1732079445649833985",
        "product_item_type": "TRANSLATOR_BENEFIT",
        "total": 0,
        "balance": 999999999,
        "user_product_total_id": "1732079448817143809"
      }
    ],
    "pro": true
  },
  "code": "OK"
};

$done({ body: JSON.stringify(response) });
