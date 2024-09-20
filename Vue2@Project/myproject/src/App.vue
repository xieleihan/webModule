<template>
  <div id="app">
    <router-view @hide-nav-bar="isNavBarShow = false" @show-nav-bar="isNavBarShow = true"></router-view>
    <nav-bar v-if="isNavBarShow"></nav-bar>
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
    }
  },
  created () {
    sessionStorage.getItem('isNavBarShow') === 'false' ? this.isNavBarShow = false : this.isNavBarShow = true
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
}
#app {
  width: 100dvw;
  height: 100dvh;
  position: relative;
}
</style>
