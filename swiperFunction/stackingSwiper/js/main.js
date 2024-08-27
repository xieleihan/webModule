// 获取所有的图片元素,保存到变量里
var item = $(".swiper-item");
console.log(item);
console.log(item.length);

// 当前是第几张图片放在最中间位置
var index = 0;

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
    }
}

// 初始化函数
layout();

// 点击左侧的按钮执行的操作
$(".swiper-button-prev").click(function() {
    index--;
    if (index < 0) {
        index = 0;
    }
    layout();
});

// 点击右侧的按钮执行的操作
$(".swiper-button-next").click(function () {
    index++;
    if (index > item.length - 1) {
        index = item.length - 1;
    }
    layout();
});

// 点击轮播图的时候,我们要跳转的图片
item.each(function (item, index) {
    // console.log(item,index);
    $(item).click(function () {
        index = index;
        layout();
    });
});