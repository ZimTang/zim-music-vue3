<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import usevideoPartStore from '@/stores/video-part'
import { IVideoTag } from '@/models/video-part'
import ZimTagList from '@/common/zim-tag-list.vue'
import ZimList from '@/common/zim-list.vue'
import videoItem from '@/common/video-item.vue'

const videoPartStore = usevideoPartStore()
const offset = ref(0)
const isLoading = ref(false)

onMounted(async () => {
  await videoPartStore.getVideoTagList()
  videoPartStore.currentVideoTag = videoPartStore.videoTagList[0]
})

watch(
  () => videoPartStore.currentVideoTag,
  async (newTag: IVideoTag, oldTag: IVideoTag) => {
    if (newTag.name !== oldTag.name) {
      offset.value = 1
      isLoading.value = true
      await videoPartStore.getVideosByTag(videoPartStore.currentVideoTag.id)
      isLoading.value = false
    }
  }
)

const handleChangeCurrentTag = (item: IVideoTag) => {
  videoPartStore.currentVideoTag = item
}
</script>

<template>
  <div class="video-list-video">
    <zim-tag-list
      :current-tag="videoPartStore.currentVideoTag.name"
      :tag-list="videoPartStore.videoTagList.slice(0, 8)"
      @change-current-tag="handleChangeCurrentTag"
      v-loading="isLoading"
    />
    <zim-list
      :list-data="videoPartStore.videos"
      :span="6"
      :gutter="30"
      empty-description="暂无视频"
      v-slot="{ item }"
    >
      <video-item :item="item" />
    </zim-list>
  </div>
</template>

<style lang="scss"></style>
