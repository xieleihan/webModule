<template>
  <div id="app">
    <keep-alive>
      <router-view @hide-nav-bar="isNavBarShow = false" @show-nav-bar="isNavBarShow = true"></router-view>
    </keep-alive>
    <nav-bar v-if="isNavBarShow" @hide-nav-bar="hideNavBar"></nav-bar>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // 这个地方是控制是否显示底部导航栏的变量
      isNavBarShow: true
    }
  },
  watch: {
    isNavBarShow (val) {
      // console.log(val)
      this.setSessionStorage()
    }
  },
  methods: {
    setSessionStorage () {
      sessionStorage.setItem('isNavBarShow', this.isNavBarShow)
    },
    hideNavBar () {
      this.isNavBarShow = false
    }
  },
  created () {
    sessionStorage.getItem('isNavBarShow') === 'false' ? this.isNavBarShow = true : this.isNavBarShow = true
  }
}
</script>

<style lang="less">

@themeColor: #1ebc5d;
@radius: 20px;

// 定义字体文件
@font-face {
  font-family: 'zk';
  src: url('./assets/font-family/zk.ttf') format('truetype');
}

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
  font-family: 'zk';
  list-style: none;
  scrollbar-width: none;
}
#app {
  width: 100dvw;
  height: 100dvh;
  position: relative;
}
</style>
