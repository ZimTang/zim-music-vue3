import { defineStore } from 'pinia'

interface IAudioItem {
  id: number
}

interface IAudioStoreState {
  order: number
  // 当前播放音乐的id
  audioId: number
  audioList: IAudioItem[]
}

interface IAudioStoreActions {
  getCacheAudioId: () => void
  changeAudioList: (list: []) => void
  changeAudio: (id: number) => void
}

const useAudioStore = defineStore<
  string,
  IAudioStoreState,
  {},
  IAudioStoreActions
>('audio', {
  state() {
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
    changeAudioList([...list]: []) {
      this.audioList = list
    },
    changeAudio(id: number) {
      this.audioId = id
      localStorage.setItem('audioId', id.toString())
    }
  }
})

export default useAudioStore
