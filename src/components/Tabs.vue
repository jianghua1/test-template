<template>
  <ul class="tabs flex w-full">
    <li v-for="(item, index) in items" :key="index" class="px-4 py-2 cursor-pointer"
      :class="{ active: index === activeIndex }" @click="activeIndex = index">
      {{ item }}
    </li>

  </ul>
</template>

<script setup lang='ts' generic="T">

defineProps({
  items: {
    type: Array as PropType<T[]>,
    default: () => []
  },
  activeIndex: Number
})
const activeIndex = defineModel<number>({ local: true, default: 0 })

</script>
<style scoped lang="scss">
.tabs {
  .active {
    @apply text-sky-400 relative;

    &:after {
      @apply absolute bg-sky-400 w-8 h-[1px] bottom-0 left-[calc(50%)] transform-translate-x--1/2;
      content: '';
    }

  }
}
</style>