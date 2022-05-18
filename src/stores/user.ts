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
        // @ts-ignore
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
    }
  }
})

export default useUserStore
