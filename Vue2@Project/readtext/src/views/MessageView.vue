<script>
import axios from 'axios'


export default {
    data() {
        return {
            allMessage:[]
        }
    },
    methods: {},

    async created() {
        try {
            const response = await axios.post('http://localhost:9008/api/query-sms', { 'username': 'szy', 'smsdate': '2024-10-05 00:00:00', 'smstype': '收藏'});
            let { data, status } = response; // 解构响应数据
            if (status === 200) {
                this.allMessage=data.data;                           
            }
        } catch (error) {
            console.error('请求数据时出错:', error);
        }
    }
}

</script>
<template>
    <div class="message-box">
        <header class="layout-header">消息</header>
        <div class="nav-item">
            <ul>
                <li>
                    <a class="like imgs">
                        <van-icon name="like" dot color="red" size="25" />
                    </a>
                    <div class="text">
                        <p>赞和收藏</p>
                    </div>
                </li>
                <li>
                    <a class="newFollow imgs">
                        <van-icon name="manager" badge="99+" color="skyblue" size="25" />
                    </a>
                    <div class="text">
                        <p>新增关注</p>
                    </div>
                </li>
                <li>
                    <a class="comments imgs">
                        <van-icon name="chat" badge="99+" color="lightgreen" size="25" />
                    </a>
                    <div class="text">
                        <p>评论和@</p>
                    </div>
                </li>
            </ul>
        </div>

        <div class="content-list">
            <ul>
                <li v-for="item in allMessage" v-bind:key="item.id">
                    <div class="user-img">
                        <img src="https://img.xiaohongshu.com/avatar/59a19d38b46c5d74002f31cf.jpg@120w_120h_92q_1e_1c_1x.jpg?wm=160&hm=160&q=9">
                    </div>
                    <div class="items">
                        <div class="title">
                            <p>{{item.avatername}}</p>
                        </div>
                        <div class="content">
                            <p>{{item.container}}</p>
                        </div>
                    </div>
                    <div class="date">
                        <p>{{ item.smsdate.slice(5, 10) }}</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<style lang="less" scoped>
.message-box{
    // background-color: antiquewhite;
}
.layout-header{
    text-align: center;
    font-size: 16px;
    margin-top: 10px;
    font-family: Arial, Helvetica, sans-serif;
}
.nav-item{
    margin-top: 20px;
}
.nav-item ul{
    display: flex;
    justify-content: space-around;
    
}
.nav-item ul li{
    display: flex;
    flex-direction: column;
    align-items: center;
}

.nav-item ul li .imgs{
padding-top: 10px;
text-align: center;
}
.nav-item ul li .img img{
    
}
.nav-item ul li .text{
    margin-top: 10px;
}
.nav-item ul li .text p{
    font-size: 15px;
    font-family: Arial, Helvetica, sans-serif;
}


.content-list{
    margin-top: 20px;
    font-family: Arial, Helvetica, sans-serif;
}
.content-list ul{
    margin-top: 20px;
}
.content-list ul li{
    display: flex;
    margin: 30px 0;
}
.content-list ul li .user-img{
    width: 55px;
    height: 55px;
    margin: 0 10px;
    
}
.content-list ul li .user-img img{
    display: block;
    width: 100%;
    border-radius: 50%;
}
.content-list ul li .items{
    width: 235px;
}
.content-list ul li .items .title{
    margin-bottom: 10px;
}
.content-list ul li .items .title p{
    font-size: 16px;
    font-family: Arial, Helvetica, sans-serif;
}
.content-list ul li .items .content{

}
.content-list ul li .items .content p{
    font-size: 14px;
    overflow: hidden;;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    color: rgba(209, 205, 205);
    font-family: Arial, Helvetica, sans-serif;
}
.content-list ul li .date{
    width: 45px;
}
.content-list ul li .date p{
    font-size: 14px;
    color: rgba(209, 205, 205);
    font-family: Arial, Helvetica, sans-serif;
    letter-spacing: 1px;
}
</style>

