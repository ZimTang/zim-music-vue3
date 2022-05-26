import { IPlaylistCreator, ITag } from './playlist'

export interface IVideoTag extends Pick<ITag, 'id' | 'name'> {}

export interface IVideoData {
  vid: number
  alg: string
  commentCount: number
  coverUrl: string
  creator: IPlaylistCreator
  durationms: number
  width: number
  height: number
  playTime: number
  previewUrl: string
  title: string
  threadId: string
  videoGroup: IVideoTag[]
}

export interface IVideo {
  alg: string
  data: IVideoData
  displayed: boolean
  type: number
}

export interface IVideoGroup {
  id: number
  name: string
  alg: null
}

export interface IVideoDetail {
  advertisement: boolean
  avatarUrl: string
  commentCount: number
  coverUrl: string
  description: string
  durationms: number
  publishTime: number
  playTime: number
  shareCount: number
  subscribeCount: number
  threadId: string
  title: string
  vid: number
  videoGroup: IVideoGroup[]
}

export interface IUrl {
  id: number
  needPay: boolean
  r: number
  size: number
  url: string
  validityTime: number
}

export interface IGetVideoTagListRes {
  code: number
  data: IVideoTag[]
}

export interface IGetVideosByTagRes {
  code: number
  datas: IVideo[]
  hasmore: boolean
  rcmdLimit: number
}

export interface IGetVideoDetailRes {
  code: number
  data: IVideoDetail
}

export interface IGetVideoUrlRes {
  code: number
  urls: IUrl[]
}

export interface IVideoPartStore {
  currentVideoTag: IVideoTag
  videoTagList: IVideoTag[]
  videos: IVideo[]
  videoDetail: Partial<IVideoDetail>
  videoUrls: IUrl[]
}
