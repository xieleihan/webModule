var titleLi = document.querySelectorAll('.titleLi');
// console.log(titleLi);
// 获取item值
var item = document.querySelectorAll('.item.clearfix');
// console.log(item);
var heroImgsImg = document.querySelectorAll('.heroImgsImg');
// console.log(heroImgsImg);
var heroDescInfo = document.querySelectorAll('.heroDescInfo');
// console.log(heroDescInfo);

// 上面的title栏的切换
for (var i = 0; i < titleLi.length; i++) {
    titleLi[i].setAttribute('data-index', i);
    titleLi[i].onclick = function () {
        var index = this.getAttribute('data-index');
        for (var j = 0; j < titleLi.length; j++) {
            titleLi[j].className = '';
            item[j].style.display = 'none';
        }
        this.className = 'active';
        item[index].style.display = 'block';
        switch (index) {
            case '0':
                titleDown(0, 1);
                break;
            case '1':
                titleDown(2, 3);
                break;
            case '2':
                titleDown(4, 6);
                break;
        }
    }
    titleLi[i].onmouseover = function () {
        var index = this.getAttribute('data-index');
        for (var j = 0; j < titleLi.length; j++) {
            titleLi[j].className = '';
            item[j].style.display = 'none';
        }
        this.className = 'active';
        item[index].style.display = 'block';
        switch (index) {
            case '0':
                titleDown(0, 1);
                break;
            case '1':
                titleDown(2, 3);
                break;
            case '2':
                titleDown(4, 5);
                break;
        }
    }
}

// title下面的一部分
// for (var i = 0; i < heroImgsImg.length; i++){
//     heroImgsImg[i].setAttribute('data-index', i);
//     heroImgsImg[i].onclick = function (e) {
//         var index = this.getAttribute('data-index');
//         for (var j = 0; j < heroImgsImg.length; j++) {
//             heroImgsImg[j].className = '';
//             heroDescInfo[j].style.display = 'none';
//         }
//         this.className = 'active';
//         heroDescInfo[index].style.display = 'block';
//     }
// }
function titleDown(min, max) {
    for (var i = min; i <= max; i++) {
        heroImgsImg[i].setAttribute('data-index', i);
        heroImgsImg[i].onclick = function () {
            var index = this.getAttribute('data-index');
            for (var j = min; j <= max; j++) {
                heroImgsImg[j].className = '';
                heroDescInfo[j].style.display = 'none';
            }
            this.className = 'active';
            heroDescInfo[index].style.display = 'block';
        }
        heroImgsImg[i].onmouseover = function () {
            var index = this.getAttribute('data-index');
            for (var j = min; j <= max; j++) {
                heroImgsImg[j].className = '';
                heroDescInfo[j].style.display = 'none';
            }
            this.className = 'active';
            heroDescInfo[index].style.display = 'block';
        }
    }
}

// title下面的那个部分
var containerLi = document.querySelectorAll('.containerLi');
// console.log(containerLi);
var itemContainer = document.querySelectorAll('.item.a');
// console.log(itemContainer);
for (var i = 0; i < containerLi.length; i++) {
    containerLi[i].setAttribute('data-index', i);
    containerLi[i].onmouseover = function () {
        var index = this.getAttribute('data-index');
        console.log(index);
        for (var j = 0; j < containerLi.length; j++) {
            containerLi[j].className = '';
            itemContainer[j].style.display = 'none';
        }
        this.className = 'active';
        itemContainer[index].style.display = 'block';
        switch (index) {
            case '0':
                generatedDiv(0, 6);
                console.log(111);
                break;
            case '1':
                generatedDiv(6, 12);
                console.log(222);
                break;
        }
    }
    containerLi[i].onclick = function () {
        var index = this.getAttribute('data-index');
        for (var j = 0; j < containerLi.length; j++) {
            containerLi[j].className = '';
            itemContainer[j].style.display = 'none';
        }
        this.className = 'active';
        itemContainer[index].style.display = 'block';
        switch (index) {
            case '0':
                generatedDiv(0, 6);
                console.log(111);
                break;
            case '1':
                generatedDiv(6, 12);
                console.log(222);
                break;
        }
    }


}

// 找到下面的12个
function generatedDiv(min, max) {
    console.log(min, max);
    var zhuangbei = document.querySelectorAll(".zhaungbei");
    for (var i = min; i < max; i++) {
        zhuangbei[i].setAttribute("data-index", i);
        zhuangbei[i].onmouseover = function () {
            var index = this.getAttribute("data-index");
            var div = document.createElement("div");
            div.className = 'detail';
            var arr = getDiv(index);
            div.innerHTML = `
            <div class="top_box clearfix">
                                    <img src="images/${arr[0]}.jpg" class="fl" />

                                    <div class="price_box fl">
                                        <p class="green">${arr[0]}</p>
                                        <p class="yellow">${arr[1]}</p>
                                        <p class="yellow">${arr[2]}</p>
                                    </div>
                                </div>

                                <p class="attr">${arr[3]}</p>

                                <p>${arr[4]}</p>
                            </div>
        `;
            zhuangbei[index].appendChild(div);
        }
    }
}

function getDiv(index) {
    console.log(index);
    if (index < 6) {
        var zb_name = data1[index].zb_name;
        var sj = data1[index].sj;
        var zj = data1[index].zj;
        var attr = data1[index].attr;
        var desc = data1[index].desc;
    }
    else {
        var zb_name = data2[index-6].zb_name;
        var sj = data2[index-6].sj;
        var zj = data2[index-6].zj;
        var attr = data2[index-6].attr;
        var desc = data2[index-6].desc;
    }
    console.log([zb_name, sj, zj, attr, desc]);
    return [zb_name, sj, zj, attr, desc];
}