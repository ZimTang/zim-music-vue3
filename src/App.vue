<script setup lang="ts">
import { defineComponent, onMounted, watch } from 'vue'
import ZimHeader from '@/components/layout/zim-header.vue'
import ZimAside from '@/components/layout/zim-aside.vue'
import ZimAudio from './components/zim-audio/zim-audio.vue'
import { useAuth } from '@/hooks/useAuth'
import useUserStore from '@/stores/user'
import useAudioStore from '@/stores/audio'

onMounted(async () => {
  await audioStore.getCacheAudioId()
  await audioStore.getCacheAudioList()
  userStore.isAuth = await useAuth()
  if (userStore.isAuth) {
    // 获取用户播放记录
    await userStore.getUserRecord(userStore.profile.userId!)
    // 获取用户歌单
    await userStore.getUserPlayList()
    await userStore.getUserLikelist(userStore.profile.userId!)
  }
})

const audioStore = useAudioStore()
const userStore = useUserStore()

watch(
  () => userStore.isAuth,
  async () => {
    if (userStore.isAuth) {
      // 获取用户播放记录
      await userStore.getUserRecord(userStore.profile.userId!)
      // 获取用户歌单
      await userStore.getUserPlayList()
    }
  }
)

defineComponent({
  ZimHeader,
  ZimAside
})
</script>

<template>
  <el-container>
    <el-header class="header"><zim-header /></el-header>
    <el-container class="main">
      <el-aside width="250px"><zim-aside /></el-aside>
      <el-container>
        <el-main>
          <router-view v-slot="{ Component }">
            <keep-alive>
              <component :is="Component" />
            </keep-alive>
          </router-view>
        </el-main>
      </el-container>
    </el-container>
    <el-footer class="footer">
      <zim-audio />
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
.header {
  height: 10vh;
}
.main {
  height: 78vh;
  .main-content {
    width: 95%;
    margin: 0 auto;
  }
}
.footer {
  height: 10vh;
}
</style>
