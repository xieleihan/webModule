<template>
    <div class="box">
        <div class="item">
            <div class="left">
                <img src="https://picsum.photos/300/300?2" alt="">
            </div>
            <div class="right">
                <p class="title">这是标题</p>
                <p class="info">这是info信息</p>
                <p class="star">☆<span>5</span></p>
            </div>
        </div>
        <div class="item">
            <div class="left">
                <img src="https://picsum.photos/300/300?2" alt="">
            </div>
            <div class="right">
                <p class="title">这是标题</p>
                <p class="info">这是info信息</p>
                <p class="star">☆<span>5</span></p>
            </div>
        </div>
        <div class="item">
            <div class="left">
                <img src="https://picsum.photos/300/300?2" alt="">
            </div>
            <div class="right">
                <p class="title">这是标题</p>
                <p class="info">这是info信息</p>
                <p class="star">☆<span>5</span></p>
            </div>
        </div>
    </div>
</template>

<style lang="less" scoped>
    .box{
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
        margin-bottom: 20px;
        height: 100%;
        .item{
            width: 80%;
            height: 90px;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            border: 0.01px solid #ccc;
            padding: 0 10px;
            border-radius: 20px;
            margin-right: 10px;
            box-shadow: 1px 1px 5px #ccc;
            .left{
                width: 70px;
                height: 70px;
                aspect-ratio: 1/1;
                margin-right: 10px;
                img{
                    width: 100%;
                    height: 100%;
                    border-radius: 20px;
                }
            }
            .right{
                width: 70%;
                height: 60%;
                display: flex;
                flex-direction: column;
                justify-content: space-evenly;
                align-self: center;
                text-wrap: nowrap;
                p{
                    font-size: 12px;
                }
                .title{
                    font-weight: bold;
                    font-size: 16px;
                }
                .info{
                    color: #8f8f8f;
                    font-size: 10px;
                    letter-spacing: 2px;
                }
                .star{
                    color: #1ebc5d;
                    font-size: 12px;
                }
            }
        }
    }
</style>
