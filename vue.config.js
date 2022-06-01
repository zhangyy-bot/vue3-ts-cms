// const path = require('path')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')

//因为这个代码最终会在nodeJs环境下执行执行
// 所以通过commonJs的方式导出
module.exports = {
  // 1.直接通过CLI提供的选项来配置
  outputDir: './build',
  // 解决跨域问题
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://152.136.185.210:5000',
        pathRewrite: {
          '^/api': ''
        },
        changeOrigin: true
      }
    }
  },
  // 2.通过configureWebpack修改Webpack的配置
  configureWebpack: {
    resolve: {
      alias: {
        views: '@/views'
      }
    },
    plugins: [
      Components({
        resolvers: [ElementPlusResolver()]
      })
    ]
  },
  //3.通过chainWebpack修改webpack配置
  chainWebpack: (config) => {
    config.plugin('html').tap((args) => {
      args[0].title = 'zyy-cms-vue3-ts'
      return args
    })
  }
}
