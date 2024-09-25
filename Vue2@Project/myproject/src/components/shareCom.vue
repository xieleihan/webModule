<template>
    <div class="shareCom">
        <div class="item">
            <img src="../assets/icon/wechat.png" alt="">
            <p class="desc">Wechat</p>
        </div>
        <div class="item">
            <img src="../assets/icon/QQ.png" alt="">
            <p class="desc">QQ</p>
        </div>
        <div class="item">
            <img src="../assets/icon/推特.png" alt="">
            <p class="desc">Telegram</p>
        </div>
        <div class="item">
            <img src="../assets/icon/telegram.png" alt="">
            <p class="desc">Twitter</p>
        </div>
        <div class="item">
            <img src="../assets/icon/social-instagram.png" alt="">
            <p class="desc">Instagram</p>
        </div>
        <div class="item">
            <img src="../assets/icon/更多.png" alt="">
            <p class="desc">更多</p>
        </div>
    </div>
</template>

<style lang="less" scoped>
    .shareCom{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        .item{
            width: calc(100% / 3);
            height: calc(100% / 2);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            img{
                width: 50px;
                height: 50px;
                margin-bottom: 10px;
            }
            p{
                font-size: 14px;
                text-align: center;
            }
        }
    }
</style>
