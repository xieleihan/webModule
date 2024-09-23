<template>
    <div class="returnBtn" @click="goTopView">
        <img src="../assets/icon/向左箭头.png" alt="">
    </div>
</template>

<script>
export default {
  methods: {
    goTopView () {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="less" scoped>
    .returnBtn{
        width: 50px;
        height: 50px;
        position: absolute;
        top: 20px;
        left: 20px;
        background-color: #1ebc5d;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
    }
</style>
