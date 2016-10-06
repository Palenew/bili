
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
});
