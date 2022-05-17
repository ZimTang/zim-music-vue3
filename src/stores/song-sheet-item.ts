import { songSheetFetch } from '@/apis'
import { ISongSheetItem } from '@/models/song-sheet'
import { defineStore } from 'pinia'

interface ISongSheetStoreState {
  songSheetItem: Partial<ISongSheetItem>
  songSheetSongs: { songs: [] }
}

interface ISongSheetStoreActions {
  getSongSheetItem: (id: number) => Promise<void>
  getSongSheetAllSong: (
    id: number,
    limit?: number,
    offset?: number
  ) => Promise<void>
}

const useSongSheetItemStore = defineStore<
  string,
  ISongSheetStoreState,
  {},
  ISongSheetStoreActions
>('songSheetItem', {
  state() {
    return {
      songSheetItem: {},
      songSheetSongs: { songs: [] }
    }
  },
  actions: {
    async getSongSheetItem(id: number) {
      this.songSheetItem = await songSheetFetch.getSongSheetItem(id)
    },
    async getSongSheetAllSong(id: number) {
      // @ts-ignore
      this.songSheetSongs = await songSheetFetch.getSongSheetAllSong(id)
    }
  }
})

export default useSongSheetItemStore
