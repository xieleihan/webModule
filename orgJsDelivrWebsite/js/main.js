//禁止页面选择以及鼠标右键
document.οncοntextmenu = function () { return false; };
document.onselectstart = function () { return false; };
let h = window.innerHeight;
let w = window.innerWidth;

//禁用右键
document.oncontextmenu = function () { return false; };

//在本网页的任何键盘敲击事件都是无效操作 （防止F12和shift+ctrl+i调起开发者工具）  
window.onkeydown = window.onkeyup = window.onkeypress = function () {
    window.event.returnValue = false;
    return false;
}

//禁用开发者工具F12
document.onkeydown = function () {
    if (window.event && window.event.keyCode == 123) {
        event.keyCode = 0;
        event.returnValue = false;
        return false;
    }
};

// 如果用户在工具栏调起开发者工具，那么判断浏览器的可视高度和可视宽度是否有改变，如有改变则关闭本页面
window.onresize = function () {
    if (h != window.innerHeight || w != window.innerWidth) {
        window.close();
        window.location = "about:blank";
    }
}

$("#join").click(function () {
    window.alert("Soory,暂时无法提供加入本项目的渠道喵~");
});

$("#source").click(function () {
    window.alert("已经开源啦,不用征求许可!!!\n再问就不礼貌了喵~");
});

$(".my-avater").on("mouseover", function () {
    $(".cat").css("color", "skyblue");
});
$(".my-avater").on("mouseout", function () {
    $(".cat").css("color", "black");
});

$.get('https://fastly.jsdelivr.net/gh/southaki/contentDeliveryNetwork@0.0.5/content.json', function (data) {
    $("#package").attr("value", data.package.website);
});

$("#copyWebsite").click(function () {
    document.querySelector('#website').select();
    document.execCommand('copy', true);
});

$('#website').focus(function () {
    document.querySelector('#website').select();
    document.execCommand('copy', true);
});

$("#copyNew").click(function () {
    document.querySelector('#package').select();
    document.execCommand('copy', true);
});

$('#package').focus(function () {
    document.querySelector('#package').select();
    document.execCommand('copy', true);
});