// p2
!(()=>{
    $('.content>ul li:nth-of-type(2)>.banner ul li').each((i,v)=>{
        v.innerHTML = `<img src="../images/b2_banner${i}.webp" alt="">`
    })
    // 克隆前两个
    var liStarts = $('.content>ul li:nth-of-type(2)>.banner ul li').slice(0,2).clone()
    // 克隆后两个
    var liEnds = $('.content>ul li:nth-of-type(2)>.banner ul li').slice(-2).clone() 
    $('.content>ul li:nth-of-type(2)>.banner ul').append(liStarts.eq(0).removeClass('active'))
    $('.content>ul li:nth-of-type(2)>.banner ul').append(liStarts.eq(1))
    $('.content>ul li:nth-of-type(2)>.banner ul').prepend(liEnds.eq(1))
    $('.content>ul li:nth-of-type(2)>.banner ul').prepend(liEnds.eq(0))
    // 显示前后俩
    $('.content>ul li:nth-of-type(2)>.banner ul li.active').next().css('left','200px')
    $('.content>ul li:nth-of-type(2)>.banner ul li.active').prev().css('left','-200px')
    var index = (()=>{
        var index = 2
        return {
            $lis:$('.content>ul li:nth-of-type(2)>.banner ul li'),
            get index(){
                return index
            },
            get next(){
                index ++
                if(this.index >= this.$lis.length-2){
                    index = 1
                }
                return index
            },
            get prev(){
                index--
                if(index <= 0){
                    index = this.$lis.length-1
                }
                return index
            },
            set index(v){
                if(index <= 0){
                    index = this.$lis.length-1
                }
                if(index >= this.$lis.length-1){
                    index = 0
                }
                index = v
                this.setBanner()
            },
            setBanner(change = false){
                var $li = $('.content>ul li:nth-of-type(2)>.banner ul li.active').eq(0)
                if(change){
                    this.$lis.on('transitionstart',function(){
                        $('.content>ul li:nth-of-type(2)>.banner ul li').css('transition','none').off('transitionstart')
                    })
                    var $li2 = this.$lis.eq(this.index)
                    this.$lis.css('transition','all 0.5s')
                    $li.next().css('left','0')
                    $li.prev().css('left','0')
                    $li2.addClass('active').css('z-index','1').siblings().css('z-index','-1')
                    $li2.next().css('left','200px').css('z-index','0')
                    $li2.prev().css('left','-200px').css('z-index','0')
                    return
                }
                var $li2 = this.$lis.eq(this.index)
                this.$lis.css('transition','all 0.5s')
                $li.next().css('left','0')
                $li.prev().css('left','0')
                $li2.addClass('active').siblings().removeClass('active').css('z-index','-1')
                $li2.next().css('left','200px').css('z-index','0')
                $li2.prev().css('left','-200px').css('z-index','0')
            }
        }
    })()
    setInterval(function(){
        index.next
        if(index.index == 1){
            index.setBanner(true)
            index.next
            setTimeout(function(){
                index.setBanner()
            },100)
            return
        }
        index.setBanner()
    },1000)
})()