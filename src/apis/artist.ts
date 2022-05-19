import { IGetTopArtistsRes } from '@/models/artist'
import http from '@/utils/http'

const getTopArtists = (
  limit: number,
  offset: number
): Promise<IGetTopArtistsRes> => {
  return http.get('/top/artists', { params: { limit, offset } })
}

const getArtistList = (
  type: number,
  area: number,
  initial: string | number,
  limit: number,
  offset: number
): Promise<IGetTopArtistsRes> => {
  return http.get('/artist/list', {
    params: { type, area, initial, limit, offset }
  })
}

export default {
  getTopArtists,
  getArtistList
}
