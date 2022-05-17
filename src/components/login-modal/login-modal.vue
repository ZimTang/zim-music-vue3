<script setup lang="ts">
import { ref, defineEmits, reactive } from 'vue'
import { FormInstance, FormRules } from 'element-plus'
import { useUser } from '@/hooks/useUser'

const emits = defineEmits(['changeModalShow'])
const { loginForm, handleLogin } = useUser()
const ruleFormRef = ref<FormInstance>()
const rules = reactive<FormRules>({
  phone: [
    {
      required: true,
      message: '手机号不能为空',
      trigger: 'blur'
    }
  ],
  password: [
    {
      required: true,
      message: '密码不能为空',
      trigger: 'blur'
    }
  ]
})
</script>

<template>
  <div class="login-modal">
    <div class="close-btn" @click="emits('changeModalShow', false)">X</div>
    <h2 class="title">登录</h2>
    <el-form :model="loginForm" :rules="rules" ref="ruleFormRef">
      <el-form-item required size="large" prop="phone">
        <el-input
          placeholder="请输入手机号"
          v-model="loginForm.phone"
        ></el-input>
      </el-form-item>
      <el-form-item required size="large" prop="password">
        <el-input
          placeholder="请输入密码"
          v-model="loginForm.password"
          type="password"
        ></el-input>
      </el-form-item>
      <el-form-item> </el-form-item>
    </el-form>
    <div class="login-btn">
      <el-button
        class="login-btn-bg"
        type="primary"
        @click="
          () => {
            handleLogin(ruleFormRef)
            emits('changeModalShow')
          }
        "
        round
        >登录</el-button
      >
    </div>
  </div>
</template>

<style lang="scss">
@import '@/assets/styles/base.scss';

.login-modal {
  .title {
    text-align: center;
  }

  h2 {
    margin-top: 50px;
    margin-bottom: 30px;
  }
  z-index: 999;
  padding: 0 20px;
  align-items: center;
  justify-content: center;
  margin-top: -20px;
  width: 30rem;
  height: 40rem;
  background: #ffffff;
  box-shadow: 5px 5px 5px 2px #eee;
  border: 1px solid #eee;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  .close-btn {
    position: relative;
    top: 3%;
    right: -100%;
    &:hover {
      cursor: pointer;
    }
  }
  .login-btn {
    display: flex;
    justify-content: center;
  }
  .login-btn-bg {
    width: 20rem;
    border: none;
    background-color: $primary-color !important;
    &:hover {
      background-color: $primary-hover-color !important;
    }
  }
  .el-input .is-focus {
    box-shadow: 0 0 0 1px $primary-color;
  }
}
</style>
