import { playlist } from '@/apis'
import { defineStore } from 'pinia'

interface hotTag {
  name: string
}

interface IPlaylistStore {
  all: any
  categories: any
  sub: any
  hotTags: hotTag[]
  playlists: any[]
  more: boolean
  total: number
}

interface IPlaylistAction {
  getPlaylistCateList: () => void
  getPlaylistHotTags: () => void
  getHighQuantityPlaylist: (
    cat?: string,
    limit?: number,
    before?: number
  ) => Promise<any>
}

const usePlaylistStore = defineStore<
  string,
  IPlaylistStore,
  {},
  IPlaylistAction
>('playlist', {
  state() {
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
      this.hotTags = await (await playlist.getPlaylistHotTags()).tags
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
