<template>
  <div :class="['flex', { 'lt-sm:flex-items-start': align === 'vertical' }]">
    <router-link class="item" to="/">产品</router-link>
    <a class="item" href="https:www.imooc.com" target="_blank">社区</a>
    <router-link class="item" to="/study">学习</router-link>
    <router-link class="item" to="/about">关于</router-link>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
defineProps({
  align: String as PropType<'vertical' | 'horizontal'>
})
</script>

<style scoped lang="scss">
.item {
  @apply relative text-white text-2xl px-8 py-2 font-300 cursor-pointer;

  &:hover {
    @apply font-500;

    &:after {
      @apply absolute bg-gray-100 w-8 h-[1px] bottom-0 left-[calc(50%-1rem)];
      content: '';
    }
  }
}
</style>
