import { userFetch } from '@/apis'
import { IUser } from '@/models/user'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state(): IUser {
    return {
      account: {},
      profile: {},
      cookie: '',
      token: '',
      records: []
    }
  },
  actions: {
    changeProfile(user: IUser) {
      this.$state = user
    },
    getUserRecord(uid: number, type: number = 0) {
      return userFetch.getUserRecord(uid, type)
    }
  }
})
