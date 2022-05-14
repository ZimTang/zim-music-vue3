import http from '@/utils/http'
import { AxiosPromise } from 'axios'

const getSongDetail = (ids: number): AxiosPromise<any> => {
  return http({ url: '/song/detail', params: { ids } })
}

export default {
  getSongDetail
}
