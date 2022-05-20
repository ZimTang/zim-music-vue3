export interface IArtistCateItem {
  label: string
  value: string | number
}

export interface IArtist {
  id: number
  name: string
  picUrl: string
  accountId: number
}

export interface IGetTopArtistsRes {
  code: number
  more: boolean
  artists: IArtist[]
}

export interface IArtistStoreState extends Omit<IGetTopArtistsRes, 'code'> {
  type: number
  area: number
  initial: string
}

export interface IArtistStoreAction {
  getTopArtists: (limit: number, offset: number) => void
  getArtistList: (
    type: number,
    area: number,
    initial: string,
    limit: number,
    offset: number
  ) => void
}
