// vue.config.js
module.exports = {
  devServer: {
    proxy: {
      '/api/': {
        target: 'http://127.0.0.1:9091',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
            '^/api': ''
        }
      },
      '/ws/*': {
        target: 'http://127.0.0.1:9091',
        changeOrigin: false,
        ws: true,
        secure: false,
        pathRewrite: {
            '^/ws': ''
        }
      },
    }
  }
}
