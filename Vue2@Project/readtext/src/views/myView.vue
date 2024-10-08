<script>
import myNote from '@/components/myNote.vue';
import myCollect from '@/components/myCollect.vue';
import myLike from '@/components/myLike.vue';
import axios from 'axios';

import Vue from 'vue';
import { Dialog } from 'vant';
Vue.use(Dialog);
export default {
    data() {
        return {
            showDefault: false,//是否显示自己的头像 true为已上传图片
            myEmail:'',
            myUsername:'',
            myFaceImg:''
        }
    },
    components: {
        myNote,
        myCollect,
        myLike,
        [Dialog.Component.name]: Dialog.Component
    },
    methods: {
        changeShowDefault(num) {
            this.showDefault = num;
        },
        quitWay(){
            Dialog.confirm({
                title: '温馨提示',
                message: '你做好退出账号准备了吗',
            })
                .then(() => {
                    this.$router.replace('/startPage')
                })
                .catch(() => {
                    // on cancel
                });
        }
    },
    async created() {
        try {
            const strCookie = document.cookie;
            
            let thisname=strCookie.split('-')[1];
            let thisemail = strCookie.split('-')[2];
            // console.log(strCookie1);
            this.myEmail=thisemail;
            this.myUsername=thisname;

            

            //此处 username为写死的，到时候需要传登录界面传过来的参数
            const response = await axios.post('http://localhost:9008/api/get-user-faceimg',{'username':`${this.myUsername}`});
            let { data, status } = response; // 解构响应数据
            if (status === 200) {
                let { faceImg, username }=data.data;
                this.myFaceImg=faceImg;
                this.myUsername = username;
                sessionStorage.setItem('username', this.myUsername);
                sessionStorage.setItem('faceimg', this.myFaceImg);
            }
            
        } catch (error) {
            console.error('请求数据时出错:', error);
        }
    }
}
</script>
<template>
    <div class="app">
        <div class="up">
            <div class="first">
                <div class="left">
                    <div class="one" @click="quitWay"><img src="../assets/icon/目录.png"></div>
                </div>
                <div class="right">
                    <div class="two"><img src="../assets/icon/图片.png">设置背景</div>
                    <div class="three"><img src="../assets/icon/222扫一扫、扫描.png"><img src="../assets/icon/分享.png"></div>
                </div>

            </div>
            <div class="second">
                <div class="left">
                    <div class="face">
                        <img v-if="showDefault" :src="myFaceImg" class="myface">
                        <img src="../assets/icon/1加号.png" class="changeFace">
                    </div>
                </div>
                <div class="right">
                    <!-- 昵称 不要超过18个中文 -->
                    <div class="one">{{myUsername}}</div>
                    <!-- 小红书号 不要超过18位 -->
                    <div class="two">小知书号：<span>{{myEmail}}</span><img src="../assets/icon/二维码.png"></div>
                </div>
            </div>
            <div class="third">
                <div class="one">简介：夜好深了 紙窗裏怎麼亮著</div>
                <div class="two"><img src="../assets/icon/性别男.png"></div>
                <div class="three">
                    <div class="left">
                        <div>
                            <div class="d1">99+</div>
                            <div class="d2">关注</div>
                        </div>
                        <div>
                            <div class="d1">99+</div>
                            <div class="d2">粉丝</div>
                        </div>
                        <div>
                            <div class="d1">99+</div>
                            <div class="d2">获赞与收藏</div>
                        </div>
                    </div>
                    <div class="right">
                        <div class="d1">编辑资料</div>
                        <div class="d2"><img src="../assets/icon/设置.png"></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="down">
            <div class="one">
                <div class="left">
                    <div :class="showDefault==0?'active':''" @click="changeShowDefault(0)">笔记</div>
                    <div :class="showDefault==1?'active':''" @click="changeShowDefault(1)">收藏</div>
                    <div :class="showDefault==2?'active':''" @click="changeShowDefault(2)">赞过</div>
                </div>
                <div class="right"><img src="../assets/icon/search.png"></div>
            </div>
            <div class="two">
                <div class="note" v-if="showDefault==0?true:false">
                    <myNote/>
                </div>
                <div class="collect" v-if="showDefault == 1 ? true : false">
                    <myCollect/>
                </div>
                <div class="like" v-if="showDefault == 2 ? true : false">
                    <myLike/>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="less" scoped>
.app {
    .up {
        padding: 15px 20px;
        background-color: #454665;
        .first {
            display: flex;
            height: 30px;
            align-items: center;
            justify-content: space-between;

            img {
                width: 20px;
                height: 20px;
            }

            .left {
                .one {}
            }

            .right {
                display: flex;

                .two {
                    background-color: #676d83;
                    border-radius: 10px;
                    padding: 0 8px;
                    font-size: 12px;
                    color: white;
                    display: flex;
                    align-items: center;
                    line-height: 25px;

                    img {
                        width: 15px;
                        height: 15px;
                    }
                }

                .three {
                    img {
                        margin-left: 15px;
                    }
                }

            }
        }

        .second {
            color: #a0a2b1;
            margin-top: 20px;
            display: flex;

            .left {
                .face {
                    position: relative;
                    border-radius: 50%;
                    // border: 1px solid red;
                    width: 80px;
                    height: 80px;
                    background-size: 50px 50px;
                    background-repeat: no-repeat;
                    background-position: 15px 15px;
                    background-color: white;
                    background-image: url(../assets/icon/卡通人像.png);

                    .changeFace {
                        position: absolute;
                        width: 25px;
                        height: 25px;
                        right: 0;
                        bottom: 0;
                        background-color: black;
                        border-radius: 50%;
                    }

                    .myface {
                        position: absolute;
                        width: 80px;
                        height: 80px;
                        border-radius: 50%;
                        // z-index: 10;
                    }
                }
            }

            .right {
                font-size: 13px;
                height: 50px;
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                margin-top: 15px;
                padding-left: 15px;

                img {
                    width: 15px;
                    height: 15px;
                }

                .one {}

                .two {
                    display: flex;
                    align-items: center;

                    img {
                        margin-left: 8px;
                    }
                }
            }
        }

        .third {
            .one {
                margin-top: 15px;
                font-size: 14px;
                color: #dadee3;
            }

            .two {
                margin-top: 15px;
                // border: 1px solid red;
                width: 30px;
                height: 20px;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 10px;
                background-color: #81818d;

                img {
                    width: 15px;
                    height: 15px;
                }
            }

            .three {
                margin-top: 15px;
                color: #d3d6da;
                display: flex;
                justify-content: space-between;

                .left {
                    display: flex;

                    >div {
                        // border: 1px solid red;
                        padding: 0 8px;

                        .d1 {
                            font-size: 14px;
                            display: flex;
                            justify-content: center;
                        }

                        .d2 {
                            font-size: 10px;
                        }
                    }
                }

                .right {
                    display: flex;

                    img {
                        width: 16px;
                        height: 16px;
                    }

                    .d1 {
                        border: 1px solid #d3d6da;
                        display: flex;
                        align-items: center;
                        padding: 0 8px;
                        border-radius: 10px;
                        font-size: 12px;
                        margin-right: 10px;
                    }

                    .d2 {
                        border: 1px solid #d3d6da;
                        border-radius: 15px;
                        display: flex;
                        align-items: center;
                        padding: 0 10px;


                    }
                }
            }
        }
    }
    .down{
        padding: 0px 20px;
        .one{
            display: flex;
            color: #b1b1b1;
            font-size: 17px;
            border-bottom: 1px solid rgba(128, 128, 128, 0.352);
            padding: 10px 0;
            justify-content: space-between;
            .left{
                display: flex;
                // border: 1px solid red;
                >div{
                    padding: 5px 5px;
                    margin-right: 8px;
                }
                .active{
                    border-bottom: 3px solid red;
                    color: black;
                }
            }
            .right{
                    // border: 1px solid red;
                    display: flex;
                    align-items: center;
                img{
                    width: 15px;
                    height: 15px;
                }
            }
        }
    }
}
</style>
