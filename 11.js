/***************************
[rewrite_local]
^https:\/\/gzfanyin\.com\/api\/vip\/getVipList url script-responsebody    
[mitm]
hostname = gzfanyin.com
****************************/

let response = {
  "code": 200,
  "data": [
    {
      "status": true,
      "sort": 1,
      "time": 31,
      "productId": "",
      "originalPrice": 25,
      "price": 25,
      "updateTime": "2020-11-01 10:13:35",
      "text": "30天VIP权益",
      "vipId": 1,
      "vipType": 1,
      "name": "月度VIP"
    },
    {
      "status": true,
      "sort": 3,
      "time": 365,
      "productId": "",
      "originalPrice": 258,
      "price": 128,
      "updateTime": "2020-11-01 10:23:33",
      "text": "限时5折优惠，365天VIP权益",
      "vipId": 3,
      "vipType": 3,
      "name": "年度VIP"
    }
  ],
  "message": "请求成功",
  "success": true
};

// 将 "time" 和 "updateTime" 设为变量，并修改值
let customTime = 9999; // 你想要的新 time 的值
let customUpdateTime = "2088-08-08 12:00:00"; // 你想要的新 updateTime 的值

// 修改第一个元素的 "time" 和 "updateTime"
response.data[0].time = customTime;
response.data[0].updateTime = customUpdateTime;

// 修改第二个元素的 "time" 和 "updateTime"
response.data[1].time = customTime;
response.data[1].updateTime = customUpdateTime;

// 输出修改后的响应
console.log(JSON.stringify(response));
