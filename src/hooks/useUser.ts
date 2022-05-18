import { ref } from 'vue'
import { FormInstance, ElMessage } from 'element-plus'
import { userFetch } from '@/apis'
import { ILoginModel, IUser } from '@/models/user'
import useUserStore from '@/stores/user'

export const useUser = () => {
  const userStore = useUserStore()
  const user = ref<IUser>({
    account: {},
    profile: {},
    token: '',
    cookie: '',
    records: [],
    playlist: []
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
          res.token && localStorage.setItem('user', JSON.stringify(res))
          // 本地设置cookie
          localStorage.setItem('cookie', res.cookie!)
          user.value = {
            account: res.account,
            profile: res.profile,
            token: res.token,
            cookie: res.cookie,
            records: [],
            playlist: []
          }
          ElMessage({
            message: '登录成功',
            type: 'success'
          })
          userStore.changeProfile(user.value.profile)
        } catch (error) {
          ElMessage({ type: 'error', message: '请重新登录' })
        }
      } else {
        return
      }
    })
  }

  return { user, loginForm, handleLogin }
}
