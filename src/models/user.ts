import { IPlaylist, ISong } from './playlist'

export interface ILoginModel {
  phone: string
  password: string
}

export interface IProfile {
  userId: number
  nickname: string
  avatarUrl: string
  description: string
}

export interface IUser {
  account: {}
  profile: Partial<IProfile>
  cookie?: string
  token: string
  isAuth: boolean
}

export interface IRecordItem {
  playCount: number
  score: number
  song: ISong[]
}

export interface IGetUserRecordRes {
  code: number
  allData: IRecordItem[]
}

export interface IGetUserPlayListRes {
  code: number
  more: boolean
  playlist: IPlaylist[]
  version: string
}

export interface IPersonalized {
  id: number
  name: string
  picUrl: string
  playCount: number
  canDislike: boolean
  trackCount: number
}

export interface IGetUserPersonalizedRes {
  category: number
  code: number
  hasTaste: boolean
  result: IPersonalized[]
}

export interface IUserStoreState extends IUser {
  playlist: IPlaylist[]
  personalized: IPersonalized[]
  records: IRecordItem[]
}
