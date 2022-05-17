<script setup lang="ts">
import { Search } from '@element-plus/icons-vue'
</script>

<template>
  <div class="search-input">
    <div class="search-icon">
      <el-icon><Search /></el-icon>
    </div>
    <input type="text" />
  </div>
</template>

<style lang="scss">
.search-input {
  height: 2.5rem;
  position: relative;
  .search-icon {
    top: 5px;
    left: 10px;
    position: absolute;
  }
  input {
    height: 100%;
    border-radius: 20px;
    outline: none;
    border: none;
    padding-left: 30px;
    background-color: #eaeaea;
  }
}
</style>
