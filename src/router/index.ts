import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('@/views/index.vue'),
    redirect: '/recommend',
    children: [
      {
        path: '/recommend',
        component: () => import('@/views/recommend.vue')
      },
      {
        path: '/customized',
        component: () => import('@/views/customized.vue')
      },
      {
        path: '/songSheet',
        component: () => import('@/views/song-sheet.vue')
      },
      {
        path: '/rank',
        component: () => import('@/views/rank.vue')
      },
      {
        path: '/vocalist',
        component: () => import('@/views/vocalist.vue')
      },
      {
        path: '/latestMusic',
        component: () => import('@/views/latest-music.vue')
      }
    ]
  },
  {
    path: '/privateContent',
    component: () => import('@/views/private-content.vue')
  }
]

const router = createRouter({
  routes,
  history: createWebHashHistory(),
  linkActiveClass: 'active'
})

export default router
