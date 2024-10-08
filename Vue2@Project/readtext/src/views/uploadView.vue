<template>
    <div class="upload">
        <div class="title">
            <div class="left" @click="goTopView">
                <img src="../assets/icon/向左箭头.png" alt="">
            </div>
            <div class="right">
                <img src="../assets/icon/发现.png" alt="">
            </div>
        </div>
        <van-uploader v-model="fileList" multiple class="photo" />
        <input type="text" placeholder="请输入标题" v-model="inputTitle">
        <textarea name="" id="" placeholder="请输入内容" v-model="textareaContent"></textarea>
        <div class="bottom">
            <div class="draftBox">
                <p>存草稿</p>
            </div>
            <button @click="send">发布笔记</button>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            fileList: [
                
            ],
            inputTitle: '',
            textareaContent: ''
        };
    },
    created() {
        this.$store.commit('nav/toggleIsOpen', !this.$store.state.nav.isOpen)
    },
    destroyed() {
        this.$store.commit('nav/toggleIsOpen', true); // 离开 error 页面时重新打开导航栏
    },
    methods: {
        goTopView() {
            this.$router.push('/home')
        },
        send() {
            let fordate = new Date();
            let username = sessionStorage.getItem('username');
            let faceimg = sessionStorage.getItem('faceimg');
            fordate = fordate.getFullYear() + '-' + (fordate.getMonth() + 1) + '-' + fordate.getDate() + ' ' + fordate.getHours() + ':' + fordate.getMinutes() + ':' + fordate.getSeconds();
            axios.post('http://localhost:9008/api/add', {
                hometype: '推荐',
                img: this.fileList,
                title: this.inputTitle,
                likenum: 100,
                avater: faceimg,
                avatertext: username,
                writedate: fordate,
                descinfo: this.textareaContent
            }).then(response => {
                console.log('数据插入成功', response.data);
            }).catch(error => {
                console.error('数据插入失败', error);
            });
        }
    }
}
</script>

<style lang="less" scoped>
    .upload{
        width: calc(100% - 60px);
        height: 100%;
        margin: 0 auto;
        position: relative;
        padding-top: 30px;
        font-size: 16px;
        input,textarea{
            width: 100%;
            outline: none;
            border: none;
            border: 1px solid #ccc;
            border-radius: 20px;
        }
        input{
            border: none;
            border-radius: 0;
            border-bottom: 1px solid #ccc;
            padding-bottom: 5px;
        }
        textarea{
            margin-top: 10px;
            height: 200px;
            border-radius: 5px !important;
            resize: none;
            padding: 5px;
        }
        
        .title{
            width: 100%;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            // margin-top: 30px;
            height: 50px;
            .left,.right{
                display: flex;
                justify-content: center;
                align-items: center;
            }
        }
        .photo{
            margin-top: 20px;
            margin-bottom: 20px;
        }
        .bottom{
            position: fixed;
            bottom: 0%;
            left: 50%;
            transform: translateX(-50%);
            width: 100%;
            height: 50px;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            button{
                background-color: #ff2442;
                color: white;
                padding: 20px 10px;
            }
            .draftBox{
                margin-left: 10px;
            }
        }
    }
</style>