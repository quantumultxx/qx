/*
[rewrite_local]
^http:\/\/api\.vnce\.top\/wenetproductid url script-response-body https://raw.githubusercontent.com/quantumultxx/qx/main/weicheng.js
^http:\/\/api\.vnce\.top\/wenetverifyticket url script-response-body https://raw.githubusercontent.com/quantumultxx/qx/main/weicheng.js

[mitm]
hostname = api.vnce.top
*/


const productId = "wenet_fee_2557day"; // 替换成你想要的新 product id

const myRequest = {
    url: "http://api.vnce.top/wenetproductid",
    method: "GET",
    headers: {
        'User-Agent': 'WeNet/1.5 (iPhone; iOS 16.4; Scale/2.00)',
        'Host': 'api.vnce.top',
        'Connection': 'keep-alive',
        'Accept-Language': 'zh-Hans-CN;q=1, en-CN;q=0.9',
        'Accept-Encoding': 'gzip, deflate',
        'Accept': '*/*'
    },
    body: JSON.stringify({
        "message": "success",
        "data": {
            "state": 200,
            "message": "正常",
            "expires_date_ms": "1912348800000"
        },
        "code": 200
    })
};

$task.fetch(myRequest).then(response => {
    console.log(response.statusCode + "\n\n" + response.body);
    $done();
}, reason => {
    console.log(reason.error);
    $done();
});
