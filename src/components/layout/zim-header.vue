<script setup lang="ts">
import { useRouter } from 'vue-router'
import useUserStore from '@/stores/user'
import { useModal } from '@/hooks/useModal'
import SearchInput from '@/components/layout/search-input.vue'
import LoginModal from '@/components/login-modal/login-modal.vue'
import { ArrowLeft, ArrowRight, User } from '@element-plus/icons-vue'

const router = useRouter()
const userStore = useUserStore()
const { changeModalShow, isModalShow } = useModal()
const backIndex = () => {
  router.replace('/')
}
</script>

<template>
  <login-modal v-if="isModalShow" @changeModalShow="changeModalShow" />
  <div class="zim-header">
    <div class="logo" @click="backIndex"></div>
    <div class="progress">
      <el-icon class="header-button active" @click="router.back()"
        ><ArrowLeft
      /></el-icon>
      <el-icon class="header-button active" @click="router.forward()"
        ><ArrowRight
      /></el-icon>
    </div>
    <div class="search">
      <search-input />
    </div>
    <div class="profile">
      <div
        v-if="!Object.keys(userStore.profile).length"
        class="profile-info"
        @click="isModalShow = true"
      >
        <el-icon class="profile-avatar"><User /></el-icon>
        <div class="profile-username">未登录</div>
      </div>
      <div v-if="Object.keys(userStore.profile).length" class="profile-info">
        <el-image
          class="profile-avatar"
          :src="userStore.profile.avatarUrl"
          fit="fill"
        />
        <div class="profile-username">{{ userStore.profile.nickname }}</div>
      </div>
    </div>
    <div class="setting"></div>
  </div>
</template>

<style lang="scss">
@import '@/assets/styles/base.scss';
$button-size: 2.5rem;
$header-hover-color: #eaeaea;
$search-button-bg-color: #eaeaea;

.zim-header {
  display: flex;
  align-items: center;
  height: 100%;
  background-color: $bg-gray-color;
  padding: 0 3rem 0 3rem;

  .logo {
    flex: 0.2;
    height: 104%;
    display: flex;
    align-items: center;
    background: url('@/assets/images/logo.png') no-repeat;
    background-size: contain;
  }

  .logo:hover {
    cursor: pointer;
  }

  .header-button {
    width: $button-size;
    margin-right: 1rem;
    height: $button-size;
    border-radius: 50%;
    background-color: $search-button-bg-color;
  }

  .active:hover {
    background-color: rgb(218, 218, 218);
    cursor: pointer;
  }

  .progress {
    flex: 0.1;
  }
  .search {
    flex: 0.4;
    display: flex;
    .icon {
      flex: 1;
      margin-right: 1rem;
    }
  }

  .profile {
    flex: 0.15;
    .profile-info {
      display: flex;
      align-items: center;
    }
    .profile-avatar {
      width: $button-size + 1rem;
      height: $button-size + 1rem;
      margin-right: 0.5rem;
      border-radius: 50%;
      border: 1px solid #eaeaea;
      background-color: $header-hover-color;
    }
    .profile-username {
      font-size: 1.4rem;
      margin-left: 3px;
    }
  }
}
</style>
