<script setup lang="ts">
import useartistDetailStore from '@/stores/artist-detail'
import { useRouteIdChange } from '@/hooks/useRouteIdChange'

const artistDetailStore = useartistDetailStore()
const { isLoading } = useRouteIdChange(artistDetailStore.getArtistAlbum, 'id')
</script>

<template>
  <div class="artist-item-album" v-loading="isLoading">
    <el-row :gutter="30">
      <el-col :span="3" v-for="item in artistDetailStore.hotAlbums">
        <router-link :to="'/album/' + item.id" class="item">
          <el-image :src="item.picUrl" class="cover"></el-image>
          <div class="name">{{ item.name }}</div>
        </router-link>
      </el-col>
    </el-row>
  </div>
</template>

<style lang="scss">
.artist-item-album {
  .item {
    display: block;
    margin-bottom: 2rem;
    .name {
      font-size: 1.4rem;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      margin-top: 1rem;
    }
    .cover {
      border-radius: 10%;
    }
  }
  .item:hover {
    cursor: pointer;
  }
}
</style>
