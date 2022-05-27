<script setup lang="ts">
defineProps({
  text: String,
  count: Number
})
</script>

<template>
  <div class="action-item">
    <slot name="icon"></slot>
    <span style="font-size: 1.3rem; margin: 0 0 0 0.5rem">{{ text }}</span>
    <span style="font-size: 1.3rem" v-if="count"> ({{ count }}) </span>
  </div>
</template>

<style lang="scss">
.action-item {
  padding: 0 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  width: 9rem;
  height: 3rem;
  border: 1px solid rgb(201, 201, 201);
  border-radius: 2rem;
  margin-right: 1rem;
}

.action-item:hover {
  cursor: pointer;
}
</style>
