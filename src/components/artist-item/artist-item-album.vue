<script setup lang="ts">
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'
import useArtistItemStore from '@/stores/artist-item'

const route = useRoute()
const artistId = parseInt(route.params.id as string)
const artistItemStore = useArtistItemStore()

onMounted(async () => {
  await artistItemStore.getArtistAlbum(artistId)
})
</script>

<template>
  <div class="artist-item-album">
    <el-row :gutter="30">
      <el-col :span="3" v-for="item in artistItemStore.hotAlbums">
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
