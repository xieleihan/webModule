<template>
    <div class="resetPassword">
        <return-btn @click="goTopView"></return-btn>
        <div class="container">
            <div class="title">Reset Password</div>
            <div class="info">Enter a new password</div>
            <div class="inputBox">
                <div class="password">
                    <div class="passwordTitle">New Password</div>
                    <input type="password" placeholder="请输入你的密码">
                    <div class="lookPassword" @click="settlement">
                        <img :src="isLook === false ? require('../../assets/icon/闭眼.png') : require('../../assets/icon/睁眼.png')"
                            alt="">
                    </div>
                </div>
                <div class="password">
                    <div class="passwordTitle">Confirm Password</div>
                    <input type="password" placeholder="请输入你的密码">
                    <div class="lookPassword" @click="settlement">
                        <img :src="isLook === false ? require('../../assets/icon/闭眼.png') : require('../../assets/icon/睁眼.png')"
                            alt="">
                    </div>
                </div>
            </div>
            <button class="btn">Change Password</button>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      isLook: false,
      type: 'password'
    }
  },
  methods: {
    settlement () {
      this.isLook = !this.isLook
      if (this.isLook) {
        this.type = 'text'
        const timeoutId = setTimeout(() => {
          this.type = 'password'
          this.isLook = !this.isLook
          clearTimeout(timeoutId)
        }, 1000)
      } else {
        this.type = 'password'
      }
    },
    goTopView () {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="less" scoped>
    .resetPassword{
        width: 100dvw;
        height: 100dvh;
        position: relative;
        input{
            border: none;
            outline: none;
        }
        .container{
            width: 90%;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            .title{
                font-size: 30px;
                font-weight: bold;
                margin-bottom: 15px;
            }
            .info{
                font-size: 14px;
                color: #575757;
                margin-bottom: 30px;
            }
            .inputBox{
                .password {
                    position: relative;
                    .passwordTitle {
                        margin-bottom: 10px;
                    }
                    input {
                        background-color: #fcfbff;
                        width: 100%;
                        height: 50px;
                        border-radius: 20px;
                        padding-left: 10px;
                        font-size: 20px;
                    }

                    margin-bottom: 15px;
                    .lookPassword {
                        position: absolute;
                        top: 75%;
                        right: 15px;
                        transform: translate(-50%, -50%);
                    }
                }
            }
            .btn{
                width: 100%;
                height: 50px;
                border: none;
                outline: none;
                border-radius: 20px;
                color: white;
                background-color: #1ebc5d;
                margin-top: 15px;
            }
        }
    }
</style>
