<!-- 歌单里的歌曲列表 -->
<script setup lang="ts">
import { Star, Download } from '@element-plus/icons-vue'
import { timeToMinute } from '@/utils/audio'
import { useAudio } from '@/hooks/useAudio'

const props = defineProps({
  data: Array,
  type: Number
})

const { playAudio } = useAudio(true, props.type)
</script>

<template>
  <div class="song-list">
    <el-table
      :data="data"
      style="font-size: 1.3rem"
      :default-sort="{ prop: 'date', order: 'descending' }"
      @row-click="playAudio"
    >
      <el-table-column type="index" width="50" />
      <el-table-column label="操作" width="70">
        <template #default>
          <el-icon style="margin-right: 1rem"><Star /></el-icon>
          <el-icon><Download /></el-icon>
        </template>
      </el-table-column>
      <el-table-column prop="name" label="标题" sortable>
        <template #default="scope">
          <span class="ar">
            {{ scope.row.name }}
          </span>
        </template>
      </el-table-column>
      <el-table-column prop="ar[0].name" label="歌手" width="200">
        <template #default="scope">
          <span class="ar">
            {{ scope.row.ar[0].name }}
          </span>
        </template>
      </el-table-column>
      <el-table-column prop="al.name" label="专辑" sortable>
        <template #default="scope">
          <span class="al">
            {{ scope.row.al.name }}
          </span>
        </template>
      </el-table-column>
      <el-table-column prop="dt" label="时长" sortable width="120">
        <template #default="scope">
          <span class="dt">
            {{ timeToMinute(scope.row.dt / 1000) }}
          </span>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<style lang="scss">
.song-list {
  .el-table {
    span {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
}
</style>
