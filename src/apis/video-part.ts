import {
  IGetRelatedVideo,
  IGetVideoCommentsRes,
  IGetVideoDetailRes,
  IGetVideosByTagRes,
  IGetVideoTagListRes,
  IGetVideoUrlRes
} from '@/models/video-part'
import http from '@/utils/http'

const getVideoTagList = (): Promise<IGetVideoTagListRes> => {
  return http.get('/video/group/list')
}

const getVideosByTag = (
  id: number,
  offset: number = 0
): Promise<IGetVideosByTagRes> => {
  return http.get('/video/group', { params: { id, offset } })
}

const getVideoDetail = (id: string): Promise<IGetVideoDetailRes> => {
  return http.get('/video/detail', { params: { id } })
}

const getVideoUrl = (id: string): Promise<IGetVideoUrlRes> => {
  return http.get('/video/url', { params: { id } })
}

const getVideoComments = (
  id: string,
  limit: number,
  offset: number
): Promise<IGetVideoCommentsRes> => {
  return http.get('/comment/video', { params: { id, limit, offset } })
}

const getRelatedVideo = (id: string): Promise<IGetRelatedVideo> => {
  return http.get('/related/allvideo', { params: { id } })
}

export default {
  getVideoTagList,
  getVideosByTag,
  getVideoDetail,
  getVideoUrl,
  getVideoComments,
  getRelatedVideo
}
