// Copyright © 2024 SouthAki, All Rights Reserved.
$(".fad .pv_play").on("click", function () {
    $(".mainBoxVideo").show();
    $(".mainBoxVideo video").attr("src", "https://fastcdn.mihoyo.com/content-v2/nxx/123697/6b876919881d7a36ed4439a1fd07f2a8_7165565617817785790.mp4");
});
$(".mainBoxVideo").on("click", function () {
    $(".mainBoxVideo").hide();
    $(".mainBoxVideo video").attr("src", "");
});
$(".mainBoxVideo video").on("click", function (e) {
    e.stopPropagation();
});

// page2轮播图
// start
var index = 0;
var photoItemWidth = $(".activity .photo_item").width();
console.log(photoItemWidth);
var intervalId1;
intervalId1 = setInterval(function () {
    index++;
    if(index > $(".activity .photo_item").length - 1){
        index = 0;
        $(".activity .swiper-wrapper").css("transform", "translateX(" + 180 + "px");
        $(".activity .photo_item").eq(index).css("opacity", 1).siblings().css("opacity", 0);
        $(".activity .swiper-pagination-bullet").eq(index).addClass("swiper-pagination-bullet-active").siblings().removeClass("swiper-pagination-bullet-active");
    } else {
        $(".activity .swiper-wrapper").css("transform", "translateX(" + -(Number(index * (photoItemWidth))) + "px");
        $(".activity .photo_item").eq(index).css("opacity", 1).siblings().css("opacity", 0);
        $(".activity .swiper-pagination-bullet").eq(index).addClass("swiper-pagination-bullet-active").siblings().removeClass("swiper-pagination-bullet-active");
    }
    // console.log(index);
}, 3000);
$(".activity .swiper-pagination-bullet").on("click", function () {
    clearInterval(intervalId1);
    index = $(this).index();
    if (index === 0) {
        $(".activity .swiper-wrapper").css("transform", "translateX(" + 180 + "px");
        $(".activity .photo_item").eq(index).css("opacity", 1).siblings().css("opacity", 0);
        $(".activity .swiper-pagination-bullet").eq(index).addClass("swiper-pagination-bullet-active").siblings().removeClass("swiper-pagination-bullet-active");
    } else {
        $(".activity .swiper-wrapper").css("transform", "translateX(" + -(Number(index * (photoItemWidth))) + "px");
        $(".activity .photo_item").eq(index).css("opacity", 1).siblings().css("opacity", 0);
        $(".activity .swiper-pagination-bullet").eq(index).addClass("swiper-pagination-bullet-active").siblings().removeClass("swiper-pagination-bullet-active");
    }
});

$(".activity .swiper-button-prev").on("click", function () {
    clearInterval(intervalId1);
    index--;
    if(index < 0){
        index = $(".activity .photo_item").length - 1;
        $(".activity .swiper-wrapper").css("transform", "translateX(" + -(Number(index * (photoItemWidth))) + "px");
        $(".activity .photo_item").eq(index).css("opacity", 1).siblings().css("opacity", 0);
        $(".activity .swiper-pagination-bullet").eq(index).addClass("swiper-pagination-bullet-active").siblings().removeClass("swiper-pagination-bullet-active");
    } else {
        if (index === 0) {
            $(".activity .swiper-wrapper").css("transform", "translateX(" + 180 + "px");
        } else {
            
            $(".activity .swiper-wrapper").css("transform", "translateX(" + -(Number(index * (photoItemWidth))) + "px");
        }

        $(".activity .photo_item").eq(index).css("opacity", 1).siblings().css("opacity", 0);
        $(".activity .swiper-pagination-bullet").eq(index).addClass("swiper-pagination-bullet-active").siblings().removeClass("swiper-pagination-bullet-active");
    }
});

$(".activity .swiper-button-next").on("click", function () {
    clearInterval(intervalId1);
    index++;
    if(index > $(".activity .photo_item").length - 1){
        index = 0;
        $(".activity .swiper-wrapper").css("transform", "translateX(" + 180 + "px");
        $(".activity .photo_item").eq(index).css("opacity", 1).siblings().css("opacity", 0);
        $(".activity .swiper-pagination-bullet").eq(index).addClass("swiper-pagination-bullet-active").siblings().removeClass("swiper-pagination-bullet-active");
    } else {
        $(".activity .swiper-wrapper").css("transform", "translateX(" + -(Number(index * (photoItemWidth))) + "px");
        $(".activity .photo_item").eq(index).css("opacity", 1).siblings().css("opacity", 0);
        $(".activity .swiper-pagination-bullet").eq(index).addClass("swiper-pagination-bullet-active").siblings().removeClass("swiper-pagination-bullet-active");
    }
});
// end

var transforms = [
    [36, -28, -100, -328, -400],
    [0, -64, -128, -200, -428],
    [-28, -100, -164, -228, -300],
    [100, -128, -200, -264, -328],
    [64, 0, -228, -300, -364],
    [36, -28, -100, -328, -400]
];

var indexFeature = 0;
var totalItems = $(".feature .photo_item").length;

function updateFeature() {
    $(".feature .photo_item").removeClass("active next prev nextNext prevPrev");


    transforms[indexFeature].forEach(function (item, index) {


        // Current active item
        $(".feature .photo_item").eq(indexFeature).css({
            "transform": "translateX(" + transforms[indexFeature][indexFeature] + "%) scale(1)",
            "opacity": "1",
            "z-index": "998"
        });

        // Previous item
        $(".feature .photo_item").eq((indexFeature - 1 + totalItems) % totalItems).css({
            "transform": "translateX(" + transforms[indexFeature][indexFeature - 1] + "%) scale(0.8)",
            "opacity": ".8",
            "z-index": "997"
        });

        // Next item
        $(".feature .photo_item").eq((indexFeature + 1) % totalItems).css({
            "transform": "translateX(" + transforms[indexFeature][indexFeature + 1] + "%) scale(0.8)",
            "opacity": ".8",
            "z-index": "997"
        });

        // Two items before
        $(".feature .photo_item").eq((indexFeature - 2 + totalItems) % totalItems).css({
            "transform": "translateX(" + transforms[indexFeature][indexFeature - 2] + "%) scale(0.6)",
            "opacity": "0",
            "z-index": "996"
        });

        // Two items after
        $(".feature .photo_item").eq((indexFeature + 2) % totalItems).css({
            "transform": "translateX(" + transforms[indexFeature][indexFeature + 2] + "%) scale(0.6)",
            "opacity": "0",
            "z-index": "996"
        });

        if (indexFeature === 4) {
            $(".feature .photo_item").eq(0).css({
                "transform": "translateX(" + 64 + "%) scale(0.8)",
                "opacity": ".8",
                "z-index": "997"
            });
        }
        if (indexFeature === 0) {
            $(".feature .photo_item").eq(4).css({
                "transform": "translateX(" + -400 + "%) scale(0.8)",
                "opacity": ".8",
                "z-index": "997"
            });
        }
    });
    $(".feature .swiper-pagination-bullet").removeClass("swiper-pagination-bullet-active");
    $(".feature .swiper-pagination-bullet").eq(indexFeature).addClass("swiper-pagination-bullet-active");
}

var featureIntervalId = setInterval(function () {
    indexFeature = (indexFeature + 1) % totalItems;
    console.log(indexFeature);
    updateFeature();
}, 3000);

// Initial update
updateFeature();

$(".feature .swiper-pagination-bullet").on("click", function () {
    clearInterval(featureIntervalId);
    indexFeature = $(this).index();
    updateFeature();
});

$(".feature .swiper-button-prev").on("click", function () {
    clearInterval(featureIntervalId);
    indexFeature = (indexFeature - 1 + totalItems) % totalItems;
    updateFeature();
});
$(".feature .swiper-button-next").on("click", function () {
    clearInterval(featureIntervalId);
    indexFeature = (indexFeature + 1) % totalItems;
    updateFeature();
});