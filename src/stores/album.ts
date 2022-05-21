import { albumFetch } from '@/apis'
import { IAlbumStore } from '@/models/album'
import { defineStore } from 'pinia'

const useAlbumStore = defineStore('albumStore', {
  state(): IAlbumStore {
    return {
      album: {},
      songs: []
    }
  },
  actions: {
    async getAlbumContent(id: number) {
      const res = await albumFetch.getAlbumContent(id)
      this.album = res.album
      this.songs = res.songs
      console.log(res)
    }
  }
})

export default useAlbumStore
