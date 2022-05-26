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
    path: '/playlistDetail/:id',
    component: () => import('@/views/playlist-detail.vue')
  },
  {
    path: '/artistDetail',
    component: () => import('@/views/artist-detail.vue'),
    redirect: '/artistDetail/artistDetailAlbum/:id',
    children: [
      {
        path: 'artistDetailAlbum/:id',
        component: () =>
          import('@/components/artist-item/artist-detail-album.vue')
      },
      {
        path: 'artistDetailMv/:id',
        component: () => import('@/components/artist-item/artist-detail-mv.vue')
      },
      {
        path: 'artistDetailInfo/:id',
        component: () =>
          import('@/components/artist-item/artist-detail-info.vue')
      },
      {
        path: 'artistDetailSimi/:id',
        component: () =>
          import('@/components/artist-item/artist-detail-simi.vue')
      }
    ]
  },
  {
    path: '/album/:id',
    component: () => import('@/views/album.vue')
  },
  {
    path: '/videoList',
    component: () => import('@/views/video-list.vue')
  }
]

const router = createRouter({
  routes,
  history: createWebHashHistory(),
  linkActiveClass: 'active'
})

export default router
