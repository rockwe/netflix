const webpack = require('webpack')
module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? process.env.VUE_APP_BASE_URL
    : '/',

  configureWebpack: {
    plugins: [
      new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)
    ],
    resolve: {
      alias: {
        vue$: 'vue/dist/vue.common.js'
      }
    }
  },


}
module.exports = {
  chainWebpack: config => {
    config.module.rules.delete('eslint');
  }
}
