import { IBanner } from './recommend'

export interface IFetchData {
  code: number
}

export interface IFetchBanners extends IFetchData {
  banners: Partial<IBanner[]>
}
