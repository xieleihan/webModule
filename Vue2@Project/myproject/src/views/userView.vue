<template>
    <div class="user">
        <div class="topTitle">用户信息
            <img @click="returnHomeView" class="leftBtn" src="../assets/icon/向左箭头(1).png" alt="">
        </div>
        <div class="avater">
            <img src="../assets/avater.png" alt="">
        </div>
        <p class="username">Hello World!</p>
        <ul class="settingBox">
            <li class="item">
                <span>个人资料</span>
                <img src="../assets/icon/向左箭头(1).png" alt="">
            </li>
            <li class="item">
                <span>订单</span>
                <img src="../assets/icon/向左箭头(1).png" alt="">
            </li>
            <li class="item">
                <span>通知</span>
                <input type="checkbox" class="checkbox" @click="setCheck" :style="`backgroundColor:${themeColor}`">
            </li>
            <li class="item">
                <span>设置</span>
                <img src="../assets/icon/向左箭头(1).png" alt="">
            </li>
        </ul>
        <button class="logout">登出</button>
    </div>
</template>

<script>
export default {
  created () {
    this.$emit('hide-nav-bar')
  },
  data () {
    return {
      isCheckBox: false,
      themeColor: '#ccc'
    }
  },
  methods: {
    setCheck () {
      if (!this.isCheckBox) {
        this.isCheckBox = true
        this.themeColor = '#1ebc5d'
      } else {
        this.isCheckBox = false
        this.themeColor = '#ccc'
      }
    },
    returnHomeView () {
      this.$router.push('/')
      this.$emit('show-nav-bar')
      sessionStorage.setItem('activeIndex', 0)
    }
  }
}
</script>

<style lang="less" scoped>
@radius: 20px;
.user{
    width: 100dvw;
    height: 100dvh;
    display: flex;
    flex-direction: column;
    position: relative;
    .topTitle{
        font-size: 20px;
        position: fixed;
        top: 0;
        left: 0;
        text-align: center;
        line-height: 50px;
        height: 50px;
        width: 100%;
        // background-color: #1ebc5d;
        color: black;
        .leftBtn{
            position: absolute;
            top: 50%;
            left: 20px;
            transform: translateY(-50%);
        }
    }
    .avater{
        width: 100px;
        height: 100px;
        position: absolute;
        top: 100px;
        border-radius: 50%;
        left: 50%;
        overflow: hidden;
        transform: translateX(-50%);
        img{
            width: 100%;
            height: 100%;
        }
    }
    .username{
        font-size: 20px;
        text-align: center;
        position: absolute;
        top: 220px;
        left: 50%;
        transform: translateX(-50%);
    }
    .settingBox{
        width: 90%;
        min-height: 300px;
        position: absolute;
        top: 62%;
        left: 50%;
        transform: translate(-50%,-50%);
        font-size: 16px;
        .item{
            background-color: #fcfbff;
            height: 50px;
            margin: 10px 0;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            padding: 0 10px;
            border-radius: 10px;
            img{
                transform: rotate(-180deg);
                height: 50%;
            }
            .checkbox{
                position: relative;
                border: none;
                appearance: none;
                background: #ccc;
                outline: none;
                width: 40px;
                height: 15px;
                border-radius: 20px;
                box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
                        0 2px 4px -1px rgba(0, 0, 0, 0.06);
            }
            .checkbox::before{
                content: "";
                position: absolute;
                width: 15px;
                height: 15px;
                top: 0;
                left: 0;
                background-color: white;
                transform: scale(1.1);
                border-radius: 50%;
                transition: 0.3s ease all;
                box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
                        0 2px 4px -1px rgba(0, 0, 0, 0.06);
            }
            .checkbox:checked::before{
                left: 25px;
                background-color: white;
            }
        }
    }
    .logout{
        position: fixed;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
        border: none;
        outline: none;
        background-color: #1ebc5d;
        width: 90%;
        height: 50px;
        font-size: 20px;
        color: white;
        text-align: center;
        border-radius: @radius;
    }
}
</style>
