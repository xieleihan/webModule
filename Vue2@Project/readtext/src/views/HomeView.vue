<template>
  <div class="home">
    <div class="top">
      <div class="left">
        <img src="../assets/icon/发现.png" alt="">
      </div>
      <div class="center">
        <ul>
          <li :class="titleLiIndex === 0 ? 'active' : ''" @click="setTitleLi(0)">关注</li>
          <li :class="titleLiIndex === 1 ? 'active' : ''" @click="setTitleLi(1)">发现</li>
          <li :class="titleLiIndex === 2 ? 'active' : ''" @click="setTitleLi(2)">附近</li>
        </ul>
      </div>
      <div class="right">
        <img src="../assets/icon/search.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
  data() {
      return {
        titleLiIndex: 1
      }
  },
    methods: {
      setTitleLi(index){
        this.titleLiIndex = index
        switch (index) {
          case 0:
            this.$router.push({
              path: '/home',
              query: {
                type: 'focus'
              }
            })
            break;
          case 1:
            this.$router.push({
              path: '/home',
              query: {
                type: 'find'
              }
            })
            break;
          case 2:
            this.$router.push({
              path: '/home',
              query: {
                type: 'nearby'
              }
            })
            break;
        
          default:
            break;
        }
      }
  },
  created() {
    this.$router.push({
      path: '/home',
      query: {
        type: 'find'
      }
    })
  }
  }
</script>

<style lang="less" scoped>
  .home{
    width: 100%;
    height: calc(100vh - 50px);
    font-size: 16px;
    .top{
      width: 100%;
      height: 50px;
      position: relative;
      .left,.right{
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .left{
        position: absolute;
        top: 50%;
        left: 20px;
        transform: translateY(-50%);
        img{
          width: 30px;
          height: 30px;
        }
      }
      .center{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        ul{
          display: flex;
          flex-direction: row;
          color: #8c8c8c;
          li{
            position: relative;
            margin-right: 15px;
            width: 40px;
            &.active{
              color: #333333;
              &.active::before{
                content: '';
                display: block;
                width: 40px;
                height: 2px;
                background-color: #ff2442;
                position: absolute;
                bottom: -5px;
                left: -3px;
              }
            }
          }
        }
      }
      .right{
        position: absolute;
        top: 50%;
        right: 20px;
        transform: translateY(-50%);
        img{
          width: 25px;
          height: 25px;
        }
      }
    }
  }
</style>