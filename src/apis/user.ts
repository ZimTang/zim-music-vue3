import { ILoginModel, IUser } from '@/models/user'
import http from '@/utils/http'

const login = (loginForm: ILoginModel): Promise<IUser> => {
  return http.get('/login/cellphone', { params: { ...loginForm } })
}

const getUserDetail = (uid: number): Promise<IUser> => {
  return http.get('/user/detail', { params: { uid } })
}

export default {
  login,
  getUserDetail
}
