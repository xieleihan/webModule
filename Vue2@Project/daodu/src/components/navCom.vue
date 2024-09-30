<template>
    <div class="nav">
        <div class="left">
            <div class="data">
                <div class="day">{{ day }}</div>
                <div class="mouth">{{ mouth }}</div>
            </div>
            <div class="title">{{ title }}</div>
        </div>
        <div class="right">
            <div class="avater">
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
export default {
    data() {
        return {
            title: '懂乎日报',
            day: '',
            mouth: '',
            hour: '',
            // minute: '',
        }
    },
    created() {
        const date = new Date()
        const mouthArr = ['一月', '二月', '三月', '四月', '五月', '六月', '七月 ', '八月', '九月', '十月', '十一月', '十二月']
        this.day = date.getDate()
        this.mouth = mouthArr[date.getMonth()]
        this.hour = date.getHours()
        // 设置等待时间
        const deply = 5000
        if (this.hour < 10 && this.hour >= 8) {
            setTimeout(() => {
                this.title = '早上好'
            }, deply)
        }
        if (this.hour >= 10 && this.hour < 14) {
            setTimeout(() => {
                this.title = '中午好'
                setTimeout(()=>{
                    this.getOneWord()
                },10000)
            }, deply)
        }
        if (this.hour >= 14 && this.hour < 18) {
            setTimeout(() => {
                this.title = '下午好'
                setTimeout(()=>{
                    this.getOneWord()
                },10000)
            }, deply)
        }
        if (this.hour >= 18 && this.hour < 24) {
            setTimeout(() => {
                this.title = '晚上好'
                setTimeout(()=>{
                    this.getOneWord()
                },10000)
            }, deply)
        }
        if (this.hour >= 0 && this.hour < 6) {
            setTimeout(() => {
                this.title = '早点休息'
                setTimeout(()=>{
                    this.getOneWord()
                },10000)
            }, deply)
        }
        if(this.hour>=6&&this.hour<8){
            setTimeout(() => {
                this.title = '一日之计在于晨'
                setTimeout(()=>{
                    this.getOneWord()
                },10000)
            }, deply)
        }
        
    },
    methods: {
        async getOneWord() {
            await axios.get('https://v1.hitokoto.cn')
                .then(res => {
                    // console.log(res.data.hitokoto)
                    this.title = res.data.hitokoto
                })
        }
    }
}
</script>

<style lang="less" scoped>
.nav {
    width: 100dvw;
    margin: 0 auto;
    background-color: white;
    height: 50px;
    position: fixed;
    padding: 10px 0;
    border-bottom: 1px solid #ccc;
    top: 0;
    left: 0;
    z-index: 999;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    font-size: 16px;

    .left,
    .right {
        height: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .left {
        padding-left: 15px;
        font-family: 'PingFang SC';
        width: 70%;

        .data {
            text-align: center;
            height: 80%;
            width: 40px;
            margin-right: 10px;
            padding-right: 10px;
            border-right: 1px solid #ccc;
        }

        .title {
            font-size: 20px;
            font-weight: bold;
            width: 80%;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
    }

    .right {
        width: 30px;
        padding-right: 15px;

        .avater {
            width: 100%;
            height: 30px;
            border-radius: 50%;
            background-color: green;
        }
    }
}
</style>