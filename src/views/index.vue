<script setup lang="ts">
import LinkHeader from '@/common/link-header.vue'
const config = [
  {
    to: '/recommend',
    text: '个性推荐'
  },
  {
    to: '/customized',
    text: '专属定制'
  },
  {
    to: '/playlist',
    text: '歌单'
  },
  {
    to: '/rank',
    text: '排行榜'
  },
  {
    to: '/artist',
    text: '歌手'
  },
  {
    to: '/latestMusic',
    text: '最新音乐'
  }
]
</script>

<template>
  <div class="index">
    <link-header :config="config" />
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
@import '@/assets/styles/base.scss';

.index {
  height: 100%;
  .index-header {
    padding-top: 10px;
    margin-bottom: 20px;
    line-height: 20px;
    display: flex;
    width: calc(100% - 20vw);
    .header-item {
      flex: 1;
      text-align: center;
    }
    .active {
      position: relative;
      font-size: 21px;
      font-weight: bold;
      .header-item {
        padding-bottom: 20px;
      }
    }
    .active::after {
      content: '';
      display: block;
      background-color: $primary-color;
      width: 50%;
      position: absolute;
      bottom: -10px;
      left: 50%;
      transform: translate(-50%, 0);
      border-radius: 10px;
      border: 2px solid $primary-color;
      margin-top: 5px;
    }
  }
}
</style>
