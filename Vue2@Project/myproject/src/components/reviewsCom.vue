<template>
    <div class="reviews">
        <div class="item">
            <div class="top">
                <img src="https://picsum.photos/300/300?2" alt="">
            </div>
            <div class="container">
                <div class="title">Akima akter</div>
                <div class="starBox">
                    <div class="star">☆☆☆☆☆</div>
                    <div class="date">June 6,2021</div>
                </div>
                <div class="info">The good quality,The chair is a good size,world recommended this product</div>
                <div class="desc">
                    <div class="left">Was the review Helpful?</div>
                    <div class="rigth">
                        <button class="btn">Yes</button>
                        <button class="btn">No</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="less" scoped>
    .reviews{
        width: 100%;
        height: 100%;
        .item{
            width: 100%;
            height: 100%;
            position: relative;
            .top{
                width: 50px;
                height: 50px;
                border-radius: 50%;
                overflow: hidden;
                position: absolute;
                top: 10px;
                z-index: 999;
                left: 10px;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
            .container{
                width: 90%;
                height: 70%;
                position: absolute;
                top: 30px;
                left: 40px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                background-color: aliceblue;
                padding-left: 20px;
                .title{
                    font-size: 20px;
                    font-weight: bold;
                    color: #393939;
                }
                .starBox{
                    margin-top: 5px;
                    margin-bottom: 5px;
                    display: flex;
                    flex-direction: row;
                    width: calc(100% - 20px);
                    justify-content: space-between;
                    align-items: center;
                    color: #1ebc5d;
                    .date{
                        color: #8f8f8f;
                        font-size: 10px;
                    }
                }
                .info{
                    color: #383839;
                }
                .desc{
                    margin-top: 10px;
                    display: flex;
                    flex-direction: row;
                    font-size: 10px;
                    width: calc(100% - 20px);
                    justify-content: space-between;
                    align-items: center;
                    button{
                        border: none;
                        outline: none;
                        background-color: transparent;
                        color: #8f8f8f;
                        margin-right: 5px;
                        border-radius: 20px;
                        border: 1px solid #8f8f8f;
                        padding: 5px 10px;
                    }
                }
            }
        }
    }
</style>
