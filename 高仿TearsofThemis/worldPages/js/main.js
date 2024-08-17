// Copyright © 2024 SouthAki, All Rights Reserved
// 1.点击按钮切换的nav
// start
/* 
    iPage = 5
    iChanId = dataIndex
    iAppId = 15
    iPageSize = 5
    iPage = 1
    sLangKey = zh-cn
*/
var dataIndex;
var requestObj = {
    iPage: 5,
    iChanId: dataIndex,
    iAppId: 15,
    iPageSize: 5,
    iPage: 1,
    sLangKey: "zh-cn"
}
$(".news_menu").on("click", "li", function () {
    // console.log($(this).index()); // index下标
    var str = $(this).index() + 1;
    for (var i = 1; i < $(".news_menu li").length + 1; i++) {
        $(".news_menu li").removeClass("news_tab" + i + "_active");
    }
    $(this).addClass("news_tab" + str + "_active");
    // console.log($(this).attr("data-name"));
    
    switch ($(this).attr("data-name")) {
        case "all":
            dataIndex = "49";
            break;
        case "news":
            dataIndex = "50";
            break;
        case "announce":
            dataIndex = "51";
            break;
        case "event":
            dataIndex = "52";
            break;
    }
    // console.log(dataIndex); // 参数有了就是这个输出的
});

// 跨域解决方案一: 不行
/*
$.ajax({
    url: "https://wd.mihoyo.com/content_v2/getContentList?",
    dataType: "jsonp",  // 使用 JSONP
    success: function (data) {
        console.log(data);
    },
    error: function () {
        console.log("跨域请求失败");
    }
});
*/

// 跨域请求方案二: 不行
/*
$.get("https://wd.mihoyo.com/content_v2/getContentList?", function (data) {
        console.log(data);
    }).fail(function () {
    console.log("跨域请求失败");
});
*/

// 使用本地请求方式
$.get("./json/all/all-pages1.json", function (data) {
    // console.log(data); // 请求成功的数据
    // console.log(data.data.list); // 打印了list数组
    // console.log(data.data.list[0].sTitle); // 打印了list数组的第一个title
    data.data.list.forEach(function (item, index) {
        console.log(item); // 打印当前元素
        // console.log(item.sTitle); // 标题
        // // console.log(item.sChanId); // 类型 做处理 50 news 51 announce 52 event
        // console.log(item.sChanId[0]); // 想要的参数
        // console.log(item.dtStartTime); // 时间 做处理
        // console.log(item.dtStartTime.split(" ")[0].split("-")[0] + "-" + item.dtStartTime.split(" ")[0].split("-")[1], item.dtStartTime.split(" ")[0].split("-")[2]); // 想要的参数

        // 创建新闻列表项元素
        var newsLi = $("<li class='news_item'></li>");

        // 创建新闻类型元素并插入到列表项中
        switch (item.sChanId[0]) {
            case "50":
                var newsType = $("<div class='news_type new'></div>");
                break;
            case "51":
                var newsType = $("<div class='news_type announce'></div>");
                break;
            case "52":
                var newsType = $("<div class='news_type event'></div>");
                break;
        }
        // var newsType = $("<div class='news_type'>" + item.sChanId[0] + "</div>"); // 使用 item.sChanId[0] 作为新闻类型
        newsType.appendTo(newsLi);

        // 创建新闻日期元素
        var news_date = $("<div class='news_date'></div>");
        var news_date_day = $("<span class='news_date_day'>" + item.dtStartTime.split(" ")[0].split("-")[2] + "</span>");
        var span = $("<span>" + item.dtStartTime.split(" ")[0].split("-")[0] + "-" + item.dtStartTime.split(" ")[0].split("-")[1] + "</span>");

        // 将日期元素插入到新闻日期容器中
        news_date_day.appendTo(news_date);
        span.appendTo(news_date);

        // 将新闻日期容器插入到列表项中
        news_date.appendTo(newsLi);

        // 创建新闻内容容器和标题元素
        var news_content = $("<div class='news_content'></div>");
        var news_title = $("<div class='news_title'>" + item.sTitle + "</div>");

        // 将新闻标题插入到新闻内容容器中
        news_title.appendTo(news_content);

        // 将新闻内容容器插入到列表项中
        news_content.appendTo(newsLi);

        // 将创建的新闻列表项插入到 .news_list 容器中
        $(".news_list").append(newsLi);
    }
})