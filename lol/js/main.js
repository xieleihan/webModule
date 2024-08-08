// console.log($(".main .box .title ul li"))
var count = 0;
$(".main .box .title ul li").hover(function () {
    $(".main .box .title ul li").removeClass("active");
    $(this).addClass("active");
    // console.log($(this).index());
    $(".main .box .imgBox .img").css("transform", "translateX(-" + $(this).index() * 820 + "px)");
    count = $(this).index();
});
var id = setInterval(function () {
    $(".main .box .imgBox .img").css({
        "transform": "translateX(" + -820 * count + "px)"
    });
    $(".main .box .title ul li").removeClass("active");
    $(".main .box .title ul li").eq(count).addClass("active");
    count++;
    if (count == 5) {
        count = 0;
    }
}, 2000);

$(".main .box").mouseover(function () {
    clearInterval(id);
});
$(".main .box").mouseout(function () {
    $(".main .box .imgBox .img").css({
        "transform": "translateX(" + -820 * count + "px)"
    });
    $(".main .box .title ul li").removeClass("active");
    $(".main .box .title ul li").eq(count).addClass("active");
    count++;
    if (count == 5) {
        count = 0;
    }
    id = setInterval(function () {
        $(".main .box .imgBox .img").css({
            "transform": "translateX(" + -820 * count + "px)"
        });
        $(".main .box .title ul li").removeClass("active");
        $(".main .box .title ul li").eq(count).addClass("active");
        count++;
        if (count == 5) {
            count = 0;
        }
    }, 2000);
    // console.log(111)
});