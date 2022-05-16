import { IFetchBanners } from '@/models/apis'
import http from '@/utils/http'

const getRecommendBanners = (): Promise<IFetchBanners> => {
  return http.get('/banner', { params: { type: 0 } })
}

const getRecommendResource = (): Promise<any> => {
  return http.get('/recommend/resource?')
}

const getPrivateContent = (): Promise<any> => {
  return http.get('/personalized/privatecontent')
}

const getNewAlbum = (): Promise<any> => {
  return http.get('/top/song')
}

export default {
  getRecommendBanners,
  getRecommendResource,
  getPrivateContent,
  getNewAlbum
}
