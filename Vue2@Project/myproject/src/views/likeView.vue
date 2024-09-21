<template>
    <div class="like">
        <div class="title">Wishlist</div>
        <div class="container">
            <like-table></like-table>
        </div>
    </div>
</template>

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
