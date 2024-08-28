var scrollBox = document.querySelectorAll(".scrollBox div");
console.log(scrollBox);
var scroll = document.querySelector(".scrollBox");
// console.log(scrollBox);
var index = 1;
var li = document.querySelectorAll("li");
var box = document.querySelector(".box");
// 克隆头和尾部
var clone1 = scrollBox[0].cloneNode(true);
var clone2 = scrollBox[scrollBox.length - 1].cloneNode(true);
scroll.appendChild(clone1);
scroll.insertBefore(clone2, scrollBox[0]);

scroll.style.left = -index * 984 + "px";
li[index].style.backgroundColor = "red";

box.onmouseover = function () {
    clearInterval(intervalID1);
}
box.onmouseout = function () {
    intervalID1 = setInterval(function () {
        index++;
        scroll.style.left = -index * 984 + "px";
        if (index >= scrollBox.length) {
            setTimeout(function () {
                scroll.style.left = -(index - scrollBox.length) * 984 + "px";
                scroll.style.transition = "none";
                index = 0;
            }, 500)
        }
        for (var j = 0; j < li.length; j++) {
            li[j].style.backgroundColor = "white";
        }
        li[index].style.backgroundColor = "red";
        scroll.style.transition = "all .5s";
    }, 2000)
}

var intervalID1 = setInterval(function () {
    index++;
    scroll.style.left = -index * 984 + "px";
    if (index >= scrollBox.length) {
        setTimeout(function () {
            scroll.style.left = -(index-scrollBox.length)*984+"px";
            scroll.style.transition = "none";
            index = 0;
        }, 500)
    }
    for (var j = 0; j < li.length; j++) {
        li[j].style.backgroundColor = "white";
    }
    li[index].style.backgroundColor = "red";
    scroll.style.transition = "all .5s";
}, 2000)

var arrowLeft = document.querySelector(".arrowLeft");
var arrowRight = document.querySelector(".arrowRight");
var leftFlag = true;
var rightFlag = true;

arrowRight.onclick = function () {
    clearInterval(intervalID1);
    if (rightFlag) {
        rightFlag = false;

        index++;
        scroll.style.left = -index * 984 + "px";
        if (index >= scrollBox.length) {
            setTimeout(function () {
                scroll.style.left = -(index - scrollBox.length) * 984 + "px";
                scroll.style.transition = "none";
                index = 0;
            }, 500)
            
        }
        scroll.style.transition = "all .5s";
    }
    for (var j = 0; j < li.length; j++) {
        li[j].style.backgroundColor = "white";
    }
    li[index].style.backgroundColor = "red";
    setTimeout(function () {
        rightFlag = true;
    },1000)
}

arrowLeft.onclick = function () {
    
    clearInterval(intervalID1);
    console.log(index);
    if (leftFlag) {
        leftFlag = false;
        index--;
        scroll.style.left = -index * 984 + "px";
        if (index == 0) {
            // console.log(index);
            setTimeout(function () {
                scroll.style.transition = "none";
                scroll.style.left = -(scrollBox.length) * 984 + "px";
                // index = scrollBox.length-1;
                // console.log(index);
            }, 500)
            
        }
        scroll.style.transition = "all .5s";
    }
    for (var j = 0; j < li.length; j++) {
        li[j].style.backgroundColor = "white";
    }
    if (index == 0) {
        index = scrollBox.length ;
    }
    li[index].style.backgroundColor = "red";
    setTimeout(function () {
        leftFlag = true;
    },1000)
}

// 小圆点

console.log(li);
for (var i = 0; i < li.length; i++){
    li[i].setAttribute("data-index", i);
    li[i].onclick = function () {
        // clearInterval(intervalID1);
        index = this.getAttribute("data-index");
        scroll.style.left = -index * 984 + "px";
        scroll.style.transition = "all .5s";
        for (var j = 0; j < li.length; j++){
            li[j].style.backgroundColor = "white";
        }
        li[index].style.backgroundColor = "red";
    }
}