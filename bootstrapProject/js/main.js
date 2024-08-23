// Copyright ©2024 SouthAki,All rights reserved.
function myRemove() {
    $(".my-imgSwiper-path").attr("src", "");
    $(".my-title").text("");
    $(".my-info").text("");
    $(".my-description").text("");
}

myRemove();

function first() {
    $.get("../json/swiper.json", function (data) {
        // 设置第一个项目的内容
        $(".my-imgSwiper-path").attr("src", data.content[0].images_path);
        $(".my-title").text(data.content[0].title);
        $(".my-info").text(data.content[0].info);
        $(".my-description").text(data.content[0].description);
    });
}

first();

var intervalId;
var sIndex = 1;


$(function () {
    $.get("../json/swiper.json", function (data) {
        intervalId = setInterval(function () {
            sIndex++;
            if (sIndex > 10) {
                sIndex = 1;
            }
            $(".my-spanindex").text(sIndex);
            data.content.forEach(function (item) {
                if (sIndex == item.index) {
                    myRemove();
                    $(".my-imgSwiper-path").attr("src", item.images_path);
                    $(".my-title").text(item.title);
                    $(".my-info").text(item.info);
                    $(".my-description").text(item.description);
                }
            });
        }, 10000);
    });
});