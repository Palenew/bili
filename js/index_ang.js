var app = angular.module('load', []);
app.run(function($rootScope,DataService) {
    // 我们的程序，数据对象上通常分成两部分：数据和行为。
    var data = $rootScope.data = DataService;
    var actions = $rootScope.actions = {};
});
// app.controller("donghua",function($scope,DataService){
//     var data = $scope.data = {};
//     data.donghua = DataService.donghua_1;
//     var actions = $scope.actions = {};
//     actions.newUp = function(flag) {
//         if (flag == 2) {
//             data.donghua = DataService.donghua_2;
//         } else {
//             data.donghua = DataService.donghua_1;
//         }
//     };
// });

// fanju yinyue wudao youxi keji shenghuo guichu shishang guanggao yule dianying dianshiju
var arr = [
    "donghua",
    "fanju",
    "yinyue",
    "wudao",
    "youxi",
    "keji",
    "shenghuo",
    "guichu",
    "shishang",
    "guanggao",
    "yule",
    "dianying",
    "dianshiju"
];

for (var i = 0; i < arr.length ; i++) {
    app.controller(arr[i],function($scope,DataService){
        var data = $scope.data = {};
        data.donghua = DataService.donghua_1;
        data.ranking = DataService.ranking_1;
        data.ranktop = DataService.ranktop_1;
        var actions = $scope.actions = {};
        actions.newUp = function(flag) {
            if (flag == 2) {
                data.donghua = DataService.donghua_2;
            } else {
                data.donghua = DataService.donghua_1;
            }
        };
        actions.newRank = function(flag) {
            if (flag == 2) {
                data.ranktop = DataService.ranktop_2;
                data.ranking = DataService.ranking_2;
            } else {
                data.ranktop = DataService.ranktop_1;
                data.ranking = DataService.ranking_1;
            }
        };
    });
}

app.factory("DataService",function(){
    var data = {};
    data.random = Math.floor(9 * Math.random());
    data.active = [
        "./images/active.gif",
        "./images/active2.gif",
        "./images/active3.gif",
        "./images/active4.gif",
        "./images/active5.gif",
        "./images/active6.gif",
        "./images/active7.gif",
        "./images/active8.gif",
        "./images/active9.gif",
    ];
    data.slider = [{
        "href": "wait build",
        "src": "./images/slider1.jpg@.webp",
        "text": "朋友一生一起走，谁出SSR谁是狗"
    }, {
        "href": "wait build",
        "src": "./images/slider2.jpg@.webp",
        "text": "朋友一生一起走，谁出SSR谁是狗"
    }, {
        "href": "wait build",
        "src": "./images/slider3.jpg@.webp",
        "text": "朋友一生一起走，谁出SSR谁是狗"
    }, {
        "href": "wait build",
        "src": "./images/slider4.jpg@.webp",
        "text": "朋友一生一起走，谁出SSR谁是狗"
    }, {
        "href": "wait build",
        "src": "./images/slider5.jpg@.webp",
        "text": "朋友一生一起走，谁出SSR谁是狗"
    }];
    data.hot = [{
        "href": "wait build",
        "src": "./images/hot1.jpg@320w_200h.webp",
        "text": "【番茄】PPAP ",
        "num1": "up主： 老番茄",
        "num2": "播放量：321740"
    }, {
        "href": "wait build",
        "src": "./images/hot2.jpg@320w_200h.webp",
        "text": "【KBShinya】PPAP-RnB抒情版",
        "num1": "up主： 老番茄",
        "num2": "播放量：321740"
    }, {
        "href": "wait build",
        "src": "./images/hot3.jpg@320w_200h.webp",
        "text": "【第17回MMD杯EX】翩翩起舞♪极乐净土 ver.固定鏡頭",
        "num1": "up主： 老番茄",
        "num2": "播放量：321740"
    }, {
        "href": "wait build",
        "src": "./images/hot4.jpg@320w_200h.webp",
        "text": "超原版《名侦探柯南》主题曲 实时演奏 编曲键盘",
        "num1": "up主： 老番茄",
        "num2": "播放量：321740"
    }, {
        "href": "wait build",
        "src": "./images/hot5.jpg@320w_200h.webp",
        "text": "【猫和老鼠】禁忌的猫和老鼠==",
        "num1": "up主： 老番茄",
        "num2": "播放量：321740"
    }, {
        "href": "wait build",
        "src": "./images/hot6.jpg@320w_200h.webp",
        "text": "【妖王×比利王】勇士你能撑过这隐藏的第13关吗？",
        "num1": "up主： 老番茄",
        "num2": "播放量：321740"
    }];
    data.tuiguang = [{
        "href": "wait build",
        "src": "./images/tuiguang1.jpg@160w_100h.webp",
        "text": "《那兔之大国梦》手游宣传PV曝光",
        "num1": "226万",
        "num2": "26万"
    }, {
        "href": "wait build",
        "src": "./images/tuiguang2.jpg@160w_100h.webp",
        "text": "6只怠惰卖一萌",
        "num1": "226万",
        "num2": "26万"
    }, {
        "href": "wait build",
        "src": "./images/tuiguang3.jpg@160w_100h.webp",
        "text": "【东方妖妖梦】Bloomin’Blossom 紺碧studio【东方Vocal PV】【强烈推荐！】",
        "num1": "226万",
        "num2": "26万"
    }, {
        "href": "wait build",
        "src": "./images/tuiguang4.jpg@160w_100h.webp",
        "text": "【Minecraft】国建CW个人作品二审展示 —— 第十期！",
        "num1": "226万",
        "num2": "26万"
    }];
    data.zhibo = [{
        "href": "wait build",
        "src": "./images/video1.jpg",
        "text": "魔鬼恋人 逆卷六兄弟的花样吸血方式，前奏误解向，逆卷家族剪辑向~",
        "num1": "2724",
        "num2": "46"
    }, {
        "href": "wait build",
        "src": "./images/video2.jpg@320w_200h.webp",
        "text": "【补番向】你们心目中的名作都有哪些？补番推荐",
        "num1": "1056",
        "num2": "79"
    }, {
        "href": "wait build",
        "src": "./images/video3.jpg",
        "text": "[排行向]老司机肯定知道的十大女角",
        "num1": "124.3万",
        "num2": "8.6万"
    }, {
        "href": "wait build",
        "src": "./images/video4.jpg@320w_200h.webp",
        "text": "好听的欧美音乐排行榜Top100 (2016年1月至9月)",
        "num1": "4036",
        "num2": "193"
    }, {
        "href": "wait build",
        "src": "./images/video5.jpg",
        "text": "【抖腿向】单身狗也要打手枪！",
        "num1": "109.8万",
        "num2": "9712"
    }, {
        "href": "wait build",
        "src": "./images/video6.jpg@320w_200h.webp",
        "text": "【極樂淨土舞蹈】穿校服不如跳舞",
        "num1": "4.1万",
        "num2": "414"
    }, {
        "href": "wait build",
        "src": "./images/video7.jpg@320w_200h.webp",
        "text": "【央视纪录片】《大国工匠》第四季【更新至6集】",
        "num1": "5.5万",
        "num2": "8092"
    }, {
        "href": "wait build",
        "src": "./images/video8.jpg@320w_200h.webp",
        "text": "张继科08-16年乒乓球赛集锦",
        "num1": "14.8万",
        "num2": "2.0万"
    }];

    data.donghua_1 = [{
        "href": "wait build",
        "src": "./images/video1.jpg",
        "text": "魔鬼恋人 逆卷六兄弟的花样吸血方式，前奏误解向，逆卷家族剪辑向~",
        "num1": "2724",
        "num2": "46"
    }, {
        "href": "wait build",
        "src": "./images/video2.jpg@320w_200h.webp",
        "text": "【补番向】你们心目中的名作都有哪些？补番推荐",
        "num1": "1056",
        "num2": "79"
    }, {
        "href": "wait build",
        "src": "./images/video3.jpg",
        "text": "[排行向]老司机肯定知道的十大女角",
        "num1": "124.3万",
        "num2": "8.6万"
    }, {
        "href": "wait build",
        "src": "./images/video4.jpg@320w_200h.webp",
        "text": "好听的欧美音乐排行榜Top100 (2016年1月至9月)",
        "num1": "4036",
        "num2": "193"
    }, {
        "href": "wait build",
        "src": "./images/video5.jpg",
        "text": "【抖腿向】单身狗也要打手枪！",
        "num1": "109.8万",
        "num2": "9712"
    }, {
        "href": "wait build",
        "src": "./images/video6.jpg@320w_200h.webp",
        "text": "【極樂淨土舞蹈】穿校服不如跳舞",
        "num1": "4.1万",
        "num2": "414"
    }, {
        "href": "wait build",
        "src": "./images/video7.jpg@320w_200h.webp",
        "text": "【央视纪录片】《大国工匠》第四季【更新至6集】",
        "num1": "5.5万",
        "num2": "8092"
    }, {
        "href": "wait build",
        "src": "./images/video8.jpg@320w_200h.webp",
        "text": "张继科08-16年乒乓球赛集锦",
        "num1": "14.8万",
        "num2": "2.0万"
    }];
    data.donghua_2 = [{
        "href": "wait build",
        "src": "./images/video8.jpg@320w_200h.webp",
        "text": "张继科08-16年乒乓球赛集锦",
        "num1": "14.8万",
        "num2": "2.0万"
    }, {
        "href": "wait build",
        "src": "./images/video7.jpg@320w_200h.webp",
        "text": "【央视纪录片】《大国工匠》第四季【更新至6集】",
        "num1": "5.5万",
        "num2": "8092"
    }, {
        "href": "wait build",
        "src": "./images/video6.jpg@320w_200h.webp",
        "text": "【極樂淨土舞蹈】穿校服不如跳舞",
        "num1": "4.1万",
        "num2": "414"
    }, {
        "href": "wait build",
        "src": "./images/video5.jpg",
        "text": "【抖腿向】单身狗也要打手枪！",
        "num1": "109.8万",
        "num2": "9712"
    }, {
        "href": "wait build",
        "src": "./images/video4.jpg@320w_200h.webp",
        "text": "好听的欧美音乐排行榜Top100 (2016年1月至9月)",
        "num1": "4036",
        "num2": "193"
    }, {
        "href": "wait build",
        "src": "./images/video3.jpg",
        "text": "[排行向]老司机肯定知道的十大女角",
        "num1": "124.3万",
        "num2": "8.6万"
    }, {
        "href": "wait build",
        "src": "./images/video2.jpg@320w_200h.webp",
        "text": "【补番向】你们心目中的名作都有哪些？补番推荐",
        "num1": "1056",
        "num2": "79"
    }, {
        "href": "wait build",
        "src": "./images/video1.jpg",
        "text": "魔鬼恋人 逆卷六兄弟的花样吸血方式，前奏误解向，逆卷家族剪辑向~",
        "num1": "2724",
        "num2": "46"
    }];
    data.ranking_1 = [
        {
            "ranknum":"2",
            "title":"【7月】齐木楠雄的灾难(日播版) 69"
        },
        {   
            "ranknum":"3",
            "title":"【7月】齐木楠雄的灾难(日播版) 70"
        },
        {
            "ranknum":"4",
            "title":"【10月】我太受欢迎了该怎么办 01"
        },
        {
            "ranknum":"5",
            "title":"镇魂街 22 武神躯"
        },
        {
            "ranknum":"6",
            "title":"【10月】无畏魔女 01"
        },
        {
            "ranknum":"7",
            "title":"【10月】少女编号 01【独家正版】"
        }  
    ];
    data.ranking_2 = [
        {
            "ranknum":"2",
            "title":"【国动万象】傲娇又伟大的异地恋——狐妖小红娘P3"
        },
        {   
            "ranknum":"3",
            "title":"Because Of You 《小绿和小蓝》手书"
        },
        {
            "ranknum":"4",
            "title":"【入侵童年】葫芦娃完整版 毁掉经典不眨眼（完结篇）"
        },
        {
            "ranknum":"5",
            "title":"美队钢铁侠都变成僵尸了？漫威丧尸英雄传！ 第二章【Lorre】"
        },
        {
            "ranknum":"6",
            "title":"【东拉西扯】在机战动画里寻求福利是否搞错了什么 =="
        },
        {
            "ranknum":"7",
            "title":"【综漫/燃向AMV】一切皆是因果报应！"
        } 
    ];
    data.ranktop_1 = {
        "src":"./images/rank1.jpg@320w_200h.webp",
        "title":"【1月】火影忍者 疾风传 698",
        "count":"综合评分：78.1万"
    };
    data.ranktop_2 = {
        "src":"./images/rank2.jpg@320w_200h.webp",
        "title":"[排行向]Cup主最爱的二次元女角排行",
        "count":"综合评分：18.2万"
    };
    return data;
});
