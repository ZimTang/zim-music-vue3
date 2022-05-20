<script setup lang="ts">
interface IItemConfig {
  to: string
  text: string
}
const props = withDefaults(
  defineProps<{ config: Array<IItemConfig>; width: string }>(),
  {
    width: 'calc(100% - 20vw)'
  }
)
</script>

<template>
  <div class="link-header" :style="{ width: props.width }">
    <div class="header-item" v-for="item in props.config">
      <router-link :to="item.to">{{ item.text }}</router-link>
    </div>
  </div>
</template>

<style lang="scss">
@import '@/assets/styles/base.scss';

.link-header {
  padding-top: 10px;
  margin-bottom: 20px;
  line-height: 20px;
  display: flex;
  .header-item {
    margin-right: 3rem;
    text-align: center;
  }
  .active {
    position: relative;
    font-size: 21px;
    font-weight: bold;
    .header-item {
      padding-bottom: 20px;
    }
  }
  .active::after {
    content: '';
    display: block;
    background-color: $primary-color;
    width: 50%;
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translate(-50%, 0);
    border-radius: 10px;
    border: 2px solid $primary-color;
    margin-top: 5px;
  }
}
</style>
