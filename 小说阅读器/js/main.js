class bookInfo {
    constructor() {
        // 设置属性
        this.bookInfo = `<p>在古典名著《西游记》的演绎中，唐僧师徒历经九九八十一难，方从西天取得真经。八十一难故事的主角便有大大小小的妖邪精怪。</p>
                        <p> 本书从《西游记》中的这些妖怪入手，以别致视角解读了这部古代小说巨著，</p>
                        <p>
                            不但对妖怪们的动物原形、故事梗概、身份后台、历史背景、文化涵义等进行了细致剖析，
                            而且以唯美的极致笔触勾勒出妖怪的面目情状，
                            是一部阅读收藏两宜的中国古代妖怪图鉴。
                        </p>
                        <p>在古典名著《西游记》的演绎中，唐僧师徒历经九九八十一难，方从西天取得真经。八十一难故事的主角便有大大小小的妖邪精怪。</p>
                        <p> 本书从《西游记》中的这些妖怪入手，以别致视角解读了这部古代小说巨著，</p>`;

        // 获取元素
        this.infoBox = document.querySelector(".box");
        this.container = document.querySelector(".container");
        this.ctrl = document.querySelector(".ctrl");
        this.listItem = document.querySelectorAll(".colorBox li");
        this.inputRange = document.querySelector(".range");
        this.bar = document.querySelector(".bar");
        this.line = document.querySelector(".line");
        this.mask = document.querySelector(".mask");
    }

    // 设置方法
    layout() {
        this.infoBox.innerHTML = this.bookInfo;
    }

    // touch事件
    touch() {
        let y = 0;
        let startY = 0;
        this.container.addEventListener("touchstart", (e) => {
            // console.log("chufale")
            startY = e.touches[0].clientY;
        })
        this.container.addEventListener("touchmove", (e) => {
            y = e.touches[0].pageY - startY;
        })
        this.container.addEventListener("touchend", (e) => {
            let count = Math.abs(y);
            if (count > 100) {
                if (y > 0) {
                    // console.log(-200)
                    this.ctrl.style.bottom = "-200px";
                } else {
                    // console.log(0)
                    this.ctrl.style.bottom = "0px"
                }
            }
        })
    }

    // li click事件
    click() {
        this.listItem.forEach((item, index) => {
            item.onclick = () => {
                // console.log(index)
                var bgColor = item.getAttribute("data-color");
                this.container.style.background = bgColor;
                if (bgColor == "#f8f9fa") {
                    this.container.style.color = "#000";
                } else {
                    this.container.style.color = "#f8f9fa";
                }
                this.listItem.forEach((item) => {
                    item.className = "";
                })
                item.className = "active";
            }
        })
    }

    // firstRange事件
    firstRange() {
        // 这个部分是输出line距离左边的距离
        console.log(this.line.offsetLeft)
        let x = 0;
        let startX = 0;
        let curX = 0; // 松开手指时记录bar标签所在位置
        let flag = false; // 标记

        this.bar.addEventListener("touchstart", e => {
            startX = e.touches[0].pageX;
            flag = true;
        })
        this.container.addEventListener("touchmove", e => {
            if (flag) {
                // 计算滑动了多少
                x = e.touches[0].pageX - startX + curX;
                if (x < 0) {
                    x = 0;
                }
                let maxX = this.line.offsetWidth - this.bar.offsetWidth;
                if (x > maxX) {
                    x = maxX;
                }

                // 移动bar标签
                this.bar.style.left = x + "px";

                // 计算透明度
                let opacity = x / maxX;
                console.log(opacity)
                this.mask.style.backgroundColor = `rgba(0,0,0,${opacity})`;
                if (opacity > 0.5) {
                    this.container.style.color = "#f8f9fa";
                } else {
                    this.container.style.color = "#000";
                }
            }
        })
        this.container.addEventListener("touchend", e => {
            curX = x;
            flag = false;
        });
    }

    // 字号大小range事件
    range() {
        this.inputRange.onchange = () => {
            let fontSize = this.inputRange.value;
            this.container.style.fontSize = fontSize + "px";
        }
    }

    // 初始化方法
    init() {
        this.layout();
        this.touch();
        this.click();
        this.range();
        this.firstRange();
    }
}

// 实例化对象
const page = new bookInfo();
// 调用初始化函数
page.init();