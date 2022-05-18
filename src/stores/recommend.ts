import { defineStore } from 'pinia'
import { IBanner } from '@/models/recommend'
import { recommendFetch } from '@/apis'
import { ElMessage } from 'element-plus'

const useRecommendStore = defineStore('recommend', {
  state(): {
    banners: Partial<IBanner[]>
    recommends: any
    privateContents: any
    newAlbum: any
  } {
    return {
      banners: [],
      recommends: [],
      privateContents: [],
      newAlbum: []
    }
  },
  actions: {
    async getBanners() {
      this.$state.banners = (await recommendFetch.getRecommendBanners()).banners
    },
    async getRecommendResource() {
      this.$state.recommends = (
        await recommendFetch.getRecommendResource()
      ).recommend
    },
    async getPrivateContent() {
      this.$state.privateContents = (
        await recommendFetch.getPrivateContent()
      ).result
    },
    async getNewAlbum() {
      this.$state.newAlbum = (await recommendFetch.getNewAlbum()).data
    }
  }
})

export default useRecommendStore
