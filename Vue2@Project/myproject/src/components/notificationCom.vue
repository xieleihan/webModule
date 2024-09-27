<template>
    <div class="notificationCom">
        <!-- 模版（已经测试） -->
        <p class="time">Today</p>
        <ul class="box">
            <li>
                <div class="img">
                    <img src="../assets/icon/_折扣.png" alt="">
                </div>
                <div class="right">
                    <p class="title">Order Success</p>
                    <p class="nTime">1 min ago</p>
                    <p class="info">这是一个信息这是一个信息,描述这是一个信息,描述这是一个信息,描述,描述</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<style lang="less" scoped>
    .notificationCom{
        width: 90%;
        margin: 0 auto;
        .time{
            width: 100%;
            font-size: 20px;
            height: 20px;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            margin: 10px 0;
        }
        .box{
            width: 100%;
            font-size: 16px;
            li{
                width: 100%;
                height: 80px;
                display: flex;
                justify-content: flex-start;
                align-items: center;
                border: 0.01px solid #ccc;
                box-shadow: 1px 1px 5px #ccc;
                border-radius: 20px;
                margin-bottom: 10px;
                .img{
                    width: 40px;
                    height: 40px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    margin: 0 10px;
                    // background-color: #ccc;
                    border-radius: 50%;
                    img{
                        width: 50%;
                        height: 50%;
                    }
                }
                .right{
                    width: calc(100% - 60px);
                    height: 70%;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-evenly;
                    align-items: flex-start;
                    .nTime{
                        font-size: 10px;
                        color: #7f7f7f;
                    }
                    .info{
                        font-size: 10px;
                        color: #7f7f7f;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                        width: 70%;
                    }
                }
            }
        }
    }
</style>
