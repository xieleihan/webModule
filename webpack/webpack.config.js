// 配置路径
const path = require('path')

// 导入处理HTML模版的插件
const HtmlWebpackPlugin = require('html-webpack-plugin')

// 清除多余文件
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

// 分离css
// const MiniCssExtractPlugin = require('mini-css-extract-plugin')

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
        filename:'js/bundle-[name]-[hash:8].js'
    },
    // 打包环境模式 (production(生产模式), development(开发模式))
    mode: 'development',
    // 配置加载器(loader)
    module: {
        rules: [
            // 处理css(没有分离css)
            // {
            //     test: /\.css$/i,// 打包的是css文件
            //     use: [
            //         'style-loader',// 把编译后的JS写入bundle.js
            //         'css-loader'// 把css编译成js
            //     ]
            // },
            // 处理css(分离css)
            {
                test: /\.css$/i,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: "",
                        },
                    },
                    "css-loader"
                ],
            },
            // 处理sass

            // 处理less
            {
                test: /\.less$/i,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    "css-loader",
                    "less-loader",
                ],
            },
            // 处理图片
        ]
    },
    // 插件
    plugins: [
        // 处理html文件
        new HtmlWebpackPlugin({
            title: 'Hello World', // 标题
            template: './src/test.html', // 模版路径
            filename: 'test.html', // 输出文件名
            inject: 'head', // 注入位置
            chunks: ['helloWorld'] // 插入哪些脚本文件,对应entry的key
        }),
        // 清除冗余文件初始化
        new CleanWebpackPlugin(),
        // 提取css文件
        new MiniCssExtractPlugin({
            filename: 'css/[name]-[hash:8].css'
        })
    ],
    // 优化
}

// module 是一个配置系统,可以挂载在模块系统上
module.exports = option