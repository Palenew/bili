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
        "src": "./images/video3.jpg@160w_100h.webp",
        "text": "比守望屁股还要毒的游戏？【独立大赏】"
    }, {
        "href": "wait build",
        "src": "./images/video3.jpg@160w_100h.webp",
        "text": "【九条命】论一部猫片如何拍得如此平庸"
    }, {
        "href": "wait build",
        "src": "./images/video3.jpg@160w_100h.webp",
        "text": "比守望屁股还要毒的游戏？【独立大赏】"
    }, {
        "href": "wait build",
        "src": "./images/video2.jpg@320w_200h.webp",
        "text": "比守望屁股还要毒的游戏？【独立大赏】"
    }, {
        "href": "wait build",
        "src": "./images/video2.jpg@320w_200h.webp",
        "text": "比守望屁股还要毒的游戏？【独立大赏】"
    }, {
        "href": "wait build",
        "src": "./images/video2.jpg@320w_200h.webp",
        "text": "比守望屁股还要毒的游戏？【独立大赏】"
    }];
    data.tuiguang = [{
        "href": "wait build",
        "src": "./images/video1.jpg@320w_200h.webp",
        "text": "比守望屁股还要毒的游戏？【独立大赏】"
    }, {
        "href": "wait build",
        "src": "./images/video2.jpg@320w_200h.webp",
        "text": "【九条命】论一部猫片如何拍得如此平庸"
    }, {
        "href": "wait build",
        "src": "./images/video2.jpg@320w_200h.webp",
        "text": "比守望屁股还要毒的游戏？【独立大赏】"
    }, {
        "href": "wait build",
        "src": "./images/video1.jpg@320w_200h.webp",
        "text": "比守望屁股还要毒的游戏？【独立大赏】"
    }];
    data.zhibo = [{
        "href": "wait build",
        "src": "./images/video3.jpg@160w_100h.webp",
        "text": "【九条命】论一部猫片如何拍得如此平庸"
    }, {
        "href": "wait build",
        "src": "./images/video1.jpg@320w_200h.webp",
        "text": "【九条命】论一部猫片如何拍得如此平庸"
    }, {
        "href": "wait build",
        "src": "./images/video3.jpg@160w_100h.webp",
        "text": "【九条命】论一部猫片如何拍得如此平庸"
    }, {
        "href": "wait build",
        "src": "./images/video3.jpg@160w_100h.webp",
        "text": "【九条命】论一部猫片如何拍得如此平庸"
    }, {
        "href": "wait build",
        "src": "./images/video2.jpg@320w_200h.webp",
        "text": "【九条命】论一部猫片如何拍得如此平庸"
    }, {
        "href": "wait build",
        "src": "./images/video3.jpg@160w_100h.webp",
        "text": "【九条命】论一部猫片如何拍得如此平庸】"
    }, {
        "href": "wait build",
        "src": "./images/video3.jpg@160w_100h.webp",
        "text": "【九条命】论一部猫片如何拍得如此平庸"
    }, {
        "href": "wait build",
        "src": "./images/video3.jpg@160w_100h.webp",
        "text": "【九条命】论一部猫片如何拍得如此平庸"
    }];

    data.donghua_1 = [{
        "href": "wait build",
        "src": "./images/video1.jpg@320w_200h.webp",
        "text": "如此喜欢冰菓 误解向"
    }, {
        "href": "wait build",
        "src": "./images/video1.jpg@320w_200h.webp",
        "text": "如此喜欢冰菓 误解向"
    }, {
        "href": "wait build",
        "src": "./images/video3.jpg@160w_100h.webp",
        "text": "如此喜欢冰菓 误解向"
    }, {
        "href": "wait build",
        "src": "./images/video2.jpg@320w_200h.webp",
        "text": "如此喜欢冰菓 误解向"
    }, {
        "href": "wait build",
        "src": "./images/video1.jpg@320w_200h.webp",
        "text": "如此喜欢冰菓 误解向"
    }, {
        "href": "wait build",
        "src": "./images/video3.jpg@160w_100h.webp",
        "text": "【九条命】论一部猫片如何拍得如此平庸】"
    }, {
        "href": "wait build",
        "src": "./images/video3.jpg@160w_100h.webp",
        "text": "如此喜欢冰菓 误解向"
    }, {
        "href": "wait build",
        "src": "./images/video1.jpg@320w_200h.webp",
        "text": "【九条命】论一部猫片如何拍得如此平庸"
    }];
    
    data.donghua_2 = [{
        "href": "wait build",
        "src": "./images/video3.jpg@160w_100h.webp",
        "text": "【九条命】论一部猫片如何拍得如此平庸"
    }, {
        "href": "wait build",
        "src": "./images/video1.jpg@320w_200h.webp",
        "text": "【九条命】论一部猫片如何拍得如此平庸"
    }, {
        "href": "wait build",
        "src": "./images/video3.jpg@160w_100h.webp",
        "text": "【九条命】论一部猫片如何拍得如此平庸"
    }, {
        "href": "wait build",
        "src": "./images/video3.jpg@160w_100h.webp",
        "text": "【九条命】论一部猫片如何拍得如此平庸"
    }, {
        "href": "wait build",
        "src": "./images/video2.jpg@320w_200h.webp",
        "text": "【九条命】论一部猫片如何拍得如此平庸"
    }, {
        "href": "wait build",
        "src": "./images/video3.jpg@160w_100h.webp",
        "text": "【九条命】论一部猫片如何拍得如此平庸】"
    }, {
        "href": "wait build",
        "src": "./images/video3.jpg@160w_100h.webp",
        "text": "【九条命】论一部猫片如何拍得如此平庸"
    }, {
        "href": "wait build",
        "src": "./images/video3.jpg@160w_100h.webp",
        "text": "【九条命】论一部猫片如何拍得如此平庸"
    }];
    
    
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
