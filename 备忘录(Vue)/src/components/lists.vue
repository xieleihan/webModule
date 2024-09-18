<template>
    <div class="lists">
        <div v-for="(item,index) in listsArr" :key="index">
            <div class="item">
                <div class="left">
                    <input v-model="item.checked" type="checkbox" @click="updata(item.checked)" />
                    <span>{{ item.content }}</span>
                </div>
                <div class="right">
                    <button @click="remove(item.checked,index)">删除</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
    props: {
        listsArr: {
            type: Array,
            required: true
        },
        num: {
            type: Number,
            required: true
        },
        noNum: {
            type: Number,
            required: true
        },
        okNum: {
            type: Number,
            required: true
        }
    },
    methods: {
        
        remove(checked,index) {
            if (checked) {
                this.removeNum(false);
                this.removeNo(true);
            } else {
                this.removeNo(false);
                this.removeNum(false);
                
                
            }
            this.listsArr.splice(index, 1);
        },
        removeNo(bool) {
            if (!bool) {
                this.$emit('removeNo', this.noNum - 1);
                
            } else {
                this.$emit('updataOkNum', this.okNum - 1);
            }
            // 处理 removeNo 的逻辑
        },
        removeNum(bool) {
            if (!bool) {
                this.$emit('removeNum', this.num - 1);
                
            }
            console.log('Remove Num');
            // 处理 removeNum 的逻辑
        },
        updataNoNum(bool) {
            if (bool === true) {
                this.$emit('updataNoNum', this.noNum - 1);
            } else {
                this.$emit('updataNoNum', this.noNum + 1);
            }
        },
        updataOkNum(bool) {
            if (bool === true) {
                this.$emit('updataOkNum', this.okNum + 1);
            } else {
                this.$emit('updataOkNum', this.okNum - 1);
            }
            // this.$emit('updataOkNum', this.okNum + 1);
        },
        updata(checked) {
            console.log('updata');
            if (checked) {
                this.updataNoNum(false);
                this.updataOkNum(false);
                console.log('updata success');
            } else {
                this.updataNoNum(true);
                this.updataOkNum(true);
                console.log('updata fail');
            }
        }
    },
    created() {
        
    }
}
</script>

<style scoped>
.lists {
    width: 250px;
}

.item {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-bottom: 1px solid red;
    padding: 10px 0;
}
</style>