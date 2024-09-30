<template>
  <div class="main">
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh" class="loading" success-text="刷新成功">
      <van-swipe class="my-swipe" :autoplay="4000" @change="onChange" ref="mySwipe">
        <van-swipe-item v-for="(item, index) in lastest" :key="index" @click="getTextId(index)">
          <div class="texttitle">{{ item.title }}</div>
          <div class="author">作者/{{ item.hint }}</div>
          <img :src="`${item.images[0]}`" alt="">
          <div class="gradient"
            :style="{ background: `linear-gradient(to top, ${convertColor(item.image_hue)}, transparent)` }"></div>
        </van-swipe-item>
        <template #indicator>
          <div class="custom-indicator">
            <div class="item" v-for="(item, index) in lastest" :key="index" :class="{ active: current === index }"
              @click="goToSlide(index)">
            </div>
          </div>
        </template>
      </van-swipe>
      <listCom @getText="getText" @changeView="changeView"></listCom>
    </van-pull-refresh>
  </div>
</template>

<script>
import { Toast } from 'vant';
import { latest, detail } from '../api/index';
import listCom from '../components/listCom.vue';
export default {
  components: {
    listCom
  },
  data() {
    return {
      isLoading: false,
      lastest: '',
      current: 0,
      textId: ''
    };
  },
  methods: {
    onRefresh() {
      setTimeout(() => {
        Toast('刷新成功');
        this.isLoading = false;
      }, 1000);
    },
    onChange(index) {
      this.current = index;
    },
    goToSlide(index) {
      this.current = index; // 更新当前索引
      this.$refs.mySwipe.swipeTo(index); // 切换到对应的 swiper
    },
    convertColor(color) {
      if (color.startsWith('0x')) {
        return `#${color.slice(2)}`;
      }
      return color;
    },
    getText(val) {
      this.$emit('getText', val)
      // console.log(val)
      this.$router.push('/home/read')
    },
    changeView() {
      this.$emit('changeView')
    },
    async getTextId(index) {
      // const vm = this
      this.textId = this.lastest[index].id
      // console.log(this.textId)

      await detail(this.textId)
        .then(content => {
          // console.log(content)
          this.$emit('getText', content)
          this.$emit('changeView')
          this.$router.push('/home/read')
        }
        )

    }
  },
  async created(){
    await latest()
    .then(content =>{
      // console.log(content)
      this.lastest = content.stories
    })
  },
  
  }
</script>

<style lang="less" scoped>
  .main{
    width: 100%;
    height: calc(100% - 70px);
    
    .loading{
      width: 100%;
      position: relative;
    }
    
    .my-swipe{
      .texttitle{
        font-size: 16px;
        position: absolute;
        color: white;
        bottom: 55px;
        padding: 0 15px;
        font-weight: bold;
        z-index: 996;
      }
      .author{
        font-size: 12px;
        position: absolute;
        bottom: 30px;
        padding: 0 15px;
        color: white;
        z-index: 996;
      }
      .gradient{
        width: 100%;
        position: absolute;
        bottom: 0px;
        height: 80%;
        z-index: 10;
      }
      .custom-indicator {
          position: absolute;
          right: 5px;
          bottom: 15px;
          padding: 2px 5px;
          font-size: 12px;
          display: flex;
          flex-direction: row;
          // background: rgba(0, 0, 0, 0.1);
          .item{
            width: 10px;
            height: 10px;
            border-radius: 50%;
            margin-right: 5px;
            background-color: #ccc;
            transition: all 0.5s;
            &.active{
              background-color: #fff;
              width: 20px;
              border-radius: 20px;
            }
          }
        }
    }

    .my-swipe .van-swipe-item {
      img{
        width: 100%;
        height: 100%;
      }
    }
  }
</style>