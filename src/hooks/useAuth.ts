import { ref } from 'vue'
import { IUser } from '@/models/user'
import useUserStore from '@/stores/user'
import { userFetch } from '@/apis'
import { ElMessage } from 'element-plus'

// 用户鉴权
export const useAuth = async () => {
  const userStore = useUserStore()
  const user = ref<IUser>(JSON.parse(localStorage.getItem('user') || '{}'))
  if (Object.keys(user.value).length) {
    try {
      const res = await userFetch.getUserDetail(user.value.profile.userId!)
      userStore.changeProfile(res.profile)
      return Promise.resolve(true)
    } catch (error) {
      ElMessage({ type: 'error', message: '获取用户信息失败,请重新登录' })
      return Promise.reject(false)
    }
  } else {
    return Promise.resolve(false)
  }
}
