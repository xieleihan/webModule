const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: './',
  devServer: {
    open: true
  },
  // 禁止做eslint检查
  lintOnSave: false
})
