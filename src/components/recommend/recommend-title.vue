<script setup lang="ts">
import { ArrowRight } from '@element-plus/icons-vue'
const props = defineProps({
  title: String,
  link: String
})
</script>
<template>
  <div class="recommend-title">
    <router-link :to="link" class="link">
      <h3>{{ title }}</h3>
      <el-icon><ArrowRight /></el-icon>
    </router-link>
  </div>
</template>

<style lang="scss">
.link {
  display: flex;
  align-items: center;
}
</style>
