<!-- 播放列表 -->
<script setup lang="ts">
import useAudioStore from '@/stores/audio'
import { useAudio } from '@/hooks/useAudio'
import { timeToMinute } from '@/utils/audio'
const audioStore = useAudioStore()
const { playAudio } = useAudio()
</script>

<template>
  <div class="audio-list">
    <h2>当前播放</h2>
    <span class="total">总{{ audioStore.audioList.length }}首</span>
    <div>
      <el-table :data="audioStore.audioList" @row-click="playAudio">
        <el-table-column prop="name">
          <template #default="scope">
            <span>{{ scope.row.name }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="ar[0].name">
          <template #default="scope">
            <span>{{ scope.row.ar[0].name }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="dt">
          <template #default="scope">
            <span>{{ timeToMinute(scope.row.dt / 1000) }}</span>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<style lang="scss">
.audio-list {
  top: 6.5rem;
  right: 0;
  position: absolute;
  border-left: 1px solid rgb(233, 229, 229);
  width: 40rem;
  height: 77.5vh;
  overflow-y: scroll;
  z-index: 88;
  box-shadow: 10px 10px 10px 1px #eee;
  background-color: #fff;
  padding: 0 1.5rem;
  h2 {
    position: sticky;
  }
  .total {
    color: rgb(206, 202, 202);
    font-size: 1.1rem;
  }
  .el-table {
    span {
      font-size: 1.2rem;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
}
</style>
