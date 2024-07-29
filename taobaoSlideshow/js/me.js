var imagesBox = document.querySelector('.images');
var images = document.querySelectorAll('.images img');

var li = document.querySelectorAll('.box ul li');
var left = document.querySelector('.left');
var right = document.querySelector('.right');
var box = document.querySelector('.box');

li[0].style.backgroundColor = "red";
for (var i = 0; i < li.length; i++) {
    li[i].setAttribute("data-index", i);
    li[i].onclick = function () {
        var indexLi = this.getAttribute("data-index");
        for (var j = 0; j < li.length; j++) {
            li[j].style.backgroundColor = "#ccc";
        }
        li[indexLi].style.backgroundColor = "red";
        imagesBox.style.left = (-indexLi - 1) * 100 + "%";
        index = parseInt(indexLi) + 1; // 更新 index 以匹配图片索引
    }
}

// 复制首尾图片实现无缝轮播
var firstClone = images[0].cloneNode(true);
var lastClone = images[images.length - 1].cloneNode(true);
imagesBox.appendChild(firstClone);
imagesBox.insertBefore(lastClone, images[0]);
imagesBox.style.left = -100 + '%';
var index = 1;
var images = document.querySelectorAll('.images img');

var updateLiBackground = () => {
    for (var i = 0; i < li.length; i++) {
        li[i].style.backgroundColor = "#ccc";
    }
    if (index > 0 && index <= li.length) {
        li[index - 1].style.backgroundColor = "red";
    } else if (index === 0) {
        li[li.length - 1].style.backgroundColor = "red";
    }
};

var intervalID1 = setInterval(() => {
    index++;
    imagesBox.style.transition = 'all 1s';
    imagesBox.style.left = -index * 100 + '%';
    // 当到达最后一个图片时，重置位置和索引
    if (index === images.length - 1) {
        setTimeout(() => {
            imagesBox.style.transition = 'none';
            imagesBox.style.left = '-100%';
            index = 1;
        }, 1000); // 延迟时间应与过渡时间一致
    }

    updateLiBackground();

}, 2000);

var leftFlag = true;
var rightFlag = true;
// 箭头事件
right.onclick = function () {
    if (rightFlag) {
        rightFlag = false;
        clearInterval(intervalID1);
        index++;
        imagesBox.style.left = -index * 100 + "%";
        imagesBox.style.transition = 'all 1s';
        if (index === images.length - 1) {
            setTimeout(() => {
                imagesBox.style.transition = 'none';
                imagesBox.style.left = '-100%';
                index = 1;
            }, 1000); // 延迟时间应与过渡时间一致
        }
        updateLiBackground();
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
        imagesBox.style.transition = 'all 1s';
        imagesBox.style.left = -index * 100 + "%";
        if (index === 0) {
            setTimeout(() => {
                imagesBox.style.left = -(images.length - 2) * 100 + "%";
                imagesBox.style.transition = 'none';
                index = images.length - 2;
            }, 1000);
        }
        updateLiBackground();
        setTimeout(function () {
            leftFlag = true;
        }, 1000);
    }
}

// 盒子移入移出事件
box.onmouseover = function () {
    clearInterval(intervalID1);
}
box.onmouseout = function () {
    intervalID1 = setInterval(() => {
        index++;
        imagesBox.style.transition = 'all 1s';
        imagesBox.style.left = -index * 100 + '%';
        // 当到达最后一个图片时，重置位置和索引
        if (index === images.length - 1) {
            setTimeout(() => {
                imagesBox.style.transition = 'none';
                imagesBox.style.left = '-100%';
                index = 1;
            }, 1000); // 延迟时间应与过渡时间一致
        }
        updateLiBackground();
    }, 2000);
}
