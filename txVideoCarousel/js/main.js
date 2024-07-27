var ul = document.querySelector('ul');
var box = document.querySelector('.box');
// console.log(ul);
for (var i = 0; i < data.length; i++){
    var li = document.createElement('li');
    var img = document.createElement('img');
    var boxbox = document.createElement('div');
    boxbox.className = "boxbox";
    
    img.src = data[i].img;
    img.className = "imgBox";
    li.innerHTML = `
        <span class="bigSpan">${data[i].title}</span>
        <span class="smallSpan">${data[i].desc}</span>
    `;
    
    ul.appendChild(li);
    
    box.appendChild(img);
    box.appendChild(boxbox);
}

// 定时器轮播图
var index = 0; // 当前显示的图片索引

var li = document.querySelectorAll('li');
li[0].className = "highlight";
// console.log(li);
for (var i = 0; i < li.length; i++){
    li[i].setAttribute("data-index", i);
    li[i].onclick = function () {
        index = this.getAttribute("data-index");
        box.style.left = -index * 100 + "%";
        smallSpan[index].style.opacity = "1";
        bigSpan[index].style.fontWeight = "bold";
        box.style.backgroundColor = data[index].bg;
        for (var j = 0; j < li.length; j++){
            li[j].className = "";
        }
        li[index].className = "highlight";
    }
}



// // 全部定时器
var imgBox = document.querySelectorAll('.imgBox');

var intervalID1 = null;
var smallSpan = document.querySelectorAll('.smallSpan');
var bigSpan = document.querySelectorAll('.bigSpan');
box.style.backgroundColor = data[index].bg;
li[0].className = "highlight";
// smallSpan[index].style.display = "block";
smallSpan[0].style.opacity = "1";
bigSpan[0].style.fontWeight = "bold";
intervalID1 = setInterval(function () {
    index++;
    if (index >= imgBox.length) {
        index = 0; // 重置索引以循环播放
    }

    for (var j = 0; j < li.length; j++) {
        li[j].className = "";
        // smallSpan[j].style.display = "none";
        smallSpan[j].style.opacity = "0";
        bigSpan[j].style.fontWeight = "normal";
    }
    li[index].className = "highlight";
    // smallSpan[index].style.display = "block";
    smallSpan[index].style.opacity = "1";
    bigSpan[index].style.fontWeight = "bold";

    // 使用负的百分比值来移动box
    box.style.left = -index * 100 + "%";
    box.style.backgroundColor = data[index].bg;

}, 3000);
var title = document.querySelector('.title');
box.onmouseout = function () {
    if (intervalID1 === null) {
        intervalID1 = setInterval(function () {
            index++;
            if (index >= imgBox.length) {
                index = 0; // 重置索引以循环播放
            }

            for (var j = 0; j < li.length; j++) {
                li[j].className = "";
                smallSpan[j].style.opacity = "0";
                bigSpan[j].style.fontWeight = "normal";
            }
            li[index].className = "highlight";
            smallSpan[index].style.opacity = "1";
            bigSpan[index].style.fontWeight = "bold";

            // 使用负的百分比值来移动box
            box.style.left = -index * 100 + "%";
            box.style.backgroundColor = data[index].bg;

        }, 3000);
    }
}
box.onmouseover = function () {
    clearInterval(intervalID1);
    intervalID1 = null;
}
title.onmouseout = function () {
    if (intervalID1 === null) {
        intervalID1 = setInterval(function () {
            index++;
            if (index >= imgBox.length) {
                index = 0; // 重置索引以循环播放
            }
            for (var j = 0; j < li.length; j++) {
                li[j].className = "";
                smallSpan[j].style.opacity = "0";
                bigSpan[j].style.fontWeight = "normal";
            }
            li[index].className = "highlight";
            smallSpan[index].style.opacity = "1";
            bigSpan[index].style.fontWeight = "bold";

            // 使用负的百分比值来移动box
            box.style.left = -index * 100 + "%";
            box.style.backgroundColor = data[index].bg;

        }, 3000);
    }
}
title.onmouseover = function () {
    clearInterval(intervalID1);
    intervalID1 = null;
}
