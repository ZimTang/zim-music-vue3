import { defineStore } from 'pinia'
import { IBanner } from '@/models/recommend'
import { recommendFetch } from '@/apis'

export const useRecommendStore = defineStore('recommend', {
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
      this.$state.banners = (
        await recommendFetch.getRecommendBanners()
      ).data.banners
    },
    async getRecommendResource() {
      this.$state.recommends = (
        await recommendFetch.getRecommendResource()
      ).data.recommend
    },
    async getPrivateContent() {
      this.$state.privateContents = (
        await recommendFetch.getPrivateContent()
      ).data.result
    },
    async getNewAlbum() {
      this.$state.newAlbum = (await recommendFetch.getNewAlbum()).data.data
    }
  }
})
