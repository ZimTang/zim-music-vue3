import {
  IGetBannersRes,
  IGetNewAlbumRes,
  IGetPrivateContentRes,
  IGetRecommendResourceRes
} from '@/models/recommend'
import http from '@/utils/http'

const getRecommendBanners = (): Promise<IGetBannersRes> => {
  return http.get('/banner', { params: { type: 0 } })
}

const getRecommendResource = (): Promise<IGetRecommendResourceRes> => {
  return http.get('/recommend/resource')
}

const getPrivateContent = (): Promise<IGetPrivateContentRes> => {
  return http.get('/personalized/privatecontent')
}

const getNewAlbum = (): Promise<IGetNewAlbumRes> => {
  return http.get('/top/song')
}

export default {
  getRecommendBanners,
  getRecommendResource,
  getPrivateContent,
  getNewAlbum
}
