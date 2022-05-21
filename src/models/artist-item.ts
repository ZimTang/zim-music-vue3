import { IAlbum } from './recommend'
import { IProfile, IUser } from './user'

export interface IArtist {
  id: number
  name: string
  briefDesc: string
  albumSize: number
  cover: string
  identifyTag: string[]
  identities: string[]
  musicSize: number
  mvSize: number
}

export interface IIdentify {
  imageDesc: string
}

export interface IMv {
  id: number
  artistName: string
  imgurl: string
  name: string
  publishTime: string
  duration: number
  playCount: number
  artist: IArtist
}

export interface IGetArtistDetailRes {
  code: number
  data: {
    artist: IArtist
    user: IProfile
    identify: IIdentify
    videoCount: number
  }
}

export interface IGetArtistAlbumRes {
  code: number
  artist: IArtist
  hotAlbums: IAlbum[]
  more: true
}

export interface IGetArtistMvRes {
  code: number
  hasMore: true
  mvs: IMv[]
}

export interface IArtistItemStore {
  artist: Partial<IArtist>
  user: Partial<IProfile>
  identify: Partial<IIdentify>
  videoCount: number
  hotAlbums: IAlbum[]
  mvs: IMv[]
}
