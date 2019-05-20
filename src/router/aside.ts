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
      path: '/',
      name: 'shoye',
      component: () => import('@/views/index/index.vue'),
      meta: {
        icon: 'icon-shezhi',
        keepAlive: true
      },
      children: [
        {
          path: '/',
          name: '404',
          component: () => import('@/components/404/index.vue'),
          meta: {
            icon: 'icon-shezhi',
            keepAlive: true
          }
        },
        {
          path: '/install',
          name: '设置',
          component: () => import('@/views/installs/index.vue'),
          meta: {
            icon: 'icon-shezhi',
            keepAlive: true
          }
        }
      ]
    },
    {
      path: '/install',
      name: '设置',
      component: () => import('@/views/installs/index.vue'),
      meta: {
        icon: 'icon-shezhi',
        keepAlive: true
      }
    }
  ],
  mode: 'history'
})

export default aside
