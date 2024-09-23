<template>
    <div class="startPage">
        <div class="title">
            <span @click="goToLogninView">Skip</span>
        </div>
        <div class="container">
            <div class="swiper-wrapper" :style="`transform: translateX(-${index * 100}%);`">
                <div class="imgBox"><img src="../../assets/images/startOne.svg" alt=""></div>
                <div class="imgBox"><img src="../../assets/images/startTwo.svg" alt=""></div>
                <div class="imgBox"><img src="../../assets/images/startThree.svg" alt=""></div>
            </div>
            <div class="titleInfo">{{ textTitle }}</div>
            <div class="info">{{ textInfo }}</div>
            <div class="swiper-butters">
                <div @click="indexplus(0)" :class="index === 0 ? 'active' : '' " class="swiper-butter"></div>
                <div @click="indexplus(1)" :class="index === 1 ? 'active' : '' " class="swiper-butter"></div>
                <div @click="indexplus(2)" :class="index === 2 ? 'active' : '' " class="swiper-butter"></div>
            </div>
        </div>
        <button class="next" @click="next">{{ textnext }}</button>
    </div>
</template>

<script>
export default {
  data () {
    return {
      textObj: {
        1: {
          title: 'Fastest Food Delivery',
          info: 'Order food and get delivery within a few minutes to your door',
          next: 'Next'
        },
        2: {
          title: 'Deliver With Care',
          info: '订购食物并在几分钟内送货上门',
          next: 'Next'
        },
        3: {
          title: 'Pick Up Delivery',
          info: 'Order food and get delivery within a few minutes to your door',
          next: 'Get Started'
        }
      },
      textTitle: 'Fastest Food Delivery',
      textInfo: 'Order food and get delivery within a few minutes to your door',
      textnext: 'Next',
      index: 0
    }
  },
  methods: {
    next () {
      if (this.index === 2) {
        this.index = 0
        this.$router.push('/lognin')
      } else {
        this.index++
      }
      this.textTitle = this.textObj[this.index + 1].title
      this.textInfo = this.textObj[this.index + 1].info
      this.textnext = this.textObj[this.index + 1].next
    },
    indexplus (index) {
      this.index = index
      this.textTitle = this.textObj[this.index + 1].title
      this.textInfo = this.textObj[this.index + 1].info
      this.textnext = this.textObj[this.index + 1].next
    },
    goToLogninView () {
      this.$router.push('/lognin')
    }
  }
}
</script>

<style lang="less" scoped>
    .startPage{
        width: 100dvw;
        height: 100dvh;
        font-size: 16px;
        position: relative;
        .title{
            width: 90%;
            margin: 0 auto;
            margin-top: 30px;
            height: 30px;
            color: #7d7d7d;
            display: flex;
            justify-content: flex-end;
            align-items: center;
        }
        .container{
            width: 90%;
            margin: 0 auto;
            position: absolute;
            top: 40%;
            left: 50%;
            overflow: hidden;
            transform: translate(-50%,-50%);
            .swiper-wrapper{
                height: 100%;
                // width: 100%;
                transform: translateX(0%);
                transition: all .5s;
                display: flex;
                flex-direction: row;
                .imgBox{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    img{
                        width: 90dvw;
                        height: 90dvw;
                    }
                }
            }
            .titleInfo{
                height: 30px;
                width: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 20px;
            }
            .info{
                height: 30px;
                line-height: 30px;
                width: 100%;
                text-align: center;
                color: #5a5a5a;
                font-size: 10px;
            }
        }
        .next{
            border-radius: 20px;
            border: none;
            outline: none;
            color: white;
            position: fixed;
            z-index: 990;
            bottom: 20px;
            left: 50%;
            transform: translateX(-50%);
            width: 90%;
            height: 50px;
            background-color: #1ebc5d;
            font-size: 20px;
        }
        .swiper-butters{
            width: 100%;
            height: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
            .swiper-butter{
                width: 10px;
                height: 10px;
                background-color: #e0e0e0;
                border-radius: 50%;
                margin-right: 10px;
                &.active{
                    background-color: #1ebc5d;
                    width: 20px;
                    border-radius: 40px;
                }
            }
        }
    }
</style>
