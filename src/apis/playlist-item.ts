import { IPlaylistItem } from '@/models/playlist'
import http from '@/utils/http'

export const getPlaylistItem = (id: number): Promise<IPlaylistItem> => {
  return http.get('/playlist/detail', { params: { id } })
}

export const getPlaylistAllSong = (
  id: number,
  limit?: number,
  offset?: number
): Promise<any> => {
  return http.get('/playlist/track/all', { params: { id, offset, limit } })
}

export default {
  getPlaylistItem,
  getPlaylistAllSong
}
