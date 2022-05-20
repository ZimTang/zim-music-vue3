import { defineStore } from 'pinia'
import { playlistItemFetch } from '@/apis'
import { IPlaylistItemStoreState } from '@/models/playlist'

const playlistItemStore = defineStore('playlistItem', {
  state(): IPlaylistItemStoreState {
    return {
      playlistItemInfo: {},
      playlistSongs: []
    }
  },
  actions: {
    async getPlaylistItem(id: number) {
      this.playlistItemInfo = await playlistItemFetch.getPlaylistData(id)
    },
    async getPlaylistInfo(id: number) {
      this.playlistSongs = (await playlistItemFetch.getPlaylistInfo(id)).songs
    }
  }
})

export default playlistItemStore
