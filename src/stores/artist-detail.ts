import { defineStore } from 'pinia'
import { artistDetailFetch } from '@/apis'
import { IartistDetailStore } from '@/models/artist-detail'

const useartistDetailStore = defineStore('artistDetail', {
  state(): IartistDetailStore {
    return {
      artist: {},
      identify: {},
      user: {},
      videoCount: 0,
      hotAlbums: [],
      artistDesc: {},
      simiArtist: [],
      mvs: []
    }
  },
  actions: {
    async getArtistDetail(id: number) {
      const res = await artistDetailFetch.getArtistDetail(id)
      this.identify = res.data.identify
      this.artist = res.data.artist
      this.user = res.data.user
      this.videoCount = res.data.videoCount
    },
    async getArtistAlbum(id: number, limit: number = 30) {
      const res = await artistDetailFetch.getArtistAlbum(id, limit)
      this.hotAlbums = res.hotAlbums
    },
    async getArtistMv(id: number) {
      const res = await artistDetailFetch.getArtistMv(id)
      this.mvs = res.mvs
    },
    async getArtistDesc(id: number) {
      this.artistDesc = await artistDetailFetch.getArtistDesc(id)
    },
    async getSimiArtist(id: number) {
      this.simiArtist = (await artistDetailFetch.getSimiArtist(id)).artists
    }
  }
})

export default useartistDetailStore
