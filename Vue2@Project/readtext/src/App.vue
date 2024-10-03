<template>
  <div id="app">
    <router-view></router-view>
    <keep-alive>
      <navCom v-if="isOpen"></navCom>
    </keep-alive>
  </div>
</template>

<script>
import navCom from './components/navCom.vue'
import { mapState } from 'vuex'
export default {
  components:{
    navCom
  },
  computed: {
    ...mapState({
      isOpen: state => state.nav.isOpen // 将 isOpen 绑定到组件的计算属性
    })
  },
  created() {
    document.title = '小知书'
  },
  
}
</script>

<style lang="less">
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  list-style: none;
  font-family: zk;
}
button{
  border: none;
  outline: none;
}
@font-face {
  font-family: 'zk';
  src: url('./assets/font-family/zk.ttf') format('truetype');
}
 #app{
  width: 100dvw;
  height: 100dvh;
 }
</style>
