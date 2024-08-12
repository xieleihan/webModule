// var newStr = $("p").html().replaceAll("\n", "").split(" ");
// var arr = [];
// newStr.forEach(function (item) {
//     if (item != "") {
//         arr.push(item);
//     }
// })
// console.log(newStr);
// console.log(arr); // 这个是文章中的每个单词

// // 监听input
// console.log($("#search").on("input", function () {
//     console.log($(this).val());  // 输入框监听
//     var inputStr = $(this).val();
//     // 找到对应的盒子
//     // $("#search-bar")
//     if (inputStr == "") {
//         $("#search-bar").html("");
//     }
//     $(document).on("keydown", function (e) {
//         if (e.keyCode === 8) {
//             $("#search-bar").html("");
//         }
//     })

//     function getWords(str) {
//         var reg = new RegExp(str, "g");
//         return reg;
//     }

//     arr.forEach(function (item) {
//         if (item.indexOf(inputStr) != -1) {
//             // console.log(item); item就是我们要的

//             // 创建dom
//             if (inputStr != "") {
//                 // console.log("搜索到："+item);
//                 // 现在的问题是我们只能找一个字符的搜索结果 但是我们需要找所有字符的搜索结果
//                 if (inputStr.length > 1) {             
//                     var li = $("<li>" + item + "</li>");
//                     $("#search-bar").append(li);
//                 } else {
//                     var li = $("<li>" + item + "</li>");
//                     $("#search-bar").append(li);
//                 }              
//             }
//         }
//     })
// }));

var newStr = $("p").html().replaceAll("\n", "").split(" ");
var arr = [];
newStr.forEach(function (item) {
    if (item.trim() != "") {
        arr.push(item);
    }
});

// 监听input事件
$("#search").on("input", function () {
    var inputStr = $(this).val().trim();

    // 清空之前的搜索结果
    $("#search-bar").html("");
    // 清除段落中所有已有的 <span> 包裹
    $("p").html(function (_, html) {
        return html.replace(/<span>(.*?)<\/span>/g, "$1");
    });

    if (inputStr !== "") {
        // 创建一个正则表达式来匹配输入内容
        var reg = new RegExp(inputStr, "i"); // i表示忽略大小写

        var results = [];

        arr.forEach(function (item) {
            if (reg.test(item)) {
                results.push(item);
            }
        });

        // 一次性将所有匹配项添加到DOM中
        results.forEach(function (item) {
            var li = $("<li>" + item + "</li>");
            $("#search-bar").append(li);
        });
    }
});


// 给li绑定事件
$("#search-bar").on("click", "li", function () {
    var word = $(this).text();
    // 清除段落中所有已有的 <span> 包裹
    $("p").html(function (_, html) {
        return html.replace(/<span>(.*?)<\/span>/g, "$1");
    });
    // 使用正则表达式来替换所有匹配的单词
    $("p").html(function (_, html) {
        var regex = new RegExp(word, "g"); // 全局匹配
        return html.replace(regex, "<span>" + word + "</span>");
    });
});