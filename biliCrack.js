/*************************************
项目名称：哔哩哔哩
软件版本：7.48.0
脚本功能：解锁大会员
使用声明：⚠️仅供参考，🈲️转载与售卖！
**************************************
[rewrite_local]
^https?:\/\/ap(i|p)\.bilibili\.com\/bilibili\.\w{3,9}\..+\/(View|Play(URL|View(Unite)?|er))$ url script-request-header biliCrack.js

[mitm]
hostname = *.bilibili.com, 124.239.240.*, 101.89.57.66, 218.94.210.66, 240e:b1:9801:206:11:0:0:*

************************************/

const cookie2object = (cookie) => {
	var obj = {};
	var arr = cookie.split("; ");
	arr.forEach(function (val) {
		var brr = val.split("=");
		obj[brr[0]] = brr[1];
	});
	return obj;
};

var headers = $request['headers'];
var vipHeaders = {"buvid":"
61646494649194676494649167949794676484944"}；
//此处填写共享者headers
var uid = Number(cookie2object(headers.Cookie).DedeUserID);
let uids = [507342742];//此处填写被共享者账号uid，以英文逗号隔开
let result = uids.includes(uid);
if (result) {
	headers['buvid'] = vipHeaders.buvid;
	headers['Authorization'] =  vipHeaders.Authorization;
	headers['User-Agent'] = vipHeaders['User-Agent'];
}
$done({ 'headers': headers });

