var box = document.querySelectorAll('.box')
var main = document.querySelector('.main')
function getRandomColor() {
    return '#' + Math.random().toString(16).substring(2, 8).padEnd(6, '0');
}
main.onmousemove = function (e) {
    var x = e.clientX;
    var y = e.clientY; 
    for (var i = 0; i < box.length; i++){
        // 做一个边界控制
        (function (i) {
            setTimeout(function () {
                // 确保元素不会超出容器的边界
                var newX = Math.max(box[i].offsetWidth / 2, Math.min(x, main.offsetWidth - box[i].offsetWidth / 2));
                var newY = Math.max(box[i].offsetHeight / 2, Math.min(y, main.offsetHeight - box[i].offsetHeight / 2));

                box[i].style.top = newY - box[i].offsetHeight / 2 + 'px';
                box[i].style.left = newX - box[i].offsetWidth / 2 + 'px';
            }, 100 * i); // 每个元素延时 i * 100 毫秒
        })(i);
    }
}
var a;
box.forEach(function (item) {
    item.style.backgroundColor = getRandomColor();
    a = setInterval(function () {
        item.style.backgroundColor = getRandomColor();
    }, 1000);
})

window.onmouseout = function () {
    clearInterval(a);
}