import { ILoginModel, IUser } from '@/models/user'
import http from '@/utils/http'

const login = (loginForm: ILoginModel): Promise<IUser> => {
  return http.get('/login/cellphone', { params: { ...loginForm } })
}

const getUserDetail = (uid: number): Promise<IUser> => {
  return http.get('/user/detail', { params: { uid } })
}

const getUserRecord = (uid: number, type: number = 0): Promise<any> => {
  return http.get('/user/record', { params: { uid, type } })
}

const getUserPlayList = (uid: number): Promise<any> => {
  return http.get('/user/playlist', { params: { uid } })
}

export default {
  login,
  getUserDetail,
  getUserRecord,
  getUserPlayList
}
