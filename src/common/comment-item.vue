<script setup lang="ts">
import dayjs from 'dayjs'
import { IComment } from '@/models/video-part'
defineProps<{
  item: IComment
}>()
</script>

<template>
  <div class="comment-item">
    <el-image
      :src="item.user.avatarUrl"
      fit="scale-down"
      class="avatar"
      style="width: 4rem; height: 4rem; border-radius: 50%"
    />
    <div>
      <div class="user" style="display: flex">
        <div class="content">
          <span class="nickname"> {{ item.user.nickname }}： </span>
          {{ item.content }}
        </div>
      </div>
      <div style="display: flex">
        <div class="time">{{ dayjs(item.time).format('YYYY年MM月DD日') }}</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.comment-item {
  display: flex;
  border-bottom: 1px solid #eee;
  padding-top: 0.5rem;
  margin-top: 0.5rem;
  padding-bottom: 0.5rem;
  margin-bottom: 0.5rem;
  .user {
    margin-bottom: 1rem;
  }
  .nickname {
    font-size: 1.3rem;
    color: #5091ca;
  }
  .nickname:hover {
    cursor: pointer;
    color: #40719b;
  }
  .content {
    color: #676767;
    font-size: 1.3rem;
  }
  .avatar {
    margin: 0 2rem 0 0;
  }
  .time {
    color: rgb(179, 179, 179);
    font-size: 1.2rem;
  }
}
</style>
