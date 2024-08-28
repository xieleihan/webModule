// 获取所有的图片元素,保存到变量里
var item = $(".swiper-item");

// 克隆第一个和最后一个元素
var firstClone = item.first().clone();
var lastClone = item.last().clone();

// 添加到DOM中
$(".swiper-wrapper").append(firstClone);
$(".swiper-wrapper").prepend(lastClone);

console.log(item);
console.log(item.length);

// 当前是第几张图片放在最中间位置
var index = 1;

var item = $(".swiper-item");

// 布局函数
function layout() {
    // 首先需要定义一个两张图片之间的偏移量
    var xOffset = 100; // 每张图片之间的间隔

    // 定义缩放的递减倍率
    var setp = 0.8;

    // 定义一个图片的数量来求得就是z-index的值
    var count = $(".swiper-item").length;
    for (var i = 0; i < item.length; i++) {
        var swiperItem = $(item[i]);
        var sign = Math.sign(i - index);
        var opacity = 1 - Math.abs(i - index) * 0.5;
        // console.log(swiperItem);
        // 我们要设置的是图片的
        // tranform transformX scale
        
        // 设置每张图片的位置
        var x = (i - index) * xOffset;
        if (i != index) {
            x = x + sign * 100;
        }
        
        // 设置每张图片的缩放
        var scale = Math.pow(setp, Math.abs(i - index));
        
        $('.swiper-item').eq(i).css({ 'transform': `translateX(${x}px) scale(${scale})` });

        // z-index
        $(".swiper-item").eq(i).css({ 'z-index': count - Math.abs(i - index) });

        // opacity
        $(".swiper-item").eq(i).css({ 'opacity': opacity });
    }
}

// 初始化函数
layout();

// // 点击左侧的按钮执行的操作
// $(".swiper-button-prev").click(function () {
//     var count = $(".swiper-item").length;
//     index--;
//     // if (index < 0) {
//     //     index = 0;
//     // }
//     if (index <= 0) {
//         $(".swiper-wrapper").css({ 'transition': 'none' });
//         setTimeout(function () {
//             index = count - 2;
//             $(".swiper-wrapper").css({ 'transition': 'all 0.5s' });
//             layout(false);
//         }, 500);
//     }
//     layout();
// });

// // 点击右侧的按钮执行的操作
// $(".swiper-button-next").click(function () {
//     var count = $(".swiper-item").length;
//     console.log("next");
//     index++;
//     // if (index > item.length - 1) {
//     //     index = item.length - 1;
//     // }
//     // 如果移动到克隆的第一个图像，直接跳转到实际的第一张
//     if (index >= count - 1) {
//         $(".swiper-wrapper").css({ 'transition': 'none' });
//         setTimeout(function () {
//             index = 1;
//             $(".swiper-wrapper").css({ 'transition': 'all 0.5s' });
//             layout(false);
//         }, 500);
//     }
//     layout();
// });

// 点击左侧的按钮执行的操作
$(".swiper-button-prev").click(function () {
    var count = $(".swiper-item").length;
    index--;

    // If we're at the first actual item (index 0) and click prev
    if (index <= 0) {
        $(".swiper-item").css({ 'transition': 'none' });
        index = count - 1; // jump to the last actual slide
        layout(false); // apply layout immediately without transition
        setTimeout(function () {
            $(".swiper-item").css({ 'transition': 'all 0.5s' });
            index--; // move to the previous slide with transition
            layout();
        }, 20); // minimal delay to allow the jump to take effect
    } else {
        layout();
    }
});

// 点击右侧的按钮执行的操作
$(".swiper-button-next").click(function () {
    var count = $(".swiper-item").length;
    index++;

    // If we're at the last actual item and click next
    if (index >= count - 1) {
        $(".swiper-item").css({ 'transition': 'none' });
        index = 0; // jump to the first actual slide
        layout(false); // apply layout immediately without transition
        setTimeout(function () {
            $(".swiper-item").css({ 'transition': 'all 0.5s' });
            index++; // move to the next slide with transition
            layout();
        }, 20); // minimal delay to allow the jump to take effect
    } else {
        layout();
    }
});


// 点击轮播图的时候,我们要跳转的图片
item.each(function (item, index) {
    console.log(item,index);
    $(item).click(function () {
        index = index;
        layout();
    });
});