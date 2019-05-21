import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import '@/assets/scss/common.scss'
import '@/assets/css/iconfont.css'
import './plugins/element.js'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
