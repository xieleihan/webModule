<template>
    <div>
        <nav class="nav">
            <ul>
                <div class="left">
                    <li @click="setActive(0)">
                        <router-link to="/home" :class="activeIndex === 0 ? 'active': ''">
                            首页
                        </router-link>
                    </li>
                    <li @click="setActive(1)">
                        <router-link to="/shopping" :class="activeIndex === 1 ? 'active': ''">
                            购物
                        </router-link>
                    </li>
                </div>
                <li class="search" @click="setActive(2)">
                    <router-link to="/search" style="color: white;font-size: 35px">
                        +
                    </router-link>
                </li>
                <div class="right">
                    <li @click="setActive(3)">
                        <router-link to="/sms" :class="activeIndex === 3 ? 'active' : ''">
                            消息
                        </router-link>
                    </li>
                    <li @click="setActive(4)">
                        <router-link to="/user" :class="activeIndex === 4 ? 'active' : ''">
                            我的
                        </router-link>
                    </li>
                </div>
            </ul>
        </nav>
    </div>
</template>

<script>
export default {
    data() {
        return {
            activeIndex: 0, // 用于存储当前点击的li索引
        }
    },
    methods: {
        setActive(index) {
            this.activeIndex = index // 更新选中的li索引
            sessionStorage.setItem('activeIndex', index) // 将选中的li索引存储到sessionStorage中
        }
    },
    created() {
        // 从sessionStorage中获取选中的li索引
        const storedIndex = sessionStorage.getItem('activeIndex')
        this.activeIndex = storedIndex ? parseInt(storedIndex, 10) : 0
    }
}
</script>

<style lang="less" scoped>
    .nav {
        width: 100%;
        height: 60px;
        position: fixed;
        bottom: 0;
        z-index: 999 !important;
        left: 0;
        background-color: white;
        a{
            color: #8f8f8f;
            font-size: 16px;
        }

        ul {
            border-top: 1px solid #ccc;
            width: 100%;
            height: 100%;
            padding: 0;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            list-style: none;
            position: relative;
            // 移除点击高亮
            -webkit-tap-highlight-color: transparent;

            .left,
            .right {
                width: 40%;
                display: flex;
                justify-content: space-evenly;
                align-items: center;
                li{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-weight: bold;
                }
            }

            .search {
                display: flex;
                justify-content: center;
                align-items: center;
                border-radius: 10px;
                width: 60px;
                height: 40px;
                background-color: #ff2442;
                padding: 5px 0;
            }
            .active{
                color: #333333;
            }
        }
    }
</style>