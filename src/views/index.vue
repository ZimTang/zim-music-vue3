<script setup lang="ts"></script>

<template>
  <div class="index">
    <div class="index-header">
      <div class="header-item">
        <router-link to="/recommend">个性推荐</router-link>
      </div>
      <div class="header-item">
        <router-link to="/customized">专属定制</router-link>
      </div>
      <div class="header-item">
        <router-link to="/songSheet">歌单</router-link>
      </div>
      <div class="header-item">
        <router-link to="/rank">排行榜</router-link>
      </div>
      <div class="header-item">
        <router-link to="/vocalist">歌手</router-link>
      </div>
      <div class="header-item">
        <router-link to="/latestMusic">最新音乐</router-link>
      </div>
    </div>
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
    width: calc(100% - 30vw);
    .header-item {
      flex: 1;
      text-align: center;
    }
    .active {
      font-size: 21px;
      font-weight: bold;
    }
    .active::after {
      content: '';
      display: block;
      position: relative;
      left: 40px;
      background-color: $primary-color;
      width: 40px;
      border-radius: 10px;
      border: 2px solid $primary-color;
      margin-top: 5px;
    }
  }
}
</style>
