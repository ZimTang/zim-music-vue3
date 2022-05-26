<script setup lang="ts">
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'
import useartistDetailStore from '@/stores/artist-detail'

const artistDetailStore = useartistDetailStore()
const route = useRoute()
const artistId = parseInt(route.params.id as string)

onMounted(async () => {
  await artistDetailStore.getArtistMv(artistId)
})
</script>

<template>
  <div class="artist-item-mv">
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
      width: 14rem;
      height: 10rem;
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
