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
          icon: '',
          keepAlive: true,
          title: '设置'
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
