<template>
    <div class="like">
        <div class="title">Wishlist</div>
        <div class="container">
            <like-table></like-table>
        </div>
    </div>
</template>

<script>
export default {
  beforeRouteEnter (to, from, next) {
    next((vm) => {
      if (sessionStorage.getItem('AUTO_TOKEN') !== 'pVZsemWZjpnh9EimXFmRHJoBdvd0qMO6wzjHG0DQixDm2WdNnKEPDvbwZUSOD97kUCb31w0dUv2O7NDY7RDh723blNRTF2etm12X') {
        vm.$router.push('/lognin/loginpage')
        vm.$emit('hide-nav-bar')
      }
    })
  }
}
</script>

<style lang="less" scoped>
    .like{
        width: 100dvw;
        font-size: 16px;
        height: calc(100dvh - 50px);
        .title{
            font-size: 28px;
            width: 100%;
            height: 50px;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: 10px;
        }
        .container{
            width: 90%;
            height: 88%;
            overflow-y: scroll;
            scrollbar-width: none;
            &::-webkit-scrollbar {
                display: none;
            }
            margin: 0 auto;
        }
    }
</style>
