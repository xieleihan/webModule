// Copyright © 2024 SouthAki, All Rights Reserved
console.log(new Date());
// console.log("该页面仅授权以学习为目的，不得用于商业用途。作者也以学习为目的高仿,并未对原官网公司造成任何损失,本项目开源,因该项目造成的影响由使用者自负。");

// 普通的效果部分,点击播放视频按钮开始播放视频,然后加个蒙版
// start
$(".pv_play").on("click", function () {
    $(".main .mask").show();
    $(".main .mask video").attr("src", "./res/未定事件簿-你是我心动的唯一真相.mp4");
});
$(".main .mask video").on("click", function (e) {
    e.stopPropagation();
})
$(".main .mask").on("click", function () {
    
    $(".main .mask").hide();
    // console.log("点击了");
    $(".main .mask video").attr("src", "");
});
// end

// 1.新闻处的标题切换的jQuery部分
// start
function getContentNewLi(str) {
    $.get("../json/content-news.json", function (item) {
        // console.log(item);
        // console.log(item[str]);
        $(".news_list").empty();
        for (var i = 0; i < item[str].length; i++) {
            // console.log(item[str][i].info);
            // console.log(item[str][i].title);
            // console.log(item[str][i].data);
            var html = '<li class="news_item"><p class="news_type">' + item[str][i].info + '</p><a href="#" class=".news_content"><span class="news_title">' + item[str][i].title + '</span></a><span class="news_date">' + item[str][i].data + '</span></li > ';
            $(".news_list").append(html);
        }
    });
}
getContentNewLi("all");
$(".news_menu").on("click", "li", function () {
    $(".news_menu li").removeClass("news_tab-active");
    $(this).addClass("news_tab-active");
    // console.log($(this).attr("data-name"));
    var str = $(this).attr("data-name");
    getContentNewLi(str);
});
// end

// 2.新闻左边的轮播图的jQuery部分
// start
// 初始化位置
var index = 1;
var intervalId1; // 定义全局变量
$(".home-news .swiper-wrapper").css("left", -index * 100 + "%");
//克隆节点
var firstNode = $(".home-news .banner_item").first().clone();
$(".home-news .swiper-wrapper").append(firstNode);
var lastNode = $(".home-news .banner_item").eq(-2).clone();
$(".home-news .swiper-wrapper").prepend(lastNode);

function setHomeNewsSwiper() {
    // 开启定时器
    intervalId1 = setInterval(function () {
        index++;
        if (index >= $(".home-news .banner_item").length - 1) {
            $(".home-news .swiper-wrapper").css("transition", "all 0.5s");
            $(".home-news .swiper-wrapper").css("left", -index * 100 + "%");

            // 等待过渡结束后再进行跳转
            setTimeout(function () {
                $(".home-news .swiper-wrapper").css("transition", "none");
                index = 1;
                $(".home-news .swiper-wrapper").css("left", -index * 100 + "%");

                // 强制重绘以确保过渡效果
                setTimeout(function () {
                    $(".home-news .swiper-wrapper").css("transition", "all 0.5s");
                }, 20);
            }, 500); // 等待过渡时间结束
        } else {
            $(".home-news .swiper-wrapper").css("transition", "all 0.5s");
            $(".home-news .swiper-wrapper").css("left", -index * 100 + "%");
        }
        $(".home-news .swiper-pagination-bullet").removeClass("swiper-pagination-bullet-active");
        if (index == $(".home-news .banner_item").length - 1) {
            $(".home-news .swiper-pagination-bullet").eq(0).addClass("swiper-pagination-bullet-active");
        } else {
            $(".home-news .swiper-pagination-bullet").eq(index - 1).addClass("swiper-pagination-bullet-active");
        }

        // 设置文字
        // $(".home-news .swiper-pagination")
        switch (index) {
            case 1:
                $(".home-news .swiper-pagination").attr("data-title", "《未定事件簿》「爱如初见」活动PV：此行未觉远，来时花满路");
                break;
            case 2:
                $(".home-news .swiper-pagination").attr("data-title", "莫弈SSR思绪【寻索】");
                break;
            case 3:
                $(".home-news .swiper-pagination").attr("data-title", "《未定事件簿》「少年如你」活动PV：青空寄梦，心愿乘风");
                break;
            case 4:
                $(".home-news .swiper-pagination").attr("data-title", "莫弈SSR思绪【心抚旧痕】");
                break;
            case 5:
                $(".home-news .swiper-pagination").attr("data-title", "《未定事件簿》「爱如初见」活动PV：此行未觉远，来时花满路");
                break;
        }

    }, 3000);

    $(".home-news .swiper-container").on("mouseover", function () {
        clearInterval(intervalId1); // 清除定时器
    });

    $(".home-news .swiper-container").on("mouseout", function () {
        clearInterval(intervalId1); // 清除定时器
        setHomeNewsSwiper(); // 重新启动定时器
    });

    // 点击调转
    $(".home-news .swiper-pagination-bullet").on("click", function () {
        clearInterval(intervalId1); // 清除定时器
        index = $(this).index() + 1;
        // 设置文字
        // $(".home-news .swiper-pagination")
        switch (index) {
            case 1:
                $(".home-news .swiper-pagination").attr("data-title", "《未定事件簿》「爱如初见」活动PV：此行未觉远，来时花满路");
                break;
            case 2:
                $(".home-news .swiper-pagination").attr("data-title", "莫弈SSR思绪【寻索】");
                break;
            case 3:
                $(".home-news .swiper-pagination").attr("data-title", "《未定事件簿》「少年如你」活动PV：青空寄梦，心愿乘风");
                break;
            case 4:
                $(".home-news .swiper-pagination").attr("data-title", "莫弈SSR思绪【心抚旧痕】");
                break;
            case 5:
                $(".home-news .swiper-pagination").attr("data-title", "《未定事件簿》「爱如初见」活动PV：此行未觉远，来时花满路");
                break;
        }
        $(".home-news .swiper-wrapper").css("transition", "all 0.5s");
        $(".home-news .swiper-wrapper").css("left", -index * 100 + "%");
        $(".home-news .swiper-pagination-bullet").removeClass("swiper-pagination-bullet-active");
        $(this).addClass("swiper-pagination-bullet-active");
    });
}

setHomeNewsSwiper(); // 初始化轮播
// end

// 3.role人物海报墙的右边部分切换的jQuery部分
// start
// var navRoleIndex;
// var navRoleResult;
// $(".role .nav_tabs").on("click" ,"li", function () { 
//     $(this).addClass("active").siblings().removeClass("active");
//     navRoleIndex = $(this).index();
//     console.log(navRoleIndex);

//     // 4.role主要的海报的动画切换的jQuery部分
//     // start
//     // console.log($(".role .tab_item")) // y:1104px
//     navRoleResult = -1104 * (navRoleIndex + 1);
//     // console.log(".role .tab_item .tab_item" + navRoleIndex + "")
//     $(".role .tab_item.item" + navRoleIndex + "").css("transform", "translate3d(0, " + navRoleResult + "px, 0)");
//     $(".role .tab_item.item" + (navRoleIndex + 1) + "").css("opacity", "1");
//     // end
// }); 


$(".role .nav_tabs").on("click", "li", function () {
    var navRoleIndex;
    var navRoleResult;
    $(this).addClass("active").siblings().removeClass("active");
    navRoleIndex = $(this).index();
    console.log(navRoleIndex);

    // 计算位移
    navRoleResult = -1104 * navRoleIndex;

    // 计算人像位移
    // peopleReuslt = -773 * navRoleIndex;
    peopleReuslt = -773 /2 +400
    // 计算infomation位移
    // infomationReuslt = 439 * navRoleIndex;
    infomationReuslt = 439 /2 -200

    // 将所有的 .tab_item 透明度先设置为 0// transition-duration: 0ms;
    $(".role .tab_item").css("opacity", "0");
    // $(".role .content_center").css("opacity", "0");
    $(".role .content_center").css({
        "opacity": "0",
        "width": "0",
    });

    // $(".role .info").css("opacity", "0");
    $(".role .info").css({
        "opacity": "0",
        "width": "0",
    });
    // setTimeout(function () {
    //     $(".role .info").css({
    //         "opacity": "0",
    //         "width": "0",
    // }, 10);
    // $(".role .tab_item").css("transition-duration", "0ms");

    // 移动并显示当前选中的 .tab_item
    // $(".role .tab_item.item" + (navRoleIndex + 1)).css({
    //     "transform": "translate3d(0, " + navRoleResult + "px, 0)",
    //     "opacity": "1",
    //     // "transition-duration": "0ms"
    // });
    setTimeout(function () {
        $(".role .tab_item.item" + (navRoleIndex + 1)).css({
            "transform": "translate3d(0, " + navRoleResult + "px, 0)",
            "opacity": "1",
            // "transition-duration": "0ms"
        });
    },10)
    $(".role .item" + (navRoleIndex + 1) + " .content_center").css({
        // "transition": "all 1s",
        "transform": "translate3d( " + peopleReuslt + "px,0, 0)",
        "opacity": "1",
        "width": "773px",
        // "transition-duration": "0ms"
    });
    $(".role .item" + (navRoleIndex + 1)+" .info").css({
        "transform": "translate3d( " + infomationReuslt + "px,0, 0)",
        "opacity": "1",
        "width": "439.57px",
        // "transition": "all 1s",
        // "transition-duration": "0ms"
    });
});

// end

