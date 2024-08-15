// Copyright © 2024 SouthAki, All Rights Reserved
// console.log("该页面仅授权以学习为目的，不得用于商业用途。作者也以学习为目的高仿,并未对原官网公司造成任何损失,本项目开源,因该项目造成的影响由使用者自负。");

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
var index = 0;
var interval = setInterval(function () {
    index++;
    if (index > $(".home-news .banner_item").length - 1) {
        index = 0;
        $(".home-news .swiper-wrapper").css("left", -index * 100 + "%");
    } else {
        $(".home-news .swiper-wrapper").css("left", -index * 100 + "%");
    }
    $(".home-news .swiper-pagination-bullet").removeClass("swiper-pagination-bullet-active");
    $(".home-news .swiper-pagination-bullet").eq(index).addClass("swiper-pagination-bullet-active");
}, 3000);
// end