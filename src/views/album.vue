<!-- 歌单详情 -->
<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { Headset } from '@element-plus/icons-vue'
import dayjs from 'dayjs'
import SongList from '@/common/song-list.vue'
import useAlbumStore from '@/stores/album'
import { useAudio } from '@/hooks/useAudio'
import { PlaylistType } from '@/models/audio'

const loading = ref(true)
const route = useRoute()
const albumId = parseInt(route.params.id as string)
const albumStore = useAlbumStore()
const playlistDetailRef = ref<HTMLElement | null>(null)
const { handlePlayAll } = useAudio(true, PlaylistType.album)

onMounted(async () => {
  // TODO:数据分页，滑动到底部，请求剩余数据
  initData()
})

watch(
  () => route.params.id,
  () => {
    initData()
    // TODO:重新请求后，滚动到顶部
  }
)

// 初始化数据
const initData = async () => {
  loading.value = true
  await albumStore.getAlbumContent(albumId)
  loading.value = false
}

// 默认打开简介
const isCollapseOpen = ref(['0'])
</script>

<template>
  <div class="song-sheet-item" ref="playlistDetailRef" v-loading="loading">
    <div class="song-sheet-item-header">
      <div class="cover">
        <el-image
          :src="albumStore.album.picUrl"
          style="height: 18rem; border-radius: 10%"
        ></el-image>
      </div>
      <div class="info">
        <div class="title">
          {{ albumStore.album.name }}
        </div>
        <div class="creator">
          <div class="avatar">
            <el-image
              :src="albumStore.album.picUrl"
              style="height: 3rem; border-radius: 50%"
            ></el-image>
          </div>
          <div class="nickname">
            {{ albumStore.album.artist?.name }}
          </div>
          <div class="createTime">
            {{ dayjs(albumStore.album.publishTime).format('YYYY-MM-DD') }}创建
          </div>
        </div>
        <div class="action">
          <button class="playAll" color="#ec4141" @click="handlePlayAll">
            <el-icon :size="15">
              <el-icon>
                <Headset />
              </el-icon>
            </el-icon>
            播放全部
          </button>
        </div>
        <div class="desc">
          <el-collapse v-model="isCollapseOpen" accordion>
            <el-collapse-item title="简介" name="1">
              {{ albumStore.album.description || '暂无' }}
            </el-collapse-item>
          </el-collapse>
        </div>
      </div>
    </div>
    <div class="main">
      <song-list :data="albumStore.songs" :type="PlaylistType.album" />
    </div>
  </div>
</template>

<style lang="scss">
@import '@/assets/styles/base.scss';
.song-sheet-item {
  width: 100%;
  .song-sheet-item-header {
    width: 100%;
    display: flex;
    .info {
      flex: 1;
      margin-left: 2rem;
      .title {
        font-weight: bold;
        font-size: 2.4rem;
      }
      .action {
        margin: 1rem 0;
        display: flex;
        font-size: 1.4rem;
        .playAll {
          display: flex;
          justify-content: space-around;
          align-items: center;
          width: 11rem;
          height: 3rem;
          border-radius: 2rem;
          color: white;
          border: 1px solid $primary-color;
          background-color: $primary-color;
          font-size: 1.4rem;
        }
        .playAll:hover {
          border: 1px solid $primary-hover-color;
          background-color: $primary-hover-color;
          cursor: pointer;
        }
      }
      .creator {
        margin-top: 1rem;
        display: flex;
        align-items: center;
        .nickname {
          margin-left: 1rem;
          font-size: 1.4rem;
        }
        .createTime {
          color: #373737;
          margin-left: 1rem;
          font-size: 1.2rem;
        }
      }
      .tag {
        margin-top: 1rem;
        font-size: 1.3rem;
      }
      .desc {
        margin-top: 1rem;
        .el-collapse {
          border-top: none !important;
          --el-collapse-header-height: 3rem;
        }
        .el-collapse-item__content {
          padding-bottom: 0.5rem;
          color: rgb(124, 124, 124);
        }
      }
    }
  }
  .main {
    margin-top: 1rem;
    .el-table .ascending .sort-caret.ascending {
      border-bottom-color: $primary-color;
    }
    .el-table .descending .sort-caret.descending {
      border-top-color: $primary-color;
    }
  }
}
</style>
