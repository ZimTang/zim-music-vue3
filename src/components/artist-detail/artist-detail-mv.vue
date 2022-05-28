<script setup lang="ts">
import useartistDetailStore from '@/stores/artist-detail'
import { useRouteIdChange } from '@/hooks/useRouteIdChange'

const artistDetailStore = useartistDetailStore()
const { isLoading } = useRouteIdChange(artistDetailStore.getArtistMv, 'id')
</script>

<template>
  <div class="artist-item-mv" v-loading="isLoading">
    <el-row :gutter="30">
      <el-col :span="4" v-for="item in artistDetailStore.mvs">
        <!-- todo -->
        <router-link to="/" class="item">
          <el-image :src="item.imgurl" class="cover" fit="fill"></el-image>
          <div class="name">{{ item.name }}</div>
        </router-link>
      </el-col>
    </el-row>
  </div>
</template>

<style lang="scss">
.artist-item-mv {
  .item {
    display: block;
    .cover {
      width: 100%;
      height: 13rem;
      border-radius: 10%;
    }
    .name {
      margin: 1rem 0;
      font-size: 1.4rem;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
}
</style>
