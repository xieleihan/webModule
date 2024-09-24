<template>
    <div class="homeList">
        <div class="returnBtn" @click="returnBtn">
            <img src="../../assets/icon/向左箭头.png" alt="">
        </div>
        <div class="container">
            <list-table :type="type"></list-table>
        </div>
    </div>
</template>

<script>
export default {
  methods: {
    returnBtn () {
      this.$router.push('/home')
      this.$emit('open')
    }
  },
  created () {
    const { type } = this.$route.query
    this.type = type
  },
  data () {
    return {
      type: ''
    }
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
            left: 0px;
            background-color: #1ebc5d;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 50%;
        }
        .container{
            width: 100%;
            height: calc(100% - 50px);
            position: absolute;
            top: 70px;
        }
    }
</style>
