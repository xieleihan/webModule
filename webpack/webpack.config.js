// 配置路径
const path = require('path')

// 配置选项
const option = {
    // 项目入口
    entry: {
        helloWorld: './src/helloWorld.js',
    },
    // 项目出口
    // __dirname 是当前文件所在的目录 绝对路径
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename:'bundle-[name]-[hash:8].js'
    },
    // 打包环境模式 (production(生产模式), development(开发模式))
    mode: 'development',
    // 配置加载器
    // 插件
    // 优化
}

// module 是一个配置系统,可以挂载在模块系统上
module.exports = option