<!-- 歌单详情 -->
<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { Headset } from '@element-plus/icons-vue'
import usePlaylistItemStore from '@/stores/playlist-item'
import dayjs from 'dayjs'
import SongList from '@/common/song-list.vue'
import { useAudio } from '@/hooks/useAudio'

const loading = ref(true)
const route = useRoute()
const playlistItemStore = usePlaylistItemStore()
const playlistItemRef = ref<HTMLElement | null>(null)
const { handlePlayAll } = useAudio()

onMounted(async () => {
  // TODO:数据分页，滑动到底部，请求剩余数据
  initData()
})

watch(
  () => route.params.id,
  () => {
    initData()
    // TODO:重新请求后，滚动到顶部
    playlistItemRef.value?.scrollTo(0, 0)
  }
)

// 初始化数据
const initData = async () => {
  loading.value = true
  await playlistItemStore.getPlaylistItem(parseInt(route.params.id as string))
  await playlistItemStore.getPlaylistAllSong(
    parseInt(route.params.id as string)
  )
  loading.value = false
}

// 默认打开简介
const isCollapseOpen = ref(['0'])
</script>

<template>
  <div class="song-sheet-item" ref="playlistItemRef" v-loading="loading">
    <div class="header">
      <div class="cover">
        <el-image
          :src="playlistItemStore.playlistItem.playlist?.coverImgUrl"
          style="height: 18rem; border-radius: 10%"
        ></el-image>
      </div>
      <div class="info">
        <div class="title">
          {{ playlistItemStore.playlistItem.playlist?.name }}
        </div>
        <div class="creator">
          <div class="avatar">
            <el-image
              :src="playlistItemStore.playlistItem.playlist?.creator.avatarUrl"
              style="height: 3rem; border-radius: 50%"
            ></el-image>
          </div>
          <div class="nickname">
            {{ playlistItemStore.playlistItem.playlist?.creator.nickname }}
          </div>
          <div class="createTime">
            {{
              dayjs(playlistItemStore.playlistItem.playlist?.createTime).format(
                'YYYY-MM-DD'
              )
            }}创建
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
        <div class="tag">
          <span>标签:</span>
          <span
            v-for="(tag, index) in playlistItemStore.playlistItem.playlist
              ?.tags"
            >{{ tag }}
            {{
              index === (playlistItemStore.playlistItem.playlist?.tags.length !- 1)
                ? ''
                : '/'
            }}</span
          >
        </div>
        <div class="desc">
          <el-collapse v-model="isCollapseOpen" accordion>
            <el-collapse-item title="简介" name="1">
              {{
                playlistItemStore.playlistItem.playlist?.description || '暂无'
              }}
            </el-collapse-item>
          </el-collapse>
        </div>
      </div>
    </div>
    <div class="main">
      <song-list :data="playlistItemStore.playlistSongs.songs" />
    </div>
  </div>
</template>

<style lang="scss">
@import '@/assets/styles/base.scss';
.song-sheet-item {
  width: 100%;
  .header {
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
