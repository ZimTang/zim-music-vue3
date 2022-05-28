import { watch, ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

export const useRouteIdChange = (fetchFn: Function, paramsName: string) => {
  const route = useRoute()
  const isLoading = ref(false)
  watch(
    () => route.params.id,
    async () => {
      isLoading.value = true
      await fetchFn(parseInt(route.params[paramsName] as string))
      isLoading.value = false
    }
  )

  onMounted(async () => {
    isLoading.value = true
    await fetchFn(parseInt(route.params[paramsName] as string))
    isLoading.value = false
  })

  return { isLoading }
}
