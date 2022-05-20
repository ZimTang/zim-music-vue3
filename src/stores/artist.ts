import { defineStore } from 'pinia'
import { artistFetch } from '@/apis'
import { IArtistStoreState } from '@/models/artist'

const useArtistStore = defineStore('artist', {
  state(): IArtistStoreState {
    return {
      artists: [],
      more: true,
      type: -1,
      area: -1,
      initial: '-1'
    }
  },
  actions: {
    async getTopArtists(limit: number, offset: number) {
      const res = await artistFetch.getTopArtists(limit, offset)
      this.more = res.more
      this.artists = res.artists
    },
    async getArtistList(
      type: number,
      area: number,
      initial: string,
      limit: number,
      offset: number
    ) {
      const res = await artistFetch.getArtistList(
        type,
        area,
        initial,
        limit,
        offset
      )
      this.more = res.more
      this.artists = res.artists
    }
  }
})

export default useArtistStore
