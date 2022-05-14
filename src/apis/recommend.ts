import { IFetchBanners } from '@/models/apis'
import http from '@/utils/http'
import { AxiosPromise } from 'axios'

const getRecommendBanners = (): AxiosPromise<IFetchBanners> => {
  return http({ url: '/banner', params: { type: 0 } })
}

const getRecommendResource = () => {
  return http({ url: '/recommend/resource?timestamp=' + Date.now() })
}

const getPrivateContent = () => {
  return http({ url: '/personalized/privatecontent' })
}

const getNewAlbum = () => {
  return http({ url: '/top/song' })
}

export default {
  getRecommendBanners,
  getRecommendResource,
  getPrivateContent,
  getNewAlbum
}
