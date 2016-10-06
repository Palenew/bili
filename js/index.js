
$(function() {
    // 轮播图
    var index = 0;
    
    var timer = setInterval(function() {
        if (index == 5) {
            index = 0;
        }
        $(".slider ol li:eq(" + index + ")").addClass("current").siblings().removeClass("current");
        $(".slider ul").animate({
            "left": -440 * index + "px"
        });
        index++;
    }, 3000);
    
    $(".slider ol li").on("click",function(){
        index = [].indexOf.call($(".slider ol li"),this);
        $(".slider ol li:eq(" + index + ")").addClass("current").siblings().removeClass("current");
        $(".slider ul").animate({
            "left": -440 * index + "px"
        });
    });
    // 轮播图结束
    
    // 二维码显示隐藏
    $(".app-box").mouseenter(function(){
        $("#app_erweima").show();
    });
    $(".app-box").mouseleave(function(){
        $("#app_erweima").hide();
    });
    
    // video的hover后隐藏播放量
    $(".video li").mouseenter(function(){
        $(this).find(".up").stop(false,true).animate({
            bottom :"-10px",
            opacity : "0"
        });
    });
    $(".video li").mouseleave(function(){
        $(this).find(".up").stop(false,true).animate({
            bottom :"0px",
            opacity : "1"
        });
    });
    
    // hot-video的遮罩
    $(".hot-video li").mouseenter(function(){
        $(this).find(".des").stop(false,true).animate({
            bottom :"0px",
        },300).css({"background": "rgba(0,0,0,0.7)"});
    });
    $(".hot-video li").mouseleave(function(){
        $(this).find(".des").stop(false,true).animate({
            bottom :"-84px",
        },0).css({"background": "rgba(0,0,0,0)"});
        
    });
});
