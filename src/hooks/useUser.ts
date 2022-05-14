import { FormInstance } from 'element-plus'
import { userFetch } from '@/apis'
import { ref } from 'vue'
import { ILoginModel, IUser } from '@/models/user'
import { useUserStore } from '@/stores/user'
import { ElMessage } from 'element-plus'

export const useUser = () => {
  const userStore = useUserStore()

  const user = ref<IUser>({
    account: {},
    profile: {},
    token: ''
  })
  const loginForm = ref<ILoginModel>({
    phone: '',
    password: ''
  })

  const handleLogin = async (formEl: FormInstance | undefined) => {
    if (!formEl) return
    await formEl.validate(async (validate, fields) => {
      if (validate) {
        try {
          const res = await userFetch.login({
            ...loginForm.value
          })
          res.data.token &&
            localStorage.setItem('user', JSON.stringify(res.data))
          // 本地设置cookie
          localStorage.setItem('cookie', res.data.cookie!)
          user.value = {
            account: res.data.account,
            profile: res.data.profile,
            token: res.data.token
          }
          ElMessage({
            message: '登录成功',
            type: 'success'
          })
          userStore.changeProfile(user.value)
        } catch (error) {
          ElMessage({ type: 'error', message: (error as Error).toString() })
        }
        console.log('submit!')
      } else {
        return
      }
    })
  }
  return { user, loginForm, handleLogin }
}
