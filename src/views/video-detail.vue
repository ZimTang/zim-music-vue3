<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import useVideoPartStore from '@/stores/video-part'
import zimVideo from '@/components/zim-video/zim-video.vue'

const route = useRoute()
const videoPartStore = useVideoPartStore()
const isVideoPause = ref(false)

watch(
  () => route.params.vid,
  async () => {
    isVideoPause.value = true
    await videoPartStore.getVideoDetail(route.params.vid as string)
    await videoPartStore.getVideoUrl(route.params.vid as string)
  }
)

onMounted(async () => {
  isVideoPause.value = true
  await videoPartStore.getVideoDetail(route.params.vid as string)
  await videoPartStore.getVideoUrl(route.params.vid as string)
})

const handleChangeVideoState = (isPause: boolean) => {
  isVideoPause.value = isPause
}
</script>

<template>
  <div class="video-detail">
    <zim-video
      :url="videoPartStore.videoUrls[0]?.url"
      :is-video-pause="isVideoPause"
      @change-video-state="handleChangeVideoState"
    />
  </div>
</template>

<style lang="scss"></style>
