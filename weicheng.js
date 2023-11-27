/*
[rewrite_local]
^http:\/\/api\.vnce\.top\/wenetproductid url script-response-body https://raw.githubusercontent.com/quantumultxx/qx/main/weicheng.js
^http:\/\/api\.vnce\.top\/wenetverifyticket url script-response-body https://raw.githubusercontent.com/quantumultxx/qx/main/weicheng.js

[mitm]
hostname = api.vnce.top
*/

const productId = "wenet_fee_2557day"; // 替换成你想要的新 product id
const expiresDateMs = "1912348800000"; // 替换成你想要的过期日期的时间戳

// 第一个请求
const myRequest1 = {
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
        "message": "成功",
        "data": {
            "productid": productId,
            "expires_date_ms": expiresDateMs
        },
        "code": "200"
    })
};

// 第二个请求
const myRequest2 = {
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

// 执行第一个请求
$task.fetch(myRequest1).then(response1 => {
    console.log(response1.statusCode + "\n\n" + response1.body);

    // 执行第二个请求
    $task.fetch(myRequest2).then(response2 => {
        console.log(response2.statusCode + "\n\n" + response2.body);
        $done();
    }, reason2 => {
        console.log(reason2.error);
        $done();
    });
}, reason1 => {
    console.log(reason1.error);
    $done();
});
