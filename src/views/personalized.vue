<script setup lang="ts">
import { onMounted, ref } from 'vue'
import RecommendSongs from '@/components/recommend/recommend-songs.vue'
import useUserStore from '@/stores/user'
const userStore = useUserStore()
const isLoading = ref(false)

onMounted(async () => {
  isLoading.value = true
  await userStore.getUserPersonalized()
  isLoading.value = false
})
</script>

<template>
  <div class="personalized" v-loading="isLoading">
    <recommend-songs
      :recommends="userStore.personalized"
      image-url-props="picUrl"
    />
  </div>
</template>

<style lang="scss">
.personalized {
  margin-top: 3rem;
}
</style>
