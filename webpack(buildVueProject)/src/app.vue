<template>
    <div>
        <h3>hello world!</h3>
        <p>{{ msg }}</p>
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
</style>