<script setup lang="ts">
import { IVideoData } from '@/models/video-part'
defineProps<{
  item: Pick<IVideoData, 'coverUrl' | 'vid' | 'title'>
}>()
</script>

<template>
  <div class="video-item">
    <router-link :to="'/videoDetail/' + item.vid" class="video-item-block">
      <el-image :src="item.coverUrl"></el-image>
      <div class="name">
        {{ item.title }}
      </div>
    </router-link>
  </div>
</template>

<style lang="scss">
.video-item {
  width: 100%;
}

.video-item-block {
  display: inline-block;
  width: 25rem;
  margin-bottom: 3rem;
  & img {
    border-radius: 2%;
  }

  .name {
    margin: 1rem 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
</style>
