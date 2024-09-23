<template>
    <div class="loginView">
        <div class="goTopView" @click="goTopView">
            <img src="../../assets/icon/向左箭头.png" alt="">
        </div>
        <div class="container">
            <div class="title">Welcome Back</div>
            <div class="info">Sign in your account</div>
            <div class="email">
                <div class="emailTitle">Email</div>
                <input type="email" placeholder="请输入你的邮箱">
            </div>
            <div class="password">
                <div class="passwordTitle">Password</div>
                <input type="password" placeholder="请输入你的密码">
                <div class="lookPassword" @click="settlement">
                    <img :src="isLook === false ? require('../../assets/icon/闭眼.png') : require('../../assets/icon/睁眼.png')"
                        alt="">
                </div>
            </div>
            <div class="remember">
                <div class="rememberBox">
                    <input type="checkbox" class="checkbox">
                    <span>Remember</span>
                </div>
                <div class="forgotBox">
                    <span>Forgot Password?</span>
                </div>
            </div>
            <div class="protocol">
                <input type="radio">
                <span>请阅读<span class="linesce">《用户许可协议》</span>和我们的<span class="linesce">《隐私政策》</span></span>
            </div>
            <button class="btn">Log in</button>
            <p class="message">Don't have an account?&nbsp;<span>Sign up</span></p>
            <p class="other">Or sign in with</p>
            <div class="socialBox">
                <div class="google">
                    <img src="../../assets/icon/google.png" alt="">
                    <span>Google</span>
                </div>
                <div class="facebook">
                    <img src="../../assets/icon/icon_facebook.png" alt="">
                    <span>Facebook</span>
                </div>
            </div>
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
      this.$emit('look')
    }
  }
}
</script>

<style lang="less" scoped>
    .loginView{
        width: 100dvw;
        height: 100dvh;
        position: relative;
        .goTopView{
            width: 50px;
            height: 50px;
            position: absolute;
            top: 20px;
            left: 20px;
            background-color: #1ebc5d;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 50%;
        }
        .container{
            width: 90%;
            position: absolute;
            top: 55%;
            left: 50%;
            font-size: 20px;
            transform: translate(-50%,-50%);
            input {
                border: none;
                outline: none;
            }
            .title {
                font-size: 30px;
                height: 30px;
                line-height: 30px;
            }
            .info {
                font-size: 10px;
                color: #535353;
                height: 30px;
                line-height: 30px;
            }
            .email {
                .emailTitle {
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
                margin-bottom: 20px;
            }
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
                    right: 20px;
                    transform: translate(-50%, -50%);
                }
            }
            .remember{
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                width: 100%;
                height: 20px;
                font-size: 12px;
                align-items: center;
                color: #5a5a5a;
                margin-bottom: 15px;
                input{
                    margin-right: 5px;
                }
                .rememberBox{
                    display: flex;
                    align-items: center;
                    flex-direction: row;
                }
                .forgotBox{
                    &:hover{
                        color: #1ebc5d;
                        text-decoration: underline;
                    }
                }
            }
            .protocol{
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 12px;
                margin-bottom: 5px;
                input{
                    margin-right: 5px;
                }
                .linesce{
                    &:hover{
                        color: #1ebc5d;
                        text-decoration: underline;
                    }
                }
            }
            .btn{
                margin-bottom: 20px;
                outline: none;
                border: none;
                background-color: #1ebc5d;
                color: #ecf6f2;
                width: 100%;
                height: 50px;
                font-size: 20px;
                border-radius: 20px;
            }
            .message{
                width: 100%;
                text-align: center;
                color: #646464;
                font-size: 14px;
                span{
                    &:hover{
                        color: #1ebc5d;
                        text-decoration: underline;
                    }
                }
            }
            .other {
                margin-top: 30px;
                width: 100%;
                text-align: center;
                font-size: 12px;
            }
            .socialBox {
                width: 100%;
                height: 50px;
                display: flex;
                justify-content: space-evenly;
                align-items: center;
                .google {
                    height: 70%;
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    padding: 2px 20px;
                    background-color: #fcfbff;
                    border-radius: 20px;
                    img {
                        height: 15px;
                        width: 15px;
                        margin-right: 5px;
                    }
                    span {
                        font-size: 12px;
                    }
                }
                .facebook {
                    height: 70%;
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    padding: 2px 20px;
                    background-color: #fcfbff;
                    border-radius: 20px;
                    img {
                        height: 15px;
                        width: 15px;
                        margin-right: 5px;
                    }
                    span {
                        font-size: 12px;
                    }
                }
            }
        }
    }
</style>
