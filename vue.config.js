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
  auth: {
    redirect: {
      login: false,
      logout: '/',
      home: '/'
    },
    strategies: {
      local: {
        endpoints: {
          login: { url: 'user/login', method: 'post', propertyName: 'token' },
          user: { url: 'user/me', method: 'get', propertyName: 'user' },
          logout: { url: 'user/logout', method: 'post' }
        }
      }
    }
  },


}
module.exports = {
  chainWebpack: config => {
    config.module.rules.delete('eslint');
  }
}
