<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import useArtistStore from '@/stores/artist'
import ArtistCate from '@/components/artist/artist-cate.vue'
import ArtistItem from '@/common/artist-item.vue'

const artistStore = useArtistStore()
const limit = ref(30)
const offset = ref(0)
const isLoading = ref(true)

watchEffect(async () => {
  isLoading.value = true
  await artistStore.getArtistList(
    artistStore.type,
    artistStore.area,
    artistStore.initial,
    limit.value,
    offset.value
  )
  isLoading.value = false
})
</script>

<template>
  <div class="artist" v-loading="isLoading">
    <artist-cate />
    <el-row :gutter="35">
      <el-col :span="4" v-for="artist in artistStore.artists">
        <artist-item :artist="artist" />
      </el-col>
    </el-row>
  </div>
</template>

<style lang="scss">
.artist {
  padding: 0rem 1rem;
}
</style>
