<template>
    <div class="list">
        <van-list v-model="loading" @load="onLoad">
            <!-- <van-cell v-for="item in list" :key="item" :title="item" /> -->
            <van-cell v-for="(item,index) in list" :key="item.id" @click="getTextId(item.id)">
                <div class="listcontainer">
                    <div class="left">
                        <div class="title van-multi-ellipsis--l2">{{ item.title }}</div>
                        <div class="author">{{ item.hint }}</div>
                    </div>
                    <div class="right">
                        <!-- <img :src="`${item.images[0]}`" alt="" v-lazy="`${item.images[0]}`"> -->
                        <van-image :src="`${item.images[0]}`">
                            <template v-slot:loading>
                                <van-loading type="spinner" size="20" />
                            </template>
                            <template v-slot:error>加载失败</template>
                        </van-image>
                    </div>
                </div>
                <van-divider v-if="(index + 1) % 5 === 0" content-position="left">
                    {{ history[Math.ceil(index / 5)] || '无记录' }}
                </van-divider>
            </van-cell>
        </van-list>
    </div>
</template>

<script>
import { before, detail } from '../api/index';
export default {
    data() {
        return {
            history: [],
            list: [],
            loading: false,
            finished: false,
            year: new Date().getFullYear(),
            mouth: new Date().getMonth() + 1 + 0,
            day: new Date().getDate() + 1,
            date: '',
            five: false,
            textId: ''
        };
    },
    methods: {
        // 获取某年某月的最大天数
        getDaysInMonth(year, month) {
            return new Date(year, month, 0).getDate();  // 使用0获取上个月的最后一天
        },
        async onLoad() {
            const vm = this
            // 异步更新数据
            this.mouth = this.mouth < 10 && this.mouth.length != 2 ? `0${this.mouth}` : `${this.mouth}`;
            this.day = this.day < 10 ? `0${this.day}` : this.day
            this.date = ''
            this.date = `${this.year}${this.mouth}${this.day}`
            await before(this.date)
                .then(content => {
                    console.log(content)
                    const length = content.stories.length
                    for (let i = 0; i < length; i++) {
                        vm.list.push(content.stories[i])
                    }
                    vm.history.push(content.date.substring(4, 6) + '月' + content.date.substring(6)+'日')
                }
            )
            // this.five = true
            // 日期逻辑调整
            if (this.day > 1) {
                this.day--;
            } else {
                // 获取当前月份的最大天数
                this.mouth--;
                if (this.mouth < 1) {
                    this.mouth = 12;
                    this.year--;
                }
                this.day = this.getDaysInMonth(this.year, this.mouth); // 获取上个月的最大天数
            }
            this.loading = false;
            // 数据全部加载完成
            // if (this.list.length >= 40) {
            //     this.finished = true;
            // }
        },
        async getTextId(id) {
            // const vm = this
            this.textId = id
            // console.log(this.textId)
            
            await detail(this.textId)
                .then(content => {
                    // console.log(content)
                    this.$emit('getText', content)
                    this.$emit('changeView')
                }
            )
            
        }
    },
};
</script>

<style lang="less" scoped>
    .list{
        width: 100dvw;
        .listcontainer{
            width: 100%;
            height: 100px;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            .left{
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                justify-content: center;
                .title{
                    font-weight: bold;
                    font-size: 16px;
                    margin-bottom: 5px;
                    color: #191919;
                    padding-right: 5px;
                }
                .author{
                    color: #a0a0a0;
                }
            }
            .right{
                width: 100px;
                height: 100px;
                aspect-ratio: 1;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
        }
    }
</style>