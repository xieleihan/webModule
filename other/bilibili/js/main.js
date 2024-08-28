var smallBox = document.querySelectorAll('.smallBox');
// console.log(smallBox);
var li = document.querySelectorAll('.sideBar ul li');
// console.log(li);

// 滚动事件
// window.onscroll = function () {
//     var km = document.documentElement.scrollTop || document.body.scrollTop;

//     for (var i = 0; i < smallBox.length; i++) {
//         var rect = smallBox[i].getBoundingClientRect();
//         var offsetTop = rect.top + km; // 获取元素相对于页面顶部的距离

//         // 检查当前滚动位置是否在元素的顶部和底部之间
//         if (km >= offsetTop - window.innerHeight / 2 && km < offsetTop + smallBox[i].offsetHeight - window.innerHeight / 2) {
//             for (var j = 0; j < li.length; j++) {
//                 li[j].className = '';
//             }
//             li[i].className = 'active';
//             break; // 一旦找到匹配的元素，就可以退出循环
//         }
//     }
// };

window.onscroll = function () {
    var km = document.documentElement.scrollTop; // 这个是滚动的距离
    console.log(km);
    for (var i = 0; i < smallBox.length; i++) {
        var index = 0;
        if (km >= smallBox[i].offsetTop - window.innerHeight / 2 && km < smallBox[i].offsetHeight + smallBox[i].offsetTop - window.innerHeight / 2) {
            index += i;
            for (var j = 0; j < li.length; j++) {
                li[j].className = '';
            }
            li[index].className = 'active';
            break;
        }
    }
}

// 点击事件
for (var i = 0; i < li.length - 1; i++) {
    li[i].setAttribute('data-index', i);
    li[i].onclick = function () {
        var index = this.getAttribute('data-index');
        window.scrollTo(0, smallBox[index].offsetTop);
        this.className = 'active';
    }
    li[10].onclick = function () {
        window.scrollTo(0, 0);
    }
}