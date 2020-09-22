/**
 * 基础路由
 * @type { *[] }
 */
export const constantRouterMap = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/home/index'),
    meta: { title: '首页', keepAlive: false }
  },
  {
    path: '/new',
    name: 'new',
    component: () => import('@/views/about/index'),
    meta: { title: '副页', keepAlive: false }
  }
]
