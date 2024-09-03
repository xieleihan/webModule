$(".Container").on("mouseout", function () {
    $(".plusBox").css("display", "none");
    
    var ctx = $("canvas")[0].getContext("2d");
    ctx.clearRect(0, 0, $("canvas").width(), $("canvas").height());
});

$(".Container").on("mousemove", function (e) {
    const containerWidth = $(this).width(); // Container 的宽度
    const containerHeight = $(this).height(); // Container 的高度
    // console.log(e.offsetX, e.offsetY);// 鼠标移动位置
    $(".plusBox").css("display", "block");

    const canvasWidth = $("canvas").width(); // canvas 的宽度
    const canvasHeight = $("canvas").height(); // canvas 的高度

    const img = $("img")[0];  // 假设这是原图
    const imgWidth = img.naturalWidth;  // 原图的宽度
    const imgHeight = img.naturalHeight;  // 原图的高度

    // 计算鼠标位置在容器中的百分比
    const mouseXPercent = e.offsetX / containerWidth;
    const mouseYPercent = e.offsetY / containerHeight;

    // 根据百分比找到原图中的中心点
    const imgCenterX = imgWidth * mouseXPercent;
    const imgCenterY = imgHeight * mouseYPercent;

    // 计算在原图上应显示的区域的左上角坐标
    const srcX = Math.max(0, imgCenterX - canvasWidth / 2);
    const srcY = Math.max(0, imgCenterY - canvasHeight / 2);


    if (e.offsetX < 50 || e.offsetY < 50 || e.offsetX > containerWidth - 50 || e.offsetY > containerHeight - 50) {
        if (e.offsetX < 50 && e.offsetY < 50) {
            $(".plusBox").css("transform", `translate(${0}px, ${0}px)`);
            var ctx = $("canvas")[0].getContext("2d");
            ctx.clearRect(0, 0, canvasWidth, canvasHeight);
            ctx.drawImage(img, 0, 0, canvasWidth, canvasHeight, 0, 0, canvasWidth, canvasHeight);
        } else if (e.offsetX > containerWidth - 50 && e.offsetY > containerHeight - 50) {
            $(".plusBox").css("transform", `translate(${containerWidth - 100}px, ${containerHeight - 100}px)`);
            var ctx = $("canvas")[0].getContext("2d");
            ctx.clearRect(0, 0, canvasWidth, canvasHeight);
            ctx.drawImage(img, imgWidth - canvasWidth, imgHeight - canvasHeight, canvasWidth, canvasHeight, 0, 0, canvasWidth, canvasHeight);
        } else if (e.offsetX < 50 && e.offsetY > containerHeight - 50) {
            $(".plusBox").css("transform", `translate(${0}px, ${containerHeight - 100}px)`);
            var ctx = $("canvas")[0].getContext("2d");
            ctx.clearRect(0, 0, canvasWidth, canvasHeight);
            ctx.drawImage(img, 0, imgHeight - canvasHeight, canvasWidth, canvasHeight, 0, 0, canvasWidth, canvasHeight);
        }
        else if (e.offsetX > containerWidth - 50 && e.offsetY < 50) {
            $(".plusBox").css("transform", `translate(${containerWidth - 100}px, ${0}px)`);
            var ctx = $("canvas")[0].getContext("2d");
            ctx.clearRect(0, 0, canvasWidth, canvasHeight);
            ctx.drawImage(img, imgWidth - canvasWidth, 0, canvasWidth, canvasHeight, 0, 0, canvasWidth, canvasHeight);
        }
        else if (e.offsetX < 50) {
            $(".plusBox").css("transform", `translate(${0}px, ${e.offsetY - 50}px)`);
            var ctx = $("canvas")[0].getContext("2d");
            ctx.clearRect(0, 0, canvasWidth, canvasHeight);
            ctx.drawImage(img, 0, srcY, canvasWidth, canvasHeight, 0, 0, canvasWidth, canvasHeight);
        } else if (e.offsetY < 50) {
            $(".plusBox").css("transform", `translate(${e.offsetX - 50}px, ${0}px)`);
            var ctx = $("canvas")[0].getContext("2d");
            ctx.clearRect(0, 0, canvasWidth, canvasHeight);
            ctx.drawImage(img, srcX, 0, canvasWidth, canvasHeight, 0, 0, canvasWidth, canvasHeight);
        } else if (e.offsetX > containerWidth - 50) {
            $(".plusBox").css("transform", `translate(${containerWidth - 100}px, ${e.offsetY - 50}px)`);
            var ctx = $("canvas")[0].getContext("2d");
            ctx.clearRect(0, 0, canvasWidth, canvasHeight);
            ctx.drawImage(img, imgWidth - canvasWidth, srcY, canvasWidth, canvasHeight, 0, 0, canvasWidth, canvasHeight);
        } else if (e.offsetY > containerHeight - 50) {
            $(".plusBox").css("transform", `translate(${e.offsetX - 50}px, ${containerHeight - 100}px)`);
            var ctx = $("canvas")[0].getContext("2d");
            ctx.clearRect(0, 0, canvasWidth, canvasHeight);
            ctx.drawImage(img, srcX, imgHeight - canvasHeight, canvasWidth, canvasHeight, 0, 0, canvasWidth, canvasHeight);
        }
        
    } else {
        $(".plusBox").css("transform", `translate(${e.offsetX - 50}px, ${e.offsetY - 50}px)`);
        // console.log(canvasWidth, canvasHeight);
        

        var ctx = $("canvas")[0].getContext("2d");
        ctx.clearRect(0, 0, canvasWidth, canvasHeight);

        // 绘制图像的指定部分到画布上
        ctx.drawImage(img, srcX, srcY, canvasWidth, canvasHeight, 0, 0, canvasWidth, canvasHeight);

    }
    
    // var ctx = $("canvas")[0].getContext("2d");
    // ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    // console.log(e.offsetX, e.offsetY);

    // ctx.drawImage($("img")[0], -e.offsetX/(containerWidth / canvasWidth), -e.offsetY/(containerHeight / canvasHeight));
    

})