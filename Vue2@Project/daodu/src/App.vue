<template>
  <div id="app">
    <my-nav v-if="isOpen"></my-nav>
    <router-view v-if="isOpen" class="container" name="home" @changeView="changeView" @getText="getText"></router-view>
    <router-view v-if="!isOpen" name="read" :textObj="html" @changeView="changeView"></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: true,
      html: ''
    }
  },
  methods: {
    changeView() {
      this.isOpen = !this.isOpen
    },
    getText(val) {
      this.html = val
      // console.log(this.html)
    }
  }
}
</script>

<style lang="less">
  #app{
    width: 100dvw;
    height: 100dvh;
    position: relative;
    .container{
      width: 100dvw;
      height: calc(100dvh - 50px);
      // overflow: hidden;
      overflow-y: scroll;
      margin-top: 70px;
    }
  }
</style>
