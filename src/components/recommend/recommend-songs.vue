<script setup lang="ts">
import { VideoPlay } from '@element-plus/icons-vue'
defineProps({
  recommends: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="recommend-songs">
    <el-row :gutter="10">
      <el-col :span="4" v-for="item in recommends.splice(0, 12)">
        <div class="recommend-songs-item">
          <el-image
            :src="item.picUrl"
            class="item-image"
            fit="cover"
            style="border-radius: 20px; width: 170px; height: 170px"
          />
          <div class="item-hover">
            <el-icon :size="30" color="#ec4141"><VideoPlay /></el-icon>
          </div>
          <div class="name">{{ item.name }}</div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<style lang="scss">
.recommend-songs {
  .recommend-songs-item {
    position: relative;
    width: 170px;
    transition: all 0.4s;
    margin-bottom: 20px;
    color: #525252;
  }
  .item-image {
    transition: all 0.4s;
  }
  .item-hover {
    display: none;
    position: absolute;
    transition: all 0.4s;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .recommend-songs-item:hover {
    color: #000;
    cursor: pointer;
  }
  .recommend-songs-item:hover .item-hover {
    display: block;
  }
  .recommend-songs-item:hover .item-image {
    filter: blur(1px);
  }

  .name {
    margin-top: 5px;
    font-size: 14px;
  }
}
</style>
