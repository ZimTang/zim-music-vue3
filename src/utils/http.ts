import axios from 'axios'

const http = axios.create({
  baseURL: import.meta.env.VITE_FETCH_URL,
  timeout: 10000
})

http.interceptors.request.use((config) => {
  config.params = { ...config.params }
  config.params.cookie =
    JSON.parse(localStorage.getItem('user') || '{}').cookie || ''
  return config
})

http.interceptors.response.use(
  (response) => {
    const { status, data } = response
    if (status !== 200) return Promise.reject(data)
    if (data.code !== 200) return Promise.reject(data.msg)
    return Promise.resolve(data)
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default http
