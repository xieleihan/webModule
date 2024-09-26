<template>
    <div class="cartView">
        <div class="returnBtn" @click="goTopView">
            <img src="../../assets/icon/向左箭头.png" alt="">
        </div>
        <div class="cartTitle">购物车</div>
        <div class="container">
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
            <div class="clearBox">
                <img src="../../assets/icon/删除.png" alt="">
                <p>清空</p>
            </div>
            <div class="sumBox">
                <div class="smallSum">
                    <p>件数:{{ card.reduce((sum,item) => sum + item.quantity,0) }}</p>
                    <p>总计: ${{ card.reduce((sum, item) => sum + item.picel * item.quantity, 0) }}</p>
                </div>
                <button>结算</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      card: ''
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
    .cartView{
        width: 100dvw;
        height: 100dvh;
        position: relative;
        font-size: 16px;
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
