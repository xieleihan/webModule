// 找到元素区域
var images = document.querySelectorAll('.images img');
var imagesBox = document.querySelector('.images');
var box = document.querySelector('.box');
// console.log(images);
var li = document.querySelectorAll('.box ul li');
// console.log(li);
var left = document.querySelector('.left');
var right = document.querySelector('.right');
// console.log(left,right);


// 盒子移入移出事件
box.onmouseover = function () {
    clearInterval(intervalID1);
}
box.onmouseout = function () {
    intervalID1 = setInterval(run, 3000);
}


var index = 0;
// 小圆点事件
for (var i = 0; i < li.length; i++){
    li[i].setAttribute("data-index", i);
    li[i].onclick = function () {
        index = this.getAttribute("data-index");
        for (var i = 0; i < li.length; i++){
            li[i].style.backgroundColor = "#ccc";
        }
        li[index].style.backgroundColor = "red";
        imagesBox.style.left = -index * 100 + "%";
    }
}

li[0].style.backgroundColor = "red";
intervalID1 = setInterval(run, 3000);

function run() {
    index++;
    if (index >= images.length) {
        index = 0; // 重置索引以循环播放
    }
    for (var i = 0; i < li.length; i++) {
        li[i].style.backgroundColor = "#ccc";
    }
    li[index].style.backgroundColor = "red";
    // 使用负的百分比值来移动box
    imagesBox.style.left = -index * 100 + "%";
    
    
}


var leftFlag = true;
var rightFlag = true;
// 箭头事件
right.onclick = function () {
    if (rightFlag) {
        rightFlag = false;
        clearInterval(intervalID1);
        run();
        setTimeout(function () {
            rightFlag = true;
        }, 1000);
    }
}

left.onclick = function () {
    if (leftFlag) {
        leftFlag = false;
        clearInterval(intervalID1);
        index--;
        if (index < 0) {
            index = images.length - 1; // 循环到最后一张图片
        }
        imagesBox.style.left = -index * 100 + "%";
        setTimeout(function () {
            leftFlag = true;
        }, 1000);
    }
    
}