import { IArtist } from './artist'
import { IPlaylistCreator } from './playlist'

export interface IBanner {
  targetId: number
  titleColor: string
  imageUrl: string
  typeTitle: string
}

export interface IRecommend {
  picUrl: string
  name: string
  playCount: number
  creator: IPlaylistCreator[]
}

export interface IPrivateContent {
  id: number
  picUrl: string
  name: string
  type: number
  copywriter: string
}

export interface IAlbum {
  id: number
  name: string
  artist: IArtist
  artists: IArtist[]
  company: string
  description: string
  blurPicUrl: string
  picUrl: string
  subType: string
}

export interface IGetBannersRes {
  code: number
  banners: IBanner[]
}

export interface IGetRecommendResourceRes {
  code: number
  featureFirst: boolean
  haveRcmdSongs: boolean
  recommend: []
}

export interface IGetPrivateContentRes {
  code: number
  result: IPrivateContent[]
}

export interface IGetNewAlbumRes {
  code: number
  data: IAlbum[]
}

export interface IRecommendStoreState {
  banners: IBanner[]
  recommends: IRecommend[]
  privateContents: IPrivateContent[]
  newAlbum: IAlbum[]
}
