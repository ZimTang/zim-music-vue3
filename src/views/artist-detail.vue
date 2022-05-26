<script setup lang="ts">
import { onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import { FolderAdd } from '@element-plus/icons-vue'
import useartistDetailStore from '@/stores/artist-item'
import LinkHeader from '@/common/link-header.vue'

const route = useRoute()
const artistId = parseInt(route.params.id as string)
const artistDetailStore = useartistDetailStore()

onMounted(async () => {
  await artistDetailStore.getArtistDetail(artistId)
})

const config = [
  {
    to: '/artistDetail/artistDetailAlbum/' + artistId,
    text: '专辑'
  },
  {
    to: '/artistDetail/artistDetailMv/' + artistId,
    text: 'MV'
  },
  {
    to: '/artistDetail/artistDetailInfo/' + artistId,
    text: '歌手详情'
  },
  {
    to: '/artistDetail/artistDetailSimi/' + artistId,
    text: '相似歌手'
  }
]
</script>

<template>
  <div class="artist-item">
    <div class="artist-item-header">
      <el-image
        :src="artistDetailStore.artist.cover"
        class="cover"
        fit="cover"
      ></el-image>
      <div class="info">
        <div class="nickname">
          {{ artistDetailStore.artist.name }}
        </div>
        <div class="description">
          {{ artistDetailStore.identify?.imageDesc }}
        </div>
        <div class="action">
          <div class="icon">
            <el-icon :size="20"><FolderAdd /></el-icon>
          </div>
          <div>收藏</div>
        </div>
        <div class="song">
          <div>单曲数:{{ artistDetailStore.artist.musicSize }}</div>
          <div>专辑数:{{ artistDetailStore.artist.albumSize }}</div>
          <div>MV数:{{ artistDetailStore.artist.mvSize }}</div>
        </div>
      </div>
    </div>
    <link-header :config="config" width="calc(100% - 30vw)" />
    <router-view style="margin-top: 3rem" v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>
  </div>
</template>

<style lang="scss">
.artist-item {
  .artist-item-header {
    display: flex;
    margin-bottom: 2rem;
    .cover {
      width: 20rem;
      height: 20rem;
      border-radius: 1.5rem;
      margin-right: 3rem;
    }
    .info {
      div {
        margin-bottom: 1.5rem;
      }
      .nickname {
        color: #373737;
        font-size: 2.8rem;
        font-weight: bold;
      }
      .description {
        font-size: 1.5rem;
        color: #373737;
      }
      .action {
        display: flex;
        justify-content: center;
        padding-top: 1.3rem;
        height: 2rem;
        align-items: center;
        font-size: 1.4rem;
        width: 9rem;
        border: 1px solid rgb(189, 189, 189);
        border-radius: 2rem;
        .icon {
          padding-top: 0.2rem;
          margin-right: 0.5rem;
        }
      }
      .action:hover {
        background-color: #f0f0f0;
        cursor: pointer;
      }
      .song {
        color: #373737;
        font-size: 1.4rem;
        display: flex;
        align-items: center;
        div {
          margin-right: 1.5rem;
        }
      }
    }
  }
}
</style>
