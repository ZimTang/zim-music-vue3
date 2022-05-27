<script setup lang="ts">
import { ref, watch } from 'vue'
import { VideoPlay, VideoPause } from '@element-plus/icons-vue'
import { timeToMinute } from '@/utils/audio'
import useVideoPartStore from '@/stores/video-part'

const emits = defineEmits(['changeVideoState'])
const props = defineProps({
  url: String,
  isVideoPause: Boolean
})
const videoRef = ref<HTMLVideoElement | null>(null)
const vidFrameRef = ref<HTMLElement | null>(null)

watch(
  () => props.url,
  () => {
    currentTime.value = '00:00'
    currentProgress.value = 0
  }
)

watch(
  () => videoRef.value?.paused,
  (newValue) => {
    emits('changeVideoState', newValue)
  }
)

const videoPartStore = useVideoPartStore()
const isFullScreen = ref(false)
const currentTime = ref('00:00')
const currentProgress = ref(0)
const volume = ref(50)

const playVideo = () => {
  videoRef.value?.play()
  emits('changeVideoState', false)
}

const pauseVideo = () => {
  videoRef.value?.pause()
  emits('changeVideoState', true)
}

const watchCurrentTimeChange = () => {
  if (videoRef.value && !isNaN(videoRef.value.duration)) {
    currentTime.value = timeToMinute(videoRef.value.currentTime)!
    currentProgress.value =
      (videoRef.value.currentTime / videoRef.value.duration) * 100
  }
}

const changeProgress = (val: number) => {
  if (videoRef.value) {
    currentProgress.value = val
    videoRef.value.currentTime = (val * videoRef.value.duration) / 100
  }
}

const handleFullScreen = () => {
  if (vidFrameRef.value) {
    if (!isFullScreen.value) {
      vidFrameRef.value.requestFullscreen()
      isFullScreen.value = true
    } else {
      document.exitFullscreen()
      isFullScreen.value = false
    }
  }
}

const changeVolume = (val: number) => {
  if (videoRef.value) {
    volume.value = val
    videoRef.value.volume = val / 100
  }
}
</script>

<template>
  <figure class="vidFrame" ref="vidFrameRef">
    <video
      :src="url"
      class="video"
      ref="videoRef"
      @timeupdate="watchCurrentTimeChange"
      @play="emits('changeVideoState', false)"
      @ended="emits('changeVideoState', true)"
    ></video>
    <figcaption class="vidBar">
      <div class="left">
        <div class="action">
          <el-icon
            color="#fff"
            :size="23"
            @click="playVideo"
            v-if="isVideoPause"
            ><VideoPlay
          /></el-icon>
          <el-icon
            color="#fff"
            :size="23"
            @click="pauseVideo"
            v-if="!isVideoPause"
            ><VideoPause
          /></el-icon>
        </div>
        <div class="time">
          <span>
            {{ currentTime }}
          </span>
          <span style="margin: 0 0.5rem; display: inline-block">:</span>
          <span
            >{{ timeToMinute(videoPartStore.videoDetail.durationms!/1000) }}
          </span>
        </div>
      </div>
      <div class="center">
        <div class="progress">
          <el-slider
            @input="changeProgress"
            v-model="currentProgress"
            size="small"
            :show-tooltip="false"
          />
        </div>
      </div>
      <div class="right">
        <div>
          <el-slider
            v-model="volume"
            vertical
            height="2rem"
            style="width: 10px"
            @input="changeVolume"
          />
        </div>
        <div>
          <img
            src="@/assets/images/fullscreen.png"
            class="fullscreen"
            id="fullScreen"
            @click="handleFullScreen"
          />
        </div>
      </div>
    </figcaption>
  </figure>
</template>

<style lang="scss">
@import '@/assets/styles/base.scss';

.vidFrame {
  position: relative;
  overflow: hidden;
  top: 10%;
  width: 50rem;
  height: 27rem;
  min-height: 180px;
  margin: 0 !important;
  padding: 0 !important;
}

.vidBar {
  transition: all 1s;
  opacity: 0;
  background-color: rgba(54, 54, 54, 0.7);
  visibility: hidden;
  display: flex;
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  height: 5rem;
  width: 100%;
  .left {
    display: flex;
    justify-content: center;
    flex: 0.5;
    .action {
      display: flex;
      align-items: center;
      border-radius: 50%;
      z-index: 999;
      margin-right: 1rem;
    }
    .action:hover {
      cursor: pointer;
    }
    .time {
      display: flex;
      align-items: center;
      font-size: 1rem;
      color: #fff;
    }
  }
  .center {
    display: flex;
    align-items: center;
    flex: 0.6;
    .progress {
      display: flex;
      align-items: center;
      width: 100%;
      height: 0.01rem;
    }
    .el-slider__button {
      height: 1rem;
      width: 1rem;
      border: 1px solid $primary-color;
    }
    .el-slider__bar {
      height: 0.6rem;
      background-color: $primary-color !important;
    }
  }
  .right {
    display: flex;
    flex: 0.5;
    justify-content: space-around;
    align-items: center;
    .fullscreen:hover {
      cursor: pointer;
    }
  }
}

.video {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: auto;
  display: block;
  z-index: 1;
}

.vidBar:-moz-full-screen {
  position: fixed;
}
.vidBar:-webkit-full-screen {
  position: fixed;
}
.vidBar:-ms-fullscreen {
  position: fixed;
}
.vidBar:fullscreen {
  position: fixed;
}

video::-webkit-media-controls-enclosure {
  display: none !important;
}
.vidBar {
  z-index: 2147483648;
}

.vidFrame:hover .vidBar {
  opacity: 1;
  visibility: visible;
}
</style>
