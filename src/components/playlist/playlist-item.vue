<script setup lang="ts">
import { VideoPlay } from '@element-plus/icons-vue'
defineProps({
  item: {
    type: Object,
    required: true
  },
  imageUrlProps: {
    type: String,
    required: true
  }
})
</script>

<template>
  <router-link :to="'/playlistDetail/' + item.id" class="playlist-item">
    <el-image
      :src="item[imageUrlProps]"
      class="item-image"
      fit="cover"
      style="border-radius: 20px; width: 11rem; height: 11rem"
    />
    <div class="item-hover">
      <el-icon color="#ec4141"><VideoPlay /></el-icon>
    </div>
    <div class="name">{{ item.name }}</div>
  </router-link>
</template>

<style lang="scss">
.playlist-item {
  display: inline-block;
  position: relative;
  width: 11rem;
  transition: all 0.4s;
  margin-bottom: 20px;
  color: #525252;
  .item-image {
    transition: all 0.4s;
  }
  .item-hover {
    visibility: hidden;
    opacity: 0;
    position: absolute;
    transition: all 0.4s;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .name {
    margin-top: 5px;
    font-size: 1.3rem;
  }
}
.playlist-item:hover {
  color: #000;
  cursor: pointer;
}
.playlist-item:hover .item-hover {
  visibility: visible;
  opacity: 1;
}
.playlist-item:hover .item-image {
  filter: blur(1px);
}
</style>
