/*
[rewrite_local]
^http:\/\/api\.vnce\.top\/wenetproductid url script-response-body https://raw.githubusercontent.com/quantumultxx/qx/main/weicheng.js
^http:\/\/api\.vnce\.top\/wenetverifyticket url script-response-body https://raw.githubusercontent.com/quantumultxx/qx/main/weicheng.js

[mitm]
hostname = api.vnce.top
*/

const requestUrl = $request.url;

if (requestUrl.includes("http://api.vnce.top/wenetproductid")) {
    // 匹配 wenetproductid 的 URL，执行 productid 变量
    const productid_variable = "wenet_fee_2557"; // 替换成你想要的新 productid 值
    $done({ body: JSON.stringify({ "message": "成功", "data": { "productid": productid_variable }, "code": "200" }) });
} else if (requestUrl.includes("http://api.vnce.top/wenetverifyticket")) {
    // 匹配 wenetverifyticket 的 URL，执行 expires_date_ms 变量
    const expires_date_ms_variable = "1912348800000"; // 替换成你想要的新 expires_date_ms 值
    $done({ body: JSON.stringify({ "message": "成功", "data": { "state": 200, "message": "正常", "expires_date_ms": expires_date_ms_variable }, "code": 200 }) });
} else {
    // 其他情况
    $done();
}
