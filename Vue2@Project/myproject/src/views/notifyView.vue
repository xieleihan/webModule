<template>
    <div class="notify">
        <div class="top">
            <div class="title">Notification</div>
        </div>
        <div class="iconBox">
            <div class="iconItem">
                <div class="img img1"><img src="../assets/icon/_折扣.png" alt=""></div>
                <p>Promo</p>
            </div>
            <div class="iconItem">
                <div class="img img2"><img src="../assets/icon/宝贝 (1).png" alt=""></div>
                <p>Order</p>
            </div>
            <div class="iconItem">
                <div class="img img3"><img src="../assets/icon/货车_o.png" alt=""></div>
                <p>Delivery</p>
            </div>
            <div class="iconItem">
                <div class="img img4"><img src="../assets/icon/用户 (2).png" alt=""></div>
                <p>Account</p>
            </div>
        </div>
        <my-notification></my-notification>
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
    .notify{
        width: 100dvw;
        height: calc(100dvh - 60px);
        .top{
            width: 100%;
            height: 30px;
            text-align: center;
            line-height: 30px;
            font-size: 30px;
            margin-top: 20px;
        }
        .iconBox{
            width: 90%;
            height: 70px;
            margin: 0 auto;
            display: flex;
            margin-top: 25px;
            flex-direction: row;
            align-items: center;
            justify-content: space-evenly;
            padding-bottom: 10px;
            border-bottom: 0.01px solid #ccc;
            .iconItem{
                width: 60px;
                display: flex;
                flex-direction: column;
                align-items: center;
                height: 100%;
                .img{
                    width: 40px;
                    height: 40px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border-radius: 50%;
                    // aspect-ratio: 1/1;
                    img{
                        width: 50%;
                        height: 50%;
                        aspect-ratio: 1/1;
                    }
                    &.img1{
                        background-color: #33e6f6;
                    }
                    &.img2{
                        background-color: #2473f2;
                    }
                    &.img3{
                        background-color: #ff7642;
                    }
                    &.img4{
                        background-color: #7f46c6;
                    }
                }
                p{
                    font-size: 16px;
                    text-align: center;
                    // overflow: hidden;
                    // text-overflow: ellipsis;
                    // white-space: nowrap;
                }
            }
        }
    }
</style>
