<template>
    <div>
        <nav class="nav">
            <ul>
                <div class="left">
                    <li @click="setActive(0)">
                        <router-link to="/">
                            <img :src="activeIndex === 0 ? require('../assets/icon/home (1).png') : require('../assets/icon/home.png')"
                                alt="">
                        </router-link>
                    </li>
                    <li @click="setActive(1)">
                        <router-link to="/like">
                            <img :src="activeIndex === 1 ? require('../assets/icon/like_fill (1).png') : require('../assets/icon/like_fill.png')"
                                alt="">
                        </router-link>
                    </li>
                </div>
                <li class="search" @click="setActive(2)">
                    <router-link to="/search">
                        <img :src="activeIndex === 2 ? require('../assets/icon/search.png') : require('../assets/icon/search.png')"
                            alt="">
                    </router-link>
                </li>
                <div class="right">
                    <li @click="setActive(3)">
                        <router-link to="/sms">
                            <img :src="activeIndex === 3 ? require('../assets/icon/提醒 (1).png') : require('../assets/icon/提醒.png')"
                                alt="">
                        </router-link>
                    </li>
                    <li @click="setActive(4)">
                        <router-link to="/user">
                            <img :src="activeIndex === 4 ? require('../assets/icon/用户 (1).png') : require('../assets/icon/用户.png')"
                                alt="">
                        </router-link>
                    </li>
                </div>
            </ul>
        </nav>
    </div>
</template>

<script>
export default {
  data () {
    return {
      activeIndex: 0 // 用于存储当前点击的li索引
    }
  },
  methods: {
    setActive (index) {
      this.activeIndex = index // 更新选中的li索引
      sessionStorage.setItem('activeIndex', index) // 将选中的li索引存储到sessionStorage中
      if (sessionStorage.getItem('activeIndex') === '4' || sessionStorage.getItem('activeIndex') === '2') {
        this.$emit('hide-nav-bar')
        // console.log('hide')
      }
    }
  },
  created () {
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
        }

        .search {
            position: absolute;
            display: flex;
            justify-content: center;
            align-items: center;
            top: -50%;
            left: 50%;
            transform: translate(-50%, 0);
            border-radius: 50%;
            width: 60px;
            height: 60px;
            background-color: #1ebc5d;
        }
    }
}
</style>
