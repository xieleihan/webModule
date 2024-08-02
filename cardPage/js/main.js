var rightBoxImg = document.querySelectorAll(".rightBox ul li img");
console.log(rightBoxImg);
var border = document.querySelector(".border");
var leftBoxImg = document.querySelector(".leftBox .content .contentBox");
console.log(leftBoxImg);
var imgIndex = document.querySelectorAll(".leftBox .content .contentBox img").length;
console.log(imgIndex);

for (var i = 0; i < rightBoxImg.length; i++){
    rightBoxImg[i].setAttribute("data-index", i);
    rightBoxImg[i].onclick = function () {
        for (var j = 0; j < rightBoxImg.length; j++) {
            var index = this.getAttribute("data-index");
            rightBoxImg[j].style.opacity = 0.5;
        }
        rightBoxImg[index].style.opacity = 1;
        border.style.top = index * 148 + "px";
        leftBoxImg.style.top = -index * 718 + "px";
    }
}
var count = 0;
var intervalID1 = setInterval(function () {
    if (count >= imgIndex - 1) {
        count = 0;
        rightBoxImg[count].style.opacity = 1;
        border.style.top = count * 148 + "px";
        leftBoxImg.style.top = -count * 718 + "px";
    } else {
        count++;
        rightBoxImg[count].style.opacity = 1;
        border.style.top = count * 148 + "px";
        leftBoxImg.style.top = -count * 718 + "px";
    }
},2000)