<script setup lang="ts">
import useartistDetailStore from '@/stores/artist-detail'
import ArtistItem from '@/common/artist-item.vue'
import { useRouteIdChange } from '@/hooks/useRouteIdChange'

const artistDetailStore = useartistDetailStore()
const { isLoading } = useRouteIdChange(artistDetailStore.getSimiArtist, 'id')
</script>

<template>
  <div v-loading="isLoading">
    <el-row :gutter="35">
      <el-col :span="6" v-for="artist in artistDetailStore.simiArtist">
        <artist-item :artist="artist" />
      </el-col>
    </el-row>
  </div>
</template>

<style lang="scss"></style>
