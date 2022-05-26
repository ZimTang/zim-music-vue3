<script setup lang="ts">
defineProps({
  listData: {
    type: Object,
    required: true
  },
  limit: {
    type: Number
  },
  span: {
    type: Number,
    required: true
  },
  gutter: {
    type: Number,
    required: true
  },
  emptyDescription: {
    type: String,
    default: '暂无数据'
  }
})
</script>

<template>
  <div class="zim-list">
    <el-empty :description="emptyDescription" v-if="listData.length === 0" />
    <el-row :gutter="gutter">
      <el-col
        :xs="10"
        :sm="10"
        :md="span"
        :span="span"
        v-for="item in listData.slice(0, limit ? limit : listData.length)"
      >
        <slot :item="item"></slot>
      </el-col>
    </el-row>
  </div>
</template>

<style lang="scss">
.zim-list {
  .list-item {
    display: inline-block;
    position: relative;
    transition: all 0.4s;
    margin-bottom: 20px;
    color: #525252;
  }
  .item-image {
    transition: all 0.4s;
  }
  .item-hover {
    visibility: hidden;
    opacity: 0;
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
    visibility: visible;
    opacity: 1;
  }
  .recommend-songs-item:hover .item-image {
    filter: blur(1px);
  }

  .name {
    margin-top: 5px;
    font-size: 0.8rem;
  }
}
</style>
