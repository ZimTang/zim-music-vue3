import { userFetch } from '@/apis'
import { IUser } from '@/models/user'
import { defineStore } from 'pinia'

const useUserStore = defineStore('user', {
  state(): IUser {
    return {
      account: {},
      profile: {},
      cookie: '',
      token: '',
      records: [],
      playlist: [],
      likelist: [],
      personalized: [],
      isAuth: false
    }
  },
  getters: {
    userOwnerPlaylist: (state: IUser) => {
      return state.playlist.filter((item) => {
        return item.creator.userId == state.profile.userId
      })
    },
    userCollectedPlaylist: (state: IUser) => {
      return state.playlist.filter((item) => {
        return item.creator.userId !== state.profile.userId
      })
    }
  },
  actions: {
    changeProfile(profile: IUser['profile']) {
      this.profile = profile
    },
    async getUserRecord(uid: number, type: number = 0) {
      this.records = await (await userFetch.getUserRecord(uid, type)).allData
    },
    async getUserPlayList() {
      this.playlist = await (
        await userFetch.getUserPlayList(this.$state.profile.userId!)
      ).playlist
    },
    async getUserPersonalized(limit?: number) {
      this.personalized = await (
        await userFetch.getUserPersonalized(limit)
      ).result
      console.log(this.personalized)
    }
  }
})

export default useUserStore
