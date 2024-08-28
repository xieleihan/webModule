function getTemplateTime(template, date) {
    var mapArr = {
        "YYYY": date.getFullYear(),
        "Y": date.getFullYear().toString().substr(3, 1),
        "MM": (date.getMonth() + 1 > 9 ? date.getMonth() + 1 : "0" + (date.getMonth() + 1)),
        "M": date.getMonth() + 1,
        "dd": (date.getDate() > 9 ? date.getDate() : "0" + date.getDate()),
        "d": (date.getDate() > 9 ? date.getDate() : "0" + date.getDate()),
        "hh": (date.getHours()>9 ? date.getHours() : "0" + date.getHours()),
        "h": (date.getHours() > 9 ? date.getHours() : "0" + date.getHours()),
        "mm": (date.getMinutes() > 9 ? date.getMinutes() : "0" + date.getMinutes()),
        "m": (date.getMinutes() > 9 ? date.getMinutes() : "0" + date.getMinutes()),
        "ss": (date.getSeconds() > 9 ? date.getSeconds() : "0" + date.getSeconds()),
        "s": date.getSeconds(),
        "yy": date.getFullYear().toString().substr(2, 2)
    };
    var reg = /YYYY|Y|MM|M|dd|d|hh|h|mm|m|ss|s|yy/g;
    return template.replace(reg, function (str) {
        return mapArr[str];
    });
}


var date = new Date();
var template1 = "YYYY-MM-dd hh:mm:ss";
var result1 = getTemplateTime(template1, date);
console.log(result1); // 2022-03-16 01:17:48
console.log("");

var template2 = "h:m / ss 秒 yy年M月d日";
var result2 = getTemplateTime(template2, date);
console.log(result2); // 1:17 / 48 秒 22年3月16日
