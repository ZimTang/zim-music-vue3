<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import { ArrowRight } from '@element-plus/icons-vue'
import RecommendSongs from '@/components/recommend/recommend-songs.vue'
import usePlaylistStore from '@/stores/playlist'

const playlistStore = usePlaylistStore()
const limit = ref(18)
const offset = ref(1)
const isLoading = ref(true)
const currentTag = ref('华语')

onMounted(async () => {
  await playlistStore.getPlaylistCateList()
  await playlistStore.getPlaylistHotTags()
  await playlistStore.getHighQuantityPlaylist(currentTag.value, limit.value)
  isLoading.value = false
})

// watch(offset, async (newOffset, oldOffset) => {
//   if (newOffset > oldOffset) {
//     isLoading.value = true
//     const lastItem = playlistStore.playlists[playlistStore.playlists.length - 1]
//     await playlistStore.getHighQuantityPlaylist(
//       currentTag.value,
//       limit.value,
//       lastItem.updateTime
//     )
//     isLoading.value = false
//   }
// })

// 分页
watch(currentTag, async ([newCurrentTag, oldCurrentTag]) => {
  if (newCurrentTag !== oldCurrentTag) {
    offset.value = 1
    isLoading.value = true
    await playlistStore.getHighQuantityPlaylist(currentTag.value, limit.value)
    isLoading.value = false
  }
})

const handleChangePlaylist = (item: any) => {
  currentTag.value = item.name
}
</script>

<template>
  <div class="playlist" v-loading="isLoading">
    <div class="tags">
      <div class="current-tag">
        <span>
          {{ currentTag }}
        </span>
        <div class="icon">
          <el-icon><ArrowRight /></el-icon>
        </div>
      </div>
      <div class="hot-tag">
        <span
          v-for="item in playlistStore.hotTags"
          class="tag-link"
          @click="handleChangePlaylist(item)"
          >{{ item.name }}</span
        >
      </div>
    </div>
    <div class="list">
      <recommend-songs
        :recommends="
          playlistStore.playlists.slice(
            limit * (offset - 1),
            playlistStore.playlists.length
          )
        "
        image-url-props="coverImgUrl"
      />
    </div>
    <div class="pagination"></div>
  </div>
</template>

<style lang="scss">
@import '@/assets/styles/base.scss';
.playlist {
  .tags {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 1rem 2rem 1rem 0;
    .current-tag {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1.4rem;
      width: 8rem;
      height: 3rem;
      border: 1px solid rgb(209, 209, 209);
      border-radius: 2.5rem;
      .icon {
        padding-top: 0.5rem;
      }
    }
    .current-tag:hover {
      cursor: pointer;
    }
    .hot-tag {
      font-size: 1.3rem;
      .tag-link {
        cursor: default;
        display: inline-block;
        margin: 1rem;
      }
      .tag-link:hover {
        cursor: default;
      }
    }
  }
  .pagination {
    margin-left: -20rem;
    padding-bottom: 2rem;
    .el-pagination {
      display: flex;
      justify-content: center;
      --el-pagination-hover-color: $primary-color;
      .el-pager .is-active {
        background-color: $primary-color !important;
      }
    }
  }
}
</style>
