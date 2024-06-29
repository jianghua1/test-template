<template>
  <swiper :slides-per-view="1" :space-between="50" @swiper="onSwiper" @slideChange="onSlideChange" :modules="modules"
    :pagination="{ clickable: true, type: 'fraction', el: '.pagination' }"
    :navigation="{ nextEl: '.next', prevEl: '.prev' }" :class="getClassAndStyle(props.height).class"
    :style="getClassAndStyle(props.height).style" v-bind="$attrs">
    <swiper-slide v-for="(item) in items" :key="item.image">
      <slot :item="item">
        <div class="w-full h-full bg-cover bg-no-repeat bg-center-top"
          :style="{ backgroundImage: `url(${item.image})` }">
          <Container class="h-full">
            <div class="flex flex-col justify-center items-start lt-sm:px-4">
              <p class="text-xl sm:text-4xl font-bold text-white">{{ item.title }}</p>
              <p class="text-sm sm:text-xl text-gray-100 pt-4">{{ item.subTitle }}</p>
            </div>
          </Container>
        </div>
      </slot>
    </swiper-slide>
    <div class="flex justify-center items-center absolute right-0 bottom-0 bg-white w-32 h-16 z-30">
      <div class="pagination w-unset! font-bold mr-4"></div>
      <div class="prev i-mdi-arrow-left-thin" style="font-size: 2rem"></div>
      <div class="next i-mdi-arrow-right-thin" style="font-size: 2rem"></div>
    </div>
  </swiper>
</template>
<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import type { Swiper as SwiperType } from 'swiper'
import 'swiper/css'
import type { SwiperItemType } from './types';

import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const props = defineProps({
  height: {
    default: 'h-80',
  },
  items: {
    type: Array as PropType<Array<SwiperItemType>>,
    default: () => []
  }
})

const emits = defineEmits(['gofather'])

const onSwiper = (swiper: any) => {
}
const onSlideChange = (e) => {
  emits('gofather', e)
}

const modules = [Navigation, Pagination]

function getClassAndStyle(str: string) {
  return {
    style: /(rem|em|px)/.test(props.height) ? { height: str } : {},
    class: /h-/.test(props.height) ? str : ''
  }
}
</script>
<style scoped lang="scss">
// 导航按钮不能点时的置灰样式
.swiper-button-disabled {
  color: rgba($color: #000, $alpha: 0.3)
}
</style>
