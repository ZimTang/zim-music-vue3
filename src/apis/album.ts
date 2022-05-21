import { IGetAlbumContentRes } from '@/models/album'
import http from '@/utils/http'

const getAlbumContent = (id: number): Promise<IGetAlbumContentRes> => {
  return http.get('/album', { params: { id } })
}

export default {
  getAlbumContent
}
