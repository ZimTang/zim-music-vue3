<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import RecommendTitle from '@/components/recommend/recommend-title.vue'
import RecommendSongs from '@/components/recommend/recommend-songs.vue'
import RecommendPrivateContent from '@/components/recommend/recommend-private-content.vue'
import RecommendLatestMusic from '@/components/recommend/recommend-latest-music.vue'
import { useAuth } from '@/hooks/useAuth'
import usePlaylistStore from '@/stores/playlist'
import useRecommendStore from '@/stores/recommend'
import useUserStore from '@/stores/user'

const recommendStore = useRecommendStore()
const playlistStore = usePlaylistStore()
const userStore = useUserStore()
const isLoading = ref(true)

onMounted(async () => {
  await recommendStore.getBanners()
  await recommendStore.getPrivateContent()
  await recommendStore.getNewAlbum()
  await useAuth()
  userStore.isAuth
    ? await recommendStore.getRecommendResource()
    : await playlistStore.getHighQuantityPlaylist()
  isLoading.value = false
})

watch(
  () => userStore.isAuth,
  async () => {
    if (userStore.isAuth === true) {
      await recommendStore.getRecommendResource()
    }
  }
)
</script>

<template>
  <div class="recommend" v-loading="isLoading">
    <div class="banners">
      <el-carousel
        :interval="2000"
        type="card"
        height="200px"
        :initial-index="2"
      >
        <el-carousel-item
          v-for="banner in recommendStore.banners"
          :key="banner?.targetId"
        >
          <el-image
            :src="banner?.imageUrl"
            fit="contain"
            style="border-radius: 20px; height: 200px"
          />
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="recommend-song">
      <recommend-title link="/playlist" title="推荐歌单" />
      <recommend-songs
        :recommends="
          recommendStore.recommends.length > 0
            ? recommendStore.recommends
            : playlistStore.playlists
        "
        :image-url-props="
          recommendStore.recommends.length > 0 ? 'picUrl' : 'coverImgUrl'
        "
        :limit="recommendStore.recommends.length >= 12 ? 12 : 6"
      />
    </div>
    <div class="private-content">
      <recommend-title link="/privateContent" title="独家放送" />
      <recommend-private-content
        :private-contents="recommendStore.privateContents"
      />
    </div>
    <div class="latest">
      <recommend-title link="/latestMusic" title="最新音乐" />
      <recommend-latest-music
        :latest-music="recommendStore.newAlbum.splice(0, 12)"
      />
    </div>
  </div>
</template>

<style lang="scss"></style>
