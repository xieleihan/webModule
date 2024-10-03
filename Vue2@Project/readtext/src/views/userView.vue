<template>
  <div>

  </div>
</template>

<script>
export default {
  beforeRouteEnter(to, from, next) {
    next(vm => {
      const token = sessionStorage.getItem('AUTO_TOKEN');
      if (!token) { // 如果 token 为 null 或空字符串
        vm.$router.push('/home');
      }
    });
  }

}
</script>

<style lang="less" scoped></style>