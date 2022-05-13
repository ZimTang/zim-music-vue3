import { ref } from 'vue'

export const useModal = () => {
  const changeModalShow = (isShow: boolean) => {
    isModalShow.value = isShow
  }
  const isModalShow = ref(false)

  return { isModalShow, changeModalShow }
}
