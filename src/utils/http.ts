import axios from 'axios'

const http = axios.create({
  baseURL: import.meta.env.VITE_FETCH_URL,
  timeout: 5000
})

http.interceptors.response.use(
  (response) => {
    if (response.data.code !== 200) return Promise.reject(response.data.msg)
    return response
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default http
