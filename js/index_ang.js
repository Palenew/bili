var app = angular.module('load', []);
app.run(function($rootScope) {
    // 我们的程序，数据对象上通常分成两部分：数据和行为。
    var data = $rootScope.data = {};
    data.random = Math.floor(4 * Math.random());
    data.active = [
        "./images/active.gif",
        "./images/active2.gif",
        "./images/active3.gif",
        "./images/active4.gif"
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
        "num2":"播放量：321740"
    }, {
        "href": "wait build",
        "src": "./images/hot3.jpg@320w_200h.webp",
        "text": "【第17回MMD杯EX】翩翩起舞♪极乐净土 ver.固定鏡頭",
        "num1": "up主： 老番茄",
        "num2":"播放量：321740"
    }, {
        "href": "wait build",
        "src": "./images/hot4.jpg@320w_200h.webp",
        "text": "超原版《名侦探柯南》主题曲 实时演奏 编曲键盘",
        "num1": "up主： 老番茄",
        "num2":"播放量：321740"
    }, {
        "href": "wait build",
        "src": "./images/hot5.jpg@320w_200h.webp",
        "text": "【猫和老鼠】禁忌的猫和老鼠==",
        "num1": "up主： 老番茄",
        "num2":"播放量：321740"
    }, {
        "href": "wait build",
        "src": "./images/hot6.jpg@320w_200h.webp",
        "text": "【妖王×比利王】勇士你能撑过这隐藏的第13关吗？",
        "num1": "up主： 老番茄",
        "num2":"播放量：321740"
    }];
    data.tuiguang = [{
        "href": "wait build",
        "src": "./images/tuiguang1.jpg@160w_100h.webp",
        "text": "《那兔之大国梦》手游宣传PV曝光",
        "num1": "226万",
        "num2":"26万"
    }, {
        "href": "wait build",
        "src": "./images/tuiguang2.jpg@160w_100h.webp",
        "text": "6只怠惰卖一萌",
        "num1": "226万",
        "num2":"26万"
    }, {
        "href": "wait build",
        "src": "./images/tuiguang3.jpg@160w_100h.webp",
        "text": "【东方妖妖梦】Bloomin’Blossom 紺碧studio【东方Vocal PV】【强烈推荐！】",
        "num1": "226万",
        "num2":"26万"
    }, {
        "href": "wait build",
        "src": "./images/tuiguang4.jpg@160w_100h.webp",
        "text": "【Minecraft】国建CW个人作品二审展示 —— 第十期！",
        "num1": "226万",
        "num2":"26万"
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
    data.donghua_2 = [
        {
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
        },{
            "href": "wait build",
            "src": "./images/video1.jpg",
            "text": "魔鬼恋人 逆卷六兄弟的花样吸血方式，前奏误解向，逆卷家族剪辑向~",
            "num1": "2724",
            "num2": "46"
        }
    ];
    
    
    
    data.donghua = data.donghua_1;
    var actions = $rootScope.actions = {};
    actions.newUp = function(flag){
        if( flag == 2 ){
            data.donghua = data.donghua_2;
        }else{
            data.donghua = data.donghua_1;
        }
        
    };

});
