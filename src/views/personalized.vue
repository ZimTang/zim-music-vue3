<script setup lang="ts">
import { onMounted } from 'vue'
import RecommendSongs from '@/components/recommend/recommend-songs.vue'
import useUserStore from '@/stores/user'
const userStore = useUserStore()

onMounted(async () => {
  await userStore.getUserPersonalized()
})
</script>

<template>
  <div class="personalized">
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
