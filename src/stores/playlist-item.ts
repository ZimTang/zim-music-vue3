import { playlistItemFetch } from '@/apis'
import { IPlaylistItem } from '@/models/playlist'
import { defineStore } from 'pinia'

interface IPlaylistStoreState {
  playlistItem: Partial<IPlaylistItem>
  playlistSongs: { songs: [] }
}

interface IPlaylistStoreActions {
  getPlaylistItem: (id: number) => Promise<void>
  getPlaylistAllSong: (
    id: number,
    limit?: number,
    offset?: number
  ) => Promise<void>
}

const playlistItemStore = defineStore<
  string,
  IPlaylistStoreState,
  {},
  IPlaylistStoreActions
>('playlistItem', {
  state() {
    return {
      playlistItem: {},
      playlistSongs: { songs: [] }
    }
  },
  actions: {
    async getPlaylistItem(id: number) {
      this.playlistItem = await playlistItemFetch.getPlaylistItem(id)
    },
    async getPlaylistAllSong(id: number) {
      // @ts-ignore
      this.playlistSongs = await playlistItemFetch.getPlaylistAllSong(id)
    }
  }
})

export default playlistItemStore
