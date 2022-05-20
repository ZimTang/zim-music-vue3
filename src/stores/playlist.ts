import { defineStore } from 'pinia'
import { playlist } from '@/apis'
import { IPlaylistStoreState } from '@/models/playlist'

const usePlaylistStore = defineStore('playlist', {
  state(): IPlaylistStoreState {
    return {
      hotTags: [],
      all: {},
      categories: [],
      sub: [],
      playlists: [],
      more: true,
      total: 0
    }
  },
  actions: {
    async getPlaylistCateList() {
      const { sub, all, categories } = await playlist.getPlaylistCateList()
      this.all = all
      this.sub = sub
      this.categories = categories
    },
    async getPlaylistHotTags() {
      this.hotTags = (await playlist.getPlaylistHotTags()).tags
    },
    async getHighQuantityPlaylist(
      cat?: string,
      limit?: number,
      before?: number
    ) {
      const res = await playlist.getHighQuantityPlaylist(cat, limit, before)
      this.more = res.more
      this.playlists = res.playlists
      this.total = res.total
    }
  }
})

export default usePlaylistStore
