<template>
    <div class="search">
        <input type="text" placeholder="请输入文字" v-model="text">
        <button @click="getInputValue">搜索</button>
    </div>
    <p>这是你输入的关键字:<span>{{ text }}</span></p>
</template>

<!-- <script setup lang="ts">
import { ref } from 'vue'

const text = ref('')

const getInputValue = () => {
    console.log(text.value)
}
</script> -->
<script lang="ts">
import { ref } from 'vue'
export default {
    setup() {
        const text = ref('')

        const getInputValue = () => {
            console.log(text.value)
        }

        return {
            text,
            getInputValue
        }
    }
}
</script>

<style lang="less" scoped>

</style>