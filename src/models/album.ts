import { ISong } from './playlist'
import { IAlbum } from './recommend'

export interface IGetAlbumContentRes {
  code: number
  album: IAlbum
  resourceState: boolean
  songs: ISong[]
}

export interface IAlbumStore {
  album: Partial<IAlbum>
  songs: ISong[]
}
