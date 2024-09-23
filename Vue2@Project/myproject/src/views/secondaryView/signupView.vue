<template>
    <div class="signupPage">
        <div class="goTop" @click="goTopView">
            <img src="../../assets/icon/向左箭头.png" alt="">
        </div>
        <div class="container">
            <div class="title">Getting Started</div>
            <div class="info">Create an account to continue</div>
            <div class="name">
                <p class="nameTitle">Name</p>
                <input type="text" placeholder="请输入你的名字" v-model="user.username">
            </div>
            <div class="email">
                <p class="emailTitle">Email</p>
                <input type="email" placeholder="请输入你的邮箱" v-model="user.email">
            </div>
            <div class="password">
                <p class="passwordTitle">Password</p>
                <input :type="type" placeholder="请输入你的密码" v-model="user.password">
                <div class="lookPassword" @click="settlement">
                    <img :src="isLook === false ? require('../../assets/icon/闭眼.png'): require('../../assets/icon/睁眼.png')"
                        alt="">
                </div>
            </div>
            <button class="btn" @click="registerUser">Create Account</button>
            <p class="desc">Already have an account? <span @click="goToLoginView" class="smalldesc">Sign in</span></p>
            <p class="other">Or sign up with</p>
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
import { Toast } from 'vant'
import axios from 'axios'
export default {
  data () {
    return {
      isLook: false,
      type: 'password',
      user: {
        username: '',
        email: '',
        password: ''
      }
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
    goToLoginView () {
      this.$router.push('/lognin/loginpage')
    },
    goTopView () {
      this.$router.go(-1)
      this.$emit('look')
    },
    registerUser () {
    //   console.log(this.user)
      if (this.user.username === '' || this.user.email === '' || this.user.password === '') {
        Toast({
          message: '请检查用户名、邮箱和密码是否为空',
          icon: 'cross'
        })
        return false
      }
      // 使用 Axios 进行 HTTP 请求
      axios.post('http://localhost:8081/register', this.user, {
        headers: {
          'Content-Type': 'application/json' // 根据后端要求设置合适的 Content-Type
        }
      })
        .then((res) => {
          // 检查返回的状态码或者响应内容
          if (res.data === '注册成功') { // 假设 200 是成功的状态码
            Toast({
              message: '注册成功,请登录',
              icon: 'success'
            })
            this.$router.push('/lognin/loginpage') // 跳转到登录页面
              .catch((routerError) => {
                console.error('Router navigation error:', routerError) // 捕获路由跳转错误
              })
          } else {
            Toast({
              message: '是我们的问题,我们正在解决,请稍后',
              icon: 'cross'
            })
          }
        })
        // eslint-disable-next-line
        .catch((err) => {
          Toast({
            message: '请检查你的网络',
            icon: 'cross'
          })
        })
    }
  }
}
</script>

<style lang="less" scoped>
    .signupPage{
        width: 100dvw;
        height: 100dvh;
        position: relative;
        font-size: 16px;
        .goTop{
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
            position: absolute;
            input{
                border: none;
                outline: none;
            }
            width: 90%;
            top: 55%;
            left: 50%;
            font-size: 20px;
            transform: translate(-50%,-50%);
            .title{
                font-size: 30px;
                height: 30px;
                line-height: 30px;
            }
            .info{
                font-size: 10px;
                color: #535353;
                height: 30px;
                line-height: 30px;
            }
            .name{
                margin-top: 20px;
                font-size: 20px;
                .nameTitle{
                    margin-bottom: 10px;
                }
                input{
                    background-color: #fcfbff;
                    width: 100%;
                    height: 50px;
                    border-radius: 20px;
                    padding-left: 10px;
                    font-size: 20px;
                }
                margin-bottom: 20px;
            }
            .email{
                .emailTitle{
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
            .password{
                position: relative;
                .passwordTitle{
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
                .lookPassword{
                    position: absolute;
                    top: 75%;
                    right: 20px;
                    transform: translate(-50%,-50%);
                }
            }
            .btn{
                outline: none;
                border: none;
                width: 100%;
                height: 50px;
                font-size: 20px;
                background-color: #1ebc5d;
                color: #ebf6f1;
                border-radius: 20px;
            }
            .desc{
                text-align: center;
                font-size: 10px;
                margin-top: 10px;
                margin-bottom: 10px;
                color: #757677;
                letter-spacing: 3px;
                .smalldesc{
                    cursor: pointer;
                    &:hover{
                        text-decoration: underline;
                        color: #1ebc5d;
                    }
                }
            }
            .other{
                margin-top: 30px;
                width: 100%;
                text-align: center;
                font-size: 12px;
            }
            .socialBox{
                width: 100%;
                height: 50px;
                display: flex;
                justify-content: space-evenly;
                align-items: center;
                .google{
                    height: 70%;
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    padding: 2px 20px;
                    background-color: #fcfbff;
                    border-radius: 20px;
                    img{
                        height: 15px;
                        width: 15px;
                        margin-right: 5px;
                    }
                    span{
                        font-size: 12px;
                    }
                }
                .facebook{
                    height: 70%;
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    padding: 2px 20px;
                    background-color: #fcfbff;
                    border-radius: 20px;
                    img{
                        height: 15px;
                        width: 15px;
                        margin-right: 5px;
                    }
                    span{
                        font-size: 12px;
                    }
                }
            }
        }
    }
</style>
