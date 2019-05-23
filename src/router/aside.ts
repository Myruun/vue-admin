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
      path: '/note',
      name: '笔记管理',
      // component: () => import('@/views/installs/index.vue'),
      component: () => import('@/views/note/index.vue'),
      meta: {
        icon: 'icon-bijinotes23',
        keepAlive: true
      }
    },
    {
      path: '/blog',
      name: '博客管理',
      component: () => import('@/views/blog/index.vue'),
      meta: {
        icon: 'icon-bokeyuan',
        keepAlive: true
      }
    },
    {
      path: '/website',
      name: '趣站管理',
      component: () => import('@/views/website/index.vue'),
      meta: {
        icon: 'icon-wangzhan',
        keepAlive: true
      },
      children: [
        {
          path: '/websitelist',
          name: '网站列表',
          component: () => import('@/views/website/index.vue'),
          meta: {
            icon: 'icon-liebiao',
            keepAlive: true
          }
        },
        {
          path: '/category',
          name: '网站类别',
          component: () => import('@/views/website/category.vue'),
          meta: {
            icon: 'icon-leibie',
            keepAlive: true
          }
        }
      ]
    },
    {
      path: '/install',
      name: '系统设置',
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
