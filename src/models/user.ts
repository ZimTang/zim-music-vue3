export interface ILoginModel {
  phone: string
  password: string
}

export interface IUser {
  account: {}
  profile: {
    userId?: number
    nickname?: string
    avatarUrl?: string
  }
  token: string
}
