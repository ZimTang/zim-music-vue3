<script setup lang="ts"></script>

<template>
  <el-scrollbar>
    <div class="zim-aside demo">
      <div class="aside-item">
        <router-link to="/">发现音乐</router-link>
      </div>
      <div class="aside-item">
        <router-link to="/">播客</router-link>
      </div>
      <div class="aside-item">
        <router-link to="/">视频</router-link>
      </div>
      <div class="aside-item">
        <router-link to="/">关注</router-link>
      </div>
      <div class="aside-item">
        <router-link to="/">直播</router-link>
      </div>
      <div class="aside-item">
        <router-link to="/">私人FM</router-link>
      </div>
    </div>
  </el-scrollbar>
</template>

<style lang="scss">
@import url('@/assets/styles/base.scss');

.demo {
  font-size: 100px;
}
.zim-aside {
  padding: 20px 0;
  height: calc(100% - 10vh);
  .active {
    font-size: 18px;
    font-weight: bold;
    background-color: #f5f5f5;
  }
  .aside-item {
    padding-left: 5px;
    margin-left: 15px;
    height: 40px;
    line-height: 40px;
    &:hover {
      cursor: pointer;
      background-color: #f5f5f5;
    }
  }
}
</style>
