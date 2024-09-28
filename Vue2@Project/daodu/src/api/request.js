// axios 文档地址：https://www.axios-http.cn/docs/intro
// 导入axios
import axios from "axios";
// 创建axios实例
const http = axios.create({
    // 后台服务器地址 （不写这个配置也没有问题，就是以后请求接口的时候，填写完成的地址即可）
    baseURL: 'https://apis.netstart.cn/zhihudaily/',
    // 请求超时
    timeout: 1000 * 60,
    // 请求头部信息 （可以也可以通过headers携带参数发送给后台）
    // headers: { 'X-Custom-Header': 'foobar' }
})

// 添加响应拦截器
http.interceptors.response.use(function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    return response.data;
}, function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    return Promise.reject(error);
});

// 导出这个实例
export default http