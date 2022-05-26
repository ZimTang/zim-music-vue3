<script setup lang="ts">
import { IVideo } from '@/models/video-part'
const props = defineProps<{
  item: IVideo
}>()
</script>

<template>
  <div class="video-item">
    <router-link :to="'/videoDetail/' + item.data.vid" class="video-item-block">
      <el-image :src="item.data.coverUrl"></el-image>
      <div class="name">
        {{ item.data.title }}
      </div>
    </router-link>
  </div>
</template>

<style lang="scss">
.video-item-block {
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
