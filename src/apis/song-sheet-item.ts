import { ISongSheetItem } from '@/models/song-sheet'
import http from '@/utils/http'

export const getSongSheetItem = (id: number): Promise<ISongSheetItem> => {
  return http.get('/playlist/detail', { params: { id } })
}

export const getSongSheetAllSong = (
  id: number,
  limit?: number,
  offset?: number
): Promise<any> => {
  return http.get('/playlist/track/all', { params: { id, offset, limit } })
}

export default {
  getSongSheetItem,
  getSongSheetAllSong
}
