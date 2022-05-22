<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { Service } from '@element-plus/icons-vue'
import useUserStore from '@/stores/user'
import { ElMessage } from 'element-plus'

const router = useRouter()
const userStore = useUserStore()
const userOwnerPlaylist = ref<any[]>([])
const userCollectedPlayList = ref<any[]>([])
const defaultProps = {
  children: 'children',
  label: 'label'
}
const playlistData = [
  {
    label: '创建的歌单',
    children: userOwnerPlaylist!
  },
  {
    label: '收藏的歌单',
    children: userCollectedPlayList!
  }
]

watch(
  () => userStore.isAuth,
  async () => {
    await userStore.getUserPlayList()
    // 由于接口未分类，所以需要分类出用户创建的歌单和收藏的歌单
    userStore.userOwnerPlaylist.shift()

    userOwnerPlaylist.value = userStore.userOwnerPlaylist.map((item) => {
      item.label = item.name
      return item
    })

    userCollectedPlayList.value = userStore.userCollectedPlaylist.map(
      (item) => {
        item.label = item.name
        return item
      }
    )
  }
)

// 进入歌单
const goToPlaylistItem = (node: any) => {
  if (!userStore.isAuth) {
    ElMessage.error('请先登录')
    return
  }
  if (!Object.hasOwn(node, 'children')) {
    // 跳转到歌单页面
    router.push('/playlistItem/' + node.id)
  }
}
</script>

<template>
  <el-scrollbar>
    <div class="zim-aside">
      <router-link to="/" class="aside-item">发现音乐</router-link>
      <router-link to="/" class="aside-item">视频</router-link>
      <router-link to="/" class="aside-item">关注</router-link>
      <router-link to="/" class="aside-item">私人FM</router-link>
      <router-link to="/" class="aside-item">喜欢的音乐</router-link>
      <div class="userPlaylist">
        <el-tree
          :data="playlistData"
          :indent="0"
          :props="defaultProps"
          @node-click="goToPlaylistItem"
        >
          <template #default="{ node, data }">
            <div class="custom-tree-node">
              <div class="parent" v-if="data.children">{{ node.label }}</div>
              <div class="children" v-if="!data.children">
                <el-icon :size="20" style="margin-right: 0.7rem"
                  ><Service
                /></el-icon>
                <span>
                  {{ node.label }}
                </span>
              </div>
            </div>
          </template>
        </el-tree>
      </div>
    </div>
  </el-scrollbar>
</template>

<style lang="scss">
@import url('@/assets/styles/base.scss');
.demo {
  color: red;
}

.zim-aside {
  padding: 2rem 0;
  height: calc(100% - 20vh);
  .active {
    font-size: 1.8rem;
    font-weight: bold;
  }
  .aside-item {
    display: block;
    padding-left: 5px;
    margin-left: 15px;
    height: 4rem;
    line-height: 4rem;
    &:hover {
      cursor: pointer;
      background-color: #f5f5f5;
    }
  }

  .el-tree-node__content {
    height: 4rem;
    line-height: 4rem;
  }
  .custom-tree-node {
    width: 20rem;
    .parent {
      font-size: 1.3rem;
    }
    .children {
      white-space: nowrap; /*内容超宽后禁止换行显示*/
      overflow: hidden; /*超出部分隐藏*/
      text-overflow: ellipsis; /*文字超出部分以省略号显示*/
      font-size: 1.3rem;
    }
  }
}
</style>
