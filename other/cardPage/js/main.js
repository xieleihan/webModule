var rightBoxImg = document.querySelectorAll(".rightBox ul li img");
// console.log(rightBoxImg);
var border = document.querySelector(".border");
var leftBoxImg = document.querySelector(".leftBox .content .contentBox");
// console.log(leftBoxImg);
var imgIndex = document.querySelectorAll(".leftBox .content .contentBox img").length;
// console.log(imgIndex);
var img = document.querySelectorAll(".leftBox .content .contentBox img");

// 复制首尾图片实现无缝轮播
var count = 1;
var firstClone = img[0].cloneNode(true);
var lastClone = img[img.length - 1].cloneNode(true);
leftBoxImg.appendChild(firstClone);
leftBoxImg.insertBefore(lastClone, img[0]);
leftBoxImg.style.top = -count * 718 + "px";

var intervalID1 = setInterval(function () {
    count++;
    if (count > imgIndex) {
        // 移动到最后一张克隆图片时
        console.log("daoke")
        leftBoxImg.style.transition = "all .5s";
        leftBoxImg.style.top = -count * 718 + "px";
        // 添加一个事件监听器，等待过渡结束后重置位置
        leftBoxImg.addEventListener('transitionend', resetPosition, { once: true });
    } else {
        leftBoxImg.style.top = -count * 718 + "px";
        leftBoxImg.style.transition = "all .5s";
    }
}, 2000);

function resetPosition() {
    // 立即跳转到真实的第一张图片
    count = 1;
    leftBoxImg.style.transition = "none";
    leftBoxImg.style.top = -count * 718 + "px";
    // 强制浏览器重绘
    leftBoxImg.offsetHeight; // 读取属性以强制重绘
    leftBoxImg.style.transition = "all .5s"; // 恢复过渡效果
}

// clearInterval(intervalID1);