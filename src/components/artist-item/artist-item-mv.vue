<script setup lang="ts">
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'
import useArtistItemStore from '@/stores/artist-item'

const artistItemStore = useArtistItemStore()
const route = useRoute()
const artistId = parseInt(route.params.id as string)

onMounted(async () => {
  await artistItemStore.getArtistMv(artistId)
})
</script>

<template>
  <div class="artist-item-mv">
    <el-row :gutter="30">
      <el-col :span="3" v-for="item in artistItemStore.mvs">
        <!-- todo -->
        <router-link to="/" class="item">
          <el-image :src="item.imgurl" class="cover" fit="contain"></el-image>
          <div>{{ item.name }}</div>
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
      border-radius: 10%;
    }
  }
}
</style>
