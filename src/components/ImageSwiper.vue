<template>
  <div class="py-10">
    <ul class="flex justify-evenly items-center w-full pb">
      <li v-for="(item, index) in titles" :key="index"
        class="flex flex-col items-center cursor-pointer transition-all text-gray-400 item"
        :class="{ active: index === activeIndex }" @click="() => {
          swiperRef?.slideTo(index, 500)
          activeIndex = index
        }">
        <div class="text-2xl border-b-2 pb-2 px-2 line">{{ index + 1 }}</div>
        <div class="p-2 text">{{ item }}</div>
      </li>
    </ul>
    <!-- tab按钮，切换是wiper中的slide -->
    <swiper :slides-per-view="1" :space-between="50" @swiper="onSwiper" @slideChange="onSlideChange" :modules="modules"
      :pagination="{ clickable: true, bulletClass: 'inline-block w-3 h-3 bg-gray-400 rounded-1/2 z-20 mr-4 cursor-pointer', bulletActiveClass: 'w-8! bg-orange-300 rounded-3' }"
      :navigation="{ nextEl: '.next', prevEl: '.prev' }" :style="{ height: width / 1200 * height + 'px' }"
      v-bind="$attrs" loop>
      <swiper-slide v-for="(item, index) in items" :key="index">
        <slot :item="item">
          <div class="w-full h-full bg-contain bg-no-repeat bg-center-top" :style="{ backgroundImage: `url(${item})` }">
          </div>
        </slot>
      </swiper-slide>
      <div v-if="!$attrs.pagination_hide">
        <div
          class="w-15 h-15 rounded-1/2 bg-white shadow-lg absolute top-1/2 transform-translate-y--1/2 left-2 z-30 border flex justify-center items-center cursor-pointer">
          <div class="prev i-ep:arrow-left" style="font-size: 2rem"></div>
        </div>
        <div
          class="w-15 h-15 rounded-1/2 bg-white shadow-lg absolute top-1/2 transform-translate-y--1/2 right-2 z-30 border flex justify-center items-center cursor-pointer">
          <div class="next i-ep:arrow-right" style="font-size: 2rem"></div>
        </div>
      </div>
    </swiper>
  </div>
</template>
<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import type { Swiper as SwiperType } from 'swiper'
import 'swiper/css'
import type { SwiperItemType } from './types';

import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const { width } = useWindowSize()

const props = defineProps({
  height: {
    type: Number,
    default: 1200,
  },
  items: {
    type: Array as PropType<Array<String>>,
    default: () => []
  },
  titles: {
    type: Array as PropType<Array<String>>,
    default: () => []
  }
})

const emits = defineEmits(['gofather'])

const swiperRef = ref<SwiperType>()
const activeIndex = ref(0)
//轮播图初始化事件
const onSwiper = (swiper: any) => {
  swiperRef.value = swiper
}
//轮播图变换时事件
const onSlideChange = (e) => {
  emits('gofather', e)
}

const modules = [Navigation, Pagination]

</script>
<style scoped lang="scss">
// 导航按钮不能点时的置灰样式
.swiper-button-disabled {
  color: rgba($color: #000, $alpha: 0.3)
}

.item {

  &.active,
  &:hover {
    .line {
      color: orange;
      border-color: orange;
    }

    .text {
      color: orange;
    }
  }
}
</style>
