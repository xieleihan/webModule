<template>
    <div class="search">
        <div class="returnHomeView" @click="returnHomeView">
            <img src="../assets/icon/向左箭头(1).png" alt="">
        </div>
        <div class="title">Search</div>
        <div class="container">
            <div class="input">
                <div class="searchIcon">
                    <img src="../assets/icon/search (1).png" alt="">
                </div>
                <input v-model="inputVal" type="text" placeholder="please your input like food">
            </div>
            <list-table :type="type"></list-table>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      isCheckBox: false,
      themeColor: '#ccc',
      inputVal: '',
      type: 'All'
    }
  },
  methods: {
    returnHomeView () {
      this.$router.push('/home')
      this.$emit('show-nav-bar')
      sessionStorage.setItem('activeIndex', 0)
    }
  },
  watch: {
    inputVal (val) {
      if (val === 'All' || val === 'Pizza' || val === 'Burger' || val === 'Cake' || val === 'Donut') {
        this.type = val
      } else {
        this.type = 'All'
      }
    }
  }
}
</script>

<style lang="less" scoped>
    @themeColor: #1ebc5d;
    @radius: 20px;
    .search{
        width: 100dvw;
        height: 100dvh;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        .returnHomeView{
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background-color: #fcfbff;
            display: flex;
            justify-content: center;
            align-items: center;
            position: fixed;
            top: 20px;
            left: 20px;
        }
        .title{
            font-size: 24px;
            font-weight: bold;
            position: fixed;
            top: 30px;
            left: 50%;
            transform: translateX(-50%);
        }
        .container{
            position: relative;
            width: 90%;
            height: calc(100% - 140px);
            margin: 0 auto;
            // background-color: #1ebc5d;
            .input{
                width: 100%;
                height: 50px;
                display: flex;
                flex-direction: row;
                background-color: #fcfbff;
                border-radius: @radius;
                margin-top: 10px;
                // border: 0.01px solid #ccc;
                input{
                    border: none;
                    outline: none;
                    width: 90%;
                    background-color: #fcfbff;
                    border-radius: @radius;
                    line-height: 30px;
                    display: flex;
                    align-items: center;
                    padding-left: 10px;
                    font-size: 16px;
                }
                .searchIcon{
                    width: 10%;
                    height: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    img{
                        width: 20px;
                        height: 20px;
                    }
                }
            }
        }
    }
</style>
