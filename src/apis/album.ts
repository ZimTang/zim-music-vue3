import http from '@/utils/http'

const getAlbumContent = (id: number) => {
  return http.get('/album', { params: { id } })
}

export default {
  getAlbumContent
}
