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
    <div class="item" v-for="(item,index) in listObj" :key="index" @click="goToInfo(index,type, item.name, item.price)">
      <div class="left">
        <img :src="item.pic" alt="">
      </div>
      <div class="right">
        <p class="title">{{ item.name }}</p>
        <p class="star">☆<span>{{item.star}}</span><span class="km">距离你的位置</span><span>280m</span></p>
        <p class="pices">${{item.price}}</p>
        <div class="plus">
          <img src="../assets/icon/plus.png" alt="">
        </div>
      </div>
    </div>
    <van-popup class="pop" v-model="show" closeable round position="bottom" :style="{ height: '80%' }">
      <div class="top">
        <img :src="`https://picsum.photos/1920/1080?${this.card.index}`" alt="">
      </div>
      <div class="title">
        <div class="name">{{ this.card.name }}</div>
        <div class="pices">${{ this.card.pices }}</div>
      </div>
      <temporary-storage :name="this.card.name" :picel="card.pices" @update="updatePices"></temporary-storage>
    </van-popup>
  </div>
</template>

<script>
export default {
  methods: {
    goToInfo (index, type, name, pices) {
      this.card = { index, type, name, pices }
      this.show = true
      // sessionStorage.setItem('pleaseOpen', true)
      // this.$router.push({ path: '/home/homelist/infomore', query: { type, name, pices } })
    },
    updatePices (val) {
      this.card.pices = val
    }
  },
  props: {
    type: { type: String }
  },
  created () {
    // console.log(this.type, '这是从组件传值的')
    const xhr = new XMLHttpRequest()
    if (this.type === 'All') {
      xhr.open('GET', 'https://fastly.jsdelivr.net/gh/southaki/contentDeliveryNetwork@0.0.10/vueProjectPoint(test)/all.json', true)
      xhr.send()
      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
          const res = JSON.parse(xhr.responseText)
          // this.listObj = res.all
          const length = res.all.length
          this.listObj = []
          for (let i = 0; i < length; i++) {
            this.listObj.push(res.all[i])
          }
        //   console.log(this.listObj)
        }
      }
    } else {
      xhr.open('GET', `https://fastly.jsdelivr.net/gh/southaki/contentDeliveryNetwork@0.0.10/vueProjectPoint(test)/${this.type}.json`, true)
      xhr.send()
      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
          const res = JSON.parse(xhr.responseText)
          //   console.log(res.data)
          const length = res.data.length
          this.listObj = []
          for (let i = 0; i < length; i++) {
            this.listObj.push(res.data[i])
          }
        }
      }
    }
  },
  data () {
    return {
      listObj: [],
      show: false,
      card: ''
    }
  },
  watch: {
    type (val) {
      const xhr = new XMLHttpRequest()
      if (val === 'All') {
        xhr.open('GET', 'https://fastly.jsdelivr.net/gh/southaki/contentDeliveryNetwork@0.0.10/vueProjectPoint(test)/all.json', true)
        xhr.send()
        xhr.onreadystatechange = () => {
          if (xhr.readyState === 4 && xhr.status === 200) {
            const res = JSON.parse(xhr.responseText)
            // this.listObj = res.all
            const length = res.all.length
            this.listObj = []
            for (let i = 0; i < length; i++) {
              this.listObj.push(res.all[i])
            }
          //   console.log(this.listObj)
          }
        }
      } else {
        xhr.open('GET', `https://fastly.jsdelivr.net/gh/southaki/contentDeliveryNetwork@0.0.10/vueProjectPoint(test)/${val}.json`, true)
        xhr.send()
        xhr.onreadystatechange = () => {
          if (xhr.readyState === 4 && xhr.status === 200) {
            const res = JSON.parse(xhr.responseText)
            //   console.log(res.data)
            const length = res.data.length
            this.listObj = []
            for (let i = 0; i < length; i++) {
              this.listObj.push(res.data[i])
            }
          }
        }
      }
    }
  }
}
</script>

<style lang="less" scoped>
    .listBox{
        width: 100%;
        height: calc(100% - 30px);
        margin-top: 10px;
        overflow-y: scroll;
        scrollbar-width: none;
        // background-color: #1ebc5d;
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
          .pop{
            width: 100%;
            .top{
              width: 100%;
              height: 200px;
              img{
                width: 100%;
                height: 100%;
              }
            }
            .title{
              margin-top: 10px;
              width: 100%;
              padding: 0 20px;
              display: flex;
              flex-direction: row;
              align-items: center;
              font-size: 30px;
              justify-content: space-between;
              .pices{
                color: #1ebc5d;
                font-size: 10px;
              }
            }
          }
    }
</style>
