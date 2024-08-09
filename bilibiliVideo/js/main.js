var str = '';
function getRandomNum() {
    return Math.floor(Math.random() * 100);
}

$(".bq").on("click", function () {
    str = $("input").val();
    $(".bqBox").fadeToggle();
    if ($(".daquan").children().length == 0) {
        for (var i = 1; i < 76; i++) {
            $(".daquan").append("<img src='./images/" + i + ".gif'>");
        }
    }

    $(".daquan").on("click", "img", function () {
        var imgIndex = $(this).index() + 1;
        $("input").val(function (index, val) {
            return val + "[" + imgIndex + "]";
        });
    });
});

$("button").click(function () {
    $(".bqBox").fadeOut();
    str = $("input").val();
    if (str === "") {
        alert("请输入内容");
    } else {
        var reg = /\[(\d+)\]/g;
        var formattedStr = str.replace(reg, function (match, p1) {
            return "<img src='./images/" + p1 + ".gif'>";
        });

        var $item = $("<div class='item'>" + formattedStr + "</div>");
        $item.css({
            "top": getRandomNum() + "%",
            "right": "-100px" // 从屏幕右边开始
        });
        $(".videoBox").append($item);

        $item.animate({ right: '1200px' }, 10000, function () {
            $(this).remove();
        });
    }
    $("input").val("");
});