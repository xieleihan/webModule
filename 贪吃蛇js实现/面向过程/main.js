// 需求：
// 1、制作游戏地图（尺寸、行、列）
// 2、绘制蛇（蓝色）
// 3、绘制食物 （橙色）
// 4、处理蛇移动的逻辑
// 5、控制蛇运动的方向
// 6、蛇与食物的碰撞检测
// 7、记录游戏得分（每吃到一个食物+1）
// 8、蛇活动超出地图范围提示“游戏结束”

// 封装函数 处理URL上参数
var getParams = function () {
    var str = location.search;
    // 记录URL的相关参数
    var obj = {}
    if (str) {
        var txt = str.slice(1);
        var arr = txt.split("&");
        // console.log(arr)//  ['row=20', 'col=20', 'width=30', 'height=30']
        for (var i = 0; i < arr.length; i++) {
            var key = arr[i].split("=")[0];
            var value = arr[i].split("=")[1];
            obj[key] = (value - 0);// 字符串转number
        }
    }
    // console.log(str);// ?row=20&col=20&width=30&height=30
    return obj
}
var option = getParams();

// console.log(option);
// console.log(option.row);// undefined
// 记录多少行
var row = option.row || 15;// 默认值为15
// 记录多少列
var col = option.col || 16;
// 方块的宽度
var w = option.width || 40;
// 方块的高度
var h = option.height || 40;
//  检查参数
// console.log({  row,col,h, w  })
// 计算地图的尺寸
var width = col * w;
var height = row * h;

// 定义大数组（记录页面上所有的方块）
var elements = [];

// 定义蛇数组 （记录蓝色方块的标签）
var snakes = [];
// 记录蛇数组最后一个元素的坐标
var y = 0; //  0 表示第一行
var x = 2; //  2 表示第三列

// 记录蛇移动的方向 up down right left
var direction = "right";

// 记录定时器变量
var timer = null;

// 记录定时器的毫秒值
var ms = 50;

// 记录游戏是否开始
var isStart = false;

// 记录分数
var score = 0;

// 记录倒计时的定时器变量
var dingshiqi = null;


// 获取标签
var map_element = document.querySelector(".map");
var score_element = document.querySelector(".score span");
var start_element = document.querySelector("#start");
var pause_element = document.querySelector("#pause");
var refresh_element = document.querySelector("#refresh");
var time_element = document.querySelector(".downtime span");

// 记录游戏时间 (30 * 60)
// var seconds = 7200;
var seconds = 1800;
time_element.innerText = '00:30:00';



// 1、制作游戏地图（尺寸、行、列）
var drawMap = function () {
    // 每次创建地图之前先清空map标签的内容
    map_element.innerHTML = "";
    map_element.style.width = width + "px";
    map_element.style.height = height + "px";
    // 循环 行
    for (var r = 0; r < row; r++) {
        var ul = document.createElement('ul');
        ul.style.width = width + "px";
        ul.style.height = h + "px";
        var arr = [];// 记录每一行有多少个方块
        // 循环列
        for (var c = 0; c < col; c++) {
            var li = document.createElement("li");
            ul.appendChild(li);
            arr.push(li);// li标签就是方块
            // 设置li标签的尺寸
            li.style.width = w + "px";
            li.style.height = h + "px";
            li.style.lineHeight = h + "px";
        }
        // 把ul标签添加到map标签上
        map_element.appendChild(ul);
        // 把arr添加到大数组中
        elements.push(arr);
    }
}

// 初始化地图
drawMap();

// 2、绘制蛇（蓝色）
// 默认第一行 前3个li标签为蛇
var drawSnake = function () {
    for (var c = 0; c <= x; c++) {
        //记录代表“蛇”的标签
        var el = elements[y][c];
        // 记录蛇标签
        snakes.push(el);
        // 设置el背景色
        el.className = "s";
        // 设置文本
        el.innerText = c;
    }
}
drawSnake();

// 3、绘制食物 （橙色）
var foodX = 0;
var foodY = 0;
var drawFood = function () {
    // 随机的食物坐标
    foodX = Math.floor(Math.random() * col);
    foodY = Math.floor(Math.random() * row);
    // 判断食物的落点
    if (elements[foodY][foodX].className == 's') {
        // 重新创建食物
        drawFood();
    }
    else {
        // 设置食物的背景色
        elements[foodY][foodX].className = "food";
    }
}
drawFood();
// 4、处理蛇移动的逻辑
var snakeMove = function () {
    // 判断蛇移动的方向
    if (direction == "right") {
        x += 1;
    }
    if (direction == "left") {
        x -= 1;
    }
    if (direction == "down") {
        y += 1;
    }
    if (direction == "up") {
        y -= 1;
    }

    // 8、蛇活动超出地图范围提示“游戏结束”
    // 判断蛇活动是否超出指定范围
    // 向左最小值
    if (x < 0) {
        // 提示游戏结束
        alert("游戏结束");
        // 停止定时器
        clearInterval(timer);
        if (dingshiqi) clearInterval(dingshiqi);
        return;
    }
    // 向右最大值
    if (x > (col - 1)) {
        // 提示游戏结束
        alert("游戏结束");
        // 停止定时器
        clearInterval(timer);
        if (dingshiqi) clearInterval(dingshiqi);
        return;
    }
    // 向上最小值
    if (y < 0) {
        // 提示游戏结束
        alert("游戏结束");
        // 停止定时器
        clearInterval(timer);
        if (dingshiqi) clearInterval(dingshiqi);
        return;
    }
    // 向下最大值
    if (y > (row - 1)) {
        // 提示游戏结束
        alert("游戏结束");
        if (dingshiqi) clearInterval(dingshiqi);
        // 停止定时器
        clearInterval(timer);
        return;
    }

    // 蛇和自己身体发生接触，提示游戏结束
    for (var j = 0; j < snakes.length; j++) {
        if (elements[y][x] == snakes[j]) {
            alert("游戏结束，自己吃到自己了..");
            clearInterval(timer);
            if (dingshiqi) clearInterval(dingshiqi);
            return;
        }
    }

    // 6、蛇与食物的碰撞检测
    if (x == foodX && y == foodY) {
        // 7、记录游戏得分（每吃到一个食物+1）
        // 计算得分
        score += 1;
        // 渲染分数
        score_element.innerText = score;
        // 添加方块到蛇数组,设置下一个li标签背景色
        elements[y][x].className = "s";
        // 添加一个元素
        snakes.push(elements[y][x]);
        // 判断用户得分是否大于60
        if (score > 60) {
            alert("恭喜贵宾，闯关成功。");
            clearInterval(timer);
            return;
        }
        // 重新创建食物
        drawFood();
    }
    else {
        // 蛇数组第一个背景和文本都去掉
        snakes[0].className = "";
        snakes[0].innerText = "";
        // 删除数组第一个元素
        snakes.shift();
        // 设置下一个li标签背景色
        elements[y][x].className = "s";
        // 添加一个元素
        snakes.push(elements[y][x]);
        // console.log("111")
    }

    // 循环蛇数组(重新绘制文本)
    for (var i = 0; i < snakes.length; i++) {
        snakes[i].innerText = i;
    }
}

// 不断重新以下步骤，蛇就动了。。。
// snakeMove();
// snakeMove();
// snakeMove();
// snakeMove();
// snakeMove();

// 给按钮绑定事件（开始游戏）
start_element.onclick = function () {
    isStart = true;//表示开始游戏
    pause_element.className = "";
    this.className = "active";
    if (timer) clearInterval(timer);
    timer = setInterval(snakeMove, ms);
    // 开始倒计时
    startDownTime();
}

// 给按钮绑定事件（暂停）
pause_element.onclick = function () {
    // 游戏没开始，不然点击设置高亮
    // if(isStart == false) return;
    if (!isStart) return;
    start_element.className = "";
    start_element.innerText = "继续";
    this.className = "active";
    if (timer) clearInterval(timer);
    // 停止倒计时
    if (dingshiqi) clearInterval(dingshiqi);
}

// 点击刷新
refresh_element.onclick = function () {
    // 刷新页面
    location.reload();
}

// 5、控制蛇运动的方向
// 监听键盘的“上ArrowUp 右ArrowRight 下ArrowDown 左ArrowLeft”
document.onkeydown = function (event) {
    // 获取键值码
    var code = event.code;
    // 判断用户是否同时按下“上下” 或“左右” (处理蛇移动方向的矛盾)
    if (direction == "up" && code == "ArrowDown") return;
    if (direction == "down" && code == "ArrowUp") return;
    if (direction == "left" && code == "ArrowRight") return;
    if (direction == "right" && code == "ArrowLeft") return;
    // console.log(code);
    // 判断用户按下哪个按键
    if (code == "ArrowUp") {
        direction = "up";
    }
    if (code == "ArrowRight") {
        direction = "right";
    }
    if (code == "ArrowDown") {
        direction = "down";
    }
    if (code == "ArrowLeft") {
        direction = "left";
    }
}

// 8、计算游戏的倒计时
function downTime() {
    seconds--;
    if (seconds < 0) {
        alert("时间到了，结束游戏");
        clearInterval(timer);
        clearInterval(dingshiqi);
        return;
    }
    // 计算剩余小时、分数、秒钟
    var h, m, s;
    h = Math.floor(seconds / 3600);
    m = Math.floor(seconds % 3600 / 60);
    s = Math.floor(seconds % 60);

    // 补个0
    h = h < 10 ? '0' + h : '' + h;
    m = m < 10 ? '0' + m : '' + m;
    s = s < 10 ? '0' + s : '' + s;
    // 拼接时间
    var str = `${h}:${m}:${s}`;
    // 渲染时间
    time_element.innerText = str;
}
// downTime();
// downTime();
// downTime();
// downTime();
// downTime();
function startDownTime() {
    if (dingshiqi) clearInterval(dingshiqi);
    dingshiqi = setInterval(downTime, 1000);
}