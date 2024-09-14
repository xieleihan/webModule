// 导入公共配置选项
// require 这是nodejs环境下的加载函数（导入） 可以省略.js后缀
const option = require('./webpack.config.common');
const { merge } = require('webpack-merge');
const path = require('path');
// 开发环境
const devConfig = {
    // 打包的环境模式(production | development)
    mode: "development",
    // devServer (HTTP服务)
    devServer: {
        // 设置运行的目录
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        // 压缩
        compress: true,
        // 端口
        port: 8080,
        // 自动打开页面
        open: true,
        // 设置hot 
        // hot: true,
        // 过去测试过可用的写法
        proxy: [
            {
                target: 'https://m.178hui.com',//需要代理的地址
                context: ['/', '/api'],
                secure: false,
                changeOrigin: true,
            },
        ]
    },
}

// 合并配置选项
module.exports = merge(option, devConfig);

// 开启devServe之后，可以访问以下地址：
// http://127.0.0.1:8080
// http://localhost:8080
// http://192.168.33.xx:8080


// 网络代理 （proxy选项 可以在开发环境下“使用”别人的数据接口，不是所有人的接口都可以给你免费使用，所以要测试，反复测试）
// 比如：
// 别人的服务器：http://localhost:3000
// 他的接口：http://localhost:3000/index/list
// 别人的接口：https://m.178hui.com/jd/lists

// 我的服务器：http://localhost:8080
// http://localhost:3000 和  http://localhost:8080 这俩服务器通信属于跨域了！
// 怎么访问别人的数据接口？
// 代理之后，可以测试并使用以下接口：
// http://localhost:8080/api/index/list
// http://localhost:8080/api/jd/lists
// http://localhost:8080/jd/lists

// 文档的上写法：
// proxy: {
//     '/api': {
//         target: 'http://localhost:3000',
//         pathRewrite: { '^/api': '' },
//     },
// },