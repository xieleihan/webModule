var obj = {
    one: 72.6,
    two: 84.8,
    three: 69.8
}
$(".amount-sum em")
console.log($(".price-sum em").text().split("￥")[1]);

function result() {
    var temp = 0;
    
    $(".j-checkbox:checked").each(function (index, item) {
        
        // console.log(item, index);
        // switch (index) {
        //     case 0:
        //         console.log(obj.one);
        //         temp += Number($(this).parent().parent().children(".p-num").children(".quantity-form").children(".itxt").attr("value")) * obj.one;
        //         break;
        //     case 1:
        //         console.log(obj.two);
        //         temp += Number($(this).parent().parent().children(".p-num").children(".quantity-form").children(".itxt").attr("value")) * obj.two;
        //         break;
        //     case 2:
        //         console.log(obj.three);
        //         temp += Number($(this).parent().parent().children(".p-num").children(".quantity-form").children(".itxt").attr("value")) * obj.three;
        //         break;
        // }
        temp += Number($(this).parent().parent().children(".p-num").children(".quantity-form").children(".itxt").attr("value")) * $(this).parent().parent().children(".p-sum").text().split("￥")[1];
        
        // Number($(this).parent().parent().children(".p-num").children(".quantity-form").children(".itxt").attr("value"));
        // console.log(temp);
    });
    console.log(temp);
    temp = temp.toFixed(2);
    $(".price-sum em").text("￥" + temp);
}

$(".checkall").on("click", function () {
    // console.log("checkall 被点击了");
    var isChecked = $(this).prop("checked"); // 获取 .checkall 是否被选中
    $(".j-checkbox").prop("checked", isChecked); // 选中所有复选框
    $(".checkall").prop("checked", isChecked); // 选中所有复选框
    $(".j-checkbox").parent().parent().addClass("check-cart-item");
    if ($(".checkall").prop("checked") ===false) {
        $(".j-checkbox").parent().parent().removeClass("check-cart-item");
    }
    $(".j-checkbox").each(function () {
        len = $(".j-checkbox:checked").length
        // console.log(len)
    });
    if (len > 1) {
        var temp = 0;
        $(".j-checkbox:checked").each(function () {

            temp += Number($(this).parent().parent().children(".p-num").children(".quantity-form").children(".itxt").attr("value"));
            console.log(temp);
        });
        // console.log(jishu);
        $(".amount-sum em").text(temp);
        console.log(temp);
        temp = 0;
        // console.log(Number($(this).prev().val()));
    } else {
        $(".amount-sum em").text(0)
    }
    result();
})

$(".j-checkbox").on("click", function () {
    if ($(this).prop("checked")) {

        $(".amount-sum em").text(Number($(".amount-sum em").text()) + Number($(this).parent().parent().children(".p-num").children(".quantity-form").children(".itxt").val()));
        // console.log(Number($(this).parent().parent().children(".p-num").children(".quantity-form").children(".itxt").val()))
        // $(this).parent().parent().addClass("check-cart-item");
    } else {
        $(".amount-sum em").text(Number($(".amount-sum em").text())  - Number($(this).parent().parent().children(".p-num").children(".quantity-form").children(".itxt").val()));
        

        // $(this).parent().parent().removeClass("check-cart-item");
    }
    $(".j-checkbox").each(function () {
        if ($(".j-checkbox:checked").length === 0) {
            $(".amount-sum em").text(0);
        }
    });
    result();
});

$(".j-checkbox").on("click", function () {
    $(".j-checkbox").each(function () {
        if ($(this).prop("checked")) {
            
            // $(".amount-sum em").text(Number($(".amount-sum em").text()) + Number($(this).parent().parent().children(".p-num").children(".quantity-form").children(".itxt").val()));
            // console.log(Number($(this).parent().parent().children(".p-num").children(".quantity-form").children(".itxt").val()))
            $(this).parent().parent().addClass("check-cart-item");
        } else {
            // $(".amount-sum em").text(Number($(".amount-sum em").text()) - (Number($(".amount-sum em").text()) - Number($(this).parent().parent().children(".p-num").children(".quantity-form").children(".itxt").val())));
            // console.log(Number($(".amount-sum em").text()) - (Number($(".amount-sum em").text()) - Number($(this).parent().parent().children(".p-num").children(".quantity-form").children(".itxt").val())))
            
            $(this).parent().parent().removeClass("check-cart-item");
        }
    });
    if($(".j-checkbox:checked").length === $(".j-checkbox").length){
        $(".checkall").prop("checked", true);
    } else {
        $(".checkall").prop("checked", false);
    }
    result();
});

$(".quantity-form").on("click", "a", function () {
    if ($(this).hasClass("increment")) {  // 正确地调用 hasClass 方法
        
        // console.log("点击了");
        // console.log($(this));
        var n = parseInt($(this).prev().val());// 使用 parseInt 转换为数字类型
        n++;
        // var jishu = Number($(this).prev().val()) - n;
        $(this).prev().val(n);
        $(this).prev().attr("value", n);
        var len;
        $(".j-checkbox").each(function () {
            len = $(".j-checkbox:checked").length
            // console.log(len)
        });
        if (len > 1) {
            var temp=0;
            $(".j-checkbox:checked").each(function () {
                
                temp += Number($(this).parent().parent().children(".p-num").children(".quantity-form").children(".itxt").attr("value"));
                // console.log(temp);
            });
            // console.log(jishu);
            $(".amount-sum em").text(temp);
            // console.log(temp);
            temp = 0;
            // console.log(Number($(this).prev().val()));
        } else {
            $(".amount-sum em").text(Number($(".j-checkbox:checked").parent().parent().children(".p-num").children(".quantity-form").children(".itxt").val()));
        }
    } else {
        var n = parseInt($(this).next().val());  // 使用 parseInt 转换为数字类型
        if (n == 1) {
            return false;  // 如果数量是 1，阻止减少
        }
        n--;
        $(this).next().val(n);
        $(this).next().attr("value", n);
        var len;
        $(".j-checkbox").each(function () {
            len = $(".j-checkbox:checked").length
        });
        if (len > 1) {
            var temp = 0;
            $(".j-checkbox:checked").each(function () {

                temp += Number($(this).parent().parent().children(".p-num").children(".quantity-form").children(".itxt").attr("value"));
                console.log(temp);
            });
            // console.log(jishu);
            $(".amount-sum em").text(temp);
            console.log(temp);
            temp = 0;
        } else {
            $(".amount-sum em").text(Number($(".amount-sum em").text()) - (Number($(".amount-sum em").text()) - Number($(".j-checkbox:checked").parent().parent().children(".p-num").children(".quantity-form").children(".itxt").val())));
        }
        
    }
    result();
});

$(".remove-batch").on("click", function () {
    if ($(".amount-sum em").text() != 0) {
        $(".amount-sum em").text(Number($(".amount-sum em").text()) - Number($(".j-checkbox:checked").parent().parent().children(".p-num").children(".quantity-form").children(".itxt").val()));
        // console.log($(".j-checkbox:checked").parent().parent().children(".p-num").children(".quantity-form").children(".itxt").val())
    }
    $(".j-checkbox:checked").parent().parent().remove();
    result();
})

$(".clear-all").on("click", function () {
    $(".cart-item-list").remove();
    $(".amount-sum").html("已经选<em>0</em>件商品");
    $(".price-sum").html("总价： <em>￥0.00</em>");
    result();
});