<script setup lang="ts">
import linkHeader from '@/common/link-header.vue'

const config = [
  {
    to: '/videoPart/video',
    text: '视频'
  },
  {
    to: '/videoPart/mv',
    text: 'MV'
  }
]
</script>

<template>
  <div class="video-part">
    <link-header :config="config" width="calc(100% - 20vw)" />
    <router-view></router-view>
  </div>
</template>

<style lang="scss"></style>
