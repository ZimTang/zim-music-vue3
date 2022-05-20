import { defineStore } from 'pinia'
import { artistsItemFetch } from '@/apis'
import { IArtistItemStore } from '@/models/artist-item'

const useArtistItemStore = defineStore('artistItem', {
  state(): IArtistItemStore {
    return {
      artist: {},
      identify: {},
      user: {},
      videoCount: 0,
      hotAlbums: []
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
    }
  }
})

export default useArtistItemStore
