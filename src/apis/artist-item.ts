import { IGetArtistDetailRes, IGetArtistAlbumRes } from '@/models/artist-item'
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

export default {
  getArtistDetail,
  getArtistAlbum
}
