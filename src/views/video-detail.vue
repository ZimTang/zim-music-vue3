<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { Star, FolderAdd, Share } from '@element-plus/icons-vue'
import dayjs from 'dayjs'
import useVideoPartStore from '@/stores/video-part'
import zimVideo from '@/components/zim-video/zim-video.vue'
import ActionItem from '@/common/action-item.vue'
import { formatCount } from '@/utils/count'
import CommentItem from '@/common/comment-item.vue'

const route = useRoute()
const videoPartStore = useVideoPartStore()
const isVideoPause = ref(false)

watch(
  () => route.params.vid,
  async () => {
    isVideoPause.value = true
    await videoPartStore.getVideoDetail(route.params.vid as string)
    await videoPartStore.getVideoUrl(route.params.vid as string)
  }
)

onMounted(async () => {
  isVideoPause.value = true
  await videoPartStore.getVideoDetail(route.params.vid as string)
  await videoPartStore.getVideoUrl(route.params.vid as string)
  await videoPartStore.getVideoComments(route.params.vid as string)
})

const handleChangeVideoState = (isPause: boolean) => {
  isVideoPause.value = isPause
}
</script>

<template>
  <div class="video-detail-container">
    <div class="video-detail">
      <h3>视频详情</h3>
      <div class="videoContainer">
        <zim-video
          :url="videoPartStore.videoUrls[0]?.url"
          :is-video-pause="isVideoPause"
          @change-video-state="handleChangeVideoState"
        />
      </div>
      <div class="creator">
        <el-image
          :src="videoPartStore.videoDetail.avatarUrl"
          style="height: 5rem; border-radius: 50%; margin-top: 1rem"
        />
        <span class="nickname">{{
          videoPartStore.videoDetail.creator?.nickname
        }}</span>
      </div>
      <div class="title">
        {{ videoPartStore.videoDetail.title }}
      </div>
      <div class="info">
        <div class="publishTime">
          发布时间：{{
            dayjs(videoPartStore.videoDetail.publishTime).format('YYYY-MM-DD')
          }}
        </div>
        <div class="">
          播放次数：{{ formatCount(videoPartStore.videoDetail.playTime || 0) }}
        </div>
      </div>
      <div class="videoGroup">
        <span v-for="item in videoPartStore.videoDetail.videoGroup">
          {{ item.name }}
        </span>
      </div>
      <div class="actions">
        <action-item text="赞" :count="videoPartStore.videoDetail.praisedCount">
          <template #icon>
            <el-icon><Star /></el-icon>
          </template>
        </action-item>
        <action-item
          text="收藏"
          :count="videoPartStore.videoDetail.subscribeCount"
        >
          <template #icon>
            <el-icon><FolderAdd /></el-icon>
          </template>
        </action-item>
        <action-item text="赞" :count="videoPartStore.videoDetail.praisedCount">
          <template #icon>
            <el-icon><Share /></el-icon>
          </template>
        </action-item>
      </div>
      <div class="comments">
        <h3>
          评论<span>({{ videoPartStore.videoCommentsTotal }})</span>
        </h3>
        <template v-for="item in videoPartStore.videoComments">
          <comment-item :item="item" />
        </template>
      </div>
    </div>
    <div class="relative">
      <h3>相关视频</h3>
    </div>
  </div>
</template>

<style lang="scss">
.video-detail-container {
  display: flex;
}
.video-detail {
  flex: 1;
}
.relative {
  flex-basis: 50rem;
}
.video-detail {
  padding-left: 10rem;
  .title {
    font-size: 2rem;
    margin-top: 1rem;
    font-weight: bold;
  }
  .creator {
    display: flex;
    align-items: center;
    .nickname {
      margin-left: 1rem;
      margin-top: 1rem;
    }
  }
  .info {
    margin-top: 1rem;
    display: flex;
    font-size: 1.3rem;
    color: rgb(134, 134, 134);
    .publishTime {
      margin-right: 2rem;
    }
  }
  .videoGroup {
    margin-top: 1rem;
    font-size: 1.1rem;
    & > span {
      display: inline-block;
      padding: 0.5rem 1rem;
      border-radius: 5%;
      background-color: rgb(229, 229, 229);
      margin-right: 1rem;
    }
  }
  .comments {
    padding-top: 1rem;
  }
  .actions {
    margin-top: 2rem;
    display: flex;
  }
}
</style>
