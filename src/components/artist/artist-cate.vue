<script setup lang="ts">
import { IArtistCateItem } from '@/models/artist'
import useArtistStore from '@/stores/artist'
import { ref, watch } from 'vue'
const area = [
  {
    label: '全部',
    value: -1
  },
  {
    label: '华语',
    value: 7
  },
  {
    label: '欧美',
    value: 96
  },
  {
    label: '日本',
    value: 8
  },
  {
    label: '韩国',
    value: 16
  },
  {
    label: '其他',
    value: 0
  }
]
const type = [
  {
    label: '全部',
    value: -1
  },
  {
    label: '男歌手',
    value: 1
  },
  {
    label: '女歌手',
    value: 2
  },
  {
    label: '乐队组合',
    value: 3
  }
]
const initial = ['热门', ...'abcdefghijklmnopqrstuvwxyz#']
const artistStore = useArtistStore()

const handleChangeArea = (item: IArtistCateItem, e: Event) => {
  e.preventDefault()
  artistStore.area = item.value as number
}

const handleChangeType = (item: IArtistCateItem, e: Event) => {
  e.preventDefault()
  artistStore.type = item.value as number
}

const handleChangeInitial = (item: string, e: Event) => {
  e.preventDefault()
  if (item === '热门') {
    artistStore.initial = '-1'
    return
  }
  artistStore.initial = item
}

const isHotInitial = ref(false)
watch(
  () => artistStore.initial,
  () => {
    if (artistStore.initial === '-1') {
      isHotInitial.value = true
    } else {
      isHotInitial.value = false
    }
  },
  { immediate: true }
)
</script>

<template>
  <div class="artist-cate">
    <div class="item">
      <div class="title">语种:</div>
      <div class="cate" v-for="(item, index) in area">
        <a
          href="#"
          class="label"
          :class="artistStore.area === item.value ? 'active' : ''"
          @click="handleChangeArea(item, $event)"
        >
          {{ item.label }}
        </a>
        <span class="line" v-if="index !== area.length - 1">|</span>
      </div>
    </div>
    <div class="item">
      <div class="title">分类:</div>
      <div class="cate" v-for="(item, index) in type">
        <a
          class="label"
          :class="artistStore.type === item.value ? 'active' : ''"
          @click="handleChangeType(item, $event)"
          >{{ item.label }}</a
        >
        <span class="line" v-if="index !== type.length - 1">|</span>
      </div>
    </div>
    <div class="item">
      <div class="title">筛选:</div>
      <div class="cate" v-for="(item, index) in initial">
        <a
          v-if="item !== '-1' && item !== '热门'"
          class="label"
          :class="artistStore.initial === item.toLowerCase() ? 'active' : ''"
          @click="handleChangeInitial(item, $event)"
          >{{ item.toUpperCase() }}</a
        >
        <a
          v-if="item === '热门'"
          class="label"
          :class="isHotInitial ? 'active' : ''"
          @click="handleChangeInitial(item, $event)"
          >{{ item.toUpperCase() }}</a
        >
        <span class="line" v-if="index !== initial.length - 1">|</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '@/assets/styles/base.scss';

.artist-cate {
  padding-top: 0.5rem;
  margin-bottom: 2rem;
  .item {
    font-size: 1.5rem;
    margin-bottom: 2rem;
    display: flex;
    flex-wrap: wrap;
    line-height: 2.5rem;
    .title {
      color: #676767;
    }
    .active {
      font-weight: bold;
      color: $primary-color !important;
    }
    .cate {
      span,
      a {
        text-align: center;
        color: #676767;
        margin-left: 1rem;
      }
      .label:hover {
        color: #000;
        cursor: pointer;
      }
      .line {
        color: #f2f2f2;
      }
    }
  }
}
</style>
