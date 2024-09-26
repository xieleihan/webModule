<template>
    <div class="temporary">
        <ul class="liContainer">
            <li>
                <div class="left">
                    <input v-model="localPicel" type="radio" name="infoRadio" value="8">
                    <span>8S</span>
                </div>
                <div class="right">
                    <span>$8.00</span>
                </div>
            </li>
            <li>
                <div class="left">
                    <input v-model="localPicel" type="radio" name="infoRadio" value="23.69">
                    <span>20S</span>
                </div>
                <div class="right">
                    <span>$23.69</span>
                </div>
            </li>
            <li>
                <div class="left">
                    <input v-model="localPicel" type="radio" name="infoRadio" value="129.99">
                    <span>30S</span>
                </div>
                <div class="right">
                    <span>$129.99</span>
                </div>
            </li>
        </ul>
        <button @click="addCard">Add To Cart</button>
    </div>
</template>

<script>
import { Toast } from 'vant'
export default {
  props: {
    picel: [String, Number],
    name: String
  },
  data () {
    return {
      localPicel: this.picel,
      localName: this.name
    }
  },
  watch: {
    localPicel (val) {
      this.$emit('update', val)
    }
  },
  methods: {
    addCard () {
      Toast('加入购物车成功啦~')
      const card = sessionStorage.getItem('card')
      const cardArray = card ? JSON.parse(card) : []
      cardArray.push({ title: this.localName, picel: this.localPicel })
      sessionStorage.setItem('card', JSON.stringify(cardArray))
    }
  }
}
</script>

<style lang="less" scoped>
    .temporary{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .liContainer {
        margin-top: 20px;
        width: 100%;
        padding: 0 30px;
        font-size: 16px;
        color: #b7b7b8;
        li {
            width: 100%;
            height: 30px;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            .left {
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;
            }
            input {
                appearance: none;
                padding: 2px;
                border-radius: 50%;
                margin-right: 10px;
                width: 15px;
                height: 15px;
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
    button {
        border: none;
        outline: none;
        background-color: #1ebc5d;
        color: white;
        width: 90%;
        height: 50px;
        margin-top: 30px;
        border-radius: 20px;
        font-size: 16px;
    }
</style>
