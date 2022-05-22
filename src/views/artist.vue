<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import { UserFilled } from '@element-plus/icons-vue'
import useArtistStore from '@/stores/artist'
import ArtistCate from '@/components/artist/artist-cate.vue'

const artistStore = useArtistStore()
const limit = ref(30)
const offset = ref(0)
const isLoading = ref(true)

watchEffect(async () => {
  isLoading.value = true
  await artistStore.getArtistList(
    artistStore.type,
    artistStore.area,
    artistStore.initial,
    limit.value,
    offset.value
  )
  isLoading.value = false
})
</script>

<template>
  <div class="artist" v-loading="isLoading">
    <artist-cate />
    <el-row :gutter="35">
      <el-col
        :span="4"
        v-for="artist in artistStore.artists"
        class="artist-item"
      >
        <router-link :to="'/artistItem/artistItemAlbum/' + artist.id">
          <el-image
            :src="artist.picUrl"
            class="artist-cover"
            fit="contain"
          ></el-image>
          <div class="desc">
            <div class="name">{{ artist.name }}</div>
            <el-icon v-if="artist.accountId" color="#dd0822"
              ><UserFilled
            /></el-icon>
          </div>
        </router-link>
      </el-col>
    </el-row>
  </div>
</template>

<style lang="scss">
.artist {
  padding: 0rem 1rem;
  .artist-item {
    display: inline-block;
    position: relative;
    width: 65%;
    transition: all 0.4s;
    overflow: hidden;
    margin-bottom: 2rem;
    .artist-cover {
      transition: all 0.4s;
      border-radius: 1rem;
    }
    .desc {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 0.5rem;
    }
    .name {
      font-size: 1.3rem;
      color: #525252;
    }
  }
  .artist-item:hover .name {
    color: #000;
  }
  .artist-item:hover .artist-cover {
    filter: blur(1px);
  }
}
</style>
