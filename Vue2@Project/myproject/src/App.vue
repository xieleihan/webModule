<template>
  <div id="app">
    <!-- <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <router-view/> -->
    <router-view></router-view>
    <nav-bar></nav-bar>
  </div>
</template>

<style lang="less">
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  width: 100dvw;
  height: 100dvh;
  position: relative;
}
</style>
