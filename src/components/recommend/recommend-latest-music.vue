<script setup lang="ts">
defineProps({
  latestMusic: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="recommend-latest-music">
    <el-row :gutter="20">
      <el-col
        :span="6"
        v-for="item in latestMusic.splice(0, 3)"
        :key="item.id"
        class="album-item"
      >
        <el-image
          :src="item.album.picUrl"
          style="border-radius: 10px"
        ></el-image>
        <span>{{ item.name }}</span>
      </el-col>
    </el-row>
  </div>
</template>

<style lang="scss">
.recommend-latest-music {
  .album-item {
    width: 100px;
  }
}
</style>
