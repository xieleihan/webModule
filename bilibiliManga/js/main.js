// $.ajaxSetup({
//     cache: false
// });

// 获取alllabel
// console.log($(AllLabel));
var mangaObj = {
    "styles": -1,
    "areas": -1,
    "status": -1,
    "prices": -1,
    "orders": 0,
};

updata(mangaObj);

// 顶部分类区域
// 题材
// $(".styles")
$(AllLabel.styles).each(function (index, item) {
    // console.log(index, item); // item
    var $li = $("<li></li>");
    if (index === 0) {
        $li.addClass("active");
    }
    $li.text(item.name);
    $(".styles").append($li);
});
$(".styles li").on("click", function () {
    var newMangaObj = {};
    $(this).addClass("active").siblings().removeClass("active");
    // console.log("点击了");
    // console.log($(AllLabel.styles)[$(this).index()].id);
    mangaObj.styles = $(AllLabel.styles)[$(this).index()].id;
    console.log(mangaObj);
    newMangaObj = $.extend(true, {}, mangaObj);
    newMangaObj.styleId = newMangaObj.styles; // 添加新的键 styleId
    delete newMangaObj.styles; // 删除旧的键 styles
    updataUl(newMangaObj);
});
// 地区
// $(".areas")
$(AllLabel.areas).each(function (index, item) {
    // console.log(index, item); // item
    var $li = $("<li></li>");
    if (index === 0) {
        $li.addClass("active");
    }
    $li.text(item.name);
    $(".areas").append($li);
});
$(".areas li").on("click", function () {
    var newMangaObj = {};
    $(this).addClass("active").siblings().removeClass("active");
    // console.log("点击了");
    // console.log($(AllLabel.areas)[$(this).index()].id);
    mangaObj.areas = $(AllLabel.areas)[$(this).index()].id;
    newMangaObj = $.extend(true, {}, mangaObj);
    newMangaObj.areaId = newMangaObj.areas; // 添加新的键 styleId
    delete newMangaObj.areas; // 删除旧的键 styles
    updataUl(newMangaObj);
});
// 进度
// $(".status")
$(AllLabel.status).each(function (index, item) {
    // console.log(index, item); // item
    var $li = $("<li></li>");
    if (index === 0) {
        $li.addClass("active");
    }
    $li.text(item.name);
    $(".status").append($li);
});
$(".status li").on("click", function () {
    var newMangaObj = {};
    $(this).addClass("active").siblings().removeClass("active");
    // console.log("点击了");
    // console.log($(AllLabel.status)[$(this).index()].id);
    mangaObj.status = $(AllLabel.status)[$(this).index()].id;
    newMangaObj = $.extend(true, {}, mangaObj);
    newMangaObj.isFinish = newMangaObj.status; // 添加新的键 styleId
    delete newMangaObj.status; // 删除旧的键 styles
    updataUl(newMangaObj);
});
// 收费
// $(".prices")
$(AllLabel.prices).each(function (index, item) {
    // console.log(index, item); // item
    var $li = $("<li></li>");
    if (index === 0) {
        $li.addClass("active");
    }
    $li.text(item.name);
    $(".prices").append($li);
});
$(".prices li").on("click", function () {
    var newMangaObj = {};
    $(this).addClass("active").siblings().removeClass("active");
    // console.log("点击了");
    // console.log($(AllLabel.prices)[$(this).index()].id);
    mangaObj.prices = $(AllLabel.prices)[$(this).index()].id;
    newMangaObj = $.extend(true, {}, mangaObj);
    newMangaObj.isFree = newMangaObj.prices; // 添加新的键 styleId
    delete newMangaObj.prices; // 删除旧的键 styles
    updataUl(newMangaObj);
});
//排序
// $(".orders")
$(AllLabel.orders).each(function (index, item) {
    // console.log(index, item); // item
    var $li = $("<li></li>");
    if (index === 0) {
        $li.addClass("active");
    }
    $li.text(item.name);
    $(".orders").append($li);
});
$(".orders li").on("click", function () {
    var newMangaObj = {};
    $(this).addClass("active").siblings().removeClass("active");
    // console.log("点击了");
    // console.log($(AllLabel.orders)[$(this).index()].id);
    mangaObj.orders = $(AllLabel.orders)[$(this).index()].id;
    newMangaObj = $.extend(true, {}, mangaObj);
    newMangaObj.order = newMangaObj.orders; // 添加新的键 styleId
    delete newMangaObj.orders; // 删除旧的键 styles
    updataUl(newMangaObj);
});

// 绘制函数
function updata(mangaObj) {
    $(".mangaBox").empty();
    $(".wait").show();

    $(function () {

        $.get("https://apis.netstart.cn/bcomic/ClassPage?" + $.param(mangaObj) + "&_=" + new Date().getTime(), function (data) {
            // console.log(newMangaObj);
            $(".wait").hide();
            $(".bottomBox").show();
            // console.log(data.data);
            $(data.data).each(function (index, item) {
                // console.log(index);
                // console.log(item);
                // console.log(item.title);
                var $li = $("<li></li>");
                var $a = $("<a></a>");
                $a.attr("href", "https://manga.bilibili.com/detail/mc" + item.season_id + "?from=manga_index")
                var $img = $("<img>");
                var $p = $("<p></p>");
                $p.text(item.title);
                $p.addClass("title");
                var $pinfo = $("<p></p>");
                var str = '';
                if (item.is_finish === 1) {
                    str += "[完结]共 " + item.last_ord + " 话";
                } else {
                    // str += "更新至 " + item.last_ord + " 话";
                    if (item.last_short_title === "公告") {
                        str += "更新至 " + item.last_short_title;
                    } else {
                        str += "更新至 " + item.last_ord + " 话";
                    }
                }
                $pinfo.text(str);
                $pinfo.addClass("info");
                $img.attr("src", "./images/preview.jpeg");
                $(function () {
                    $img.attr("src", item.vertical_cover);
                })
                $a.append($img);
                $a.append($p);
                $a.append($pinfo);

                $li.append($a);
                $(".mangaBox").append($li);
            });
        });
    })
}

// 绘制函数
function updataUl(newMangaObj) {
    $(".mangaBox").empty();
    $(".wait").show();

    $(function () {

        $.get("https://apis.netstart.cn/bcomic/ClassPage?" + $.param(newMangaObj) + "&_=" + new Date().getTime(), function (data) {
            console.log(newMangaObj);
            $(".wait").hide();
            $(".bottomBox").show();
            // console.log(data.data);
            if (data.data.length === 0) {
                $(".waitBox img").attr("src", "./images/no-find.png");
            } else {
                $(data.data).each(function (index, item) {
                    // console.log(index);
                    // console.log(item);
                    // console.log(item.title);
                    var $li = $("<li></li>");
                    var $a = $("<a></a>");
                    $a.attr("href", "https://manga.bilibili.com/detail/mc" + item.season_id + "?from=manga_index")
                    var $img = $("<img>");
                    var $p = $("<p></p>");
                    $p.text(item.title);
                    $p.addClass("title");
                    var $pinfo = $("<p></p>");
                    var str = '';
                    if (item.is_finish === 1) {
                        str += "[完结]共 " + item.last_ord + " 话";
                    } else {
                        // str += "更新至 " + item.last_ord + " 话";
                        if (item.last_short_title === "公告") {
                            str += "更新至 " + item.last_short_title;
                        } else {
                            str += "更新至 " + item.last_ord + " 话";
                        }
                    }
                    $pinfo.text(str);
                    $pinfo.addClass("info");
                    $img.attr("src", "./images/preview.jpeg");
                    $(function () {
                        $img.attr("src", item.vertical_cover);
                    })
                    $a.append($img);
                    $a.append($p);
                    $a.append($pinfo);

                    $li.append($a);
                    $(".mangaBox").append($li);
                });
            }
            
        });
    })
}