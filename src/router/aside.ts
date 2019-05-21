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
      name: '首页',
      component: () => import('@/views/index/index.vue'),
      meta: {
        icon: 'icon-shouye',
        keepAlive: true
      },
      children: [
        {
          path: '/',
          name: '数据统计',
          component: () => import('@/views/echarts/index.vue'),
          meta: {
            icon: 'icon-shuju',
            keepAlive: true
          }
        }
      ]
    },
    {
      path: '/install',
      name: '新闻管理',
      // component: () => import('@/views/installs/index.vue'),
      component: () => import('@/views/echarts/index.vue'),
      meta: {
        icon: 'icon-shezhi',
        keepAlive: true
      }
    },
    {
      path: '/install',
      name: '新闻管理',
      component: () => import('@/views/echarts/index.vue'),
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
  ],
  mode: 'history'
})

export default aside
