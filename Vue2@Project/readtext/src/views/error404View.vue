<template>
    <div class="error">
        <div class="titleBox">
            <p>Not Found</p>
            <p>找不到页面</p>
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
            returnHomeView() {
            this.$router.push('/home')
                document.title = '小知书'
            }
        },
    
    created() {
        document.title = '404 Not Found' 
        this.$store.commit('nav/toggleIsOpen', !this.$store.state.nav.isOpen)
    },
    destroyed() {
        this.$store.commit('nav/toggleIsOpen', true); // 离开 error 页面时重新打开导航栏
    }
}
</script>

<style lang="less" scoped>
    .error{
        width: 95%;
        height: 100%;
        margin: 0 auto;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        flex-direction: column;
        .img{
            width: 100%;
            height: 225px;
            img{
                width: 100%;
                height: 100%;
            }
        }
        .text{
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            font-size: 14px;
            letter-spacing: 10px;
            color: #999999;
        }
        button{
            width: 100%;
            padding: 14px 0;
            border-radius: 20px;
            color: white;
            background-color: #fe2441;
        }
    }
</style>