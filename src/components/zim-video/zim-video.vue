<script setup lang="ts">
import { ref, watch } from 'vue'
import { VideoPlay, VideoPause } from '@element-plus/icons-vue'
import { timeToMinute } from '@/utils/audio'
import useVideoPartStore from '@/stores/video-part'
const videoRef = ref<HTMLVideoElement | null>(null)
const emits = defineEmits(['changeVideoState'])
const props = defineProps({
  url: String,
  isVideoPause: Boolean
})
const videoPartStore = useVideoPartStore()
const currentTime = ref('00:00')
const currentProgress = ref(0)
const volume = ref(0)
const playVideo = () => {
  videoRef.value?.play()
  emits('changeVideoState', false)
}
const pauseVideo = () => {
  videoRef.value?.pause()
  emits('changeVideoState', true)
}

watch(
  () => props.url,
  () => {
    currentTime.value = '00:00'
    currentProgress.value = 0
  }
)

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
  if (videoRef.value) {
    videoRef.value.requestFullscreen()
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
  <div class="zim-video">
    <video
      :src="url"
      class="video"
      ref="videoRef"
      disablePictureInPicture
      @timeupdate="watchCurrentTimeChange"
    ></video>
    <div class="controls">
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
            height="15px"
            style="width: 10px"
            @input="changeVolume"
          />
        </div>
        <div>
          <img
            src="@/assets/images/fullscreen.png"
            class="fullscreen"
            @click="handleFullScreen"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '@/assets/styles/base.scss';

.zim-video {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  width: 50rem;
  .video {
    width: 50rem;
  }
  .controls {
    transition: all 1s;
    opacity: 0;
    background-color: rgba(54, 54, 54, 0.7);
    visibility: hidden;
    overflow: hidden;
    height: 2.9rem;
    display: flex;
    width: 50rem;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    top: 89.5%;
    left: 0%;
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
        font-size: 1.2rem;
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
      .fullscreen:hover {
        cursor: pointer;
      }
    }
  }

  &:hover .controls {
    opacity: 1;
    visibility: visible;
  }
}
</style>
