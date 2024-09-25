<template>
    <div class="infoMore">
        <van-swipe class="my-swipe" :autoplay="5000" indicator-color="#1ebc5d">
            <van-swipe-item>
                <img src="https://picsum.photos/1920/1080?1" alt="">
            </van-swipe-item>
            <van-swipe-item>
                <img src="https://picsum.photos/1920/1080?2" alt="">
            </van-swipe-item>
            <van-swipe-item>
                <img src="https://picsum.photos/1920/1080?3" alt="">
            </van-swipe-item>
            <van-swipe-item>
                <img src="https://picsum.photos/1920/1080?4" alt="">
            </van-swipe-item>
        </van-swipe>
        <div class="share" @click="showPopup">
            <van-icon name="share-o"></van-icon>
        </div>
        <van-popup v-model="show" round closeable position="bottom" :style="{ height: '40%' }">
            <my-share></my-share>
        </van-popup>
        <div class="desc">
            <div class="title">{{ title }}</div>
            <div class="picel"><span class="no">$15.99</span>&nbsp;${{ picel }}</div>
        </div>
        <ul class="classification">
            <li :class="index === 0 ? 'active' : ''" @click="updata(0)">Overview</li>
            <li :class="index === 1 ? 'active' : ''" @click="updata(1)">Details</li>
            <li :class="index === 2 ? 'active' : ''" @click="updata(2)">Reviews</li>
        </ul>
        <ul class="display">
            <div class="box" :style="{ transform: `translateX(-${index * 90}dvw)` }">
                <li><span class="van-multi-ellipsis--l3" style="display: inline;">{{ container
                        }}</span><span>...</span><span class="more">Read
                        More</span>
                </li>
                <li>
                    <div class="liTitle">
                        <span>Variation</span>
                        <span class="smallTitle">Select one</span>
                    </div>
                    <ul class="liContainer">
                        <li>
                            <div class="left">
                                <input type="radio" name="infoRadio">
                                <span>8S</span>
                            </div>
                            <div class="right">
                                <span>$10</span>
                            </div>
                        </li>
                        <li>
                            <div class="left">
                                <input type="radio" name="infoRadio">
                                <span>8S</span>
                            </div>
                            <div class="right">
                                <span>$10</span>
                            </div>
                        </li>
                        <li>
                            <div class="left">
                                <input type="radio" name="infoRadio">
                                <span>8S</span>
                            </div>
                            <div class="right">
                                <span>$10</span>
                            </div>
                        </li>
                    </ul>
                    <button>Add To Cart</button>
                </li>
                <li>
                    <my-reviews></my-reviews>
                    <my-reviews></my-reviews>
                    <div class="viewall">View all reviews</div>
                    <button>Write A Review</button>
                </li>
            </div>
        </ul>
        <div class="randomFood">
            <div class="top">
                <div class="title"></div>
                <div class="look"></div>
            </div>
        </div>
    </div>
</template>

<script>
const axios = require('axios')
export default {
  data () {
    return {
      show: false,
      title: '',
      picel: '',
      index: 0,
      container: ''
    }
  },
  methods: {
    showPopup () {
      this.show = true
    },
    updata (index) {
      this.index = index
    }
  },
  created () {
    this.title = this.$route.query.name
    this.picel = this.$route.query.picel
    axios.get('https://fastly.jsdelivr.net/gh/southaki/contentDeliveryNetwork@0.0.12/vueProjectPoint(test)/infomore.json')
      .then(res => {
        this.container = ''
        const id = this.$route.query.type
        this.container = res.data[id].text
      })
  }
}
</script>

<style lang="less" scoped>
    .infoMore{
        width: 100%;
        height: calc(100% - 60px);
        position: relative;
        font-size: 16px;
        .my-swipe .van-swipe-item {
            width: 100%;
            height: 250px;
            font-size: 20px;
            line-height: 150px;
            text-align: center;
            img{
                width: 100%;
                height: 100%;
            }
        }
        .share{
            width: 50px;
            height: 50px;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 50%;
            position: absolute;
            top: 20px;
            right: 20px;
            background-color: #fcfbff;
            font-size: 20px;
        }
        .desc{
            width: 90%;
            margin: 0 auto;
            margin-top: 30px;
            margin-bottom: 15px;
            height: 30px;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            .title {
                font-size: 30px;
                font-weight: bold;
                letter-spacing: 3px;
                padding-left: 10px;
            }
            .picel{
                font-size: 10px;
                color: #1ebc5d;
                .no{
                    text-decoration:line-through;
                }
            }
        }
        .classification{
            width: 90%;
            margin: 0 auto;
            display: flex;
            flex-direction: row;
            margin-bottom: 15px;
            li{
                background-color: #fcfbff;
                padding: 10px 20px;
                margin-right: 10px;
                border-radius: 20px;
                &.active{
                    background-color: #1ebc5d;
                    color: white;
                }
            }
        }
        .display{
            width: 90%;
            height: 200px;
            margin: 0 auto;
            overflow: hidden;
            .box{
                height: 100%;
                width: calc(3 * 100%);
                display: flex;
                transition: all 0.5s;
                li {
                    width: 90dvw;
                    overflow-y: scroll;
                    height: 100%;
                    color: #b7b7b8;
                    font-size: 14px;
                    -webkit-line-clamp: 4 !important;
                    .more{
                        margin-left: 10px;
                        color: #7d7e7f;
                        font-weight: bold;
                        &:hover{
                            text-decoration: underline;
                        }
                    }
                    button{
                        border: none;
                        outline: none;
                        background-color: #1ebc5d;
                        color: white;
                        width: 100%;
                        height: 50px;
                        margin-top: 10px;
                        border-radius: 20px;
                    }
                    .liTitle{
                        color: black;
                        font-size: 18px;
                        display: flex;
                        flex-direction: row;
                        justify-content: space-between;
                        align-items: center;
                        .smallTitle{
                            font-size: 12px;
                            color: #b7b7b8;
                        }
                    }
                    .liContainer{
                        width: 100%;
                        li{
                            width: 100%;
                            height: 30px;
                            display: flex;
                            flex-direction: row;
                            justify-content: space-between;
                            align-items: center;
                            input{
                                appearance: none;
                                width: 10px;
                                padding: 2px;
                                border-radius: 50%;
                                margin-right: 10px;
                                height: 10px;
                                border: 1px solid #1ebc5d !important;
                                background-color: white !important;
                                position: relative;
                            }
                            input[type="radio"]:checked {
                                background-color: #1ebc5d !important;
                            }
                            input[type="radio"]:checked::before {
                                content: '';
                                display: block;
                                width: 5px;
                                height: 5px;
                                background-color: white;
                                border-radius: 50%;
                                position: absolute;
                                top: 50%;
                                left: 50%;
                                transform: translate(-50%, -50%);
                            }
                        }
                    }
                    .viewall{
                        color: #1ebc5d;
                        margin-bottom: 10px;
                    }
                }
            }
        }
    }
</style>
