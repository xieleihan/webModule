<template>
    <div class="signupPage">
        <div class="goTop">
            <img src="../../assets/icon/向左箭头.png" alt="">
        </div>
        <div class="container">
            <div class="title">Getting Started</div>
            <div class="info">Create an account to continue</div>
            <div class="name">
                <p class="nameTitle">Name</p>
                <input type="text" placeholder="请输入你的名字">
            </div>
            <div class="email">
                <p class="emailTitle">Email</p>
                <input type="email" placeholder="请输入你的邮箱">
            </div>
            <div class="password">
                <p class="passwordTitle">Password</p>
                <input :type="type" placeholder="请输入你的密码">
                <div class="lookPassword" @click="settlement">
                    <img :src="isLook === false ? require('../../assets/icon/闭眼.png'): require('../../assets/icon/睁眼.png')"
                        alt="">
                </div>
            </div>
            <button>Create Account</button>
            <p class="desc">Already have an account? Sign in</p>
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
            top: 50%;
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
                    width: 95%;
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
                    width: 95%;
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
                    width: 95%;
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
        }
    }
</style>
