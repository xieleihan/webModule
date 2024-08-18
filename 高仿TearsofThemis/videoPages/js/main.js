// Copyright © 2024 SouthAki, All Rights Reserved
/*
{
    "sChanId": [
        "66"
    ],
    "sTitle": "《未定事件簿》「专属甜心」四周年特别纪念",
    "sIntro": "",
    "sUrl": "",
    "sAuthor": "",
    "sContent": "<p style=\"white-space: pre-wrap;\"><span style=\"background-color:rgb(255, 255, 255)\">沉溺心动，爱意缠绕。</span></p><p style=\"white-space: pre-wrap; min-height: 1.5em;\"></p><p style=\"white-space: pre-wrap;\"><span style=\"background-color:rgb(255, 255, 255)\">坠入纯真绮梦，共赴甜蜜邀约。</span><br><span style=\"background-color:rgb(255, 255, 255)\">专属甜心送上专属祝福，祝《未定事件簿》四周年快乐！</span></p><p style=\"white-space: pre-wrap; min-height: 1.5em;\"></p>",
    "sExt": "{\"66_0\":[{\"name\":\"未定事件簿-高清版.mp4\",\"url\":\"https://fastcdn.mihoyo.com/content-v2/nxx/124890/838e4474663b568f36c5ef482d41db18_8360907852679401183.mp4\"}],\"66_1\":[{\"name\":\"未定事件簿-微博-横版.jpeg\",\"url\":\"https://fastcdn.mihoyo.com/content-v2/nxx/124890/dc2ac883a9770c63f6b0694df903754b_7646031180079753265.jpeg\"}]}",
    "dtStartTime": "2024-07-17 19:33:53",
    "dtEndTime": "2035-01-01 00:00:00",
    "dtCreateTime": "2024-07-17 19:33:57",
    "iInfoId": 124890,
    "sTagName": [],
    "sCategoryName": "",
    "sSign": ""
}
*/


$.get("./json/video/video.json", function (data) {
    // console.log(data); // 拿到数据
    // console.log(data.data.list); // 我们要的
    data.data.list.forEach(function (item, index) {
        // console.log(item);
        // console.log(item.sTitle);
        const data = item.sExt;

        // 使用正则表达式提取 mp4 地址
        const mp4Regex = /"url":"(https:\/\/[^"]+\.mp4)"/g;
        const mp4Matches = data.match(mp4Regex);

        // 使用正则表达式提取 jpeg 地址
        const jpegRegex = /"url":"(https:\/\/[^"]+\.jpeg)"/g;
        const jpegMatches = data.match(jpegRegex);

        var mp4Url;
        var jpegUrl;

        // 提取并打印出 mp4 和 jpeg 的 URL
        if (mp4Matches) {
            mp4Matches.forEach(match => {
                const url = match.match(/https:\/\/[^"]+\.mp4/)[0];
                // console.log('MP4 URL:', url);
                mp4Url = url;
            });
        }

        if (jpegMatches) {
            jpegMatches.forEach(match => {
                const url = match.match(/https:\/\/[^"]+\.jpeg/)[0];
                // console.log('JPEG URL:', url);
                jpegUrl = url;
            });
        }

        var li = $("<li class='video_item' data-url='" + mp4Url +"'></li>");
        var videoBox = $("<div class='video_box'></div>");
        var videoPreview = $("<div class='video_preview'></div>");
        videoPreview.attr("style", "background-image: url(" + jpegUrl + ")");
        var video_play = $("<div class='video_play'></div>");
        videoBox.append(videoPreview);
        videoBox.append(video_play);
        var videoTitle = $("<div class='video_title'>" + item.sTitle + "</div>");
        li.append(videoBox);
        li.append(videoTitle);
        $(".video_list").append(li);
    })
});

$(".video_list").on("click", "li", function () {
    console.log($(this).attr("data-url"));
    $(".mainVideoBox").show();
    $(".mainVideoBox video").attr("src", $(this).attr("data-url"));
});

$(".mainVideoBox").on("click", function () {
    $(".mainVideoBox").hide();
    $(".mainVideoBox video").attr("src", "");
});

$(".mainVideoBox video").on("click", function (e) {
    e.stopPropagation();
});

$(".nav a img").on("click", function () {
    $(".nav a img").toggleClass("active");
});


// 以下是壁纸区域的代码
// start

$.get("./json/壁纸/电脑壁纸/pcWall.json", function (data) {
    $(".wallpaper_pc .wallpaper_list").empty();
    // console.log(data.data); // 拿到数据
    data.data.list.forEach(function (item, index) {
        // console.log(item);
        // console.log(item.sTitle);
        var data1 = item.sExt;
        var jpgRegex1 = /"url":"(https:\/\/[^"]+\.jpg)"/g;
        var jpgMatches1 = data1.match(jpgRegex1);
        var jpgUrl;
        if (jpgMatches1) {
            jpgMatches1.forEach(match => {
                var url = match.match(/https:\/\/[^"]+\.jpg/)[0];
                // console.log('JPG URL:', url);
                jpgUrl = url;
            });
        }

        var li = $("<li class='wallpaper_item'></li>");
        var wallpaperBox = $("<div class='wallpaper_box'></div>");
        var wallpaperPreview = $("<div class='wallpaper_preview'></div>");
        wallpaperPreview.attr("style", "background-image: url(" + jpgUrl + ")");
        wallpaperBox.append(wallpaperPreview);
        var wallpaperTitle = $("<div class='wallpaper_title'>" + item.sTitle + "</div>");
        li.append(wallpaperBox);
        li.append(wallpaperTitle);
        $(".wallpaper_pc .wallpaper_list").append(li);
    });
});
// end

$.get("./json/壁纸/手机壁纸/phoneWall.json", function (data) {
    $(".wallpaper_mobile .wallpaper_list").empty();
    // console.log(data.data); // 拿到数据
    data.data.list.forEach(function (item, index) {
        // console.log(item);
        // console.log(item.sTitle);
        var data1 = item.sExt;
        var pngRegex1 = /"url":"(https:\/\/[^"]+\.png)"/g;
        var pngMatches1 = data1.match(pngRegex1);
        var pngUrl;
        if (pngMatches1) {
            pngMatches1.forEach(match => {
                var url = match.match(/https:\/\/[^"]+\.png/)[0];
                // console.log('JPG URL:', url);
                pngUrl = url;
            });
        }

        var li = $("<li class='wallpaper_item'></li>");
        var wallpaperBox = $("<div class='wallpaper_box'></div>");
        var wallpaperPreview = $("<div class='wallpaper_preview'></div>");
        wallpaperPreview.attr("style", "background-image: url(" + pngUrl + ")");
        wallpaperBox.append(wallpaperPreview);
        var wallpaperTitle = $("<div class='wallpaper_title'>" + item.sTitle + "</div>");
        li.append(wallpaperBox);
        li.append(wallpaperTitle);
        $(".wallpaper_mobile .wallpaper_list").append(li);
    });
});