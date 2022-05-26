<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import usePlaylistStore from '@/stores/playlist'
import ZimList from '@/common/zim-list.vue'
import PlaylistItem from '@/components/playlist/playlist-item.vue'
import ZimTagList from '@/common/zim-tag-list.vue'

const playlistStore = usePlaylistStore()
const limit = ref(50)
const offset = ref(1)
const isLoading = ref(true)
const currentTag = ref('华语')

onMounted(async () => {
  await playlistStore.getPlaylistCateList()
  await playlistStore.getPlaylistHotTags()
  await playlistStore.getHighQuantityPlaylist(currentTag.value)
  isLoading.value = false
})

// // 分页
// watch(offset, async (newOffset, oldOffset) => {
//   if (newOffset > oldOffset) {
//     isLoading.value = true
//     await playlistStore.getHighQuantityPlaylist(currentTag.value)
//     isLoading.value = false
//   }
// })

// 切换标签
watch(currentTag, async ([newCurrentTag, oldCurrentTag]) => {
  if (newCurrentTag !== oldCurrentTag) {
    offset.value = 1
    isLoading.value = true
    await playlistStore.getHighQuantityPlaylist(currentTag.value)
    isLoading.value = false
  }
})

const handleChangePlaylist = (item: any) => {
  currentTag.value = item.name
}
</script>

<template>
  <div class="playlist" v-loading="isLoading">
    <zim-tag-list
      :current-tag="currentTag"
      :tag-list="playlistStore.hotTags"
      @change-current-tag="handleChangePlaylist"
    />
    <div class="list">
      <zim-list
        :list-data="playlistStore.playlists.slice(0, limit)"
        :span="4"
        :gutter="30"
      >
        <template v-slot="{ item }">
          <playlist-item
            :item="item"
            image-url-props="coverImgUrl"
          ></playlist-item>
        </template>
      </zim-list>
    </div>
    <div class="pagination">
      <!-- <el-pagination
        v-model:current-page="offset"
        v-model:page-size="limit"
        small
        background
        layout="prev, pager, next"
        :total="playlistStore.total"
        class="mt-4"
      /> -->
    </div>
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
      padding: 0 2rem;
      height: 3rem;
      border: 1px solid rgb(209, 209, 209);
      border-radius: 2.5rem;
      .icon {
        margin-left: 0.5rem;
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
      .active-tag {
        padding: 0.5rem 1.5rem;
        border-radius: 10%;
        text-align: center;
        display: inline-block;
        background-color: #fcebeb;
        color: $primary-color;
      }
    }
  }
  .pagination {
    margin-left: -10rem;
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
