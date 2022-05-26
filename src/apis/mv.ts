import http from '@/utils/http'

const getMvUrl = (id: number | string) => {
  return http.get('/mv/url', { params: { id } })
}

export default {
  getMvUrl
}
