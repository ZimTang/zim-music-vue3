import { IUser } from '@/models/user'
import { ref } from 'vue'
import { useUserStore } from '@/stores/user'
import { userFetch } from '@/apis'
import { ElMessage } from 'element-plus'

// 用户鉴权
export const useAuth = async () => {
  const userStore = useUserStore()
  const user = ref<IUser>(JSON.parse(localStorage.getItem('user') || '{}'))
  if (user.value.token) {
    try {
      const res = await userFetch.getUserDetail(user.value.profile.userId!)
      const newUser = ref<IUser>({
        profile: res.data.profile,
        account: res.data.account,
        token: user.value.token,
        cookie: user.value.cookie
      })
      userStore.changeProfile(newUser.value)
    } catch (error) {
      ElMessage({ type: 'error', message: '获取用户信息失败' })
    }
  }
  return user
}
