<script setup lang="ts">
import { defineComponent } from 'vue'
import { useUserStore } from '@/stores/user'
import { useModal } from '@/hooks/useModal'
import SearchInput from '@/components/layout/search-input.vue'
import LoginModal from '@/components/login-modal/login-modal.vue'
import { ArrowLeft, ArrowRight, User } from '@element-plus/icons-vue'

defineComponent({
  SearchInput,
  LoginModal
})

const userStore = useUserStore()
const { changeModalShow, isModalShow } = useModal()
</script>

<template>
  <login-modal v-if="isModalShow" @changeModalShow="changeModalShow" />
  <div class="zim-header">
    <div class="logo"></div>
    <div class="progress">
      <el-icon class="header-button"><ArrowLeft /></el-icon>
      <el-icon class="header-button"><ArrowRight /></el-icon>
    </div>
    <div class="search">
      <search-input />
    </div>
    <div class="profile">
      <div
        v-if="!userStore.token"
        class="profile-info"
        @click="isModalShow = true"
      >
        <el-icon class="profile-avatar"><User /></el-icon>
        <div class="profile-username">未登录</div>
      </div>
      <div v-if="userStore.token" class="profile-info">
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
$header-height: 65px;
$header-hover-color: #eaeaea;
$search-button-bg-color: #eaeaea;
$button-size: 25px;

.zim-header {
  display: flex;
  align-items: center;
  height: $header-height;
  background-color: $bg-gray-color;
  padding: 0 30px 0 30px;

  .logo {
    flex: 0.2;
    height: 100%;
    line-height: $header-height;
    background: url('@/assets/images/logo.png') no-repeat;
    background-size: contain;
  }

  .header-button {
    width: $button-size;
    margin-left: 5px;
    height: $button-size;
    border-radius: 50%;
    background-color: $search-button-bg-color;
  }

  .progress {
    flex: 0.1;
  }
  .search {
    flex: 0.4;
    display: flex;
    .icon {
      flex: 1;
      margin-right: 10px;
    }
  }

  .profile {
    flex: 0.15;
    .profile-info {
      display: flex;
      align-items: center;
    }
    .profile-avatar {
      width: $button-size + 10px;
      height: $button-size + 10px;
      margin-right: 5px;
      border-radius: 50%;
      border: 1px solid #eaeaea;
      background-color: $header-hover-color;
    }
    .profile-username {
      font-size: 14px;
      margin-left: 3px;
    }
  }
}
</style>
