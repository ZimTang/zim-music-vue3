<script setup lang="ts">
import { defineComponent } from 'vue'
import ZimHeader from '@/components/zim-header.vue'
import ZimAside from '@/components/zim-aside.vue'
import { useAuth } from '@/hooks/useAuth'

const user = useAuth()

defineComponent({
  ZimHeader,
  ZimAside
})
</script>

<template>
  <div>
    <el-container>
      <el-header><zim-header /></el-header>
      <el-container class="main">
        <el-aside width="250px"><zim-aside /></el-aside>
        <el-container>
          <el-main>
            <router-view></router-view>
          </el-main>
        </el-container>
      </el-container>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<style lang="scss">
.el-header {
  padding: 0px;
}

.main {
  height: 80vh;
}
</style>
