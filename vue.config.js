const path = require('path')
const webpack = require('webpack')

function resolveSrc(_path) {
  return path.join(__dirname, _path)
}

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        src: resolveSrc('src')
      }
    },
    plugins: [
      new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 6
      })
    ]
  },
  css: {
    sourceMap: process.env.NODE_ENV !== 'production',
    loaderOptions: {
      // },
      sass: {
        data: `
          @import "@/assets/scss/global/_variables.scss";
          @import "node_modules/open-color/open-color.scss";
        `
      }
    }
  },
  chainWebpack: config => {
    config.module
      .rule('i18n')
      .resourceQuery(/blockType=i18n/)
      .type('javascript/auto')
      .use('i18n')
      .loader('@kazupon/vue-i18n-loader')
      .end()
  }
}
