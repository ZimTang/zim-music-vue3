import { IAlbum } from './recommend'
import { IUser } from './user'

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

export interface IGetArtistDetailRes {
  code: number
  data: {
    artist: IArtist
    user: IUser['profile']
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

export interface IArtistItemStore {
  artist: Partial<IArtist>
  user: Partial<IUser['profile']>
  identify: Partial<IIdentify>
  videoCount: number
  hotAlbums: IAlbum[]
}
