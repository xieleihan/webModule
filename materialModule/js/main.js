// 全部输出的列表
var list = document.querySelector("#list");
// console.log(list);
// for (var i = 0; i < heroList.length; i++) {

//     var li = document.createElement("li");
//     // 图片:https://game.gtimg.cn/images/yxzj/img201606/heroimg/582/582.jpg
//     // 超链接:https://pvp.qq.com/web201605/herodetail/yuanliuzhizi_tank.shtml
//     li.className = "fl";
//     li.innerHTML = `
//         <a href="https://pvp.qq.com/web201605/herodetail/${heroList[i].id_name}.shtml">
//             <img src="https://game.gtimg.cn/images/yxzj/img201606/heroimg/${heroList[i].ename}/${heroList[i].ename}.jpg" alt="">
//             <span>${heroList[i].cname}</span>
//         </a>
//     `;
//     list.appendChild(li);
// }

// 找到类型id:console.log(heroList[i].hero_type);

function generated(i) {
    var li = document.createElement("li");
    // 图片:https://game.gtimg.cn/images/yxzj/img201606/heroimg/582/582.jpg
    // 超链接:https://pvp.qq.com/web201605/herodetail/yuanliuzhizi_tank.shtml
    li.className = "fl";
    li.innerHTML = `
        <a href="https://pvp.qq.com/web201605/herodetail/${heroList[i].id_name}.shtml">
            <img src="https://game.gtimg.cn/images/yxzj/img201606/heroimg/${heroList[i].ename}/${heroList[i].ename}.jpg" alt="">
            <span>${heroList[i].cname}</span>
        </a>
    `;
    list.appendChild(li);
}

// 全部all函数
function all() {
    for (var i = 0; i < heroList.length; i++) {
        generated(i);
    }
}

all();

// 找到坦克id的函数
function tank() {
    // console.log("hello");
    for (var i = 0; i < heroList.length; i++) {
        // console.log(heroList[i].hero_type);
        if (heroList[i].hero_type == 3 || heroList[i].hero_type2 == 3) {
            generated(i);
        }
    }
}

// 找到战士id的函数
function warrior() {
    for (var i = 0; i < heroList.length; i++) {
        if (heroList[i].hero_type == 1 || heroList[i].hero_type2 == 1) {
            generated(i);
        }
    }
}

// 找到刺客的函数
function assassin() {
    for (var i = 0; i < heroList.length; i++) {
        if (heroList[i].hero_type == 4 || heroList[i].hero_type2 == 4) {
            generated(i);
        }
    }
}

// 找到法师的函数
function mage() {
    for (var i = 0; i < heroList.length; i++) {
        if (heroList[i].hero_type == 2 || heroList[i].hero_type2 == 2) {
            generated(i);
        }
    }
}

// 找到新手的函数
function newbie() {
    for (var i = 0; i < heroList.length; i++) {
        if (heroList[i].hero_type == 5 || heroList[i].hero_type2 == 5) {
            generated(i);
        }
    }
}

// 找到辅助的函数
function support() {
    for (var i = 0; i < heroList.length; i++) {
        if (heroList[i].hero_type == 6 || heroList[i].hero_type2 == 6) {
            generated(i);
        }
    }
}

// 找到本周免费的函数
function free() {
    for (var i = 0; i < heroList.length; i++) {
        if (heroList[i].pay_type == 10) {
            generated(i);
        }
    }
}

// 找到新手推荐函数
function newHero() {
    for (var i = 0; i < heroList.length; i++) {
        if (heroList[i].pay_type == 11) {
            generated(i);
        }
    }
}

// 清除整个列表
function clearList() {
    var list = document.querySelector("#list");
    list.innerHTML = "";
}
// 调用方法
// clearList();

// 点击按钮事件,也就是主事件
var say = document.querySelectorAll(".say");
var type;
// console.log(say);
for (var i = 0; i < say.length; i++) {
    // var check = say[i].firstElementChild.firstElementChild;
    // console.log(check);
    say[i].setAttribute("data-index", i);
    say[i].onclick = function () {
        var index = this.getAttribute("data-index");
        for (var j = 0; j < say.length; j++) {
            say[j].firstElementChild.firstElementChild.className = "";
        }
        say[index].firstElementChild.firstElementChild.className = "active";

        // 获取子元素的兄弟节点的文本
        var text = say[index].firstElementChild.nextElementSibling.innerText;

        // 点击相应的逻辑
        switch (text) {
            case '全部': clearList(); type = heroTypes[0].id; all(); break;
            case '坦克': clearList(); type = heroTypes[3].id; tank(); break;
            case '战士': clearList(); type = heroTypes[1].id; warrior(); break;
            case '刺客': clearList(); type = heroTypes[4].id; assassin(); break;
            case '法师': clearList(); type = heroTypes[2].id; mage(); break;
            case '射手': clearList(); type = heroTypes[5].id; newbie(); break;
            case '辅助': clearList(); type = heroTypes[6].id; support(); break;
            case '本周免费': clearList(); free(); break;
            case '新手推荐': clearList(); newHero(); break;
        }
    }
}

function highlightText(text, query) {
    var regex = new RegExp(`(${query})`, 'gi');
    return text.replace(regex, '<em class="highlight">$1</em>');
}

// 搜索函数
function search(value) {
    for (var i = 0; i < heroList.length; i++) {
        if (heroList[i].cname.includes(value)) {
            var li = document.createElement("li");
            // 图片:https://game.gtimg.cn/images/yxzj/img201606/heroimg/582/582.jpg
            // 超链接:https://pvp.qq.com/web201605/herodetail/yuanliuzhizi_tank.shtml
            li.className = "fl";
            var highlightedCname = highlightText(heroList[i].cname, value);
            li.innerHTML = `
                        <a href="https://pvp.qq.com/web201605/herodetail/${heroList[i].id_name}.shtml">
                            <img src="https://game.gtimg.cn/images/yxzj/img201606/heroimg/${heroList[i].ename}/${heroList[i].ename}.jpg" alt="">
                            <span>${highlightedCname}</span>
                        </a>
                    `;
            
            list.appendChild(li);
        }
    }
}

var input = document.querySelector("#searchName");
input.oninput = function () {
    // 这是获取值的
    console.log(this.value);
    clearList();
    search(this.value);
}