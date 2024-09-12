// 导入公共配置选项
// require 这是nodejs环境下的加载函数（导入） 可以省略.js后缀
const option = require('./webpack.config.common');
const { merge } = require('webpack-merge');
// 导入用于压缩css代码的依赖包
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
// 移除console.log代码
const TerserPlugin = require("terser-webpack-plugin");
// 生产环境
const prodConfig = {
    // 打包的环境模式
    mode: "production",
    // 优化
    // 代码的压缩、移除测试的代码 console.log()、 删除冗余的代码
    //优化项目代码
    optimization: {
        // 是否压缩代码
        minimize: true,
        // 去除console.log()代码
        minimizer: [
            // 是否删除调试程序的代码
            new TerserPlugin({
                terserOptions: {
                    compress: {
                        // 是否删除项目中的console.log()
                        drop_console: true
                    }
                }
            }),
            // 用于css代码压缩
            new CssMinimizerPlugin()
        ],
    },

}
// 合并配置选项
module.exports = merge(option, prodConfig);