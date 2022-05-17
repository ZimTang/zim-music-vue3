<script setup lang="ts"></script>

<template>
  <el-scrollbar>
    <div class="zim-aside">
      <router-link to="/" class="aside-item">发现音乐</router-link>
      <router-link to="/" class="aside-item">播客</router-link>
      <router-link to="/" class="aside-item">视频</router-link>
      <router-link to="/" class="aside-item">关注</router-link>
      <router-link to="/" class="aside-item">直播</router-link>
      <router-link to="/" class="aside-item">私人FM</router-link>
    </div>
  </el-scrollbar>
</template>

<style lang="scss">
@import url('@/assets/styles/base.scss');
.demo {
  color: red;
}

.zim-aside {
  padding: 2rem 0;
  height: calc(100% - 20vh);
  .active {
    font-size: 1.8rem;
    font-weight: bold;
  }
  .aside-item {
    display: block;
    padding-left: 5px;
    margin-left: 15px;
    height: 4rem;
    line-height: 4rem;
    &:hover {
      cursor: pointer;
      background-color: #f5f5f5;
    }
  }
}
</style>
