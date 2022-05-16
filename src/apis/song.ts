import http from '@/utils/http'

const getSongDetail = (ids: number): Promise<any> => {
  return http.get('/song/detail', { params: { ids } })
}

const getSongUrl = (id: number): Promise<any> => {
  return http.get('/song/url', { params: { id } })
}

export default {
  getSongDetail,
  getSongUrl
}
