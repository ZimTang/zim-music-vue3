<script setup lang="ts">
import useartistDetailStore from '@/stores/artist-detail'
import { useRouteIdChange } from '@/hooks/useRouteIdChange'

const artistDetailStore = useartistDetailStore()
const { isLoading } = useRouteIdChange(artistDetailStore.getArtistDesc, 'id')
</script>

<template>
  <div class="artist-detail-info" v-loading="isLoading">
    <div class="ti">{{ artistDetailStore.artist.name }}简介</div>
    <div
      v-html="artistDetailStore.artist.briefDesc?.replace(/\n/g, '<p>')"
      class="txt"
    ></div>
    <div class="intructions">
      <div
        v-for="item in artistDetailStore.artistDesc.introduction"
        :key="item.ti"
      >
        <div v-html="item.ti.replace(/\\n/g, '<p/>')" class="ti"></div>
        <div v-html="item.txt.replace(/\n/g, '<p/>')" class="txt"></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.artist-detail-info {
  .ti {
    color: #373737;
    font-weight: bold;
    margin: 1rem 0;
  }
  .txt {
    color: #676767;
    font-size: 1.4rem;
    text-indent: 2rem;
    line-height: 2.5rem;
  }
}
</style>
