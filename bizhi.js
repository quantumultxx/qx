var quantumultxx = JSON.parse($response.body);
const user = /classes\/wpf_account/;
const xiazai = /classes/;
const save = /batch\/save/;

if(user.test($request.url)){
  quantumultxx.results = [{
      "updatedAt" : "2023-09-09T09:09:09Z",
      "vipEndTime" : 4092599349,
      "sex" : "1",
      "isSVIP" : 1,
      "isVIP" : 1,
      "userId" : "A66666666_B6666666666666-C66",
      "loginType" : 1,
      "nickName" : "小蝶",
      "headImageUrl" : "https://raw.githubusercontent.com/quantumultxx/qx/main/IMG_8938.jpeg",
      "objectId" : "666666666666666666666666",
      "createdAt" : "2023-09-09T09:09:09Z",
      "coin" : 99999
  }];
}

if(xiazai.test($request.url)){
  quantumultxx.results.forEach(item => {
    if ('needVIP' in item && 'needSVIP' in item && 'needCoin' in item && 'score' in item) {
      item.score = 99999;
      item.needVIP = 0;
      item.needSVIP = 0;
      item.needCoin = 0;
    }
  });
}

if(save.test($request.url)){
  quantumultxx = {
  "666666666666666666666666" : {
    "updatedAt" : "2023-09-09T09:09:09Z",
    "objectId" : "666666666666666666666666"
  },
  "code" : 1
  }
}

$done({body : JSON.stringify(quantumultxx)});
