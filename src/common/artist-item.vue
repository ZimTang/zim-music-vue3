<script setup lang="ts">
import { UserFilled } from '@element-plus/icons-vue'
defineProps({
  artist: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="artist-item">
    <router-link :to="'/artistDetail/artistDetailAlbum/' + artist.id">
      <el-image
        :src="artist.picUrl"
        class="artist-cover"
        fit="contain"
      ></el-image>
      <div class="desc">
        <div class="name">{{ artist.name }}</div>
        <el-icon v-if="artist.accountId" color="#dd0822"
          ><UserFilled
        /></el-icon>
      </div>
    </router-link>
  </div>
</template>

<style lang="scss">
.artist-item {
  display: inline-block;
  position: relative;
  width: 100%;
  transition: all 0.4s;
  overflow: hidden;
  margin-bottom: 2rem;
  .artist-cover {
    transition: all 0.4s;
    border-radius: 1rem;
  }
  .desc {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 0.5rem;
  }
  .name {
    font-size: 1.3rem;
    color: #525252;
  }
}
</style>
