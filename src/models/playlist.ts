import { IArtist } from './artist'

export interface IPlaylistCreator {
  userId: number
  avatarUrl: string
  expertTags: string[]
  nickname: string
  signature: string
}

export interface IPlaylist {
  coverImgUrl: string
  creator: IPlaylistCreator
  createTime: number
  name: string
  description: string
  tags: string[]
  updateTime: number
  label: string
}

export interface IAl {
  id: number
  name: string
  picUrl: string
}

export interface ISong {
  id: number
  name: string
  al: IAl
  dt: number
  ar: IArtist[]
}

export interface IPrivilege {}

export interface ISharedPrivilege {}

export interface IUrl {}

export interface IRelatedVideo {}

export interface IResEntrance {}

export interface ICate {
  name: string
  category: number
}

export interface ITag {
  id: number
  createTime: number
  name: string
  playlistTag: {
    name: '华语'
  }
  hot: boolean
  usedCount: number
}

export interface IGetPlaylistDataRes {
  code: number
  relatedVideos: IRelatedVideo[]
  playlist: IPlaylist
  urls: IUrl
  privileges: IPrivilege[]
  sharedPrivilege: ISharedPrivilege
  resEntrance: IResEntrance
}

export interface IGetPlaylistInfoRes {
  code: number
  privileges: IPrivilege[]
  songs: ISong[]
}

export interface IGetPlaylistCateListRes {
  code: number
  all: ICate
  categories: string[]
  sub: IPlaylist[]
}

export interface IGetPlaylistHotTagsRes {
  code: number
  tags: []
}

export interface IGetHighQuantityPlaylistRes {
  code: number
  lasttime: number
  more: boolean
  playlists: IPlaylist[]
  total: number
}

export interface IPlaylistStoreState {
  all: any
  categories: string[]
  sub: any
  hotTags: ITag[]
  playlists: IPlaylist[]
  more: boolean
  total: number
}

export interface IplaylistDetailStoreState {
  playlistDetailInfo: Partial<IGetPlaylistDataRes>
  playlistSongs: ISong[]
}
