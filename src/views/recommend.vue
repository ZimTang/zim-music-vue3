<script setup lang="ts">
import { onMounted } from 'vue'
import { useRecommendStore } from '@/stores/recommend'
import RecommendTitle from '@/components/recommend/recommend-title.vue'
import RecommendSongs from '../components/recommend/recommend-songs.vue'
import RecommendPrivateContent from '@/components/recommend/recommend-private-content.vue'
import RecommendLatestMusic from '../components/recommend/recommend-latest-music.vue'

const recommendStore = useRecommendStore()
onMounted(() => {
  recommendStore.getBanners()
  recommendStore.getRecommendResource()
  recommendStore.getPrivateContent()
  recommendStore.getNewAlbum()
})
</script>

<template>
  <div>
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
      <recommend-title link="/songSheet" title="推荐歌单" />
      <recommend-songs :recommends="recommendStore.recommends" />
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
