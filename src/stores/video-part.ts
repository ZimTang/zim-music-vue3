import { mvFetch, videoPartFetch } from '@/apis'
import { IVideoPartStore } from '@/models/video-part'
import { defineStore } from 'pinia'

const useVideoPartStore = defineStore('videoList', {
  state(): IVideoPartStore {
    return {
      currentVideoTag: { id: 0, name: '' },
      videoTagList: [],
      videos: [],
      videoDetail: {},
      videoUrls: []
    }
  },
  actions: {
    async getVideoTagList() {
      this.videoTagList = (await videoPartFetch.getVideoTagList()).data
    },
    async getVideosByTag(id: number) {
      this.videos = (await videoPartFetch.getVideosByTag(id)).datas
    },
    async getVideoDetail(id: string) {
      this.videoDetail = (await videoPartFetch.getVideoDetail(id)).data
    },
    async getVideoUrl(id: string) {
      this.videoUrls = (await videoPartFetch.getVideoUrl(id)).urls
    },
    async getMvUrl(id: number | string) {
      const res = await mvFetch.getMvUrl(id)
      console.log(res)
    }
  }
})

export default useVideoPartStore
