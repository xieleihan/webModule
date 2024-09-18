<template>
    <div>
        <h3>hello world!</h3>
        <p>{{ msg }}</p>
        <input type="text" v-model="msg" />
        <img src="./images/09@1x.png" alt="">
    </div>
</template>

<script>
    export default {
        data() {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        }
    }
</script>

<style lang="less" scoped>
    h3 {
        color: red;
    }
    p {
        color: blue;
    }
    img{
        width: 200px;
        height: 100px;
    }
</style>