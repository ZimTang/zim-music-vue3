<script setup lang="ts">
defineProps({
  privateContents: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="recommend-private-content">
    <el-row :gutter="15">
      <el-col :span="8" v-for="item in privateContents" :key="item.id">
        <el-image
          :src="item.picUrl"
          style="border-radius: 10px"
          class="item-image"
        ></el-image>
        <p class="item-name">
          {{ item.name }}
        </p>
      </el-col>
    </el-row>
  </div>
</template>

<style lang="scss">
.recommend-private-content {
  .item-image:hover {
    cursor: pointer;
  }
  .item-name {
    margin-top: 8px;
    font-size: 14px;
    color: #525252;
    padding-left: 5px;
  }
  .item-name:hover {
    cursor: pointer;
    color: #000;
  }
}
</style>
