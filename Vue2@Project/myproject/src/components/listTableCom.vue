<template>
    <div class="listBox">
        <!-- 模版（已经测试） -->
        <!-- <div class="item">
            <div class="left">
                <img src="https://picsum.photos/300/300?3" alt="">
            </div>
            <div class="right">
                <p class="title">这是标题</p>
                <p class="star">☆<span>5</span><span class="km">距离你的位置</span><span>280m</span></p>
                <p class="pices">$10</p>
                <div class="plus">
                    <img src="../assets/icon/plus.png" alt="">
                </div>
            </div>
        </div> -->
    </div>
</template>

<style lang="less" scoped>
    .listBox{
        width: 100%;
        height: calc(100% - 60px);
        margin-top: 10px;
        overflow-y: scroll;
        scrollbar-width: none;
        .item{
            position: relative;
            padding: 10px;
            border-radius: 20px;
            border: 0.01px solid #ccc;
            margin: 0 auto;
            margin-bottom: 10px;
            width: 98%;
            height: 90px;
            display: flex;
            flex-direction: row;
            align-items: center;
            .left{
                width: 70px;
                height: 70px;
                margin-right: 10px;
                img{
                    border-radius: 20px;
                    width: 100%;
                    height: 100%;
                }
            }
            .right{
                height: 70px;
                width: calc(100% - 80px);
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                // background-color: #ccc;
                justify-content: space-evenly;
                .title{
                    font-size: 16px;
                }
                .star{
                    color: #1ebc5d;
                    font-size: 10px;
                    .km{
                        display: inline-block;
                        margin-left: 10px;
                    }
                }
                .pices{
                    font-size: 14px;
                }
                .plus{
                    position: absolute;
                    bottom: 8px;
                    right: 10px;
                    // padding: 10px;
                    width: 20px;
                    height: 20px;
                    border-radius: 50%;
                    color: white;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-size: 10px;
                    background-color: #1ebc5d;
                    img{
                        width: 15px;
                        height: 15px;
                    }
                }
            }
        }
    }
</style>
