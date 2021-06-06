module.exports = {
  publicPath: '//localhost:8080/',
  // css在所有环境下，都不单独打包为文件。这样是为了保证最小引入（只引入js）
  css: {
    extract: false,
  },
  devServer: {
    port: 8080,
    contentBase: './',
    compress: true,
    proxy: {
      '/api': {
        target: 'http://localhost:2701/api',
        ws: true,
        changeOrigin: true,
      },
    },
  },
  configureWebpack: {
    devtool: 'none', // 不打包sourcemap
    output: {
      library: 'singleVue', // 导出名称
      libraryTarget: 'window', //挂载目标
    },
  },
}
