import { IUser } from '@/models/user'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state(): IUser {
    return {
      account: {},
      profile: {},
      token: ''
    }
  },
  actions: {
    changeProfile(user: IUser) {
      this.$state = user
    }
  }
})