/*
[rewrite_local]
^http:\/\/api\.vnce\.top\/wenetproductid url script-response-body https://raw.githubusercontent.com/quantumultxx/qx/main/weicheng.js


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
        "message": "成功",
        "data": {
            "productid": productId
        },
        "code": "200"
    })
};

$task.fetch(myRequest).then(response => {
    console.log(response.statusCode + "\n\n" + response.body);
    $done();
}, reason => {
    console.log(reason.error);
    $done();
});
