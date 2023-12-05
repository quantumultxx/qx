/*
[rewrite_local]
^https:\/\/gzfanyin\.com\/api\/ums\/getMember url reject-dict
[mitm]
hostname = gzfanyin.com
*/

let obj = JSON.parse($response.body);

// 修改变量值
obj.data.vipEndDate = "2088-08-08 00:00:00";  
obj.data.isAdmin = "Y"; 
obj.data.isPartner = 1; 
obj.data.vipGrade = 1;

// 返回修改后的响应
$done({
    body: JSON.stringify(obj)
});
