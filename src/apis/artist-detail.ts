import {
  IGetArtistDetailRes,
  IGetArtistAlbumRes,
  IGetArtistMvRes
} from '@/models/artist-detail'
import http from '@/utils/http'

const getArtistDetail = (id: number): Promise<IGetArtistDetailRes> => {
  return http.get('/artist/detail', { params: { id } })
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
  getArtistAlbum,
  getArtistMv
}
