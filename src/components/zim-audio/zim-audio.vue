<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { songFetch } from '@/apis'
import { timeToMinute } from '@/utils/audio'
import {
  VideoPlay,
  VideoPause,
  CaretLeft,
  CaretRight
} from '@element-plus/icons-vue'

const audioRef = ref<HTMLAudioElement | null>(null)
const currentAudioDetail = ref<any>({})
const currentAudioId = ref(347230)
const currentAudioUrl = ref('')
const volume = ref(0)
const currentProgress = ref(0)
const currentTime = ref('00:00')
const isShowPlayIcon = ref(true)

onMounted(async () => {
  currentAudioDetail.value = await songFetch.getSongDetail(currentAudioId.value)
  const songUrl = await songFetch.getSongUrl(currentAudioId.value)
  // 获取到当前歌曲的url
  currentAudioUrl.value = songUrl.data[0].url
  // 获取到当前歌曲的持续时间
  currentAudioDetail.value.duration = timeToMinute(
    currentAudioDetail.value.songs[0].dt / 1000
  )
  if (audioRef.value) {
    audioRef.value.volume = 0.5
    volume.value = audioRef.value.volume * 100
  }
})

const playAudio = () => {
  audioRef.value?.play()
}

const pauseAudio = () => {
  audioRef.value?.pause()
}

const audioPlaying = () => {
  isShowPlayIcon.value = false
}

const audioPausing = () => {
  isShowPlayIcon.value = true
}

const changeProgress = (val: number) => {
  if (audioRef.value) {
    currentProgress.value = val
    audioRef.value.currentTime = (val * audioRef.value.duration) / 100
  }
}

const changeVolume = (val: number) => {
  if (audioRef.value) {
    volume.value = val
    audioRef.value.volume = val / 100
  }
}

const watchCurrentTimeChange = () => {
  if (audioRef.value && !isNaN(audioRef.value.duration)) {
    currentTime.value = timeToMinute(audioRef.value.currentTime)!
    currentProgress.value =
      (audioRef.value.currentTime / audioRef.value.duration) * 100
  }
}
</script>

<template>
  <div class="zim-audio">
    <div class="info">
      <el-image
        class="audio-cover"
        :src="currentAudioDetail.songs && currentAudioDetail.songs[0].al.picUrl"
      ></el-image>
      <div class="desc">
        <div class="audio-name">
          {{ currentAudioDetail.songs && currentAudioDetail.songs[0].name }}
        </div>
        <div class="audio-artist">
          {{
            currentAudioDetail.songs && currentAudioDetail.songs[0].ar[0].name
          }}
        </div>
      </div>
    </div>
    <div class="control">
      <div class="operate">
        <div class="prev">
          <el-icon :size="20"><CaretLeft /></el-icon>
        </div>
        <div class="pause" @click="pauseAudio" v-show="!isShowPlayIcon">
          <el-icon :size="30"><VideoPause /></el-icon>
        </div>
        <div class="play" @click="playAudio" v-show="isShowPlayIcon">
          <el-icon :size="30"><VideoPlay /></el-icon>
        </div>
        <div class="next">
          <el-icon :size="20"><CaretRight /></el-icon>
        </div>
      </div>
      <div class="progress">
        <audio
          @play="audioPlaying"
          @pause="audioPausing"
          @timeupdate="watchCurrentTimeChange"
          :src="currentAudioUrl"
          ref="audioRef"
        ></audio>
        <div class="current-times">{{ currentTime }}</div>
        <el-slider
          @input="changeProgress"
          v-model="currentProgress"
          size="small"
          :show-tooltip="false"
        />
        <div class="duration-times">{{ currentAudioDetail.duration }}</div>
      </div>
    </div>
    <div class="settings">
      <el-slider
        v-model="volume"
        vertical
        height="30px"
        style="width: 38px"
        @input="changeVolume"
      />
    </div>
  </div>
</template>

<style lang="scss">
@import '@/assets/styles/base.scss';
.zim-audio {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 2px solid #eee;
  width: 100%;
  height: 100%;
  .info {
    flex: 1;
    display: flex;
    .audio-cover {
      height: 7vh;
    }
  }
  .control {
    flex: 1;
    .operate {
      box-sizing: border-box;
      display: flex;
      justify-content: center;
      align-items: center;
      .play,
      .pause {
        margin: 0 50px;
      }
      .prev:hover,
      .play:hover,
      .pause:hover,
      .next:hover {
        cursor: pointer;
        color: $primary-color;
      }
    }
    .progress {
      flex: 1;
      display: flex;
      align-items: center;
      font-size: 12px;
      color: rgb(138, 138, 138);

      .current-times {
        padding-right: 15px;
      }
      .duration-times {
        padding-left: 10px;
      }
    }
  }
  .settings {
    flex: 1;
  }
}

.el-slider__button {
  height: 10px;
  width: 10px;
  border: 1px solid $primary-color;
}
.el-slider__bar {
  height: 4px;
  background-color: $primary-color !important;
}
</style>
