import { ILoginModel, IUser } from '@/models/user'
import http from '@/utils/http'
import { AxiosPromise } from 'axios'

const login = (loginForm: ILoginModel): AxiosPromise<IUser> => {
  return http({ url: '/login/cellphone', params: { ...loginForm } })
}

const getUserDetail = (uid: number): AxiosPromise<IUser> => {
  return http({ url: '/user/detail', params: { uid } })
}

export default {
  login,
  getUserDetail
}
