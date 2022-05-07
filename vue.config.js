const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/360': {
        target: 'https://bang.360.cn',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/foo': ''
        }
      }
    }
  }
})
