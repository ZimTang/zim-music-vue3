<script setup lang="ts">
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { FolderAdd } from '@element-plus/icons-vue'
import useArtistItemStore from '@/stores/artist-item'
import LinkHeader from '@/common/link-header.vue'

const route = useRoute()
const artistId = parseInt(route.params.id as string)
const artistItemStore = useArtistItemStore()

onMounted(async () => {
  await artistItemStore.getArtistDetail(artistId)
  await artistItemStore.getArtistAlbum(artistId)
})

const config = [
  {
    to: '/artistItem/artistItemAlbum/' + artistId,
    text: '专辑'
  },
  {
    to: '/artistItem/artistItemMv/' + artistId,
    text: 'MV'
  },
  {
    to: '/artistItem/artistItemInfo/' + artistId,
    text: '歌手详情'
  },
  {
    to: '/artistItem/artistItemSimi/' + artistId,
    text: '相似歌手'
  }
]
</script>

<template>
  <div class="artist-item">
    <div class="artist-item-header">
      <el-image
        :src="artistItemStore.artist.cover"
        class="cover"
        fit="cover"
      ></el-image>
      <div class="info">
        <div class="nickname">
          {{ artistItemStore.artist.name }}
        </div>
        <div class="description">
          {{ artistItemStore.identify?.imageDesc }}
        </div>
        <div class="action">
          <div class="icon">
            <el-icon :size="20"><FolderAdd /></el-icon>
          </div>
          <div>收藏</div>
        </div>
        <div class="song">
          <div>单曲数:{{ artistItemStore.artist.musicSize }}</div>
          <div>专辑数:{{ artistItemStore.artist.albumSize }}</div>
          <div>MV数:{{ artistItemStore.artist.mvSize }}</div>
        </div>
      </div>
    </div>
    <link-header :config="config" width="calc(100% - 30vw)" />
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
.artist-item {
  .artist-item-header {
    display: flex;
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
