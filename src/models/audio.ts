import { IPrivilege, ISong } from './playlist'

export enum PlaylistType {
  album,
  playlist
}

export interface IAudioItem extends ISong {
  encodeType: string
  id: number
  url: string
}

export interface Ilrc {
  lyric: string
  version: number
}

export interface IGetAudioDetailRes {
  code: number
  privileges: IPrivilege[]
  songs: ISong[]
  duration: number | string
}

export interface IGetAudioUrlRes {
  code: number
  data: IAudioItem[]
}

export interface IGetAudioLyricRes {
  code: number
  lrc: Ilrc
  tlyric: Ilrc
}

export interface IAudioStoreState {
  order: number
  // 当前播放音乐的id
  audioId: number
  audioList: ISong[]
}

export interface IAudioStoreActions {
  getCacheAudioId: () => void
  getCacheAudioList: () => void
  changeAudioList: (list: IAudioItem[]) => void
  changeAudio: (id: number) => void
}
