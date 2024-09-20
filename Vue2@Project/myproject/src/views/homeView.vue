<template>
    <div class="home">
        <div class="top">
            <div class="left">
                <img src="../assets/icon/gps.png" alt=""><span class="address">{{ address }}</span>
            </div>
            <div class="right">
              <img src="../assets/icon/购物车.png" alt="">
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      address: '',
      city: '',
      nation: '',
      obj: {}
    }
  },
  methods: {

  },
  created () {
    const vm = this
    function getCity () {
      const xhr = new XMLHttpRequest()
      xhr.open('get', 'https://ipapi.co/json/', true)
      xhr.send()
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
          const res = JSON.parse(xhr.responseText)
          vm.obj = res
          vm.city = vm.obj.country_name
          vm.nation = vm.obj.country_code
          vm.address = vm.city + ',' + vm.nation
        }
      }
    }
    getCity()
  }
}
</script>

<style lang="less" scoped>
    .home{
        width: 100%;
        height: calc(100%  - 60px);
        padding: 0 30px;
        .top{
          width: 100%;
          height: 70px;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          .left{
            width: 60%;
            height: 100%;
            display: flex;
            flex-direction: row;
            align-items: center;
            img{
              margin-right: 10px;
            }
            .address{
              font-size: 16px;
              font-weight: bold;
              letter-spacing: 3px;
            }
          }
          .right{
            height: 100%;
            width: 30px;
            display: flex;
            align-items: center;
          }
        }
    }
</style>
