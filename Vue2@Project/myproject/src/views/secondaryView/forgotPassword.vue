<template>
    <div class="forgot">
        <return-btn></return-btn>
        <div class="container">
            <div class="title">Forgot Password</div>
            <div class="info">Select which contact details should we use to reset your password </div>
            <div class="containerBox">
                <div class="item" :style="indexOpenOutline === 0 ? 'outline:1px solid #1ebc5d' : ''" @click="options(0)">
                    <div class="itemTitle">Email</div>
                    <div class="itemInfo">Seed to your email</div>
                </div>
                <div class="item" :style="indexOpenOutline === 1 ? 'outline:1px solid #1ebc5d' : ''" @click="options(1)">
                    <div class="itemTitle">Phone Number</div>
                    <div class="itemInfo">Seed to your phone number</div>
                </div>
            </div>
        </div>
        <button class="btn" @click="goToVeCodeView(indexOpenOutline)">Continue</button>
    </div>
</template>

<script>
export default {
  data () {
    return {
      indexOpenOutline: 0,
      item: 'email'
    }
  },
  methods: {
    options (indexOpenOutline) {
      this.indexOpenOutline = indexOpenOutline
      if (indexOpenOutline === 0) {
        this.item = 'email'
      } else {
        this.item = 'phone'
      }
    },
    goToVeCodeView (index) {
      if (index === 0) {
        if (this.$router.path !== '/lognin/veCode') {
          this.$router.push({ path: '/lognin/veCode', query: { type: this.item } })
        }
      } else {
        if (this.$router.path !== '/lognin/veCode') {
          this.$router.push({ path: '/lognin/veCode', query: { type: this.item } })
        }
      }
    }
  }
}
</script>

<style lang="less" scoped>
    .forgot{
        width: 100dvw;
        height: 100dvh;
        position: relative;
        .container{
            width: 90%;
            position: absolute;
            top: 20%;
            left: 50%;
            transform: translateX(-50%);
            font-size: 16px;
            .title{
                font-size: 20px;
                margin-bottom: 10px;
                font-weight: bold;
            }
            .info{
                font-size: 14px;
                color: #575757;
            }
            .containerBox{
                width: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;
                margin-top: 20px;
                .item{
                    width: 100%;
                    padding: 10px;
                    border-radius: 20px;
                    height: 80px;
                    background-color: #fcfbff;
                    margin-bottom: 10px;
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    justify-content: space-evenly;
                    .itemTitle{
                        font-weight: bold;
                    }
                    .itemInfo{
                        color: #5d5d5d;
                        font-size: 14px;
                    }
                }
            }
        }
        .btn{
            width: 90%;
            height: 50px;
            background-color: #1ebc5d;
            outline: none;
            border: none;
            border-radius: 20px;
            margin: 0 auto;
            position: absolute;
            bottom: 40px;
            left: 50%;
            transform: translateX(-50%);
            color: #f4f9f8;
        }
    }
</style>
