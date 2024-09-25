<template>
    <div class="infoMore">
        <van-swipe class="my-swipe" :autoplay="5000" indicator-color="#1ebc5d">
            <van-swipe-item>
                <img src="https://picsum.photos/1920/1080?1" alt="">
            </van-swipe-item>
            <van-swipe-item>
                <img src="https://picsum.photos/1920/1080?2" alt="">
            </van-swipe-item>
            <van-swipe-item>
                <img src="https://picsum.photos/1920/1080?3" alt="">
            </van-swipe-item>
            <van-swipe-item>
                <img src="https://picsum.photos/1920/1080?4" alt="">
            </van-swipe-item>
        </van-swipe>
        <div class="share" @click="showPopup">
            <van-icon name="share-o"></van-icon>
        </div>
        <van-popup v-model="show" round closeable position="bottom" :style="{ height: '40%' }">
            <my-share></my-share>
        </van-popup>
    </div>
</template>

<script>
export default {
  data () {
    return {
      show: false
    }
  },
  methods: {
    showPopup () {
      this.show = true
    }
  }
}
</script>

<style lang="less" scoped>
    .infoMore{
        width: 100%;
        height: calc(100% - 60px);
        position: relative;
        .my-swipe .van-swipe-item {
            width: 100%;
            height: 250px;
            font-size: 20px;
            line-height: 150px;
            text-align: center;
            img{
                width: 100%;
                height: 100%;
            }
        }
        .share{
            width: 50px;
            height: 50px;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 50%;
            position: absolute;
            top: 20px;
            right: 20px;
            background-color: #fcfbff;
        }
    }
</style>
