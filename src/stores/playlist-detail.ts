import { defineStore } from 'pinia'
import { playlistDetailFetch } from '@/apis'
import { IplaylistDetailStoreState } from '@/models/playlist'

const playlistDetailStore = defineStore('playlistDetail', {
  state(): IplaylistDetailStoreState {
    return {
      playlistDetailInfo: {},
      playlistSongs: []
    }
  },
  actions: {
    async getplaylistDetail(id: number) {
      this.playlistDetailInfo = await playlistDetailFetch.getPlaylistData(id)
    },
    async getPlaylistInfo(id: number) {
      this.playlistSongs = (await playlistDetailFetch.getPlaylistInfo(id)).songs
    }
  }
})

export default playlistDetailStore
