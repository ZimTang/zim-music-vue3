<script setup lang="ts">
import ZimList from '@/common/zim-list.vue'
import PlaylistItem from '@/components/playlist/playlist-item.vue'

defineProps({
  recommends: {
    type: Object,
    required: true
  },
  imageUrlProps: {
    type: String,
    required: true
  },
  limit: {
    type: Number
  }
})
</script>

<template>
  <div class="recommend-songs">
    <zim-list
      :list-data="recommends.slice(0, limit ? limit : recommends.length)"
      :span="4"
      :gutter="10"
      empty-description="暂无歌单"
    >
      <template v-slot="{ item }">
        <playlist-item :item="item" :image-url-props="imageUrlProps" />
      </template>
    </zim-list>
  </div>
</template>

<style lang="scss"></style>
