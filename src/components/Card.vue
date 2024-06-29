<template>
  <div :class="cardClass">
    <div v-if="image" :class="imageClass" :style="{ backgroundImage: `url(${image})` }"></div>
    <div v-else :class="[icon, 'w-20 h-20']"></div>
    <!-- 然后又是一个div 上下结构 居左 -->
    <div v-if="title || subTitle" :class="titleClass">
      <div class="text-lg text-bold text-dark-300 pb-2">{{ title }}</div>
      <div class="text-sm text-dark-100 font-300">{{ subTitle }}</div>
    </div>
    <slot :item="{ image, icon, title, subTitle, url }"></slot>
  </div>
</template>

<script setup lang='ts'>
const props = defineProps({
  image: String,
  imageType: {
    //default 方形 rounded 带圆角的方 avatar头像
    type: String as PropType<'default' | 'rounded' | 'avatar'>,
    default: 'default'
  },
  icon: String,
  title: String,
  subTitle: String,
  url: String,
  border: Boolean
})

const cardClass = computed(() => {
  let defaultClass = 'flex flex-col '
  //不为空就是true
  if (props.icon) {
    defaultClass += 'items-start p-4';
  }
  if (props.imageType === 'rounded') {
    defaultClass += 'rounded overflow-hidden ';
  } else if (props.imageType === 'avatar') {
    defaultClass += 'relative mt-10 ';
  }
  if (props.border) {
    defaultClass += 'border border-gray-200';
  }
  return defaultClass;
})

const imageClass = computed(() => {
  const defaultClass = 'bg-image '
  if (!props.title && !props.subTitle) {
    if (props.imageType === 'rounded') {
      return defaultClass + 'h60 rounded';
    } else if (props.imageType === 'default') {
      return defaultClass + 'h60';
    }

  } else if (props.imageType === 'avatar') {
    return defaultClass + 'h-20 w-20 rounded-1/2 self-center absolute top-0 translate-y--1/2'
  }
  return defaultClass + 'h40';
})

const titleClass = computed(() => {
  const defaultClass = 'flex flex-col items-start p-4'
  if (props.imageType === 'avatar') {
    return defaultClass + ' pt-15'
  }
  return defaultClass;
})
</script>
<style scoped></style>