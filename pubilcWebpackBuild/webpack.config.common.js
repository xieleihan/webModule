// 加载path模块
const path = require("path");
// 处理html模板的插件
const HtmlWebpackPlugin = require('html-webpack-plugin');
// 清除冗余文件
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// 分离css文件（提取css代码）
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// 配置选项
const option = {
    // 项目入口
    entry: {
        main: "./src/js/main.js",//打包入口
    },
    // 项目出口
    // __dirname全局变量代表是当前绝对路径  E:\stu\GZH52429\webpack2024\code\project
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name]-bundle-[fullhash:8].js'
    },

    // 插件
    plugins: [
        // 处理html模板的插件
        new HtmlWebpackPlugin({
            title: "主页",
            template: "./src/index.html",// 模板路径
            filename: 'index.html',// 输出html的文件名称
            inject: "head",// 插入脚本的位置
            chunks: ['main'],// 插入哪些脚本文件 对应选项“entry”的key
        }),
        // 清理冗余文件
        new CleanWebpackPlugin(),
        // 提取css
        new MiniCssExtractPlugin({
            filename: "css/style-[fullhash:8].css",
        })
    ],
    // 加载器 （loader）
    module: {
        rules: [
            // 处理css
            // 此处没有提取css代码（分离css源代码）
            // {
            //     test: /\.css$/i, // 打包的是css文件  demo.css
            //     use: [
            //         "style-loader",//把编译后的js写入bundle.js文件
            //         "css-loader" // 把css编译成js
            //     ],
            // },

            //  此处提取了css代码（做css源代码分离）
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

            // 处理less
            // less 是CSS的拓展语言 （预处理语言，就是说浏览器不能直接解析less代码，需要把less编译成css才可以使用）
            // less 这种语法编写项目的样式，更加便捷，灵活。（提高CSS编写效率）
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


            // 处理scss文档( demo.sass | demo.scss)
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // 把js样式对应的脚本写入bundle.js文件
                    // "style-loader",
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    // 把css转换成js
                    "css-loader",
                    // 编译sass成css
                    "sass-loader",
                ],
            },
            // 同构模式(前后端写一起)
            // 前后端分离开发模式(前端和后端)
            // 处理图标|图片
            {
                test: /\.(png|jpe?g|gif)$/i,
                // 打包时排除 node_modules 目录下的文件 （这个目录下的文件不需要打包）
                exclude: /node_modules/,
                type: 'javascript/auto',
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            // 超出8kb,就不转换成base64格式
                            // 限制  小于等于8kb的图片，做成base64格式
                            // 8192/1024 = 8kb
                            limit: 8192,
                            // 禁用严格模式
                            esModule: false,
                            // 设置输出的文件路径
                            // outputPath: 'images',
                            name: './images/[name]_[hash].[ext]',
                        },
                    },
                ],

            },

            // 处理html中的图片
            {
                test: /\.html$/i,
                loader: 'html-loader',
                options: {
                    // 禁用严格模式
                    esModule: false,
                }
            },

        ]

    },
    //警告 webpack 的性能提示
    performance: {
        hints: 'warning',
        //入口起点的最大体积
        maxEntrypointSize: 50000000,
        //生成文件的最大体积
        maxAssetSize: 30000000,
        //只给出 js 文件的性能提示
        assetFilter: function (assetFilename) {
            return assetFilename.endsWith('.js');
        }
    },
}
//把配置项挂在模块系统上
module.exports = option