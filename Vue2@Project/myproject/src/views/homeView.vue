<template>
  <div class="home">
    <div class="top">
      <router-link to="/gps">
        <div class="left" @click="hide">
          <img src="../assets/icon/gps.png" alt=""><span class="address">{{ address }}</span>
        </div>
      </router-link>
      <div class="right">
        <div class="point"></div>
        <img src="../assets/icon/购物车.png" alt="">
      </div>
    </div>
    <div class="container">
      <div class="banner">
        <div class="bannerLeft">
          <p>The Fastest</p>
          <p>Food Delivery</p>
          <button>其他现在</button>
        </div>
        <div class="bannerRight">
          <img src="../assets/images/外卖员.svg" alt="">
        </div>
      </div>
      <div class="category">
        <ul>
          <li v-for="(item, index) in categories" :key="index" :class="{ active: selectedCategory === item }"
            @click="selectCategory(item)">
            {{ item }}
          </li>
        </ul>
      </div>
      <div class="foodBox">
        <div class="foodTop">
          <span class="foodTopTitle">附近的热门美食</span>
          <span class="foodTopViewAll">
            <span>查看全部</span>
            <img src="../assets/icon/向左箭头(1).png" alt="">
          </span>
        </div>
        <div class="foodBottom">
          <!-- 模版 -->
          <div class="bottomBox">
            <img src="https://picsum.photos/300/300?1" alt="">
            <p class="foodInfo">信息</p>
            <p class="star">☆<span>5</span></p>
            <p class="piecs">$10</p>
          </div>
        </div>
      </div>
      <div class="nearby">
        <div class="nearbyTop">
          <span class="nearbyTopTitle">附近的餐厅</span>
          <span class="nearbyTopViewAll">
            <span>查看全部</span>
            <img src="../assets/icon/向左箭头(1).png" alt="">
          </span>
        </div>
        <div class="nearbyBottom">
          <my-nearby></my-nearby>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      address: '',
      city: '',
      nation: '',
      obj: {},
      categories: ['All', 'Burger', 'Pizza', 'Cake', 'Donut'], // 分类列表
      selectedCategory: 'All' // 默认选择的分类
    }
  },
  methods: {
    hide () {
      // console.log('hide')
      this.$emit('hide-nav-bar')
    },
    selectCategory (item) {
      this.selectedCategory = item // 更新选择的分类
      this.$router.push({
        path: '/home', query: { type: item }
      })
    }
  },
  created () {
    const vm = this
    function getCity () {
      const xhr = new XMLHttpRequest()
      xhr.open('get', 'https://ipapi.co/json/', true)
      xhr.send()
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
          const res = JSON.parse(xhr.responseText)
          vm.obj = res
          vm.city = vm.obj.country_name
          vm.nation = vm.obj.country_code
          vm.address = vm.city + ',' + vm.nation
        }
      }
    }
    getCity()
    const allJson = this
    function getAllJson () {
      const xhr = new XMLHttpRequest()
      xhr.open('get', 'https://fastly.jsdelivr.net/gh/southaki/contentDeliveryNetwork@0.0.9/vueProjectPoint(test)/all.json', true)
      xhr.send()
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
          const res = JSON.parse(xhr.responseText)
          allJson.allJson = res
          console.log(allJson.allJson)
        }
      }
    }
    getAllJson()
  }
}
</script>

<style lang="less" scoped>
    @radius: 20px;
    .home{
        width: 100%;
        height: calc(100%  - 60px);
        padding: 0 30px;
        .top{
          width: 100%;
          height: 70px;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          .left{
            width: 70%;
            height: 100%;
            display: flex;
            flex-direction: row;
            align-items: center;
            color: black;
            text-decoration: none;
            text-wrap: nowrap;
            img{
              margin-right: 10px;
            }
            .address{
              font-size: 16px;
              font-weight: bold;
              letter-spacing: 3px;
            }
          }
          .right{
            height: 100%;
            width: 30px;
            display: flex;
            position: relative;
            align-items: center;
            .point{
              position: absolute;
              top: 30%;
              border-radius: 50%;
              right: 0;
              content: '';
              display: block;
              width: 5px;
              background-color: #1ebc5d;
              height: 5px;
            }
          }
        }
        .container{
          width: 95%;
          height: calc(100% - 70px);
          overflow-y: scroll;
          margin: 0 auto;
          scrollbar-width: none;
          .banner{
            width: 100%;
            height: 150px;
            margin-top: 10px;
            background-color: #d2f2df;
            display: flex;
            border-radius: @radius;
            font-size: 16px;
            .bannerLeft{
              height: 100%;
              width: 50%;
              display: flex;
              padding-left: 25px;
              flex-direction: column;
              justify-content: center;
              align-items: flex-start;
              p{
                font-size: 18px;
                font-weight: 600;
              }
              button{
                margin-top: 20px;
                border: none;
                outline: none;
                background-color: #1ebc5d;
                color: white;
                padding: 10px;
                border-radius: @radius;
              }
            }
            .bannerRight{
              height: 100%;
              width: 50%;
              display: flex;
              justify-content: center;
              align-items: center;
            }
          }
          .category{
            width: 100%;
            height: 50px;
            margin-top: 10px;
            ul{
              display: flex;
              flex-direction: row;
              font-size: 14px;
              width: 100%;
              overflow: auto;
              scrollbar-width: none;
              align-items: center;
              li{
                height: 60%;
                display: flex;
                justify-content: center;
                align-items: center;
                background-color: #fcfbff;
                border-radius: @radius;
                padding: 10px 25px;
                margin-right: 10px;
              }
              .active{
                background-color: #1ebc5d;
                color: white;
              }
            }
          }
          .foodBox{
            width: 95%;
            margin: 0 auto;
            font-size: 16px;
            .foodTop{
              width: 100%;
              height: 40px;
              display: flex;
              flex-direction: row;
              justify-content: space-between;
              align-items: center;
              .foodTopTitle{
                font-weight: bold;
              }
              .foodTopViewAll{
                float: right;
                font-size: 14px;
                color: #7f7f7f;
                display: flex;
                justify-content: center;
                align-items: center;
                img{
                  margin-left: 5px;
                  width: 10px;
                  height: 10px;
                  transform: rotate(-180deg);
                }
              }
            }
            .foodBottom{
              width: 100%;
              height: 170px;
              display: flex;
              flex-direction: row;
              justify-content: space-between;
              align-items: center;
              .bottomBox{
                width: 48%;
                height: 90%;
                border-radius: @radius;
                border: 0.1px solid #ccc;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: space-around;
                box-shadow: 1px 1px 5px #ccc;
                img{
                  width: 80px;
                  height: 80px;
                }
                .foodInfo{
                  font-weight: bold;
                }
                .star{
                  font-size: 12px;
                  color: #1ebc5d;
                }
              }
            }
          }
          .nearby {
            width: 95%;
            margin: 0 auto;
            font-size: 16px;

            .nearbyTop {
              width: 100%;
              height: 40px;
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: space-between;
              .nearbyTopTitle {
                font-weight: bold;
              }

              .nearbyTopViewAll {
                float: right;
                font-size: 14px;
                color: #7f7f7f;
                display: flex;
                justify-content: center;
                align-items: center;

                img {
                  margin-left: 5px;
                  width: 10px;
                  height: 10px;
                  transform: rotate(-180deg);
                }
              }
            }
            .nearbyBottom{
              width: 100%;
              overflow-x: scroll;
              scrollbar-width: none;
              margin-top: 10px;
            }
          }
        }
    }
</style>
