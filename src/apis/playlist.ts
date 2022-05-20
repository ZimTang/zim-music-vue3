import {
  IGetHighQuantityPlaylistRes,
  IGetPlaylistCateListRes,
  IGetPlaylistHotTagsRes
} from '@/models/playlist'
import http from '@/utils/http'

const getPlaylistCateList = (): Promise<IGetPlaylistCateListRes> => {
  return http.get('/playlist/catlist')
}

const getPlaylistHotTags = (): Promise<IGetPlaylistHotTagsRes> => {
  return http.get('/playlist/hot')
}

const getHighQuantityPlaylist = (
  cat?: string,
  limit?: number,
  before?: number
): Promise<IGetHighQuantityPlaylistRes> => {
  return http.get('/top/playlist/highquality', {
    params: { cat, limit, before }
  })
}

export default {
  getPlaylistCateList,
  getPlaylistHotTags,
  getHighQuantityPlaylist
}
