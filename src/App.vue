<script setup lang="ts">
import { defineComponent } from 'vue'
import ZimHeader from '@/components/layout/zim-header.vue'
import ZimAside from '@/components/layout/zim-aside.vue'
import ZimAudio from './components/zim-audio/zim-audio.vue'
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
            <router-view class="main-content"></router-view>
          </el-main>
        </el-container>
      </el-container>
      <el-footer>
        <zim-audio />
      </el-footer>
    </el-container>
  </div>
</template>

<style lang="scss">
.el-header {
  padding: 0px;
}
.main {
  height: 80vh;

  .main-content {
    width: 95%;
    margin: 0 auto;
  }
}
</style>
