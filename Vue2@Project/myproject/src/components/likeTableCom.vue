<template>
    <div class="likeTable">
        <!-- 模版（已经测试） -->
        <!-- <div class="item">
            <div class="left">
                <img src="https://picsum.photos/300/300?2" alt="">
            </div>
            <div class="right">
                <p class="title">这是标题</p>
                <p class="picel">$100</p>
                <div class="like" :style="{color: likeColor}" @click="toggleColor">♥</div>
            </div>
        </div> -->
    </div>
</template>

<script>
export default {
  methods: {
    toggleColor () {
      this.likeColor = this.likeColor === 'black' ? '#1ebc5d' : 'black'
    }
  },
  data () {
    return {
      likeColor: 'black'
    }
  }
}
</script>

<style lang="less" scoped>
    .likeTable{
        width: 100%;
        .item{
            width: 100%;
            height: 90px;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            position: relative;
            margin-bottom: 10px;
            border: .01px solid #ccc;
            border-radius: 20px;
            padding-left: 10px;
            .left{
                width: 70px;
                height: 70px;
                margin-right: 10px;
                img{
                    width: 100%;
                    height: 100%;
                    border-radius: 20px;
                }
            }
            .right{
                width: calc(100% - 90px);
                height: 90%;
                display: flex;
                flex-direction: column;
                justify-content: space-evenly;
                align-items: flex-start;
                .picel{
                    color: #9d9d9d;
                    font-size: 10px;
                }
                .like{
                    position: absolute;
                    top: 50%;
                    right: 10px;
                    font-size: 24px;
                    transform: translateY(-50%);
                }
            }
        }
    }
</style>
