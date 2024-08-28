var img = document.querySelectorAll(".imgBox img");
var info = document.querySelector(".info");
var box = document.querySelector(".box");
// console.log(img);
for (var i = 0; i < img.length; i++){
    img[i].setAttribute("data-index", i + 1);
    img[i].onclick = function () {
        var index = this.getAttribute("data-index");
        for (var k = 0; k < img.length; k++){
            img[k].setAttribute("src", "./images/start.png");
        }
        for (var j = 0; j < index; j++){
            img[j].setAttribute("src", "./images/start-active.png");
        }
        switch (index) {
            case '1':
                info.innerText = "";
                info.innerText = "原来你有 1 颗星星的自信";
                break;
            case '2':
                info.innerText = "";
                info.innerText = "原来你有 2 颗星星的自信";
                break;
            case '3':
                info.innerText = "";
                info.innerText = "原来你有 3 颗星星的自信";
                break;
            case '4':
                info.innerText = "";
                info.innerText = "原来你有 4 颗星星的自信";
                break;
            case '5':
                info.innerText = "";
                info.innerText = "原来你有 5 颗星星的自信";
                break;
        }
        event.stopPropagation();
    }
    
}
box.onclick = function () {
    
    for (var i = 0; i < img.length; i++){
        img[i].setAttribute("src", "./images/start.png");
    }
    info.innerText = "";
    info.innerText = "原来你一点自信也没有";
    event.stopPropagation();
}