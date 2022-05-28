import {
  IGetArtistDetailRes,
  IGetArtistAlbumRes,
  IGetArtistMvRes,
  IGetArtistDescRes,
  IGetSimiArtistRes
} from '@/models/artist-detail'
import http from '@/utils/http'

const getArtistDetail = (id: number): Promise<IGetArtistDetailRes> => {
  return http.get('/artist/detail', { params: { id } })
}

const getArtistDesc = (id: number): Promise<IGetArtistDescRes> => {
  return http.get('/artist/desc', { params: { id } })
}

const getSimiArtist = (id: number): Promise<IGetSimiArtistRes> => {
  return http.get('/simi/artist', { params: { id } })
}

const getArtistAlbum = (
  id: number,
  limit: number = 30
): Promise<IGetArtistAlbumRes> => {
  return http.get('/artist/album', { params: { id, limit } })
}

const getArtistMv = (id: number): Promise<IGetArtistMvRes> => {
  return http.get('/artist/mv', { params: { id } })
}

export default {
  getArtistDetail,
  getArtistDesc,
  getSimiArtist,
  getArtistAlbum,
  getArtistMv
}
