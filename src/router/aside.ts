import Vue from 'vue'
import Router from 'vue-router'

/**
 * meta 可配置参数
 * @param {boolean} icon 页面icon
 * @param {boolean} keepAlive 是否缓存页面
 * @param {string} title 页面标题
 */

Vue.use(Router)

// const routes = new Set(route)

const aside = new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/login/login.vue'),
      meta: {
        icon: '',
        keepAlive: true,
        title: '登录'
      }
    },
    {
      path: '/install',
      name: 'install',
      component: () => import('@/views/installs/index.vue'),
      meta: {
        icon: '',
        keepAlive: true,
        title: '设置'
      }
    }
  ],
  mode: 'history'
})

export default aside
