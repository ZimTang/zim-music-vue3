import {
  IGetAudioDetailRes,
  IGetAudioLyricRes,
  IGetAudioUrlRes
} from '@/models/audio'
import http from '@/utils/http'

const getAudioDetail = (ids: number): Promise<IGetAudioDetailRes> => {
  return http.get('/song/detail', { params: { ids } })
}

const getAudioUrl = (id: number): Promise<IGetAudioUrlRes> => {
  return http.get('/song/url', { params: { id } })
}

const getAudioLyric = (id: number): Promise<IGetAudioLyricRes> => {
  return http.get('/lyric', { params: { id } })
}

export default {
  getAudioDetail,
  getAudioUrl,
  getAudioLyric
}
