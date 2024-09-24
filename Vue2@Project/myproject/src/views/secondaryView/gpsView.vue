<template>
    <div class="gpsBox">
        <div class="returnButton" @click="returnHomeView">
            <img src="../../assets/icon/向左箭头.png" alt="">
        </div>
        <div class="permissionBox">
            <div class="top">
                <img src="../../assets/images/定位.svg" alt="">
                <p class="title">查找您附近的餐馆和商店！</p>
                <p class="info">通过允许位置访问，您可以搜索附近的餐馆和商店并获得更准确的送餐服务。</p>
            </div>
            <div class="bottom">
                <button class="open" @click="openLoad">启用位置</button>
                <button class="colse">不，我稍后再做</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      latitude: '',
      longitude: ''
    }
  },
  methods: {
    returnHomeView () {
      this.$router.push('/home')
      this.$emit('show-nav-bar')
    },
    openLoad () {
      if ('geolocation' in navigator) {
        // 检查浏览器是否支持 Geolocation API
        navigator.geolocation.getCurrentPosition(
          (position) => {
            // 成功回调
            const { latitude, longitude } = position.coords
            console.log(`纬度: ${latitude}, 经度: ${longitude}`)
            this.latitude = latitude
            this.longitude = longitude
          },
          (error) => {
            // 错误回调
            switch (error.code) {
              case error.PERMISSION_DENIED:
                console.error('用户拒绝了地理位置请求')
                break
              case error.POSITION_UNAVAILABLE:
                console.error('位置信息不可用')
                break
              case error.TIMEOUT:
                console.error('请求超时')
                break
              case error.UNKNOWN_ERROR:
                console.error('发生未知错误')
                break
            }
          },
          {
            enableHighAccuracy: true, // 是否尽可能获得更高精度的结果
            timeout: 5000, // 请求超时设置为 5 秒
            maximumAge: 0 // 禁止缓存
          }
        )
      } else {
        console.error('Geolocation 不被支持')
      }
    }
  }
}
</script>

<style lang="less" scoped>
    .gpsBox{
        width: 100dvw;
        height: 100dvh;
        position: relative;
        .returnButton{
            width: 40px;
            height: 40px;
            background-color: #1ebc5d;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 50%;
            position: absolute;
            top: 20px;
            left: 20px;
            img{
              width: 50%;
              height: 50%;
            }
        }
        .permissionBox{
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            .top{
                width: 90%;
                height: 50%;
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;

                img,p{
                    margin-bottom: 10px;
                }

                .title{
                    font-size: 20px;
                    font-weight: bold;
                    line-height: 30px;
                    text-align: center;
                }
                .info{
                    font-size: 12px;
                    line-height: 18px;
                    padding: 0 40px;
                    text-align: center;
                    color: #4F4F4F;
                }
            }
            .bottom{
                width: 90%;
                height: 15%;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                align-items: center;
                button{
                    border: none;
                    outline: none;
                    width: 90%;
                    height: 40%;
                    text-align: center;
                    border-radius: 20px;
                    font-size: 16px;
                }
                .open{
                    color: white;
                    background-color: #1ebc5d;
                }
                .colse{
                    background-color: white;
                    color: black;
                    border: 1px solid #1ebc5d;
                }
            }
        }
    }
</style>
