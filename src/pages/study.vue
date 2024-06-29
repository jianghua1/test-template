<template>
  <div class="flex-1 flex flex-col">
    <!-- 头部内容 -->
    <div class="relative">
      <!-- swiper -->
      <Swiper :items="items" :height="36 * store.rate + 'rem'"></Swiper>
      <!-- swiper 登录 -->
      <div class="absolute bottom-0 w-full flex py-4 z-1 bg-gray-700 bg-opacity-60">
        <Container>
          <!-- 分类 -->
          <div class="w-full flex justify-between">
            <ul class="flex justify-start text-white swiper1" v-if="$route.name === '/study/card'">
              <li class="item active2">购物车</li>
            </ul>
            <ul class="flex justify-start text-white swiper1" v-else>
              <li class="item active2">每日一课</li>
              <li class="item">精品微课</li>
              <li class="item">学习计划</li>
              <li class="item">优质专栏</li>
            </ul>

            <!-- 搜索+登录 -->
            <div class="flex items-center justify-end">
              <div class="relative flex flex-items-center">
                <input type="search" class="outline-none rounded border-none pl-2 pr-3 rounded-2 " placeholder="搜索教程">
                <i class="i-ep:search absolute right-2 "></i>
              </div>
              <div class="text-blue-100">
                <span class="cursor-point">会员计划</span>
                <span class="mx-2 cursor-pointer hover:text-white">注册</span>|
                <span class="ml-2 cursor-pointer hover:text-white">登录</span>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script setup lang='ts'>
import bg from '@/assets/images/bg.png'
import type { SwiperItemType } from '@/components/types'
import { useThemeStore } from '@/store/useThemeStore'

const items: SwiperItemType[] = [
  {
    image: bg,
    title: '传播技术的种子1',
    subTitle: '让技术没有门槛，让沟通没有障碍1',
    url: 'http://www.imooc.com'
  },
  {
    image: bg,
    title: '传播技术的种子2',
    subTitle: '让技术没有门槛，让沟通没有障碍2',
    url: 'http://www.baidu.com'
  },
  {
    image: bg,
    title: '传播技术的种子3',
    subTitle: '让技术没有门槛，让沟通没有障碍3',
    url: 'http://www.imooc.com'
  }
]
const store = useThemeStore()
</script>
<style scoped lang="scss">
.ul {
  .active {
    @apply text-sky-400 relative;

    &:after {
      @apply content-[''] absolute w-8 h-[2px] bg-sky-400 bottom-0 left-[calc(50%-1rem)]
    }
  }
}



.swiper1 {
  .item {
    @apply px-4 py-1 mr-2 rounded-6 bg-gray-100 bg-opacity-20;

    &:hover {
      @apply bg-white text-dark-300;
    }
  }

}

//激活状态
.active2 {
  @apply bg-white\! text-dark-300;
}
</style>