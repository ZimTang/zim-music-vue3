<script setup lang="ts">
import useVideoPartStore from '@/stores/video-part'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const videoPartStore = useVideoPartStore()
onMounted(() => {
  videoPartStore.getVideoDetail(route.params.vid as string)
  videoPartStore.getVideoUrl(route.params.vid as string)
})
</script>

<template>
  <div class="video-detail">
    <video :src="videoPartStore.videoUrls[0]?.url" controls></video>
  </div>
</template>

<style lang="scss"></style>
