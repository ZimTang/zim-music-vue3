import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('@/views/index.vue'),
    redirect: '/recommend',
    children: [
      {
        path: 'recommend',
        component: () => import('@/views/recommend.vue')
      },
      {
        path: 'customized',
        component: () => import('@/views/personalized.vue')
      },
      {
        path: 'playlist',
        component: () => import('@/views/playlist.vue')
      },
      {
        path: 'rank',
        component: () => import('@/views/rank.vue')
      },
      {
        path: 'artist',
        component: () => import('@/views/artist.vue')
      },
      {
        path: 'latestMusic',
        component: () => import('@/views/latest-music.vue')
      }
    ]
  },
  {
    path: '/privateContent',
    component: () => import('@/views/private-content.vue')
  },
  {
    path: '/playlistItem/:id',
    component: () => import('@/views/playlist-item.vue')
  },
  {
    path: '/artistItem',
    component: () => import('@/views/artist-item.vue'),
    redirect: '/artistItem/artistItemAlbum/:id',
    children: [
      {
        path: 'artistItemAlbum/:id',
        component: () =>
          import('@/components/artist-item/artist-item-album.vue')
      },
      {
        path: 'artistItemMv/:id',
        component: () => import('@/components/artist-item/artist-item-mv.vue')
      },
      {
        path: 'artistItemInfo/:id',
        component: () => import('@/components/artist-item/artist-item-info.vue')
      },
      {
        path: 'artistItemSimi/:id',
        component: () => import('@/components/artist-item/artist-item-simi.vue')
      }
    ]
  },
  {
    path: '/album/:id',
    component: () => import('@/views/album.vue')
  }
]

const router = createRouter({
  routes,
  history: createWebHashHistory(),
  linkActiveClass: 'active'
})

export default router
