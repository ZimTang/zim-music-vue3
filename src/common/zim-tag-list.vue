<script setup lang="ts">
import { ArrowRight } from '@element-plus/icons-vue'
const emits = defineEmits(['changeCurrentTag'])
defineProps<{
  currentTag: string
  tagList: any[]
}>()

const emitTagList = (item: any) => {
  emits('changeCurrentTag', item)
}
</script>

<template>
  <div class="tags">
    <div class="current-tag">
      <span>
        {{ currentTag }}
      </span>
      <div class="icon">
        <el-icon><ArrowRight /></el-icon>
      </div>
    </div>
    <div class="tag-list">
      <span
        v-for="item in tagList"
        class="tag-link"
        @click="emitTagList(item)"
        :class="{ 'active-tag': item.name === currentTag ? true : false }"
        >{{ item.name }}</span
      >
    </div>
  </div>
</template>

<style lang="scss">
@import '@/assets/styles/base.scss';
.tags {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem 2rem 1rem 0;
  .current-tag {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.4rem;
    padding: 0 2rem;
    height: 3rem;
    border: 1px solid rgb(209, 209, 209);
    border-radius: 2.5rem;
    .icon {
      margin-left: 0.5rem;
      padding-top: 0.5rem;
    }
  }
  .current-tag:hover {
    cursor: pointer;
  }
  .tag-list {
    font-size: 1.3rem;
    .tag-link {
      cursor: default;
      display: inline-block;
      margin: 1rem;
    }
    .tag-link:hover {
      cursor: default;
    }
    .active-tag {
      padding: 0.5rem 1.5rem;
      border-radius: 10%;
      text-align: center;
      display: inline-block;
      background-color: #fcebeb;
      color: $primary-color;
    }
  }
}
</style>
