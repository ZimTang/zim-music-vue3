import { defineStore } from 'pinia'
import { IRecommendStoreState } from '@/models/recommend'
import { recommendFetch } from '@/apis'

const useRecommendStore = defineStore('recommend', {
  state(): IRecommendStoreState {
    return {
      banners: [],
      recommends: [],
      privateContents: [],
      newAlbum: []
    }
  },
  actions: {
    async getBanners() {
      this.banners = (await recommendFetch.getRecommendBanners()).banners
    },
    async getRecommendResource() {
      this.recommends = (await recommendFetch.getRecommendResource()).recommend
    },
    async getPrivateContent() {
      this.privateContents = (await recommendFetch.getPrivateContent()).result
    },
    async getNewAlbum() {
      this.newAlbum = (await recommendFetch.getNewAlbum()).data
    }
  }
})

export default useRecommendStore
