var smallLeft = document.querySelector('.small-left');
var smallRight = document.querySelector('.small-right');
var smallCenter = document.querySelector('.small-center');
var smallCount = 0;
var smallImg = document.querySelectorAll('.small-center img');
var one = document.querySelectorAll('.one');
// // console.log(smallImg);
// smallLeft.onclick = function () {
//     // smallCount -=1
//     switch (smallCount) {
//         case 0:
//             break;
//         case 1:
//         case 2:
//             smallCount -=1;
//             // smallCenter.style.transform = 'translateX(' + smallCount + 'px)';
//             for (var i = 0; i < one.length; i++) {
//                 one[i].style.transform = 'translateX(' + 300 * smallCount + 'px)';
//             }
//             break;
//     }
// }

// smallRight.onclick = function () {
//     // smallCount += 1;
//     switch (smallCount) {
//         case 2:
//             break;
//         case 1:
//         case 0:
//             smallCount += 1;
//             for (var i = 0; i < one.length; i++) {
//                 one[i].style.transform = 'translateX(' + -300 * smallCount + 'px)';
//             }
//             break;
//     }
// }

// 小图
var sectionWidth = 300; // 每个部分的宽度

smallLeft.onclick = function () {
    if (smallCount > 0) {
        smallCount -= 1;
        for (var i = 0; i < one.length; i++) {
            one[i].style.transform = 'translateX(' + -sectionWidth * smallCount + 'px)';
        }
    }
}

smallRight.onclick = function () {
    if (smallCount < one.length - 1) {
        smallCount += 1;
        for (var i = 0; i < one.length; i++) {
            one[i].style.transform = 'translateX(' + -sectionWidth * smallCount + 'px)';
        }
    }
}

// 中部图
var middle = document.querySelector('.middle');
var big = document.querySelector('.big');
for (var i = 0; i < smallImg.length; i++) {
    smallImg[i].setAttribute('data-index', i);
    smallImg[i].onclick = function () {

        var index = this.getAttribute('data-index');
        for (var j = 0; j < smallImg.length; j++){
            smallImg[j].className = '';
        }
        smallImg[index].className = 'active';
        // 图片的字符串:console.log(smallImg[index].getAttribute('src'));
        // 对字符串进行处理
        var str = smallImg[index].getAttribute('src').substring(15, 17);
        // str : 就是当前图片
        console.log('./images/small/'+ str + '.jpg');
        if (middle.children.length >= 1) {
            middle.innerHTML = '';
        }
        if (big.children.length >= 1) {
            big.innerHTML = '';
        }
        var middleBox = document.createElement("div");
        var bigBox = document.createElement("img");
        middleBox.className = "middle-box";
        middleBox.innerHTML = '<div class="fBig"></div><img class="middleImg" src="./images/middle/' + str + '.jpg" alt="" />';
        big.innerHTML = '<div class="big-box"><img class="bigImg" src="./images/big/' + str + '.jpg" alt="" /></div>';
        middle.appendChild(middleBox);
        big.appendChild(bigBox);
        var middleBox = document.querySelector('.middle-box');
        middleMouse();
    }
}

function middleMouse() {
    var middleImg = document.querySelector('.middleImg');
    var fBig = document.querySelector(".fBig");
    var bigImg = document.querySelector('.bigImg');
    var bigbig = document.querySelector('.big');

    middleImg.onmousemove = function (e) {
        fBig.style.display = 'block';
        updateFBPosition(e);
        updateBigImgPosition(e);
        fBig.style.opacity = .7;
        bigbig.style.display = 'block';
    };

    fBig.onmousemove = function (e) {
        updateFBPosition(e);
        updateBigImgPosition(e);
    };

    fBig.onmouseout = function () {
        fBig.style.display = 'none';
        bigbig.style.display = 'none';
    };

    function updateFBPosition(e) {
        var x = e.clientX;
        var y = e.clientY;

        var width = middleImg.clientWidth;
        var height = middleImg.clientHeight;
        var fBigWidth = fBig.offsetWidth;
        var fBigHeight = fBig.offsetHeight;
        var middleImgRect = middleImg.getBoundingClientRect();

        // 边界检测，使 fBig 以鼠标位置为中心
        if (x < middleImgRect.left + fBigWidth / 2) {
            x = middleImgRect.left + fBigWidth / 2;
        }
        if (x > middleImgRect.left + width - fBigWidth / 2) {
            x = middleImgRect.left + width - fBigWidth / 2;
        }
        if (y < middleImgRect.top + fBigHeight / 2) {
            y = middleImgRect.top + fBigHeight / 2;
        }
        if (y > middleImgRect.top + height - fBigHeight / 2) {
            y = middleImgRect.top + height - fBigHeight / 2;
        }

        fBig.style.left = x + 'px';
        fBig.style.top = y + 'px';
        fBig.style.transform = 'translate(-50%, -50%)';
    }

    function updateBigImgPosition(e) {
        var x = e.clientX - middleImg.getBoundingClientRect().left;
        var y = e.clientY - middleImg.getBoundingClientRect().top;

        var middleWidth = middleImg.clientWidth;
        var middleHeight = middleImg.clientHeight;
        var bigWidth = bigImg.clientWidth;
        var bigHeight = bigImg.clientHeight;

        // 计算大图相对于小图的比例
        var xRatio = bigWidth / middleWidth;
        var yRatio = bigHeight / middleHeight;
        var bigX = -x * xRatio + (bigWidth / 2) - (fBig.offsetWidth / 2) * xRatio;
        var bigY = -y * yRatio + (bigHeight / 2) - (fBig.offsetHeight / 2) * yRatio;

        bigImg.style.left = bigX + 'px';
        bigImg.style.top = bigY + 'px';
    }
}

middleMouse();

