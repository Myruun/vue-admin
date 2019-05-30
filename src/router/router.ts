/**
 * meta 可配置参数
 * @param {boolean} icon 页面icon
 * @param {boolean} keepAlive 是否缓存页面
 * @param {string} title 页面标题
 */
export default [
  {
    path: '/',
    name: 'index',
    component: () => import('@/views/index/index.vue'),
    meta: {
      icon: '',
      keepAlive: true,
      title: 'index'
    },
    children: [
      {
        path: '/',
        component: () => import('@/views/echarts/index.vue')
      },
      {
        path: '/install',
        name: 'install',
        component: () => import('@/views/installs/index.vue'),
        meta: {
          keepAlive: true
        }
      },
      {
        path: '/blog',
        name: 'blog',
        component: () => import('@/views/blog/index.vue'),
        meta: {
          keepAlive: true
        }
      },
      {
        path: '/website/websitelist',
        name: 'website',
        component: () => import('@/views/website/index.vue'),
        meta: {
          icon: 'icon-shuju',
          keepAlive: true
        }
      },
      {
        path: '/website/category',
        name: 'category',
        component: () => import('@/views/website/category.vue'),
        meta: {
          icon: 'icon-shuju',
          keepAlive: true
        }
      },
      {
        path: '/note',
        name: 'note',
        component: () => import('@/views/note/index.vue'),
        meta: {
          keepAlive: true
        }
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/login.vue'),
    meta: {
      icon: '',
      keepAlive: true,
      title: 'login'
    }
  },
  {
    path: '*',
    name: '404',
    component: () => import('@/components/404/index.vue')
  }
]
