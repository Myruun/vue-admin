const path = require('path')
const webpack = require('webpack');
const debug = process.env.NODE_ENV !== 'production'
//const VueConf = require('./src/assets/js/libs/vue_config_class')
//const vueConf = new VueConf(process.argv)

module.exports = {
 // publicPath: process.env.NODE_ENV === 'production' ? '/public/' : './',
 publicPath: process.env.NODE_ENV === "production" ? "./" : "/",
 // outputDir: 在npm run build时 生成文件的目录 type:string, default:'dist'
 // outputDir: 'dist',
 // pages:{ type:Object,Default:undfind }
 chainWebpack: config => {
  config
   .plugin('provide')
   .use(webpack.ProvidePlugin, [{
    $: 'jquery',
    jquery: 'jquery',
    jQuery: 'jquery',
    'window.jQuery': 'jquery'
   }]);
 },
 outputDir: 'dist', // 构建输出目录
 assetsDir: 'assets', // 静态资源目录 (js, css, img, fonts)
 lintOnSave: true, // 是否开启eslint保存检测，有效值：ture | false | 'error'
 runtimeCompiler: true, // 运行时版本是否需要编译
 productionSourceMap: false, // 是否在构建生产包时生成 sourceMap 文件，false将提高构建速度
 css: {
  // 配置高于chainWebpack中关于css loader的配置
  // modules: true, // 是否开启支持‘foo.module.css’样式
  extract: true, // 是否使用css分离插件 ExtractTextPlugin，采用独立样式文件载入，不采用<style>方式内联至html文件中
  sourceMap: false, // 是否在构建样式地图，false将提高构建速度
  loaderOptions: {
   // css预设器配置项
   sass: {
    data: '' //`@import "@/assets/scss/mixin.scss";`
   }
  }
 },
 parallel: require('os').cpus().length > 1, // 构建时开启多进程处理babel编译
 pluginOptions: {
  // 第三方插件配置
 },
 pwa: {
  // 单页插件相关配置 https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
 },
 devServer: {
  open: true,
  host: 'localhost',
  disableHostCheck: true,
  port: 8080,
  https: false,
  hotOnly: false,
  // proxy: null,
  proxy: {
   '/api': { //代理api
    target: "http://127.0.0.1:8082", //服务器api地址
    changeOrigin: true, //是否跨域
    ws: true, // proxy websockets
    pathRewrite: { //重写路径
     "^/api": ''
    }
   },
   '/admins': { //代理api
    target: "http://127.0.0.1:8082", //服务器api地址
    changeOrigin: true, //是否跨域
    ws: true, // proxy websockets
    pathRewrite: { //重写路径
     "^/admins": ''
    }
   }
  },
  before: app => {}
 }
}