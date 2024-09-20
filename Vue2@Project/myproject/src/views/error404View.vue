<template>
    <div class="error">
        <div class="titleBox">
            <div class="left">
                <img src="../assets/icon/向左箭头.png" alt="">
            </div>
            <p>Not Found</p>
        </div>
        <div class="img">
            <img src="../assets/images/404.svg" alt="">
        </div>
        <div class="text">
            <p class="title">404 Not Found</p>
            <p class="info">你来到无人问津的沙漠</p>
        </div>
        <button class="returnButton" @click="returnHomeView">点击返回首页</button>
    </div>
</template>

<script>
export default {
  methods: {
    returnHomeView () {
      this.$router.push('/')
      this.$emit('show-nav-bar')
    }
  },
  created () {
    this.$emit('hide-nav-bar')
  }
}
</script>

<style lang="less" scoped>
@themeColor: #1ebc5d;
@radius: 20px;
.error{
    width: 100dvw;
    height: 100dvh;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    .titleBox{
        position: fixed;
        font-size: 16px;
        top: 0;
        left: 0;
        background-color: @themeColor;
        width: 100%;
        height: 50px;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        letter-spacing: 3px;
        .left{
            position: absolute;
            top: 50%;
            left: 20px;
            transform: translateY(-50%);
        }
    }

    .img{
        padding: 0 50px;
        height: 300px;
        width: 100%;
        img{
            width: 100%;
            height: 100%;
        }
    }
    .title{
        font-size: 32px;
        font-weight: bold;
        letter-spacing: 3px;
        text-align: center;
        text-wrap: nowrap;
    }
    .info{
        color: #ccc;
        letter-spacing: 10px;
        text-align: center;
        font-size: 16px;
        text-wrap: nowrap;
    }
    button{
        border: none;
        outline: none;
        width: 90%;
        height: 50px;
        background-color: @themeColor;
        color: white;
        border-radius: @radius;
    }
}
</style>
