<template>
  <div>
    <Swiper :items="swipers" :height="36 * store.rate + 'rem'"></Swiper>
    <Container>
      <!-- 标题 -->
      <div class="py-4">
        <div class="text-2xl">
          “
        </div>
        <div class="text-2xl font-bold pb-4">传播技术的种子 让分享带来价值</div>
        <div class="flex justify-between items-center">
          <div class="text-sm text-gray-400 w-2/3">
            多年来，tomic技术不忘初心，以建立行业服务为标杆为目标，不断升级技术设计服务水平，帮助客户在
            互联网推广自己的产品、服务和平拍，为客户创造价值从而实现自身价值。
          </div>
          <div class="flex pl-20 w-1/3 justify-end items-center">
            <div class="w-1/2 h-[1px] bg-gray-500"></div>
            <div class="text-2xl relative ml-2 top-1">”</div>
          </div>
        </div>
      </div>
    </Container>
    <Container>
      <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 w-full lt-sm:px-4">
        <a :href="item.url" v-for="(item, index) in projects" :key="index" target="_blank"
          class="flex hover:(bg-sky-500 shadow-lg transform-translate-y--1) transition-all">
          <!-- for遍历的内容：课程 -->
          <Card class="card" :icon="item.icon" image-type="rounded" :title="item.title" :sub-title="item.subTitle"
            border>
            <div class="mx-4 flex justify-between items-center text-gray-500 mb-4">
              查看更多
              <div class=" i-mdi:arrow-right-thin"></div>
            </div>
          </Card>
        </a>
      </div>
    </Container>
    <Container class="mt-5">
      <div class="py-4">
        <div class="text-2xl font-bold pb-4">官方课程</div>
        <div class="flex justify-between items-center">
          <div class="text-sm text-gray-400">toimc官方出品，经典内容设计，匠心细致，专业讲解。</div>
        </div>
      </div>
    </Container>
    <Container>
      <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 w-full lt-sm:px-4">
        <a :href="item.url" target="_blank" v-for="(item, index) in courses" :key="index" class="flex">
          <Card class="w-full rounded-3 transition-all hover:(transform-translate-y--1 shadow-lg)" :image="item.image"
            image-type="rounded" :title="item.title" :sub-title="item.subTitle" border>
            <template #default>
              <div class="mx-4 flex items-center justify-between text-gray-500 mb-4">
                查看更多
                <div class="i-mdi:arrow-right-thin text-3xl ml-2"></div>
              </div>
            </template>
          </Card>
        </a>
      </div>
    </Container>
    <Container class="mt-5">
      <div class="py-4">
        <div class="text-2xl font-bold pb-4">课程项目展示</div>
        <div class="flex justify-between items-center">
          <div class="text-sm text-gray-400">项目及架构展示，核心主流技术</div>
        </div>
      </div>
    </Container>
    <Container class="w-full text-gray-400">
      <Swiper :items="swiperProjects" :height="28 * store.rate + 'rem'" class="w-2/3" @gofather="handleSwiperChange">
      </Swiper>
      <div class="w-1/3 bg-coolgray-700 self-stretch flex flex-col justify-center px-4">
        <a :href="selectItem.url" target="_blank">
          <div class="text-2xl font-bold pb-4 text-gray-100">{{ selectItem.title }}</div>
          <div class="text-sm">{{ selectItem.subTitle }}</div>
          <div class="flex items-center justify-between mb-4">查看更多</div>
          <div class="i-mdi:arrow-right-thin text-4xl"></div>
        </a>
      </div>
    </Container>
    <Container>
      <div class="text-2xl font-bold mt-8">合作伙伴</div>
    </Container>
    <Container>
      <FreeSwiper :items="partners"></FreeSwiper>
    </Container>
    <Container class="py-4">
      <div class="w-2/3 h-[400px]">
        <div class="grid grid-cols-4 grid-rows-3 gap-4 h-full p-4">
          <div class="border row-start-1 row-end-2 col-start-1 col-span-4">1</div>
          <div class="border row-start-2 row-end-4 col-start-1 col-end-3">2</div>
          <div class="border row-start-2 row-end-3 col-start-3 col-end-5">3</div>
          <div class="border row-start-3 row-end-4 col-start-3 col-end-4">4</div>
          <div class="border row-start-3 row-end-4 col-start-4 col-end-5">5</div>
        </div>
      </div>
      <div class="w-1/3 self-stretch flex flex-col justify-center">
        <div class="text-2xl font-bold pb-4">讲师团队</div>
        <div class="text-sm text-gray-400">
          <p>一线大厂、资深技术大牛10名</p>
          <p>技术专家不定期坐镇直播间</p>
          <p>前端、Java、Python工程师对应不同用户开发需求</p>
          <p>年薪百万不是梦，加入我们!</p>
        </div>
      </div>
    </Container>
  </div>
</template>

<script setup lang="ts">
import type { SwiperItemType } from '@/components/types'

import front from '@/assets/lessons/front-end.jpeg'
import nestjs from '@/assets/lessons/nestjs.jpeg'
import small from '@/assets/lessons/6.jpeg'
import project from '@/assets/lessons/project.jpeg'
import book from '@/assets/lessons/book.jpeg'
import blog from '@/assets/lessons/blog.png'
import { registerSW } from 'virtual:pwa-register'
import bg from '@/assets/images/bg.png'
import { useThemeStore } from '@/store/useThemeStore';

import { getHomeData } from '@/api/home'

onBeforeMount(async () => {
  const res = await getHomeData()
  console.log('响应回来的数据', res)
})


const store = useThemeStore()

const swipers: SwiperItemType[] = [
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

const projects = [
  {
    title: '前端高级工程师（大前端）',
    subTitle: '全新打造“技术成长&职业破局”双高体系，深度打通“全栈 + 全流程 +多端+ 提效+AI赋能” ',
    url: 'https://class.imooc.com/sale/fesenior',
    icon: 'i-mdi:web'
  }, {
    title: '前端高级工程师（大前端）',
    subTitle: '全新打造“技术成长&职业破局”双高体系，深度打通“全栈 + 全流程 +多端+ 提效+AI赋能” ',
    url: 'https://class.imooc.com/sale/fesenior',
    icon: 'i-mdi:web'
  }, {
    title: '前端高级工程师（大前端）',
    subTitle: '全新打造“技术成长&职业破局”双高体系，深度打通“全栈 + 全流程 +多端+ 提效+AI赋能”',
    url: 'https://class.imooc.com/sale/fesenior',
    icon: 'i-mdi:web'
  }, {
    title: '前端高级工程师（大前端）',
    subTitle: '全新打造“技术成长&职业破局”双高体系，深度打通“全栈 + 全流程 +多端+ 提效+AI赋能”',
    url: 'https://class.imooc.com/sale/fesenior',
    icon: 'i-mdi:web'
  }, {
    title: '前端高级工程师（大前端）',
    subTitle: '全新打造“技术成长&职业破局”双高体系，深度打通“全栈 + 全流程 +多端+ 提效+AI赋能”',
    url: 'https://class.imooc.com/sale/fesenior',
    icon: 'i-mdi:web'
  }, {
    title: '前端高级工程师（大前端）',
    subTitle: '全新打造“技术成长&职业破局”双高体系，深度打通“全栈 + 全流程 +多端+ 提效+AI赋能”',
    url: 'https://class.imooc.com/sale/fesenior',
    icon: 'i-mdi:web'
  }, {
    title: '前端高级工程师（大前端）',
    subTitle: '全新打造“技术成长&职业破局”双高体系，深度打通“全栈 + 全流程 +多端+ 提效+AI赋能”',
    url: 'https://class.imooc.com/sale/fesenior',
    icon: 'i-mdi:web'
  }, {
    title: '前端高级工程师（大前端）',
    subTitle: '全新打造“技术成长&职业破局”双高体系，深度打通“全栈 + 全流程 +多端+ 提效+AI赋能”',
    url: 'https://class.imooc.com/sale/fesenior',
    icon: 'i-mdi:web'
  }
]

const courses = [
  {
    title: '前端高级工程师（大前端）',
    subTitle: '“技术成长&职业破局”双高体系,深度打通“全栈 + 全流程 +多端+ 提效+AI赋能”',
    url: 'https://class.imooc.com/sale/fesenior',
    image: front
  },
  {
    title: '互联网人副业指南',
    subTitle: '专为互联网人打造，超越市面大多副业课，从0到1掌握副业成功密码',
    url: 'https://coding.imooc.com/class/598.html',
    image: project
  },
  {
    title: 'NestJS 入门到实战',
    subTitle: '近几年快速发展的Node.js框架，掌握未来前端工程师后端开发能力',
    url: 'https://coding.imooc.com/class/617.html',
    image: nestjs
  },
  {
    title: '六大场景 梳理开发痛点',
    subTitle: '摸清大前端成长之路 梳理开发痛点 解锁前端进阶路',
    url: 'https://coding.imooc.com/class/514.html',
    image: small
  },
  {
    title: 'toimc 电子书平台',
    subTitle: '大前端高级进阶，电子书平台，服务于课程内容',
    url: 'https://coding.imooc.com/class/617.html',
    image: book
  },
  {
    title: 'toimc 博客',
    subTitle: '热爱技术的发烧友，前端技术狂热者',
    url: 'https://www.toimc.com',
    image: blog
  }
]

const swiperProjects: SwiperItemType[] = [
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

const partners = ref([
  'https://wayearn.static.toimc.com/partner/logo1.png',
  'https://wayearn.static.toimc.com/partner/logo2.png',
  'https://wayearn.static.toimc.com/partner/logo8.png',
  'https://wayearn.static.toimc.com/partner/logo5.png',
  'https://wayearn.static.toimc.com/partner/logo6.png',
  'https://wayearn.static.toimc.com/partner/logo7.png'
])

const selectItem = ref(swipers[0])

onMounted(() => {
  registerSW({
    immediate: true,
    onRegisteredSW(_url, registration) {
      setInterval(() => {
        registration && registration.update()
      }, 3600000)
    }
  })
})

function handleSwiperChange(e) {
  const index = e.activeIndex
  selectItem.value = swipers[index]
}
</script>
<style scoped lang="scss">
:deep(.card) {
  &:hover {
    div {
      color: white;
    }
  }
}
</style>
<sif (props.border) { defaultClass +='border border-gray-200' ; }coped></sif>

<route lang="yaml">
meta:
  layout: default
</route>
