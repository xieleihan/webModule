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





卸载的话就

```bash
npm uninstall xxx
```

