<script>
    import axios from 'axios'


export default {
    data() {
        return {
            leftData: [],
            rightData: []
        }
    },
    methods: {
        getId(id, ele) {
            // console.log('ele:', ele);
            this.$store.commit('content/setContent',{id, ele});
            // console.log('id:', id);
            this.$router.push({
                path: '/content',
                query: {
                    id: id
                }
            })
        }
    },

    async created() {
        try {
            const response = await axios.get('http://localhost:9008/api/homeinfo');
            let { data, status } = response; // 解构响应数据
            if (status === 200) {
                let realData = data['推荐']; // 获取推荐数组
                realData.forEach((element, index) => { 
                    // console.log(element);
                    if (index % 2 === 0) {
                        this.leftData.push(element); 
                    } else {
                        this.rightData.push(element); 
                    }
                });
                // console.log('左侧数据', this.leftData);
                // console.log('右侧数据', this.rightData);
            }
        } catch (error) {
            console.error('请求数据时出错:', error); 
        }
    }
}

</script>
<template>
    <div class="edit">
        <div class="discovery">
            <div class="dis-list">
                <!-- 左 -->
                <div class="left-list">
                    <ul>
                        <li v-for="(ele,index) in leftData" v-bind:key="ele.id" @click="getId(ele.id,ele)">
                            <div class="note_item">
                                <a class="img">
                                    <img :src="ele.img">
                                </a>
                                <div class="desc">
                                    <p>
                                        {{ ele.title }}
                                    </p>
                                </div>
                                <div class="note">
                                    <a class="user">
                                        <img src="https://img.xiaohongshu.com/avatar/58f34bab02f37d35212dd9d7.jpg@120w_120h_92q_1e_1c_1x.jpg?wm=160&hm=160&q=92"
                                            alt="" />
                                        <span></span>
                                    </a>
                                    <a class="like">
                                        <img src=" data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACtklEQVRYR82XjXHTQBBGP1UAroC4AtJBkgogFcSpIKsKCBVoXQFJBSEVYCqAVECoAKhAzNPsec6OJJ8cD+FmPOORtLdvf253r9ILr2pIv5kdS3on6Sh+q6qqHpumuR1jruv6om1bZE4lPcbv3t2/98k9ATAzBBtJAPSt35Jqd7/JX5rZIuReD8gBgNwqf78BUNf1Vdu2Hh/cS/ocFvAIoPeSTuL9jbtf8t/MPkkCgPU15JLFeAM5vKmqqqxpmmWCWAOY2bWkD5Ie2HObNAmEhwB7JSltdCXpD4p2yOG1N5I+ujv61AHEpl9C+am74+bBFfmBK4FgoRy53jhn8IQHubeSzoBNAD8kzUo2yTZLHuPR5XZODNEH/DdC6+7zysyIz13uljHrtxKPLJe7E+fiZWaE4kLSOQAkHTGcu3u3YekKawAYdf32fpkXlgAQk6OpVpRCjoSiqxEAtBwdd+f8/7MVhp/8FwCdK17AA5yEWcoBqtts1/k/VHzMjHrwi9ADYFHDi8/yc0Gib1C+awA4wxSirjA8d/MSeTNDH3rnqRKmwkC3Ss2oZK/J32TW37r7IgEkL9ADKEijvWCy1hCI2GM9OdAVvr5uuHL3s32VjMmZGSWf0r/ZDbMGQ0mlUx08FFmyP7j7etjZGEgiIYGgzXbt8hCeyNo9bfs47zl9Ixl0KKZEAzGp0Qw0HmYNdD2ZGXqH0ixTSca9IaLroZyk660zY1MxMx7FYi+IEuV4axCAl1ueOC/NiYg5GT9oeQrVKEBApJwgMXeW6wy6aE7cCZBBMAkz0a7H8Z6ES+P5z5iQdyZwEUBA4E4g6JxsTEi6ES6OLy7HW9wLGM+LqmkxQFas0gzZ3ZDiOTcpAJfuTnctXpMBwmLKKQ0svxcs3B0PTVp7AWRu7243kq6nTtTFp2CSOXt8/BcXGkDOgnF7FAAAAABJRU5ErkJggg=="
                                            alt="like" />
                                        <span>{{ ele.likenum }}</span>
                                    </a>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>

                <!-- 右 -->
                <div class="right-list">
                    <ul>
                        <li v-for="(ele, index) in rightData" v-bind:key="ele.id" @click="getId(ele.id, ele)">
                            <div class=" note_item">
                            <a class="img">
                                <img :src="ele.img">
                            </a>
                            <div class="desc">
                                <p>
                                    {{ele.title}}
                                </p>
                            </div>
                            <div class="note">
                                <a class="user">
                                    <img src="https://img.xiaohongshu.com/avatar/59a19d38b46c5d74002f31cf.jpg@120w_120h_92q_1e_1c_1x.jpg?wm=160&hm=160&q=92"
                                        alt="" />
                                    <span></span>
                                </a>
                                <a class="like">
                                    <img src=" data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACtklEQVRYR82XjXHTQBBGP1UAroC4AtJBkgogFcSpIKsKCBVoXQFJBSEVYCqAVECoAKhAzNPsec6OJJ8cD+FmPOORtLdvf253r9ILr2pIv5kdS3on6Sh+q6qqHpumuR1jruv6om1bZE4lPcbv3t2/98k9ATAzBBtJAPSt35Jqd7/JX5rZIuReD8gBgNwqf78BUNf1Vdu2Hh/cS/ocFvAIoPeSTuL9jbtf8t/MPkkCgPU15JLFeAM5vKmqqqxpmmWCWAOY2bWkD5Ie2HObNAmEhwB7JSltdCXpD4p2yOG1N5I+ujv61AHEpl9C+am74+bBFfmBK4FgoRy53jhn8IQHubeSzoBNAD8kzUo2yTZLHuPR5XZODNEH/DdC6+7zysyIz13uljHrtxKPLJe7E+fiZWaE4kLSOQAkHTGcu3u3YekKawAYdf32fpkXlgAQk6OpVpRCjoSiqxEAtBwdd+f8/7MVhp/8FwCdK17AA5yEWcoBqtts1/k/VHzMjHrwi9ADYFHDi8/yc0Gib1C+awA4wxSirjA8d/MSeTNDH3rnqRKmwkC3Ss2oZK/J32TW37r7IgEkL9ADKEijvWCy1hCI2GM9OdAVvr5uuHL3s32VjMmZGSWf0r/ZDbMGQ0mlUx08FFmyP7j7etjZGEgiIYGgzXbt8hCeyNo9bfs47zl9Ixl0KKZEAzGp0Qw0HmYNdD2ZGXqH0ixTSca9IaLroZyk660zY1MxMx7FYi+IEuV4axCAl1ueOC/NiYg5GT9oeQrVKEBApJwgMXeW6wy6aE7cCZBBMAkz0a7H8Z6ES+P5z5iQdyZwEUBA4E4g6JxsTEi6ES6OLy7HW9wLGM+LqmkxQFas0gzZ3ZDiOTcpAJfuTnctXpMBwmLKKQ0svxcs3B0PTVp7AWRu7243kq6nTtTFp2CSOXt8/BcXGkDOgnF7FAAAAABJRU5ErkJggg=="
                                        alt="like" />
                                    <span>{{ele.likenum}}</span>
                                </a>
                            </div>
                </div>
                </li>
                </ul>
            </div>
        </div>
    </div>
    </div>
</template>

<style lang="less">
.edit {
    box-sizing: border-box;
    // margin-top: 60px;
}

.discovery {
    width: 100%;
    height: 100%;
    overflow: hidden;
    background: #f5f8fa;
    padding-bottom: 70px;
}

.dis-list {
    width: 100%;
    display: flex;
    flex-direction: row;
    background: #f5f8fa;
}

.left-list {
    margin-left: 5px;
    flex: 1;
    // border: 1px solid black;
}

.right-list {
    margin-right: 5px;
    flex: 1;
    // border: 1px solid black;
}

ul>li {
    width: 96%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 5px;
    font-size: 0.39rem;
    list-style: none;
}

.note_item {}

.img {
    width: 100%;
    overflow: hidden;
    width: 173.37px;
    height: 173.37px;
    background-color: #99999952;
    display: block;
}

.img img {
    width: 100%;
    // img:[lazy=loading];
    width: 100%;
}

.desc {
    width: 100%;
    height: 0.94rem;
}

.desc p {
    margin: 0.26rem;
    overflow: hidden;
    ;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}

.note {
    height: 0.63rem;
    margin: 0.22rem;
    line-height: 0.63rem;
    display: flex;
    color: #333333;
    flex-direction: row;
    justify-content: space-between;
}

.user {
    display: flex;
    color: #333333;
    font-size: 0.33rem;
    flex-direction: row;
}

.user img {
    width: 0.63rem;
    height: 0.63rem;
    margin-right: 0.13rem;
    border-radius: 50%;
    // img:[lazy=loading];
    width: 0.63rem;
    height: 0.63rem;
    margin-right: 0.13rem;
    border-radius: 50%;
}

.like {
    line-height: 0.63rem;
    display: flex;
    color: #999999;
    flex-direction: row;
}

.like img {
    margin-top: 0.13rem;
    margin-right: 0.11rem;
    width: 0.37rem;
    height: 0.37rem;
}
</style>
