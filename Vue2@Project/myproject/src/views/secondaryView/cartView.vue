<template>
    <div class="cartView">
        <div class="returnBtn" @click="goTopView">
            <img src="../../assets/icon/向左箭头.png" alt="">
        </div>
        <div class="cartTitle">购物车</div>
        <div class="container">
            <van-notice-bar class="notice" left-icon="volume-o"
                text="请注意,购买的时候注意支付安全,他人之招,谨防上当受骗.客服不会以订单被取消为由请求你任何信息,110是官方唯一客服电话." />
            <div class="item" v-for="(item, index) in card" :key="index">
                <div class="left">
                    <img :src="`https://picsum.photos/300/300?${index}`" alt="">
                </div>
                <div class="right">
                    <p class="title">{{ item.title }}</p>
                    <p class="pices">${{ item.picel }}</p>
                </div>
                <div class="takeaway">
                    <div class="reduce" @click="decreaseQuantity(index)">-</div>
                    <p>{{ item.quantity }}</p>
                    <div class="plus" @click="increaseQuantity(index)">+</div>
                </div>
            </div>
        </div>
        <div class="alipayBox">
            <div class="clearBox" @click="clear">
                <img src="../../assets/icon/删除.png" alt="">
                <p>清空</p>
            </div>
            <div class="sumBox">
                <div class="smallSum">
                    <p>件数:{{ card.reduce((sum,item) => sum + item.quantity,0) }}</p>
                    <p>总计: ${{ card.reduce((sum, item) => sum + item.picel * item.quantity, 0).toFixed(2) }}</p>
                </div>
                <button @click="showPopup">结算</button>
            </div>
        </div>
        <van-popup class="popup" v-model="show" round closeable position="bottom" :style="{ height: '90%' }">
            <div class="pay">
                <img src="../../assets/icon/apple.png" alt="">
                <span>Pay</span>
            </div>
            <div class="addressBox">
                <div class="addressTitle">
                    Shipping To
                </div>
                <ul class="addressContainer">
                    <li class="addressItem">
                        <div class="left">
                            <input type="radio" name="address" value="home">
                        </div>
                        <div class="text">
                            <div class="title">Home</div>
                            <div class="number">+86-166-0768-0000</div>
                            <div class="address">广东省广州市白云区</div>
                        </div>
                    </li>
                    <li class="addressItem">
                        <div class="left">
                            <input type="radio" name="address" value="office">
                        </div>
                        <div class="text">
                            <div class="title">Office</div>
                            <div class="number">+852-9999-1100</div>
                            <div class="address">北角区新都市大厦B座,香港</div>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="paypalBox">
                <div class="typeBox">
                    <div class="left">
                        <input v-model="payType" type="radio" name="paypal" value="credit"><label>信用卡或借记卡</label>
                    </div>
                    <div class="right">
                        <input v-model="payType" type="radio" name="paypal" value="paypal"><label>PayPal</label>
                    </div>
                </div>
                <div class="inputcreditBox" v-if="payType === 'credit'">
                    <input class="cardNumber" type="text" maxlength="18" placeholder="请输入卡号" v-model="value" />
                    <div class="dateAndPassword">
                        <div class="dateBox">
                            <input class="date" type="text" maxlength="2" placeholder="月">/
                            <input class="date" type="text" maxlength="2" placeholder="年">
                        </div>
                        <div class="passwordBox">
                            CVV:
                            <div class="inputPassword">
                                <van-password-input :value="passwordValue" :length="3" :focused="showKeyboard"
                                    @focus="showKeyboard = true" />
                                <van-number-keyboard v-model="passwordValue" :show="showKeyboard" random-key-order
                                    @blur="showKeyboard = false" @input="onInput" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <van-button icon="../../assets/icon/apple.png">
                提交订单
            </van-button>
        </van-popup>
    </div>
</template>

<script>
import { Dialog, Toast } from 'vant'
export default {
  data () {
    return {
      card: '',
      show: false,
      payType: 'credit',
      value: '', // 卡号,
      showKeyboard: false,
      passwordValue: '' // 密码
    }
  },
  created () {
    this.loadCard()
    this.$emit('hide-nav-bar')
    // console.log('这是购物车调用')
    window.addEventListener('storage', this.onStorageChange)
  },
  beforeDestroy () {
    window.removeEventListener('storage', this.onStorageChange)
  },
  methods: {
    onInput (value) {
      Toast(value)
    },
    showPopup () {
      this.show = true
    },
    goTopView () {
      this.$emit('show-nav-bar')
      this.loadCard()
      this.$router.push('/home')
    },
    loadCard () {
      const card = sessionStorage.getItem('card')
      this.card = card ? JSON.parse(card) : []
      this.card.forEach(item => {
        item.quantity = item.quantity || 1 // 如果没有数量则设为 1
      })
    },
    onStorageChange (event) {
      if (event.key === 'card') {
        this.loadCard()
      }
    },
    // 增加数量
    increaseQuantity (index) {
      this.card[index].quantity++
      this.updateCard()
      this.loadCard()
    },
    // 减少数量
    decreaseQuantity (index) {
      if (this.card[index].quantity > 1) {
        this.card[index].quantity--
        this.updateCard()
        this.loadCard()
      }
    },
    updateCard () {
      sessionStorage.setItem('card', JSON.stringify(this.card))
    },
    clear () {
      Dialog.confirm({
        title: '清空购物车',
        message: '你确定要清空购物车吗,清空后数据就无法恢复了'
      })
        .then(() => {
          // on confirm
          sessionStorage.removeItem('card')
          this.loadCard()
        })
        .catch(() => {
          // on cancel
        })
    }
  },
  beforeRouteEnter (to, from, next) {
    next((vm) => {
      if (sessionStorage.getItem('AUTO_TOKEN') !== 'pVZsemWZjpnh9EimXFmRHJoBdvd0qMO6wzjHG0DQixDm2WdNnKEPDvbwZUSOD97kUCb31w0dUv2O7NDY7RDh723blNRTF2etm12X') {
        vm.$router.push('/lognin/loginpage')
        vm.$emit('hide-nav-bar')
      }
    })
  },
  watch: {
    '$route' () {
      this.loadCard()
    }
  }
}
</script>

<style lang="less" scoped>
    .custom-field {
        background-color: #fcfbff;
        text-align: center;
    }

    ::v-deep .custom-field .van-field__control {
        text-align: center;
    }
    .cartView{
        width: 100dvw;
        height: 100dvh;
        position: relative;
        font-size: 16px;
        font-family: "PingFang SC";
        .popup{
            width: 100%;
            height: 100%;
            .pay{
                position: absolute;
                top: 10px;
                left: 15px;
                display: flex;
                align-items: center;
                img{
                    width: 25px;
                    height: 25px;
                    margin-right: 5px;
                }
                span{
                    font-family: "PingFang SC";
                    font-weight: bold;
                    font-size: 20px;
                }
            }
            .addressBox{
                width: 90%;
                margin: 0 auto;
                margin-top: 50px;
                border-radius: 20px;
                background-color: #fcfbff;
                padding: 10px;
                margin-bottom: 10px;
                font-family: "PingFang SC";
                .addressTitle{
                    width: 100%;
                    margin-bottom: 10px;
                    font-size: 24px;
                    font-weight: bold;
                    font-family: "PingFang SC";
                }
                .addressContainer{
                    width: 100%;
                    li{
                        width: 95%;
                        height: 80px;
                        margin: 0 auto;
                        display: flex;
                        flex-direction: row;
                        &:nth-child(1){
                            border-bottom: 1px solid #ccc;
                        }
                        input{
                            margin-right: 10px;
                            margin-top: 10px;
                        }
                        .text{
                            height: 100%;
                            display: flex;
                            flex-direction: column;
                            justify-content: space-evenly;
                            font-family: "PingFang SC";
                            .title{
                                font-size: 20px;
                                font-family: "PingFang SC";
                                font-weight: bold;
                            }
                            .number{
                                font-family: "PingFang SC";
                                font-weight: bold;
                            }
                            .address{
                                font-family: "PingFang SC";
                                font-weight: bold;
                            }
                        }
                    }
                }
            }
            .paypalBox{
                width: 90%;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                margin: 0 auto;
                margin-top: 10px;
                border-radius: 20px;
                background-color: #fcfbff;
                .typeBox{
                    width: 100%;
                    display: flex;
                    height: 35px;
                    flex-direction: row;
                    justify-content: space-evenly;
                    align-items: center;
                    padding: 10px 0;
                    font-family: "PingFang SC";
                    input{
                        margin-right: 10px;
                    }
                    label{
                        font-family: "PingFang SC";
                        font-weight: bold;
                    }
                }
                .inputcreditBox{
                    width: 100%;
                    .cardNumber{
                        width: 100%;
                        height: 50px;
                        border: none;
                        outline: none;
                        text-align: center;
                        border-bottom: 1px solid #ccc;
                        background-color: #fcfbff;
                    }
                    .dateAndPassword{
                        width: 100%;
                        height: 50px;
                        background-color: #fcfbff;
                        display: flex;
                        flex-direction: row;
                        border-radius: 0 0 20px 20px;
                        .dateBox,.passwordBox{
                            width: 50%;
                            height: 100%;
                        }
                        .dateBox{
                            display: flex;
                            flex-direction: row;
                            align-items: center;
                            border-right: 1px solid #ccc;
                            .date{
                                width: 45%;
                                height: 50px;
                                border: none;
                                outline: none;
                                text-align: center;
                                background-color: #fcfbff;
                            }
                        }
                        .passwordBox{
                            display: flex;
                            flex-direction: row;
                            align-items: center;
                            justify-content: space-evenly;
                            .inputPassword{
                                width: 70%;
                                height: 100%;
                            }
                        }
                    }
                }
            }
        }
        .cartTitle{
            position: absolute;
            top: 25px;
            left: 50%;
            transform: translateX(-50%);
            font-size: 30px;
        }
        .returnBtn {
            width: 50px;
            height: 50px;
            position: absolute;
            top: 20px;
            left: 20px;
            background-color: #1ebc5d;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 50%;
        }
        .container{
            .notice{
                margin-bottom: 10px;
            }
            width: 90%;
            height: calc(100% - 170px);
            overflow-y: scroll;
            // margin: 0 auto;
            position: absolute;
            top: 100px;
            left: 50%;
            transform: translateX(-50%);
            .item{
                width: 100%;
                height: 80px;
                display: flex;
                flex-direction: row;
                align-items: center;
                overflow: hidden;
                border-radius: 20px;
                margin-bottom: 10px;
                border: 1px solid #ccc;
                box-shadow: 0.01px 0.01px 2px 1px #ccc;
                position: relative;
                .left{
                    width: 80px;
                    height: 80px;
                    border-radius: 20px;
                    overflow: hidden;
                    margin-right: 10px;
                    img{
                        width: 100%;
                        height: 100%;
                    }
                }
                .right{
                    width: calc(100% - 200px);
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    justify-content: space-evenly;
                    .title{
                        font-size: 20px;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                    }
                    .pices{
                        font-size: 14px;
                        color: #1ebc5d;
                    }
                }
                .takeaway{
                    position: absolute;
                    bottom: 10px;
                    right: 20px;
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    .reduce,.plus{
                        width: 16px;
                        height: 16px;
                        border: 1px solid #1ebc5d;
                        border-radius: 50%;
                        margin: 0 10px;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        padding: 5px;
                        background-color: #1ebc5d;
                        color: white;
                    }
                    .reduce{
                        border-color: #8c8c8c;
                        background-color: white;
                        color: #4f4f4f;
                    }
                }
            }
        }
        .alipayBox{
            width: 100%;
            height: 70px;
            position: fixed;
            bottom: 0;
            background-color: #fcfbff;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-evenly;
            .sumBox{
                display: flex;
                flex-direction: row;
                align-items: center;
                button{
                    border: none;
                    outline: none;
                    background-color: #1ebc5d;
                    color: white;
                    width: 100px;
                    height: 40px;
                    border-radius: 20px;
                    margin-left: 20px;
                }
            }
        }
    }
</style>
