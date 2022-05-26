import { defineStore } from 'pinia'
import { artistsItemFetch } from '@/apis'
import { IartistDetailStore } from '@/models/artist-detail'

const useartistDetailStore = defineStore('artistDetail', {
  state(): IartistDetailStore {
    return {
      artist: {},
      identify: {},
      user: {},
      videoCount: 0,
      hotAlbums: [],
      mvs: []
    }
  },
  actions: {
    async getArtistDetail(id: number) {
      const res = await artistsItemFetch.getArtistDetail(id)
      this.identify = res.data.identify
      this.artist = res.data.artist
      this.user = res.data.user
      this.videoCount = res.data.videoCount
    },
    async getArtistAlbum(id: number, limit: number = 30) {
      const res = await artistsItemFetch.getArtistAlbum(id, limit)
      this.hotAlbums = res.hotAlbums
    },
    async getArtistMv(id: number) {
      const res = await artistsItemFetch.getArtistMv(id)
      this.mvs = res.mvs
    }
  }
})

export default useartistDetailStore
