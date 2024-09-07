// var count = 1;
// $(".imageBox").css("transform", "translateX(" + -100 * count + "%)");
$(function () {
    let len = $(".imageBox img").length;
    let lastElemt = $(".imageBox img").eq(len - 1).clone();
    let firstElemt = $(".imageBox img").eq(0).clone();
    $(".imageBox").prepend(lastElemt);
    $(".imageBox").append(firstElemt);

    var count = 1;
    $(".imageBox").css("transform", "translateX(" + -100 * count + "%)");
    var intervalId;
    function right() {
        count++;

        if (count >= $(".imageBox img").length - 1) {
            $(".imageBox").css("transform", "translateX(" + -100 * count + "%)");
            count = 0;
            $(".imageBox").css("transition", "all 0.5s");
            setTimeout(function () {
                $(".imageBox").css("transition", "none");
                count++;
                $(".imageBox").css("transform", "translateX(" + -100 * count + "%)");
            }, 500);
            $(".nav li").eq(count).addClass("active").siblings().removeClass("active");

        } else {
            $(".imageBox").css("transition", "all 0.5s");
            $(".imageBox").css("transform", "translateX(" + -100 * count + "%)");
            $(".nav li").eq(count - 1).addClass("active").siblings().removeClass("active");
        }
    }
    function left() {
        
        count--;
        if (count < 0) {
            count = 0;
        }
        
        if (count <= 0) {
            $(".imageBox").css("transform", "translateX(" + -100 * count + "%)");
            count = $(".imageBox img").length - 1;
            
            $(".imageBox").css("transition", "all 0.5s");
            setTimeout(function () {
                $(".imageBox").css("transition", "none");
                count--;
                
                $(".imageBox").css("transform", "translateX(" + -100 * count + "%)");
            }, 500);
            $(".nav li").eq($(".nav li").length - 1).addClass("active").siblings().removeClass("active");

        } else {
            $(".imageBox").css("transition", "all 0.5s");
            $(".imageBox").css("transform", "translateX(" + -100 * count + "%)");
            $(".nav li").eq(count-1).addClass("active").siblings().removeClass("active");
        }
    }
    function move() {
        intervalId = setInterval(function () {
            right();
            
            

        }, 2000);


        

    };
    move();
    $(".nav li").on("click", function () {
        count = $(this).index();
        console.log(count);
        $(".imageBox").css("transition", "all 0.5s");
        $(".imageBox").css("transform", "translateX(" + -100 * (count + 1) + "%)");
        $(".nav li").eq(count).addClass("active").siblings().removeClass("active");
    });

    // var rightFlag = true;
    // var rightTimeoutId;
    // var leftTimeoutId;
    // var leftFlag = true;

    $(".rightButton").on("click", function () {
        // if (rightFlag) {
        //     rightFlag = false;
        //     right();
        //     rightTimeoutId = setTimeout(function () {
        //         rightFlag = true;
        //     }, 1000);
        // }
        right();
    });

    $(".leftButton").on("click", function () {
        // if (leftFlag) {
        //     leftFlag = false;
        //     left();
        //     leftTimeoutId = setTimeout(function () {
        //         leftFlag = true;
        //     }, 1000);
        // }
        left();
    });
    $(".container").on("mouseover", function () {
        clearInterval(intervalId);
    });
    $(".container").on("mouseout", function () {
        move();
    });
});

