import http from '@/utils/http'

const getPlaylistCateList = (): Promise<any> => {
  return http.get('/playlist/catlist')
}

const getPlaylistHotTags = (): Promise<any> => {
  return http.get('/playlist/hot')
}

const getHighQuantityPlaylist = (
  cat?: string,
  limit?: number,
  before?: number
): Promise<any> => {
  return http.get('/top/playlist/highquality', {
    params: { cat, limit, before }
  })
}

export default {
  getPlaylistCateList,
  getPlaylistHotTags,
  getHighQuantityPlaylist
}
