<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import RecommendTitle from '@/components/recommend/recommend-title.vue'
import RecommendSongs from '@/components/recommend/recommend-songs.vue'
import RecommendPrivateContent from '@/components/recommend/recommend-private-content.vue'
import RecommendLatestMusic from '@/components/recommend/recommend-latest-music.vue'
import { useAuth } from '@/hooks/useAuth'
import usePlaylistStore from '@/stores/playlist'
import useRecommendStore from '@/stores/recommend'

const recommendStore = useRecommendStore()
const playlistStore = usePlaylistStore()
const isLoading = ref(true)
const isAuth = ref<any>(null)

onMounted(async () => {
  await recommendStore.getBanners()
  await recommendStore.getPrivateContent()
  await recommendStore.getNewAlbum()
  isAuth.value = await useAuth()
  console.log(isAuth.value)

  isAuth.value
    ? await recommendStore.getRecommendResource()
    : await playlistStore.getHighQuantityPlaylist()

  isLoading.value = false
})

watch(
  () => isAuth.value,
  async () => {
    if (isAuth.value === true) {
      await recommendStore.getRecommendResource()
    }
  }
)
</script>

<template>
  <div class="recommend" v-loading="isLoading">
    <div class="banners">
      <el-carousel :interval="2000" type="card" height="200px">
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
          recommendStore.recommends
            ? recommendStore.recommends
            : playlistStore.playlists
        "
        image-url-props="picUrl"
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
