<script setup lang="ts">
import { defineComponent, onMounted } from 'vue'
import ZimHeader from '@/components/layout/zim-header.vue'
import ZimAside from '@/components/layout/zim-aside.vue'
import ZimAudio from './components/zim-audio/zim-audio.vue'
import { useAuth } from '@/hooks/useAuth'
import { useUserStore } from '@/stores/user'
import useAudioStore from './stores/audio'

onMounted(async () => {
  audioStore.getCacheAudioId()
  audioStore.audioList = JSON.parse(localStorage.getItem('audioList') || '')
  await useAuth()
  userStore.records = await (
    await userStore.getUserRecord(userStore.profile.userId!)
  ).allData
})
const audioStore = useAudioStore()
const userStore = useUserStore()

defineComponent({
  ZimHeader,
  ZimAside
})
</script>

<template>
  <el-container>
    <el-header><zim-header /></el-header>
    <el-scrollbar height="78vh">
      <el-container class="main">
        <el-aside width="250px"><zim-aside /></el-aside>
        <el-container>
          <el-main>
            <router-view class="main-content"></router-view>
          </el-main>
        </el-container>
      </el-container>
    </el-scrollbar>
    <el-footer>
      <zim-audio :current-audio-id="audioStore.audioId" />
    </el-footer>
  </el-container>
</template>

<style lang="scss">
@import '@/assets/styles/base.scss';

html {
  font-size: 62.5%;
}
body {
  font-size: 1.6rem;
}
.el-header {
  padding: 0px;
}
.main {
  height: 78vh;

  .main-content {
    width: 95%;
    margin: 0 auto;
  }
}
</style>
