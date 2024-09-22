<template>
    <div class="start">
        <div class="startUpScreen" v-if="isStartOpen">
            <div class="bigQuack"></div>
            <div class="smallQuack topRight"></div>
            <div class="smallQuack bottomLeft"></div>
            <div class="title">FOODBD</div>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
  created () {
    sessionStorage.setItem('activeIndex', 0)
    sessionStorage.setItem('isLogin', false)
    this.$emit('hide-nav-bar')
  },
  mounted () {
    // eslint-disable-next-line no-unused-vars
    const timeoutId = setTimeout(() => {
      if (this.$route.path !== '/start/startPage') {
        console.log('startPage')
        this.$router.push('/start/startPage')
        this.isStartOpen = false
      } else {
        this.isStartOpen = false
      }
    }, 4400)
  },
  data () {
    return {
      isStartOpen: true
    }
  }
}
</script>

<style lang="less" scoped>
    .start{
        width: 100dvw;
        height: 100dvh;
        overflow: hidden;
        .startUpScreen{
            width: 100%;
            height: 100%;
            background-color: #1ebc5d;
            position: relative;
            z-index: 992;
            .title{
                font-size: 30px;
                line-height: 30px;
                color: white;
                font-weight: bold;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%,-50%);
                z-index: 999;
                letter-spacing: 3px;
            }
            .bigQuack{
                background-color: #47CE7D;
                border-radius: 50%;
                width: 150dvw;
                height: 150dvw;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%,-50%);
                z-index: 996;
            }
            .smallQuack{
                background-color: #72ECA3;
                opacity: .3;
                position: absolute;
                z-index: 998;
                width: 40dvw;
                height: 40dvw;
                border-radius: 50%;
                top: 50%;
                left: 50%;
                transform: translate(-50%,-50%);
                &.topRight{
                    // top: 50%;
                    // left: 0%;
                    animation: quacktopright 4s linear;
                    animation-fill-mode: forwards;
                }
                &.bottomLeft{
                    // top: 50%;
                    // left: 100%;
                    animation: quackbottomleft 4s linear;
                    animation-fill-mode: forwards;
                }
            }
        }
    }
    @keyframes quackbottomleft{
        0% {
            top: 50%;
            left: 50%;
        }

        20%{
            top: 50%;
            left: 50%;
        }

        25%{
            top: 20%;
            left: 70%;
        }

        37.5%{
            top: 50%;
            left: 100%;
        }

        50% {
            top: 75%;
            left: 75%;
        }

        100% {
            top: 90%;
            left: 5%;
        }
    }
    @keyframes quacktopright {
        0% {
            top: 50%;
            left: 50%;
        }

        20% {
            top: 50%;
            left: 50%;
        }

        25%{
            top: 80%;
            left: 30%;
        }

        37.5%{
            top: 50%;
            left: 0%;
        }

        50% {
            top: 25%;
            left: 25%;
        }

        100% {
            top: 10%;
            left: 95%;
        }
    }
</style>
