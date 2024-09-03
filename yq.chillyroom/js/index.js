// 满屏滚动代码块
!(() => {
    // 索引操作
    var index = (() => {
        // 初始索引
        var index = 0
        return {
            $lis: $('.content>ul >li'),
            get index() {
                return index
            },
            get next() {
                index++
                if (this.index > this.$lis.length - 1) {
                    index = this.$lis.length-1
                }
                this.setBanner()
                return index
            },
            get prev() {
                index--
                if (index < 0) {
                    index =  0
                }
                this.setBanner()
                return index
            },
            set index(v) {
                if (v < 0) {
                    index = 0
                }
                if (v > this.$lis.length - 1) {
                    index = this.$lis.length - 1
                }
                index = v
                this.setBanner()
            },
            get is_transition() {
                return is_transition
            },
            setBanner() {
                this.$lis.parent().stop().animate({ top: -(this.$lis.eq(this.index).position().top + this.$lis.eq(this.index).outerHeight() - innerHeight) })
                // nav li类名切换
                $('.main .nav > ul li').eq(this.index == this.$lis.length - 1 ? this.$lis.length - 2 : this.index).addClass('active').siblings().removeClass('active')
                $('.main .nav > ul li >img').stop().animate({ top: '-7rem' }).hide().eq(this.index == this.$lis.length - 1 ? this.$lis.length - 2 : this.index).show().stop().animate({ top: '-2rem' })
                // bottom button显示隐藏
                if (this.index == this.$lis.length - 1) {
                    $('.down_icon').hide()
                } else {
                    $('.down_icon').show()
                }
            }
        }
    })()
    index.index = index.index

    // nav li点击滚动
    $('.main .nav > ul').on('click', 'li', function () {
        index.index = $(this).index()
    })

    // bottom button按钮点击
    $('.down_icon').on('click', function () {
        index.next
    })
    // bottom button按钮动画
    bottomButtonAnimation()
    function bottomButtonAnimation() {
        $('.down_icon').stop().animate({ bottom: '3em' }, 500, function () {
            $(this).stop().animate({ bottom: '2em' }, 500, function () {
                bottomButtonAnimation()
            })
        })
    }

    // window键盘按下
    window.addEventListener('keydown', function (e) {
        if (e.key == 'ArrowUp') {
            index.prev
        } else if (e.key == 'ArrowDown') {
            index.next
        }
    })

    // window大小改变
    !(() => {
        var setTimeoutID = null
        window.addEventListener('resize', function () {
            if (setTimeoutID || window.onwheel == null) clearTimeout(setTimeoutID)
            setTimeoutID = setTimeout(function () {
                index.index = index.index
            })
        }, 100)
    })()

    // window鼠标滚动事件
    !(() => {
        var jl = false
        window.addEventListener('wheel', function (e) {
            if (jl) return
            jl = true
            setTimeout(function () {
                jl = false
            }, 500)
            if (e.deltaY < 0) {
                index.prev
            } else {
                index.next
            }
        })
    })()

    // 轮播图滑动
    window.addEventListener('mousedown', function () {
        // [0]x [1]y [2]方向是否正确 [3]速度 [4]延时器ID [5]开始时间 [10]延时器ID
        var tempData = []
        tempData[5] = new Date().getTime()
        window.addEventListener('mouseup', mouseup)
        window.addEventListener('mousemove', mousemove)
        function mouseup() {
            window.removeEventListener('mouseup', mouseup)
            window.removeEventListener('mousemove', mousemove)
        }
        function mousemove(e) {
            if (tempData[2]) {
                // 速度
                tempData[3] = Math.abs(e.pageY - tempData[1]) / (new Date().getTime() - tempData[5] + 50)
                // 防抖
                if (tempData[4]) clearTimeout(tempData[4])
                tempData[4] = setTimeout(function () {
                    if (typeof tempData[3] == 'number' && tempData[3] > 1) {
                        if (e.movementY < 0) {
                            index.next
                            mouseup()
                        } else{
                            index.prev
                            mouseup()
                        }
                    } else {
                        // 拉回
                        index.index = index.index
                    }
                }, 50)
                // 拖动
                index.$lis.parent().css('top', parseFloat(index.$lis.parent().css('top')) + e.movementY)
            } else if (tempData[0]) {
                var X = Math.abs(e.pageX - tempData[0])
                var Y = Math.abs(e.pageY - tempData[1])
                // 判断用户移动方向 如果是X停止事件
                if (X > Y) mouseup()
                tempData[2] = true
            } else {
                // 记录用户移动开始坐标
                if (tempData[10]) return
                tempData[10] = setTimeout(function () {
                    tempData[1] = e.pageY
                    tempData[0] = e.pageX
                    tempData[10] = null
                }, 20)
            }
        }
    })
})()

// p1
!(() => {
    // 首页视频按钮
    $('.content>ul>li:nth-of-type(1)>div:nth-of-type(1)>p').on('click', function () {
        $('.main .videoBox').css({ 'display': 'flex' }).stop().animate({ 'opacity': '1' }, 500)
    })
    $('.main  .videoBox  .close').on('click', function () {
        $('.main .videoBox').css({ 'opacity': '0' }).hide()
        $('.main > .videoBox > div>.play').show()
        $('.main > .videoBox > div').addClass('before')
        $('.main > .videoBox > div video')[0].pause()
    })
    $('.main > .videoBox > div>.play').on('click', function () {
        $(this).hide()
        $('.main > .videoBox > div').removeClass('before')
        $('.main > .videoBox > div video')[0].play()
    })
})()

// p2
!(() => {
    // 添加图片
    $('.content>ul li:nth-of-type(2)>.banner ul li').each((i, v) => {
        v.innerHTML = `<img src="../images/b2_banner${i}.webp" alt="">`
    })
    // 显示前后俩
    if ($('.content>ul li:nth-of-type(2)>.banner ul li.active').prev().length == 0) {
        $('.content>ul li:nth-of-type(2)>.banner ul li').last().css('left', '-200px').css('z-index', '0')
    } else {
        $('.content>ul li:nth-of-type(2)>.banner ul li.active').prev().css('left', '-200px').css('z-index', '0')
    }
    if ($('.content>ul li:nth-of-type(2)>.banner ul li.active').next().length == 0) {
        $('.content>ul li:nth-of-type(2)>.banner ul li').eq(0).css('left', '200px').css('z-index', '0')
    } else {
        $('.content>ul li:nth-of-type(2)>.banner ul li.active').next().css('left', '200px').css('z-index', '0')
    }
    // 索引操作
    var index = (() => {
        // 初始索引
        var index = 0
        var is_transition = false
        return {
            $lis: $('.content>ul li:nth-of-type(2)>.banner ul li'),
            get index() {
                return index
            },
            get next() {
                index++
                if (this.index > this.$lis.length - 1) {
                    index = 0
                }
                this.setBanner()
                return index
            },
            get prev() {
                index--
                if (index < 0) {
                    index = this.$lis.length - 1
                }
                this.setBanner()
                return index
            },
            set index(v) {
                if (v <= 0) {
                    index = this.$lis.length - 1
                }
                if (v >= this.$lis.length - 1) {
                    index = 0
                }
                index = v
                this.setBanner()
            },
            get is_transition() {
                return is_transition
            },
            setBanner() {
                this.$lis.on('transitionend', function () {
                    $('.content>ul li:nth-of-type(2)>.banner ul li').off('transitionend')
                    is_transition = false
                })
                is_transition = true
                // 拥有active类的元素
                var $ul_li = $('.content>ul li:nth-of-type(2)>.banner ul li.active')
                // 当前索引的元素
                var $ul_li2 = this.$lis.eq(this.index)
                // 导航点
                var $ol_lis = $('.content>ul>li:nth-of-type(2)>.banner > ol li')
                // 缩回前后俩
                if ($ul_li.prev().length == 0) {
                    this.$lis.last().css('left', '0')
                } else {
                    $ul_li.prev().css('left', '0')
                }
                if ($ul_li.next().length == 0) {
                    this.$lis.eq(0).css('left', '0')
                } else {
                    $ul_li.next().css('left', '0')
                }

                $ul_li2.addClass('active').siblings().removeClass('active').css('z-index', '-1')
                // 突出前后俩
                if ($ul_li2.prev().length == 0) {
                    this.$lis.last().css('left', '-200px').css('z-index', '0')
                } else {
                    $ul_li2.prev().css('left', '-200px').css('z-index', '0')
                }
                if ($ul_li2.next().length == 0) {
                    this.$lis.eq(0).css('left', '200px').css('z-index', '0')
                } else {
                    $ul_li2.next().css('left', '200px').css('z-index', '0')
                }

                $ol_lis.eq(this.index).addClass('active').siblings().removeClass('active')
            }
        }
    })()
    // 自动轮播
    setInterval(function () {
        if (index.is_transition) return
        index.next
    }, 5000)
    // 左按钮
    $('.content>ul>li:nth-of-type(2)>.banner .but_left').on('click', function () {
        if (index.is_transition) return
        index.prev
    })
    // 右按钮
    $('.content>ul>li:nth-of-type(2)>.banner .but_right').on('click', function () {
        if (index.is_transition) return
        index.next
    })
    // 导航点
    $('.content>ul>li:nth-of-type(2)>.banner > ol li').each((i, v) => {
        $(v).on('click', function () {
            if (index.is_transition) return
            index.index = i
        })
    })
    // 轮播图滑动
    $('.content>ul>li:nth-of-type(2)>.banner').on('mousedown', function () {
        // [0]x [1]y [2]方向是否正确 [10]延时器ID
        var tempData = []
        $('.content>ul>li:nth-of-type(2)').on('mouseup', mouseup)
        $('.content>ul>li:nth-of-type(2)').on('mousemove', mousemove)
        function mouseup() {
            $('.content>ul>li:nth-of-type(2)').off('mouseup', mouseup)
            $('.content>ul>li:nth-of-type(2)').off('mousemove', mousemove)
        }
        function mousemove(e) {
            if (tempData[2]) {
                mouseup()
                if (event.movementX < 0) {
                    index.next
                } else {
                    index.prev
                }
            } else if (tempData[0]) {
                var X = Math.abs(e.pageX - tempData[0])
                var Y = Math.abs(e.pageY - tempData[1])
                // 判断用户移动方向 如果是X停止事件
                if (X < Y) mouseup()
                tempData[2] = true
            } else {
                // 记录用户移动开始坐标
                if (tempData[10]) return
                tempData[10] = setTimeout(function () {
                    tempData[1] = e.pageY
                    tempData[0] = e.pageX
                    tempData[10] = null
                }, 20)
            }
        }
    })
})()

// p3
!(() => {
    var $ul_lis = $('.content>ul>li:nth-of-type(3)>.banner .left div>div>ul>li')
    var $ol_lis = $('.content>ul>li:nth-of-type(3)>.banner .left div>ol>li')
    var index = (() => {
        var index = 0
        return {
            get index() {
                return index
            },
            get next() {
                index++
                if (index >= $ul_lis.length) {
                    index = 0
                    this.setBanner(true)
                    index++
                }
                this.setBanner()
                return index
            },
            get prev() {
                index--
                if (index < 0) {
                    index = $ul_lis.length - 1
                    this.setBanner(true)
                    index--
                }
                this.setBanner()
                return index
            },
            set index(v) {
                if (v >= $ul_lis.length) {
                    index = 0
                }
                if (v < 0) {
                    index = $ul_lis.length - 1
                }
                index = v
                this.setBanner()
            },
            setBanner(stop = false) {
                var step = -$ul_lis.parent().parent().outerWidth() * this.index
                if (stop) {
                    $ul_lis.parent().css({ 'left': step })
                    return
                }
                $ul_lis.parent().stop().animate({ 'left': step })
                var i = this.index
                i = i > $ul_lis.length - 2 ? 0 : i
                $ol_lis.eq(i).addClass('active').siblings().removeClass('active')
            }
        }
    })()
    setInterval(function () {
        index.next
    }, 5000)
    // 轮播图导航点
    $ol_lis.each((i, v) => {
        $(v).on('click', function () {
            index.index = i
        })
    })
    // 轮播图滑动
    $ul_lis.parent().on('mousedown', function () {
        // [0]x [1]y [2]方向是否正确 [10]延时器ID
        var tempData = []
        $('.content>ul>li:nth-of-type(3)').on('mouseup', mouseup)
        $('.content>ul>li:nth-of-type(3)').on('mousemove', mousemove)
        function mouseup() {
            $('.content>ul>li:nth-of-type(3)').off('mouseup', mouseup)
            $('.content>ul>li:nth-of-type(3)').off('mousemove', mousemove)
        }
        function mousemove(e) {
            if (tempData[2]) {
                mouseup()
                if (event.movementX < 0) {
                    index.next
                } else {
                    index.prev
                }
            } else if (tempData[0]) {
                var X = Math.abs(e.pageX - tempData[0])
                var Y = Math.abs(e.pageY - tempData[1])
                // 判断用户移动方向 如果是X停止事件
                if (X < Y) mouseup()
                tempData[2] = true
            } else {
                // 记录用户移动开始坐标
                if (tempData[10]) return
                tempData[10] = setTimeout(function () {
                    tempData[1] = e.pageY
                    tempData[0] = e.pageX
                    tempData[10] = null
                }, 20)
            }
        }
    })
    // 选项卡
    $('.content>ul>li:nth-of-type(3)>.banner .right> div>ol li').each((i, v) => {
        $(v).on('click', function () {
            $(v).addClass('active').siblings().removeClass('active')
            $('.content>ul>li:nth-of-type(3)>.banner .right >div>ul li').eq(i).addClass('active').siblings().removeClass('active')

        })
    })

})()
// 浮窗
!(() => {
    var $rec = $('.content .rec')
    var setTimeoutID1 = null
    // 鼠标移动时
    $(document).on('mousemove', function (e) {
        if ($(e.target).parents('.rec')[0] == $rec[0]) {
            clearTimeout(setTimeoutID1)
            return
        }
        if (setTimeoutID1) clearTimeout(setTimeoutID1)
        setTimeoutID1 = setTimeout(function () {
            if (e.clientY > innerHeight - ($rec.outerHeight() || $('.content .rec >.rec_icon').outerHeight())) {
                $rec.css('top', innerHeight - ($rec.outerHeight() || $('.content .rec >.rec_icon').outerHeight()))
            } else if (e.clientY < innerHeight * 0.15) {
                $rec.css('top', innerHeight * 0.15)
            } else {
                $rec.css('top', e.clientY - $rec.outerHeight() * 0.1)
            }
        }, 500)

    })
    // 关闭按钮点击时
    $('.content .rec>div:nth-of-type(1)>img').on('click', function () {
        $rec.css({ transform: 'translateX(100%)' })
        $rec.on('transitionend', function () {
            $rec.off('transitionend')
            $('.content .rec >.rec_icon').show().siblings().hide()
            $rec.css('top', innerHeight - $('.content .rec >.rec_icon').outerHeight())
        })
    })
    // 图标被点击时
    $('.content .rec >.rec_icon').on('click', function () {
        $('.content .rec >.rec_icon').hide().siblings().show()
        $rec.css('top', innerHeight * 0.15)
        $rec.css({ transform: 'translateX(-20%)' })

    })
})()

// 阻止图片拖动
document.querySelectorAll('img').forEach(img => {
    img.addEventListener('dragstart', function (event) {
        event.preventDefault();
    });
});