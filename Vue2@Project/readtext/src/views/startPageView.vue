<template>
    <div class="start">
        <van-popup v-model="show" class="popup" round>
            <div class="title">个人信息保护提示</div>
            <div class="container">
                <br />
                <p>
                    本软件授权协议（以下简称“协议”）是用户（以下简称“您”或“用户”）与 [软件公司名称]（以下简称“公司”或“我们”）之间关于
                    [软件名称]软件产品（以下简称“软件”）的法律协议。在使用或安装软件之前，请仔细阅读本协议的条款和条件。如果您不同意这些条款，请不要安装、使用或复制软件。
                </p>
                <p>
                    1. 授权许可
                    根据本协议的条款，公司授予您以下许可：
                </p>
                <p>
                    1.1 使用许可
                    公司授予您一项非排他性、不可转让、有限的许可，允许您在符合本协议条款的前提下安装、使用软件副本。
                </p>
                <p>
                    1.2 个人使用
                    该许可仅限于个人或内部商业使用，不允许将软件用于再销售或分发，除非另有书面协议。
                </p>
                <p>
                    2. 限制和禁止行为
                    2.1 禁止复制
                    您不得复制、修改、反向工程、反编译、或试图提取源代码，除非法律明文允许。
                </p>
                <p>
                    2.2 禁止转售和分发
                    您不得转售、分发、出租或租赁软件，也不得将其用于创建衍生产品，除非公司明确授权。
                </p>
                <p>
                    2.3 数据收集和隐私
                    在使用软件期间，软件可能收集并处理某些信息。有关数据收集和使用的详细信息，请参阅我们的《隐私政策》。
                </p>
                <p>
                    3. 知识产权
                    3.1 所有权
                    本软件及其所有副本的所有权利、所有权和知识产权归公司所有。软件的授权并不意味着将这些权利转让给您。
                </p>
                <p>
                    3.2 商标
                    本软件中的所有商标、服务标记、商业名称和标识均为公司的财产，未经许可不得使用。

                </p>
                <p>
                    4. 保修和责任限制
                    4.1 无明示或默示担保
                    本软件按“现状”提供，公司不对软件的性能、适用性或适合任何特定用途作出任何形式的明示或默示担保。

                </p>
                <p>
                    4.2 责任限制

                    在任何情况下，公司及其授权方对因使用或无法使用软件而导致的任何直接、间接、附带、特殊或后果性损害概不负责，即使公司已被告知可能出现此类损害。
                </p>
                <p>
                    5. 终止
                    5.1 终止条件
                    如果您违反本协议的任何条款，公司有权随时终止本协议。在终止后，您必须立即停止使用软件，并删除所有副本。

                </p>
                <p>
                    6. 协议修改

                    公司保留在不另行通知的情况下修改或更新本协议条款的权利。修改后的协议将在发布时立即生效，您继续使用软件将被视为您接受新的条款。
                </p>
                <p>
                    7. 适用法律
                    本协议受[管辖国家或地区]法律管辖，不考虑其法律冲突原则。任何与本协议相关的争议应提交[管辖法院]专属管辖。

                </p>
            </div>
            <button class="btn btn-success" @click="closePopup">同意</button>
            <button class="btn btn-danger">不同意</button>
        </van-popup>
        <div class="startContainer">
            <div class="help">帮助</div>
            <div class="iconBox">
                <img src="../assets/images/peacock_flat.png" alt="">
                <span>你的生活指南</span>
            </div>
            <div class="inputBox">
                <input type="email" placeholder="请输入邮箱">
                <input type="password" placeholder="请输入密码">
                <div class="other">
                    <div class="fotmatPassword">忘记密码</div>
                </div>
            </div>
            <div class="btnBox">
                <button class="login">登录</button>
                <button class="signup" @click="showRegister">注册</button>
            </div>
            <div class="protocolBox">
                <input type="checkbox">
                <span>我已阅读并同意<span class="click">《用户协议》</span>和<span class="click">《隐私政策》</span></span>
            </div>
        </div>
        <van-popup v-model="registerShow" closeable round position="bottom" :style="{ height: '60%' }"
            class="registerBox">
            <div class="registerCon">
                <div class="title">注册</div>
                <div class="container">
                    <input type="email" placeholder="请输入邮箱">
                    <input type="password" placeholder="请输入密码">
                    <input type="password" placeholder="请再次输入密码">
                </div>
                <button class="from">提交</button>
            </div>
        </van-popup>
    </div>
</template>

<script>
export default {
    created() {
        this.showPopup();
        this.$store.commit('nav/toggleIsOpen', !this.$store.state.nav.isOpen)
    },
    destroyed() {
        this.$store.commit('nav/toggleIsOpen', true); // 离开 error 页面时重新打开导航栏
    },
    data() {
        return {
            show: false,
            registerShow: false
        };
    },

    methods: {
        showPopup() {
            this.show = true;
        },
        showRegister() {
            this.registerShow = true;
        },
        closePopup() {
            this.show = false;
        }
    },
}
</script>

<style lang="less" scoped>
.start {
    width: 100%;
    height: 100%;
    font-size: 16px;

    .popup {
        width: 70%;
        height: 400px;
        padding: 10px;
        display: flex;
        flex-direction: column;

        .title {
            width: 100%;
            text-align: center;
            height: 50px;
            line-height: 50px;
            font-size: 20px;
        }

        .container {
            width: 100%;
            height: calc(100% - 140px);
            overflow-y: scroll;
            font-size: 14px;
            color: #878787;
        }

        .btn {
            width: 100%;
            height: 30px;
            margin-bottom: 10px;
            border-radius: 20px;

            &.btn-success {
                background-color: #ff2442;
                color: white;
                margin-top: 10px;
            }

            &.btn-danger {
                width: 50%;
                margin: 0 auto;
                background-color: transparent;
                color: #a8a8a8;
                font-size: 12px;
            }
        }
    }

    .startContainer {
        width: 100%;
        height: 100%;
        padding: 0 30px;
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;

        .help {
            right: 30px;
            position: absolute;
            top: 30px;
            color: #b3b3b3;
        }

        .iconBox {
            width: 200px;
            height: 200px;
            display: flex;
            flex-direction: column;
            align-items: center;
            color: #474747;
            letter-spacing: 10px;

            img {
                width: 100%;
                height: 100%;
            }
        }

        .inputBox {
            width: 100%;

            // height: 200px;
            input {
                border: none;
                outline: none;
                border-radius: 25px;
                padding-left: 20px;
                height: 50px;
                width: 100%;
                margin-bottom: 10px;
                border: 1px solid #ccc;
            }

            .other {
                width: 100%;
                padding: 0 20px;
                display: flex;
                flex-direction: row;
                justify-content: flex-end;
            }
        }

        .btnBox {
            width: 100%;
            display: flex;
            flex-direction: column;

            button {
                width: 100%;
                height: 35px;
                border-radius: 15px;
                margin-bottom: 15px;

                &.login {
                    background-color: #ff2442;
                    color: white;
                }

                &.signup {
                    background-color: white;
                    border: 1px solid #ff2442;
                    color: #ff2442;
                    margin-bottom: 0;
                }
            }
        }

        .protocolBox {
            width: 100%;
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
            font-size: 12px;
            justify-content: center;
            align-items: center;

            input {
                margin-right: 5px;
                appearance: none;
                position: relative;
                width: 15px;
                border: 1px solid #ccc;
                border-radius: 50%;
                height: 15px;

                &::before {
                    content: '';
                    position: absolute;
                    display: block;
                    width: 8px;
                    height: 8px;
                    border-radius: 50%;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                }

                &:checked::before {
                    width: 10px;
                    height: 10px;
                    background-color: #ff2442;
                }
            }
        }
        .click,.fotmatPassword{
            color: #ff2442;
            cursor: pointer;
            &:hover{
                text-decoration: underline;
            }
        }
    }

    .registerBox{
        // position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 60%;
        .registerCon{
            width: 90%;
            height: 90%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-around;
            .title{
                font-size: 20px;
                letter-spacing: 10px;
            }
            .container{
                width: 100%;
                input{
                    border: none;
                    outline: none;
                    border: 1px solid #ccc;
                    width: 100%;
                    height: 40px;
                    margin-bottom: 15px;
                    border-radius: 20px;
                    padding-left: 20px;
                }
            }
            .from{
                width: 100%;
                height: 50px;
                padding: 10px 0;
                display: flex;
                justify-content: center;
                align-items: center;
                background-color: #ff2442;
                border-radius: 25px;
                color: white;
            }
        }
    }
}
</style>