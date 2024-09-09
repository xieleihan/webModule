# Webpack创建
## 文件详情
> `src`:是项目文件入口 存放的是`css` ,`JavaScript`, `images`放入进这个文件
>
> `dist`:是打包后压缩过的文件,也就是后续需要上传到云端的文件
## `nvm`的使用

主要是需要在一台开发机上拥有多个版本的`nodejs`版本才需要用到,正常来说直接用最新版就可以,`nodejs`会向下兼容

```bash
# 检查nvm安装是否完成
nvm --version
# 安装指定版本的nodejs
nvm install 20.17.0
# 检查当前环境有多少个nodejs版本和正则使用的版本
nvm list
# 使用指定的nodejs版本
nvm use 20.17.0
```

## 国内镜像站

> 不推荐使用,避免国内投毒

```bash
# 修改repo地址
npm config set registry https://registry.npmmirror.com
```

正版是:`https://registry.npmjs.org/`

## 配置

> 初始化仓库

```bash
npm init -y
```

> 安装webpack和webpack-cli

```bash
npm install webpack webpack-cli --save-dev
```

> 打开工作目录,配置`package.json`文件

```json
{
  "name": "webpack",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "build": "webpack --config webpack.config.js",
    "buildx": "npx webpack --config webpack.config.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "webpack": "^5.94.0",
    "webpack-cli": "^5.1.4"
  }
}
```

> 主要是关注的是
>
> ```json
> "scripts": {
>     "build": "webpack --config webpack.config.js",
>     "buildx": "npx webpack --config webpack.config.js"
>   },
> ```
>
> 这一块,后续会用到
>
> `webpack.config.js`文件有这些
>
> ```javascript
> // 配置路径
> const path = require('path')
> 
> // 配置选项
> const option = {
>     // 项目入口
>     entry: {
>         helloWorld: './src/helloWorld.js',
>     },
>     // 项目出口
>     // __dirname 是当前文件所在的目录 绝对路径
>     output: {
>         path: path.resolve(__dirname, 'dist'),
>         filename:'bundle-[name]-[hash:8].js'
>     },
>     // 打包环境模式 (production(生产模式), development(开发模式))
>     mode: 'development',
>     // 配置加载器
>     // 插件
>     // 优化
> }
> 
> // module 是一个配置系统,可以挂载在模块系统上
> module.exports = option
> ```
>

## 安装插件

```bash
  # webpack 5 配置HTML模版插件
  npm i --save-dev html-webpack-plugin
  # 清除冗余文件
  npm install --save-dev clean-webpack-plugin
```

## 处理非JavaScript的文件

用到`loader`(放在JavaScript里面 安全)
提取出来`MiniCssExtractPlugin`

## 把我的webpack.config.js分享出来

```javascript
// 配置路径
const path = require('path')

// 导入处理HTML模版的插件
const HtmlWebpackPlugin = require('html-webpack-plugin')

// 清除多余文件
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

// 分离css
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
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
            {
                test: /\.(png|jpg|gif|jpeg)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            // 超出8kb,就不转换成base64格式
                            // 限制  小于等于8kb的图片，做成base64格式
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
```





卸载的话就

```bash
npm uninstall xxx
```

