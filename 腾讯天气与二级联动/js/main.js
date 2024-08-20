// console.log($(province));
// console.log($(city));
var provinceID = $(province[0])[0];
var provinceName = $(province[0])[1];

// console.log(provinceID);
$(province).each(function (index, item) {
    // console.log(item)
    var option = $("<option></option>");
    option.text(item[1]);
    option.val(item[0]);
    
    $("#province").append(option);
});
$.each(city, function (key, value) {
    // console.log("Key:", key);  // 省份的编号
    // console.log("Value:", value);  // 对应的城市列表
    if (key === provinceID) {
        $.each(value, function (index, item) {
            var option = $("<option></option>");
            option.text(item[1]);
            option.val(item[0]);
            $("#city").append(option);
        });
    }
});
var cityName = $("#city").text();
function isEmptyObject(obj) {
    return Object.keys(obj).length === 0 && obj.constructor === Object;
}

function getData() {
    $.ajax({
        /* $.ajax({
                    url:请求url地址
                    data:请求参数,取值可以写参数字符串或者对象
                    type:请求方式 取值常见get和post,默认get,
                    contentType:(默认: "application/x-www-form-urlencoded") 发送信息至服务器时内容编码类型。
                    dataType:取值"jsonp": JSONP 格式。使用 JSONP 形式调用函数时，如 "myurl?callback=?" jQuery 将自动替换 ? 为正确的函数名，以执行回调函数。
                    jsonp:在一个jsonp请求中重写回调函数的名字。这个值用来替代在"callback=?"这种GET或POST请求中URL参数里的"callback"部分
                    jsonpCallback:为jsonp请求指定一个回调函数名,这个值将用来取代jQuery自动生成的随机函数名。
                    beforeSend:function(){
                        发送请求前可修改 XMLHttpRequest 对象的函数，如添加自定义 HTTP 头。XMLHttpRequest 对象是唯一的参数。这是一个 Ajax 事件。如果返回false可以取消本次ajax请求。
                    },
                    complete:function(){
                        请求完成后回调函数 (请求成功或失败之后均调用)
                    },
                    success:function(){
                        请求成功后的回调函数
                    },
                    error:function(){
                        (默认: 自动判断 (xml 或 html)) 请求失败时调用此函数。
                    },
                }) */
        url: "https://wis.qq.com/weather/common",
        type: "get",
        data: {
            source: "pc",
            weather_type: "forecast_1h",
            province: provinceName, // 直接使用变量，无需方括号
            city: cityName
        },
        dataType: "jsonp",
        jsonp: "callback",
        beforeSend: function () {
            $("table").empty("tr");
            $("table").html('<th>时间</th><th>温度</th><th>天气</th><th>风向</th><th>风力</th>')
            $(".notFind").hide();
        },
        success: function (res) {
            console.log(res)

            if (isEmptyObject(res.data.forecast_1h) && isEmptyObject({})) {
                console.log("Not Find")
                $("table").empty("tr");
                $(".notFind").show();
                return;
            }
            
            
            console.log(res.data.forecast_1h)
            // console.log(res);
            // console.log($(res.data.forecast_1h).length)
            $.each(res.data.forecast_1h, function (key, value) {
                
                // console.log("Key:", key);  // 省份的编号
                // console.log("Value:", value);  // 对应的城市列表
                // console.log(value.degree);
                // console.log(value)
                var str = '';
                str += value.update_time.substring(0, 4) + "-" + value.update_time.substring(4, 6) + '-' + value.update_time.substring(6, 8) + ' ' + value.update_time.substring(8, 10) + ':' + value.update_time.substring(10, 12) + ':' + value.update_time.substring(12, 14);
                // console.log(str)
                // console.log(value.update_time)
                // console.log(value.weather)
                // console.log(value.wind_direction)
                var windStr = '';
                // console.log(value.wind_power)
                windStr += value.wind_power.split('-')[1];
                // console.log(windStr)
                // $("table").empty("tr");
                var th = $("<tr></tr>");
                var timeTd = $("<td></td>");
                var degreeTd = $("<td></td>");
                var weatherTd = $("<td></td>");
                var windDirectionTd = $("<td></td>");
                var windPowerTd = $("<td></td>");
                timeTd.text(str);
                degreeTd.text(value.degree);
                weatherTd.text(value.weather);
                windDirectionTd.text(value.wind_direction);
                windPowerTd.text(windStr);
                th.append(timeTd);
                th.append(degreeTd);
                th.append(weatherTd);
                th.append(windDirectionTd);
                th.append(windPowerTd);
                $("table").append(th);
            });
        },
        error: function () {
            $("table").empty("tr");
            $(".notFind").show();
        }

    });
}

getData()

$("#province").change(function () {
    provinceID = $(this).val();
    // console.log(provinceID);

    
    // console.log(provinceID);
    $("#city").empty();





    // 这里做法不好
    $.each(city, function (key, value) {
        // console.log("Key:", key);  // 省份的编号
        // console.log("Value:", value);  // 对应的城市列表
        if (key === provinceID) {
            $.each(value, function (index, item) {
                var option = $("<option></option>");
                option.text(item[1]);
                option.val(item[0]);
                $("#city").append(option);
            });
        }
    });



    // 这个地方不好
    $(province).each(function (index, item) {
        // console.log(item)
        if (item[0] === provinceID) {
            provinceName = item[1];
            $.each(city, function (key, value) {
                // console.log("Key:", key);  // 省份的编号
                // console.log("Value:", value);  // 对应的城市列表
                // console.log(key, value)
                if (key === provinceID) {
                    $.each(value, function (index, item) {
                        console.log(item)
                        console.log($("#city").val())
                        if(item[0] === $("#city").val()) {
                            cityName = item[1];
                        }
                    });
                }
            });
        }
    });
    // console.log(cityName);
    // console.log(provinceName)
    getData()
    
});


// console.log("ProvinceName:", provinceName);
// console.log("CityName:", cityName);
$("#city").change(function () {
    $.each(city, function (key, value) {
        // console.log("Key:", key);  // 省份的编号
        // console.log("Value:", value);  // 对应的城市列表
        // console.log(key, value)
        if (key === provinceID) {
            $.each(value, function (index, item) {
                console.log(item)
                console.log($("#city").val())
                if (item[0] === $("#city").val()) {
                    cityName = item[1];
                }
            });
        }
    });
    console.log(cityName);
    console.log(provinceName)
    getData()
})

