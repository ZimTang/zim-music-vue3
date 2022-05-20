import { IGetPlaylistDataRes, IGetPlaylistInfoRes } from '@/models/playlist'
import http from '@/utils/http'

export const getPlaylistData = (id: number): Promise<IGetPlaylistDataRes> => {
  return http.get('/playlist/detail', { params: { id } })
}

export const getPlaylistInfo = (
  id: number,
  limit?: number,
  offset?: number
): Promise<IGetPlaylistInfoRes> => {
  return http.get('/playlist/track/all', { params: { id, offset, limit } })
}

export default {
  getPlaylistData,
  getPlaylistInfo
}
