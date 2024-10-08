<template>
    <div class="content">
        <div class="top">
            <div class="left">
                <img src="../..//assets/icon/向左箭头.png" alt="" class="return" @click="goTopView">
                <div class="avater">
                    <img src="../../assets/icon/卡通人像.png" alt="">
                    <span>{{ this.ele.avatertext }}</span>
                </div>
            </div>
            <div class="right">
                <img src="../../assets/icon/更多.png" alt="">
            </div>
        </div>
        <div class="container">
            <div class="imgBox">
                <van-swipe :autoplay="3000" :height="300">
                    <van-swipe-item v-for="(image, index) in images" :key="index">
                        <img :src="image" />
                    </van-swipe-item>
                </van-swipe>
            </div>
            <div class="title">{{ this.ele.title }}</div>
            <div class="desc">{{ this.ele.desc }}</div>
        </div>
    </div>
</template>

<script>
import { Lazyload } from 'vant';
export default {
    created() {
        this.$store.commit('nav/toggleIsOpen', !this.$store.state.nav.isOpen)
        // 获取store中模块content的数据
        this.ele = this.$store.state.content.ele;
        // console.log('ele:', this.ele);
        this.images.push(this.ele.img);
    },
    destroyed() {
        this.$store.commit('nav/toggleIsOpen', true); // 离开 error 页面时重新打开导航栏
    },
    data() {
        return {
            images: [],
            ele:''
        };
    },
    methods: {
        goTopView() {
            this.$router.push('/home')
        }
    },
}
</script>

<style lang="less" scoped>
.content {
    width: 100%;
    height: 100%;
    font-size: 16px;
    .top{
        width: 100%;
        position: fixed;
        top: 0;
        left: 0;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 0 20px;
        padding-top: 10px;
        height: 60px;
        margin-bottom: 10px;
        border-bottom: 1px solid #ccc;
        background-color: white;
        z-index: 996;
        .return{
            margin-right: 10px;
        }
        .left{
            display: flex;
            flex-direction: row;
            align-items: center;
            .avater{
                height: 100%;
                display: flex;
                flex-direction: row;
                align-items: center;
                img{
                    height: 30px;
                    margin-right: 10px;
                }
            }
        }
    }
    .container{
        width: 100%;
        height: calc(100% - 60px);
        margin-top: 60px;
        .imgBox{
            width: 100%;
            height: 300px;
            img{
                width: 100%;
                height: 100%;
            }
        }
        .title{
            width: 100%;
            padding: 0 15px;
            margin-bottom: 10px;
            font-size: 20px;
        }
        .desc{
            width: 100%;
            padding: 0 15px;
            font-size: 14px;
            color: #ccc;
        }
    }
}
</style>