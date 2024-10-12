<template>
    <div class="container">
        <div class="left">
            <textarea placeholder="请输入文本" name="" id=""></textarea>
            <button class="btn">生成</button>
        </div>
        <div class="right">
            <!-- 二维码(canvas) -->
            <canvas></canvas>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style lang="less" scoped>
    .container{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        .left{
            width: 80%;
            height: 200px;
            textarea{
                width: 100%;
                height: 100%;
                padding: 15px;
                font-size: 16px;
                outline: none;
            }
            .btn{
                border: none;
                outline: none;
                background-color: #089f40;
                padding: 10px;
                color: #fff;
                width: 120px;
                height: 50px;
                margin-top: 10px;
            }
        }
    }
</style>