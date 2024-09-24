<template>
  <div class="getCode">
    <return-btn></return-btn>
    <div class="container">
      <div class="title">Verification Code</div>
      <div class="info">
        <p>Type the verification code</p>
        <p>We've sent you <span>{{ type }}</span></p>
      </div>
      <div class="inputBox">
        <input v-model="inputObj.code1" type="text" pattern="[0-9]*" maxlength="1" title="只能输入数字">
        <input ref="code2" v-model="inputObj.code2" type="text" pattern="[0-9]*" maxlength="1" title="只能输入数字">
        <input ref="code3" v-model="inputObj.code3" type="text" pattern="[0-9]*" maxlength="1" title="只能输入数字">
        <input ref="code4" v-model="inputObj.code4" type="text" pattern="[0-9]*" maxlength="1" title="只能输入数字">
      </div>
      <div class="reset">Resend code in <span ref="open">{{ runTime }}</span></div>
      <button class="btn" :class="{ 'active': inputObj.openBtn }" :disabled="inputObj.openBtn"
        @click="goToReviseView">Confirm</button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      type: '',
      runTime: '00:60',
      time: 60, // 初始化倒计时
      inputObj: {
        code1: '',
        code2: '',
        code3: '',
        code4: '',
        openBtn: true
      }
    }
  },
  created () {
    this.type = this.$route.query.type
    // 开启倒计时
    this.timer = setInterval(() => {
      this.time--
      // 补零处理
      const formattedTime = this.time < 10 ? `0${this.time}` : this.time
      this.runTime = `00:${formattedTime}`
      // 倒计时结束
      if (this.time === 0) {
        clearInterval(this.timer)
        this.runTime = 'Resend'
        this.$nextTick(() => {
          if (this.$refs.open) {
            this.$refs.open.style.color = 'black'
            this.$refs.open.style.textDecoration = 'underline'
            // 解除之前绑定的点击事件，防止重复绑定
            this.$refs.open.onclick = null
            // 绑定新的点击事件
            this.$refs.open.onclick = () => {
              this.$refs.open.onclick = null
              // 重置样式和状态
              this.$refs.open.style.color = '#1ebc5d'
              this.$refs.open.style.textDecoration = 'none'
              this.runTime = '00:60'
              this.time = 60 // 重置倒计时时间
              // 重启倒计时
              this.startTimer()
            }
          }
        })
      }
    }, 1000)
  },
  methods: {
    startTimer () {
    // 确保计时器被清理，避免多个计时器同时运行
      if (this.timer) {
        clearInterval(this.timer)
      }
      this.timer = setInterval(() => {
        this.time--
        const formattedTime = this.time < 10 ? `0${this.time}` : this.time
        this.runTime = `00:${formattedTime}`
        if (this.time === 0) {
          clearInterval(this.timer)
          this.runTime = 'Resend'
          this.$nextTick(() => {
            if (this.$refs.open) {
              this.$refs.open.style.color = 'black'
              this.$refs.open.style.textDecoration = 'underline'
              this.$refs.open.onclick = null
              // 重新绑定点击事件，允许重置倒计时
              this.$refs.open.onclick = () => {
                this.$refs.open.onclick = null
                this.$refs.open.style.color = '#1ebc5d'
                this.$refs.open.style.textDecoration = 'none'
                this.runTime = '00:60'
                this.time = 60 // 重置倒计时
                this.startTimer()
              }
            }
          })
        }
      }, 1000)
    },
    goToReviseView () {
      if (this.inputObj.code1 && this.inputObj.code2 && this.inputObj.code3 && this.inputObj.code4 && this.inputObj.code1 === '1' && this.inputObj.code2 === '2' && this.inputObj.code3 === '3' && this.inputObj.code4 === '4') {
        this.$router.push('/lognin/reset')
      } else {
        console.log('Verification code error')
      }
    }
  },
  watch: {
    'inputObj.code4' (val) {
      if (val) {
        this.inputObj.openBtn = false// 当 code4 有值时，禁用按钮
      } else {
        this.inputObj.openBtn = true // 当 code4 没有值时，启用按钮
      }
    },
    'inputObj.code3' (val) {
      if (val) {
        this.$nextTick(() => {
          this.$refs.code4.focus()
        })
      }
    },
    'inputObj.code2' (val) {
      if (val) {
        this.$nextTick(() => {
          this.$refs.code3.focus()
        })
      }
    },
    'inputObj.code1' (val) {
      if (val) {
        this.$nextTick(() => {
          this.$refs.code2.focus()
        })
      }
    }
  }
}
</script>

<style lang="less" scoped>
    .getCode{
        width: 100dvw;
        height: 100dvh;
        position: relative;
        font-size: 16px;
        .container{
            width: 90%;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            .title{
                font-size: 20px;
                font-weight: bold;
                margin-bottom: 10px;
                letter-spacing: 3px;
            }
            .info{
                font-size: 14px;
                color: #666666;
                margin-bottom: 20px;
            }
            .inputBox{
                width: 100%;
                height: 70px;
                display: flex;
                flex-direction: row;
                justify-content: space-evenly;
                align-items: center;
                margin-bottom: 20px;
                input{
                    border: none;
                    outline: none;
                    width: 50px;
                    height: 50px;
                    background-color: #fcfbff;
                    color: #4f4f4f;
                    text-align: center;
                    line-height: 50px;
                    font-weight: bold;
                    border-radius: 20px;
                }
            }
            .reset{
                width: 100%;
                text-align: center;
                margin-bottom: 15px;
                color: #1ebc5d;
            }
            .btn{
                outline: none;
                border: none;
                border-radius: 20px;
                width: 100%;
                height: 50px;
                background-color: #1ebc5d;
                color: white;
                &.active {
                  background-color: #1ebc5d6d;
                }
            }
        }
    }
</style>
