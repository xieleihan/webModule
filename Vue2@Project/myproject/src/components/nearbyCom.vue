<template>
    <div class="box">
        <!-- 模版（已经测试） -->
        <!-- <div class="item">
            <div class="left">
                <img src="https://picsum.photos/300/300?2" alt="">
            </div>
            <div class="right">
                <p class="title">这是标题</p>
                <p class="info">这是info信息</p>
                <p class="star">☆<span>5</span></p>
            </div>
        </div> -->
        <div class="item" v-for="(item,index) in listObj" :key="index">
            <div class="left">
                <img :src="item.pic" alt="">
            </div>
            <div class="right">
                <p class="title">{{ item.country }}</p>
                <p class="info">{{ item.info }}</p>
                <p class="star">☆<span>{{ item.star }}</span></p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      listObj: []
    }
  },
  created () {
    const vm = this
    function getJson () {
      const xhr = new XMLHttpRequest()
      xhr.open('GET', 'https://fastly.jsdelivr.net/gh/southaki/contentDeliveryNetwork@0.0.11/vueProjectPoint(test)/restaurant.json', true)
      xhr.send()
      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
          const res = JSON.parse(xhr.responseText)
          const length = res.data.length
          vm.listObj = []
          const selectedIndices = new Set()
          for (let i = 0; i < length; i++) {
            const index = Math.floor(Math.random() * length)
            if (!selectedIndices.has(index)) {
              selectedIndices.add(index)
              if (vm.listObj.length < 3) {
                vm.listObj.push(res.data[index])
              }
            }
          }
          console.log(vm.listObj)
        }
      }
    }
    getJson()
  }
}
</script>

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
                margin-left: 10px;
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
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }
                .star{
                    color: #1ebc5d;
                    font-size: 12px;
                }
            }
        }
    }
</style>
