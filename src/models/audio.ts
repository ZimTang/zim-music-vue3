import { IPrivilege, ISong } from './playlist'

export interface IAudioItem extends ISong {
  encodeType: string
  id: number
  url: string
}

export interface IGetAudioDetailRes {
  code: number
  privileges: IPrivilege[]
  songs: ISong[]
}

export interface IGetAudioUrlRes {
  code: number
  data: IAudioItem[]
}

export interface IAudioStoreState {
  order: number
  // 当前播放音乐的id
  audioId: number
  audioList: IAudioItem[]
}

export interface IAudioStoreActions {
  getCacheAudioId: () => void
  getCacheAudioList: () => void
  changeAudioList: (list: IAudioItem[]) => void
  changeAudio: (id: number) => void
}
