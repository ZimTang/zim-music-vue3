import { artistsFetch } from '@/apis'
import { defineStore } from 'pinia'
import { IArtistStoreAction, IArtistStoreState } from '@/models/artist'

const useArtistStore = defineStore<
  string,
  IArtistStoreState,
  {},
  IArtistStoreAction
>('artist', {
  state() {
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
      const res = await artistsFetch.getTopArtists(limit, offset)
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
      const res = await artistsFetch.getArtistList(
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
