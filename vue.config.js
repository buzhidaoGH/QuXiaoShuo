module.exports = {
  devServer: {
    port: '80',
  },

  configureWebpack: {
    resolve: {
      // extensions:['.js', '*', '.css'],后缀省略别名
      alias: {
        // '@':'src',内部配置过
        assets: '@/assets',
        common: '@/common',
        components: '@/components',
        network: '@/network',
        views: '@/views',
        //store和router不用配置调用只需要一次(获取是Vue中全局的)
        //可以使用this.$router(route)和this.$store拿到对象
      },
    },
  },

  chainWebpack: (config) => {
    config.plugin('html').tap((args) => {
      args[0].title = '趣小说'
      return args
    })
  },

  publicPath: undefined,
  outputDir: undefined,
  // assetsDir: 'static',
  runtimeCompiler: undefined,
  productionSourceMap: undefined,
  parallel: undefined,
  css: undefined,
}
