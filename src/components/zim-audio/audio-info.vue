<script setup lang="ts">
import { computed, defineProps, ref, watch } from 'vue'
import { IGetAudioDetailRes, IGetAudioLyricRes } from '@/models/audio'

const props = defineProps<{
  currentAudioDetail: IGetAudioDetailRes
  currentAudioLyric: IGetAudioLyricRes
  currentTime: string
}>()
const lyricRef = ref<any>(null)
const lyricIndex = ref(0)
const lyricArr = computed(() => {
  return props.currentAudioLyric?.lrc.lyric.split('\n')
})

// 得到当前正在唱的句子的索引
const isActive = (showTimes: string[]) => {
  showTimes.find((item, index) => {
    if (item.substring(1, 6) === props.currentTime) {
      lyricIndex.value = index
    }
  })
}

watch(
  () => props.currentAudioDetail?.songs[0].name,
  () => {
    lyricIndex.value = 0
    lyricRef.value.setScrollTop(0)
  }
)

/**
 *  如何高效找到currentTime当前播放时间 与 item里的那句话的时间相等？
 *  如果上面两个变量相等 那么就改变索引  通过索引判断这句话是否高亮
 **/

// 改变当前播放的句子的样式
watch(
  () => props.currentTime,
  () => {
    isActive(lyricArr.value)
  }
)

// 跟随歌词自动滚动
watch(lyricIndex, () => {
  if (lyricIndex.value > 4) {
    // 减去前三个item的高度，让当前播放的歌词居中
    lyricRef.value.setScrollTop(
      lyricRef.value.wrap$.children[0].children[lyricIndex.value].offsetTop -
        lyricRef.value.wrap$.children[0].children[lyricIndex.value - 1]
          .offsetHeight -
        lyricRef.value.wrap$.children[0].children[lyricIndex.value - 2]
          .offsetHeight -
        lyricRef.value.wrap$.children[0].children[lyricIndex.value - 3]
          .offsetHeight -
        lyricRef.value.wrap$.children[0].children[lyricIndex.value - 4]
          .offsetHeight -
        lyricRef.value.wrap$.children[0].children[lyricIndex.value - 5]
          .offsetHeight
    )
  } else {
  }
})
</script>

<template>
  <div class="audio-info">
    <div class="left">
      <el-image
        :src="currentAudioDetail?.songs[0].al.picUrl"
        class="cover"
      ></el-image>
    </div>
    <div class="center">
      <h2 class="name">
        {{ currentAudioDetail?.songs[0].name }}
      </h2>
      <h4 class="artist">
        {{ currentAudioDetail?.songs[0].ar[0].name }}
      </h4>
      <el-scrollbar class="lyric" ref="lyricRef">
        <div
          class="item"
          v-for="(item, index) in lyricArr"
          :key="item"
          :class="index === lyricIndex ? 'current' : ''"
        >
          {{
            item.substring(10)[0] !== ']'
              ? item.substring(10)
              : item.substring(11)
          }}
        </div>
      </el-scrollbar>
    </div>
    <div class="right"></div>
  </div>
</template>

<style lang="scss">
.audio-info {
  display: flex;
  justify-content: space-between;
  top: 10%;
  left: 0;
  position: absolute;
  background-image: linear-gradient(#f5f5f5, #fff);
  height: 78vh;
  width: 98.5vw;
  z-index: 999;
  .left {
    width: 30%;
    height: 24rem;
    margin-top: 10rem;
    margin-left: 5rem;
    background: url('@/assets/images/coverall.png') no-repeat;
    background-position: -140px -580px;
    .cover {
      margin-left: 3.7rem;
      margin-top: 3.6rem;
      height: 13.5rem;
      width: 13.5rem;
      border-radius: 50%;
    }
  }
  .center {
    width: 40%;
    margin-left: -5rem;
    .name,
    .artist {
      text-align: center;
    }
    .artist {
      font-weight: normal;
      font-size: 1.4rem;
      color: rgb(103, 101, 101);
    }
    .lyric {
      margin: 0 auto;
      margin-top: 4rem;
      width: 100%;
      height: 22rem;
      .item {
        font-size: 1.4rem;
        font-weight: 100;
        margin: 1.5rem 0;
        text-align: center;
      }
      .current {
        font-size: 2rem;
        font-weight: bold;
      }
    }
  }
  .right {
    width: 30%;
  }
}
</style>
