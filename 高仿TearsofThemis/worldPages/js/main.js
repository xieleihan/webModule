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

    function getDataType(dataIndex) {
        var str = '';
        switch (dataIndex) {
            case "50":
                str = "news";
                break;
            case "49":
                str = "all";
                break;
        }
        $('.news_list').find('li').remove();
            $.get("./json/"+str+"/"+str+"-pages1.json", function (data) {
                // console.log(data); // 请求成功的数据
                // console.log(data.data.list); // 打印了list数组
                // console.log(data.data.list[0].sTitle); // 打印了list数组的第一个title
                data.data.list.forEach(function (item, index) {
                    // console.log(item); // 打印当前元素
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
                });
            });
    }

    switch ($(this).attr("data-name")) {
        case "all":
            dataIndex = "49";
            getDataType(dataIndex);
            break;
        case "news":
            dataIndex = "50";
            getDataType(dataIndex);
            break;
        case "announce":
            dataIndex = "51";
            break;
        case "event":
            dataIndex = "52";
            break;
    }
    // console.log(dataIndex); // 参数有了就是这个输出的

    // if (dataIndex === "50") {
    //     $('.news_list').find('li').remove();
    //     $.get("./json/news/news-pages1.json", function (data) {
    //         // console.log(data); // 请求成功的数据
    //         // console.log(data.data.list); // 打印了list数组
    //         // console.log(data.data.list[0].sTitle); // 打印了list数组的第一个title
    //         data.data.list.forEach(function (item, index) {
    //             // console.log(item); // 打印当前元素
    //             // console.log(item.sTitle); // 标题
    //             // // console.log(item.sChanId); // 类型 做处理 50 news 51 announce 52 event
    //             // console.log(item.sChanId[0]); // 想要的参数
    //             // console.log(item.dtStartTime); // 时间 做处理
    //             // console.log(item.dtStartTime.split(" ")[0].split("-")[0] + "-" + item.dtStartTime.split(" ")[0].split("-")[1], item.dtStartTime.split(" ")[0].split("-")[2]); // 想要的参数

    //             // 创建新闻列表项元素
    //             var newsLi = $("<li class='news_item'></li>");

    //             // 创建新闻类型元素并插入到列表项中
    //             switch (item.sChanId[0]) {
    //                 case "50":
    //                     var newsType = $("<div class='news_type new'></div>");
    //                     break;
    //                 case "51":
    //                     var newsType = $("<div class='news_type announce'></div>");
    //                     break;
    //                 case "52":
    //                     var newsType = $("<div class='news_type event'></div>");
    //                     break;
    //             }
    //             // var newsType = $("<div class='news_type'>" + item.sChanId[0] + "</div>"); // 使用 item.sChanId[0] 作为新闻类型
    //             newsType.appendTo(newsLi);

    //             // 创建新闻日期元素
    //             var news_date = $("<div class='news_date'></div>");
    //             var news_date_day = $("<span class='news_date_day'>" + item.dtStartTime.split(" ")[0].split("-")[2] + "</span>");
    //             var span = $("<span>" + item.dtStartTime.split(" ")[0].split("-")[0] + "-" + item.dtStartTime.split(" ")[0].split("-")[1] + "</span>");

    //             // 将日期元素插入到新闻日期容器中
    //             news_date_day.appendTo(news_date);
    //             span.appendTo(news_date);

    //             // 将新闻日期容器插入到列表项中
    //             news_date.appendTo(newsLi);

    //             // 创建新闻内容容器和标题元素
    //             var news_content = $("<div class='news_content'></div>");
    //             var news_title = $("<div class='news_title'>" + item.sTitle + "</div>");

    //             // 将新闻标题插入到新闻内容容器中
    //             news_title.appendTo(news_content);

    //             // 将新闻内容容器插入到列表项中
    //             news_content.appendTo(newsLi);

    //             // 将创建的新闻列表项插入到 .news_list 容器中
    //             $(".news_list").append(newsLi);
    //         });
    //     });
    // }
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
        // console.log(item); // 打印当前元素
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
    });
});

// end

function getDataNew(page) {
    $('.news_list').find('li').remove();
    $.get("./json/all/all-pages"+page+".json", function (data) {
        // console.log(data); // 请求成功的数据
        // console.log(data.data.list); // 打印了list数组
        // console.log(data.data.list[0].sTitle); // 打印了list数组的第一个title
        data.data.list.forEach(function (item, index) {
            // console.log(item); // 打印当前元素
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
        });
    });
}

// 2.点击下面的按钮
var flag = true;
// console.log($(".news_pager .mihoyo-pager-rich_elipsis")[1])
// console.log($(".news_pager .mihoyo-pager-rich_button"));
$(".news_pager .mihoyo-pager-rich_pages").on("click", "a", function () {
    var firstChild = $(".news_pager .mihoyo-pager-rich_pages").children().first()[0];
    var lastChild = $(".news_pager .mihoyo-pager-rich_pages").children().last()[0];

    // console.log(firstChild);
    // console.log(lastChild);

    if (this === firstChild || this === lastChild) {
        // console.log("dianji");
    } else {
        if ($(this).index() > 2) {
            $(".news_pager .mihoyo-pager-rich_pages").children().first().css("display", "inline-block");
        } else {
            $(".news_pager .mihoyo-pager-rich_pages").children().first().hide();
        }
        if ($(this).index() > 5) {
            console.log($(this).text());
            $(".news_pager .mihoyo-pager-rich_elipsis").removeClass("active");
            if (true) {
                if (flag) {
                    var a = $("<a class='mihoyo-pager-rich_button add'>" + (Number($(this).text()) + 1) + "</a>")
                    var nexta = $("<a class='mihoyo-pager-rich_button add'>" + (Number($(this).text()) + 2) + "</a>")
                    $(this).after(a);
                    $(this).next().after(nexta);
                    $(".news_pager .mihoyo-pager-rich_pages a").eq(2).remove();
                    flag = false;
                }
                

                if ($(this).index() > 5 && Number($(this).text()) > Number($(this).prev().text())) {
                    var totalLinks = $(".news_pager .mihoyo-pager-rich_pages a").length;
                    for (var i = 2; i < totalLinks - 2; i++) {
                        $(".news_pager .mihoyo-pager-rich_pages a").eq(i).text(parseInt($(this).text(), 10) - 5 + i);
                    }
                    $(".news_pager .mihoyo-pager-rich_pages a").eq(2).remove();
                    var nexta = $("<a class='mihoyo-pager-rich_button add'>" + (Number($(this).text()) + 2) + "</a>")
                    $(this).next().after(nexta);
                    // console.log(Number($(this).prev().prev().text())) //是可以的
                }

                if ($(this).index() > 5 &&
                    Number($(this).text()) > Number($(this).prev().prev().text()) &&
                    Number($(this).prev().text()) > Number($(this).prev().prev().text())) {

                    // 移除不需要的分页按钮
                    $(".news_pager .mihoyo-pager-rich_pages a").eq(2).remove();

                    // 插入新的分页按钮
                    var a = $("<a class='mihoyo-pager-rich_button add'>" + (Number($(this).text()) + 1) + "</a>")
                    var nexta = $("<a class='mihoyo-pager-rich_button add'>" + (Number($(this).text()) + 2) + "</a>")
                    $(this).after(a);
                    $(this).next().after(nexta);

                    // 检查日志
                    console.log(Number($(this).prev().prev().text()));
                }

            }
        } else {
            // console.log($(this).text());
            
            $(".news_pager .mihoyo-pager-rich_elipsis")[0].classList.add("active");
            $(".news_pager .add").remove();
        }
        $(".news_pager .mihoyo-pager-rich_pages a").removeClass("mihoyo-pager-rich_current");
        $(this).addClass("mihoyo-pager-rich_current");
        getDataNew($(this).text());
        // if ($(this).index() > 6) {
        //     var totalLinks = $(".news_pager .mihoyo-pager-rich_pages a").length;

        //     // 更新中间的分页按钮文本
        //     for (var i = 2; i < totalLinks - 2; i++) {
        //         $(".news_pager .mihoyo-pager-rich_pages a").eq(i).text(parseInt($(this).text(), 10) - 5 + i);
        //     }

        //     // // 移除多余的第三个按钮，保持分页按钮数量不变
        //     // $(".news_pager .mihoyo-pager-rich_pages a").eq(2).remove();

        //     // // 创建并插入新的分页按钮
        //     // var newButtonText = parseInt($(this).text(), 10) + 1;
        //     // // console.log(newButtonText+1);
        //     // var newButton = $("<a class='mihoyo-pager-rich_button add'>" + newButtonText + "</a>");
        //     // $(this).after(newButton);
        //     console.log($(this).text());
        // }

    }
});