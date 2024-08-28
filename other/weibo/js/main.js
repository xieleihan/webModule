// console.log($("textarea"))
$("button").click(function () {
    var val = $("textarea").val();
    
    if (val) {
        $("ul").append("<li>" + val + "<a style='float: right;'>删除</a></li>");
        $("ul li:last").slideDown({
            height: "24px"
        }, 5000);
        $("a").click(function () {
            $(this).parent().slideUp(1000, function () {
                $(this).remove();
            })
        })
    } else {
        alert("请输入内容");
    }
})