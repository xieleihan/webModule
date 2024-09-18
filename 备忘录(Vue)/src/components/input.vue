<template>
    <div>
        <input v-model="value" type="text" placeholder="请输入容易忘记的事情~~" />
        <!-- 使用 Vue 的动态类绑定 -->
        <button @click="add" :class="{ active: isOpen }">添加</button>
        <number-view :num="num" :noNum="noNum" :okNum="okNum"></number-view>
        <lists :listsArr="listsArr" :num="num" :noNum="noNum" :okNum="okNum" @removeNo="removeNo" @removeNum="removeNum"
            @updataNoNum="updataNoNum" @updataOkNum="updataOkNum"></lists>
    </div>
</template>

<script>
import numberView from "../components/numberView.vue"
import lists from "../components/lists.vue"

export default {
    components: {
        numberView,
        lists
    },
    methods: {
        add() {
            if (!this.value) {
                window.alert('请输入内容');
                return false;
            }
            let obj = {
                content: this.value,
                checked: false
            };
            this.listsArr.push(obj);
            console.log('添加成功');
            this.num++;
            this.noNum++;
            this.isOpen = true;
            // 2秒后关闭 'active' 类
            setTimeout(() => {
                this.isOpen = false;
            }, 100);
            this.value = '';
        },
        removeNo(newNoNum) {
            this.noNum = newNoNum;
            
        },
        removeNum(newNum) {
            this.num = newNum;
        },
        updataNoNum(newNoNum) {
            this.noNum = newNoNum;
        },
        updataOkNum(newOkNum) {
            this.okNum = newOkNum;
        }
    },
    data() {
        return {
            value:'',
            num: 0,
            noNum: 0,
            okNum: 0,
            isOpen: false, // 控制按钮的 'active' 类
            listsArr:[]
        }
    }
}
</script>

<style scoped>
input {
    width: 200px;
    height: 40px;
    outline: none;
    border: none;
    padding: 0 10px;
    border: 1px solid #ccc;
}

button {
    width: 50px;
    height: 40px;
    padding: 0 10px;
    outline: none;
    border: none;
}
.active{
    background-color:skyblue
}
</style>