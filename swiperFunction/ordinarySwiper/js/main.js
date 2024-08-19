// Copyright ©2024 SouthAki, All rights reserved.
$(function () {
    var intervalId;
    var index = 1;
    var firstItem = $(".main .box .swiper-wrapper .swiper-item").eq(0).clone(true);
    var lastItem = $(".main .box .swiper-wrapper .swiper-item").eq($(".main .box .swiper-wrapper .swiper-item").length - 1).clone(true);
    $(".main .box .swiper-wrapper").append(firstItem);
    $(".main .box .swiper-wrapper").prepend(lastItem);

    $(".main .box .swiper-wrapper").css("width", $(".main .box .swiper-wrapper .swiper-item").length * 100 + "%");
    $(".main .box .swiper-wrapper").css("left", "-100%");

    function prev() {
        index--;
        if (index === 0) {
            $(".main .box .swiper-wrapper").css("transition", "all .5s");
            $(".main .box .swiper-wrapper").css("left", -index * 100 + "%");
            setTimeout(function () {
                $(".main .box .swiper-wrapper").css("transition", "none");
                index = $(".main .box .swiper-wrapper .swiper-item").length - 2;
                $(".main .box .swiper-wrapper").css("left", -index * 100 + "%");
                setTimeout(function () {
                    $(".main .box .swiper-wrapper").css("transition", "all .5s");
                }, 20);
            }, 300);
        } else {
            $(".main .box .swiper-wrapper").css("transition", "all .5s");
            $(".main .box .swiper-wrapper").css("left", -index * 100 + "%");
        }
    };

    function next() {
        index++;
        if (index > $(".main .box .swiper-wrapper .swiper-item").length - 2) {
            $(".main .box .swiper-wrapper").css("transition", "all .5s");
            $(".main .box .swiper-wrapper").css("left", -index * 100 + "%");
            setTimeout(function () {
                $(".main .box .swiper-wrapper").css("transition", "none");
                index = 1;
                $(".main .box .swiper-wrapper").css("left", -index * 100 + "%");
                setTimeout(function () {
                    $(".main .box .swiper-wrapper").css("transition", "all .5s");
                }, 20);
            }, 300);
        } else {
            $(".main .box .swiper-wrapper").css("transition", "all .5s");
            $(".main .box .swiper-wrapper").css("left", -index * 100 + "%");
        }
        if (index === $(".main .box .swiper-wrapper .swiper-item").length - 1) {
            $(".main .box .swiper-bullets .swiper-bullet").eq(0).addClass("active").siblings().removeClass("active");
        } else {
            $(".main .box .swiper-bullets .swiper-bullet").eq(index - 1).addClass("active").siblings().removeClass("active");
        }
    }

    function init() {
        intervalId = setInterval(function () {
            next();
        }, 3000);
    };

    $(".main .box .swiper-bullets").on("click", ".swiper-bullet", function () {
        $(this).addClass("active").siblings().removeClass("active");
        index = $(this).index() + 1;
        $(".main .box .swiper-wrapper").css("left", -index * 100 + "%");
    })

    $(".main .box .swiper-button-prev").on("click", function (e) {
        e.stopPropagation();
        clearInterval(intervalId);
        prev();
    });

    $(".main .box .swiper-button-next").on("click", function (e) {
        e.stopPropagation();
        clearInterval(intervalId);
        next();
    });

    $(".main .box").on("mouseover", function (e) {
        e.stopPropagation();
        clearInterval(intervalId);
    });

    $(".main .box").on("mouseout", function (e) {
        clearInterval(intervalId);
        e.stopPropagation();
        init();
    });

    
    init();
});