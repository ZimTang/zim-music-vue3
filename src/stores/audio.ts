import { defineStore } from 'pinia'
import { IAudioStoreState } from '@/models/audio'
import { ISong } from '@/models/playlist'
import { audioFetch } from '@/apis'

const useAudioStore = defineStore('audio', {
  state(): IAudioStoreState {
    return {
      order: 0,
      audioId: 0,
      audioList: []
    }
  },
  actions: {
    getCacheAudioId() {
      this.audioId = parseInt(localStorage.getItem('audioId')!)
    },
    getCacheAudioList() {
      this.audioList = JSON.parse(localStorage.getItem('audioList') || '[]')
    },
    changeAudioList([...list]: ISong[]) {
      this.audioList = list
    },
    changeAudio(id: number) {
      this.audioId = id
      localStorage.setItem('audioId', id.toString())
    }
  }
})

export default useAudioStore
