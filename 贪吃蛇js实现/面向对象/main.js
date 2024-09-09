// 需求：
// 1、制作游戏地图（尺寸、行、列）
// 2、绘制蛇（蓝色）
// 3、绘制食物 （橙色）
// 4、处理蛇移动的逻辑
// 5、控制蛇运动的方向
// 6、蛇与食物的碰撞检测
// 7、记录游戏得分（每吃到一个食物+1）
// 8、蛇活动超出地图范围提示“游戏结束”

// 封装函数处理URL上参数（工具函数）
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
var obj = getParams();


// 构造函数
function Snake(option) {
    // 添加属性
    // 记录多少行
    this.row = option.row || 15;// 默认值为15
    // 记录多少列
    this.col = option.col || 16;
    // 方块的宽度
    this.w = option.width || 40;
    // 方块的高度
    this.h = option.height || 40;
    // 计算地图的尺寸
    this.width = this.col * this.w;
    this.height = this.row * this.h;
    // 定义大数组（记录页面上所有的方块）
    this.elements = [];

    // 定义蛇数组 （记录蓝色方块的标签）
    this.snakes = [];
    // 记录蛇数组最后一个元素的坐标
    this.y = 0; //  0 表示第一行
    this.x = 2; //  2 表示第三列

    // 记录蛇移动的方向 up down right left
    this.direction = "right";

    // 记录定时器变量
    this.timer = null;

    // 记录定时器的毫秒值
    this.ms = 200;

    // 记录游戏是否开始
    this.isStart = false;

    // 记录分数
    this.score = 0;

    // 记录倒计时的定时器变量
    this.dingshiqi = null;

    // 记录游戏时间 (30 * 60)
    this.seconds = 1800;


    // 食物的坐标
    this.foodX = 0;
    this.foodY = 0;

    // 获取标签
    this.map_element = document.querySelector(".map");
    this.score_element = document.querySelector(".score span");
    this.start_element = document.querySelector("#start");
    this.pause_element = document.querySelector("#pause");
    this.refresh_element = document.querySelector("#refresh");
    this.time_element = document.querySelector(".downtime span");
}

// 添加方法
Snake.prototype.init = function () {
    // 初始化
    this.drawMap();// 绘制地图
    this.drawSnake();//绘制蛇
    this.drawFood();//绘制食物
    this.addEvent();// 添加用户的交互行为
}
Snake.prototype.drawMap = function () {
    // 每次创建地图之前先清空map标签的内容
    this.map_element.innerHTML = "";
    this.map_element.style.width = this.width + "px";
    this.map_element.style.height = this.height + "px";
    // 循环 行
    for (var r = 0; r < this.row; r++) {
        var ul = document.createElement('ul');
        ul.style.width = this.width + "px";
        ul.style.height = this.h + "px";
        var arr = [];// 记录每一行有多少个方块
        // 循环列
        for (var c = 0; c < this.col; c++) {
            var li = document.createElement("li");
            ul.appendChild(li);
            arr.push(li);// li标签就是方块
            // 设置li标签的尺寸
            li.style.width = this.w + "px";
            li.style.height = this.h + "px";
            li.style.lineHeight = this.h + "px";
        }
        // 把ul标签添加到map标签上
        this.map_element.appendChild(ul);
        // 把arr添加到大数组中
        this.elements.push(arr);
    }
}
Snake.prototype.drawSnake = function () {
    for (var c = 0; c <= this.x; c++) {
        //记录代表“蛇”的标签
        var el = this.elements[this.y][c];
        // 记录蛇标签
        this.snakes.push(el);
        // 设置el背景色
        el.className = "s";
        // 设置文本
        el.innerText = c;
    }
}
Snake.prototype.drawFood = function () {
    // 随机的食物坐标
    this.foodX = Math.floor(Math.random() * this.col);
    this.foodY = Math.floor(Math.random() * this.row);
    // 判断食物的落点
    if (this.elements[this.foodY][this.foodX].className == 's') {
        // 重新创建食物
        this.drawFood();
    }
    else {
        // 设置食物的背景色
        this.elements[this.foodY][this.foodX].className = "food";
    }
}
Snake.prototype.snakeMove = function () {
    // 判断蛇移动的方向
    if (this.direction == "right") {
        this.x += 1;
    }
    if (this.direction == "left") {
        this.x -= 1;
    }
    if (this.direction == "down") {
        this.y += 1;
    }
    if (this.direction == "up") {
        this.y -= 1;
    }

    // 8、蛇活动超出地图范围提示“游戏结束”
    // 判断蛇活动是否超出指定范围
    // 向左最小值
    if (this.x < 0) {
        // 提示游戏结束
        alert("游戏结束");
        // 停止定时器
        clearInterval(this.timer);
        if (this.dingshiqi) clearInterval(this.dingshiqi);
        return;
    }
    // 向右最大值
    if (this.x > (this.col - 1)) {
        // 提示游戏结束
        alert("游戏结束");
        // 停止定时器
        clearInterval(this.timer);
        if (this.dingshiqi) clearInterval(this.dingshiqi);
        return;
    }
    // 向上最小值
    if (this.y < 0) {
        // 提示游戏结束
        alert("游戏结束");
        // 停止定时器
        clearInterval(this.timer);
        if (this.dingshiqi) clearInterval(this.dingshiqi);
        return;
    }
    // 向下最大值
    if (this.y > (this.row - 1)) {
        // 提示游戏结束
        alert("游戏结束");
        if (this.dingshiqi) clearInterval(this.dingshiqi);
        // 停止定时器
        clearInterval(this.timer);
        return;
    }

    // 蛇和自己身体发生接触，提示游戏结束
    for (var j = 0; j < this.snakes.length; j++) {
        if (this.elements[this.y][this.x] == this.snakes[j]) {
            alert("游戏结束，自己吃到自己了..");
            clearInterval(this.timer);
            if (this.dingshiqi) clearInterval(this.dingshiqi);
            return;
        }
    }

    // 6、蛇与食物的碰撞检测
    if (this.x == this.foodX && this.y == this.foodY) {
        // 7、记录游戏得分（每吃到一个食物+1）
        // 计算得分
        this.score += 1;
        // 渲染分数
        this.score_element.innerText = this.score;
        // 添加方块到蛇数组,设置下一个li标签背景色
        this.elements[this.y][this.x].className = "s";
        // 添加一个元素
        this.snakes.push(this.elements[this.y][this.x]);
        // 判断用户得分是否大于60
        if (this.score > 60) {
            alert("恭喜贵宾，闯关成功。");
            clearInterval(this.timer);
            return;
        }
        // 重新创建食物
        this.drawFood();
    }
    else {
        // 蛇数组第一个背景和文本都去掉
        this.snakes[0].className = "";
        this.snakes[0].innerText = "";
        // 删除数组第一个元素
        this.snakes.shift();
        // 设置下一个li标签背景色
        this.elements[this.y][this.x].className = "s";
        // 添加一个元素
        this.snakes.push(this.elements[this.y][this.x]);
        // console.log("111")
    }

    // 循环蛇数组(重新绘制文本)
    for (var i = 0; i < this.snakes.length; i++) {
        this.snakes[i].innerText = i;
    }
}
// 添加用户交互行为
Snake.prototype.addEvent = function () {
    // 声明变量记录当前函数作用域的this(实例)
    var _this = this;
    // 给按钮绑定事件（开始游戏）
    this.start_element.onclick = function () {
        _this.isStart = true;//表示开始游戏
        _this.pause_element.className = "";
        this.className = "active";// this 是按钮 是事件调用者
        if (_this.timer) clearInterval(_this.timer);
        // 执行定时器
        _this.timer = setInterval(function () {
            _this.snakeMove();
        }, _this.ms);
        // 开始倒计时
        _this.startDownTime();
    }

    // 给按钮绑定事件（暂停）
    this.pause_element.onclick = function () {
        // 游戏没开始，不然点击设置高亮
        // if(isStart == false) return;
        if (!_this.isStart) return;
        _this.start_element.className = "";
        _this.start_element.innerText = "继续";
        this.className = "active";
        if (_this.timer) clearInterval(_this.timer);
        // 停止倒计时
        if (_this.dingshiqi) clearInterval(_this.dingshiqi);
    }
    // 点击刷新
    this.refresh_element.onclick = function () {
        // 刷新页面
        location.reload();
    }

    // 5、控制蛇运动的方向
    // 监听键盘的“上ArrowUp 右ArrowRight 下ArrowDown 左ArrowLeft”
    document.onkeydown = function (event) {
        // 获取键值码
        var code = event.code;
        // 判断用户是否同时按下“上下” 或“左右” (处理蛇移动方向的矛盾)
        if (_this.direction == "up" && code == "ArrowDown") return;
        if (_this.direction == "down" && code == "ArrowUp") return;
        if (_this.direction == "left" && code == "ArrowRight") return;
        if (_this.direction == "right" && code == "ArrowLeft") return;
        // console.log(code);
        // 判断用户按下哪个按键
        if (code == "ArrowUp") {
            _this.direction = "up";
        }
        if (code == "ArrowRight") {
            _this.direction = "right";
        }
        if (code == "ArrowDown") {
            _this.direction = "down";
        }
        if (code == "ArrowLeft") {
            _this.direction = "left";
        }
    }
}
Snake.prototype.startDownTime = function () {
    var _this = this;
    if (this.dingshiqi) clearInterval(this.dingshiqi);
    this.dingshiqi = setInterval(function () {
        _this.downTime()
    }, 1000);
}
Snake.prototype.downTime = function () {
    this.seconds--;
    if (this.seconds < 0) {
        alert("时间到了，结束游戏");
        clearInterval(this.timer);
        clearInterval(this.dingshiqi);
        return;
    }
    // 计算剩余小时、分数、秒钟
    var h, m, s;
    h = Math.floor(this.seconds / 3600);
    m = Math.floor(this.seconds % 3600 / 60);
    s = Math.floor(this.seconds % 60);

    // 补个0
    h = h < 10 ? '0' + h : '' + h;
    m = m < 10 ? '0' + m : '' + m;
    s = s < 10 ? '0' + s : '' + s;
    // 拼接时间
    var str = `${h}:${m}:${s}`;
    // 渲染时间
    this.time_element.innerText = str;
}

// 创建游戏实例,并初始化
new Snake(obj).init()