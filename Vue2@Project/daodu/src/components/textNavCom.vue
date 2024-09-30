<template>
    <div class="textNav">
        <div class="navContainer">
            <div class="left" @click="goTopView">
                <img src="../assets/icon/left.png" alt="">
            </div>
            <div class="right">
                <div class="item">
                    <img src="../assets/icon/评论.png" alt="">
                </div>
                <div class="item">
                    <img src="../assets/icon/赞.png" alt="">
                </div>
                <div class="item">
                    <img src="../assets/icon/收藏.png" alt="">
                </div>
                <div class="item" @click="showShare = true">
                    <img src="../assets/icon/分享.png" alt="">
                </div>
            </div>
        </div>
        <van-share-sheet v-model="showShare" title="立即分享给好友" :options="options" @select="onSelect" />
    </div>
</template>

<script>
import { Toast } from 'vant';
export default {
    data() {
        return {
            showShare: false,
            options: [
                { name: '微信', icon: 'wechat' },
                { name: '微博', icon: 'weibo' },
                { name: '复制链接', icon: 'link' },
                { name: '分享海报', icon: 'poster' },
                { name: '二维码', icon: 'qrcode' },
            ],
        };
    },
    methods: {
            goTopView() {
                this.$emit('changeView')
            this.$router.go(-1)
            },
            onSelect(option) {
                Toast(option.name);
                this.showShare = false;
            },
        },
}
</script>

<style lang="less" scoped>
    .textNav{
        width: 100%;
        height: 50px;
        display: flex;
        position: fixed;
        bottom: 0;
        justify-content: center;
        align-items: center;
        background-color: #f6f6f6;
        .navContainer{
            width: 95%;
            height: 30px;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            .left,.right{
                height: 100%;
            }
            .left{
                width: 30px;
                border-right: 1px solid #ccc;
                margin-left: 10px;
                padding-right: 10px;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
            .right{
                width: 85%;
                display: flex;
                flex-direction: row;
                justify-content: space-evenly;
                align-items: center;
                .item{
                    width: 30px;
                    height: 30px;
                    img{
                        width: 100%;
                        height: 100%;
                    }
                }
            }
        }
    }
</style>