<template>
    <div class="logninPage">
        <div v-if="isRouterView" class="title">孔雀外卖</div>
        <div v-if="isRouterView" class="imgBox">
            <img src="../assets/images/lognin.svg" alt="" />
            <div class="download">
                <span @click="openDownloadBox">下载App</span>
                <div class="triangle" v-if="isDownloadOpen"></div>
                <div class="downloadBox" v-if="isDownloadOpen">
                    <div class="apple">
                        <img src="../assets/images/Apple Store.png" alt="">
                    </div>
                    <div class="google">
                        <img src="../assets/images/icon_p3_googleplay.png" alt="">
                    </div>
                </div>
            </div>
        </div>
        <button v-if="isRouterView" class="btn login" @click="goToLogin">Log In</button>
        <button v-if="isRouterView" class="btn signup" @click="goToSignup">Sign Up</button>
        <router-view v-if="!isRouterView"></router-view>
    </div>
</template>

<script>
export default {
  data () {
    return {
      isDownloadOpen: false,
      isRouterView: true
    }
  },
  methods: {
    openDownloadBox () {
      this.isDownloadOpen = !this.isDownloadOpen
    },
    goToLogin () {
      if (this.$route.path !== '/lognin/loginpage') {
        this.$router.push('/lognin/loginpage')
      }
      this.isRouterView = false
    },
    goToSignup () {
      if (this.$route.path !== '/lognin/signuppage') {
        this.$router.push('/lognin/signuppage')
      }
      this.isRouterView = false
    }
  }
}
</script>

<style lang="less" scoped>
    .logninPage{
        width: 100dvw;
        height: 100dvh;
        position: relative;
        font-size: 16px;

        .title{
            position: absolute;
            top: 10%;
            left: 50%;
            transform: translateX(-50%);
            font-size: 28px;
            &:hover{
                color: #1ebc5d;
            }
        }
        .imgBox{
            width: 90%;
            height: 300px;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);
            img{
                width: 100%;
                height: 100%
            }
            .download{
                text-align: center;
                color: #ccc;
                font-size: 10px;
                position: relative;
                .triangle{
                    width: 0;
                    height: 0;
                    border-left: 8px solid transparent;
                    border-right: 8px solid transparent;
                    border-top: 8px solid #ccc;
                    position: absolute;
                    top: -70%;
                    left: 50%;
                    transform: translateX(-50%);
                }
                .downloadBox{
                    width: 80%;
                    height: 40px;
                    position: absolute;
                    top: -400%;
                    background-color: #ccc;
                    left: 50%;
                    transform: translateX(-50%);
                    display: flex;
                    flex-direction: row;
                    justify-content: space-evenly;
                    padding: 5px;
                    border-radius: 20px;
                    img{
                        width: 90%;
                        height: 100%;
                    }
                }
            }
        }

        @media screen and (min-width: 545px) {
            .title{
                font-size: 20px;
            }
            .imgBox {
                top: 50%;
                left: 30%;
                width: 40%;
                height: 40%;
            }
        }

        .btn{
            border: none;
            outline: none;
            border-radius: 20px;
            font-size: 16px;
            &.login{
                width: 90%;
                height: 50px;
                bottom: 15%;
                left: 50%;
                color: #eef7f3;
                background-color: #1ebc5d;
                position: absolute;
                transform: translateX(-50%);
            }

            &.signup{
                width: 90%;
                height: 50px;
                bottom: 5%;
                left: 50%;
                position: absolute;
                background-color: transparent;
                color: #363636;
                border: 1px solid #1ebc5d;
                transform: translateX(-50%);
            }
            @media screen and (min-width: 545px){
                &.login{
                    width: 30%;
                    height: 30px;
                    font-size: 12px;
                    top: 30%;
                    left: 70%;
                }
                &.signup{
                    width: 30%;
                    height: 30px;
                    font-size: 12px;
                    top: 50%;
                    left: 70%;
                }
            }
        }
    }
</style>
