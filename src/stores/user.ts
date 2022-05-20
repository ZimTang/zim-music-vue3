import { defineStore } from 'pinia'
import { userFetch } from '@/apis'
import { IUserStoreState } from '@/models/user'

const useUserStore = defineStore('user', {
  state(): IUserStoreState {
    return {
      account: {},
      profile: {},
      cookie: '',
      token: '',
      records: [],
      playlist: [],
      personalized: [],
      isAuth: false
    }
  },
  getters: {
    userOwnerPlaylist: (state: IUserStoreState) => {
      return state.playlist.filter((item) => {
        return item.creator.userId == state.profile.userId
      })
    },
    userCollectedPlaylist: (state: IUserStoreState) => {
      return state.playlist.filter((item) => {
        return item.creator.userId !== state.profile.userId
      })
    }
  },
  actions: {
    changeProfile(profile: IUserStoreState['profile']) {
      this.profile = profile
    },
    async getUserRecord(uid: number, type: number = 0) {
      this.records = (await userFetch.getUserRecord(uid, type)).allData
    },
    async getUserPlayList() {
      this.playlist = (
        await userFetch.getUserPlayList(this.$state.profile.userId!)
      ).playlist
    },
    async getUserPersonalized(limit?: number) {
      this.personalized = (await userFetch.getUserPersonalized(limit)).result
    }
  }
})

export default useUserStore
