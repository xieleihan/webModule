<template>
  <div class="homeList">
    <div class="returnBtn" @click="returnBtn">
      <img src="../../assets/icon/向左箭头.png" alt="">
    </div>
    <div class="container" v-if="infomore">
      <list-table :type="type" ></list-table>
    </div>
    <router-view @infoOpen="infomore = false" v-if="!infomore"></router-view>
  </div>
</template>

<script>
export default {
  methods: {
    returnBtn () {
      this.$emit('open')
      this.$router.push('/home')
    }
  },
  created () {
    // this.$emit('open')
    const { type } = this.$route.query
    this.type = type
    this.infomore = this.bool
  },
  data () {
    return {
      type: '',
      infomore: true
    }
  },
  props: {
    bool: Boolean
  }
}
</script>

<style lang="less" scoped>
    .homeList{
        width: 100%;
        height: calc(100dvh - 60px);
        position: relative;
        .returnBtn{
            width: 50px;
            height: 50px;
            position: absolute;
            top: 20px;
            left: 15px;
            background-color: #1ebc5d;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 50%;
            z-index: 999;
        }
        .container{
            width: 100%;
            height: calc(100% - 50px);
            position: absolute;
            top: 70px;
            padding: 0 30px;
        }
    }
</style>
