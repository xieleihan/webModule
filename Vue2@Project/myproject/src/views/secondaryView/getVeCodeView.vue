<template>
    <div class="getCode">
        <return-btn></return-btn>
        <div class="container">
            <div class="title">Verification Code</div>
            <div class="info">
                <p>Type the verification code</p>
                <p>We've sent you <span>{{ type }}</span></p>
            </div>
            <div class="inputBox">
                <input type="text" pattern="[0-9]*" maxlength="1" title="只能输入数字">
                <input type="text" pattern="[0-9]*" maxlength="1" title="只能输入数字">
                <input type="text" pattern="[0-9]*" maxlength="1" title="只能输入数字">
                <input type="text" pattern="[0-9]*" maxlength="1" title="只能输入数字">
            </div>
            <div class="reset">Resend code in 00:48</div>
            <button>Confirm</button>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      type: ''
    }
  },
  created () {
    this.type = this.$route.query.type
  }
}
</script>

<style lang="less" scoped>
    .getCode{
        width: 100dvw;
        height: 100dvh;
        position: relative;
        font-size: 16px;
        .container{
            width: 90%;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            .title{
                font-size: 20px;
                font-weight: bold;
                margin-bottom: 10px;
                letter-spacing: 3px;
            }
            .info{
                font-size: 14px;
                color: #666666;
                margin-bottom: 20px;
            }
            .inputBox{
                width: 100%;
                height: 70px;
                display: flex;
                flex-direction: row;
                justify-content: space-evenly;
                align-items: center;
                margin-bottom: 20px;
                input{
                    border: none;
                    outline: none;
                    width: 50px;
                    height: 50px;
                    background-color: #fcfbff;
                    color: #4f4f4f;
                    text-align: center;
                    line-height: 50px;
                    font-weight: bold;
                    border-radius: 20px;
                }
            }
        }
    }
</style>
