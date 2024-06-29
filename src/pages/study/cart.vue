<template>
  <div class="py-4 bg-gray-200 relative flex-1">
    <Container>
      <ul class="w-full pb-15">
        <li class="border flex items-center h-40 bg-white" v-for="(course, index) in courses" :key="index">
          <!-- checkbox -->
          <div class="px-4 text-xl">
            <i class="i-radix-icons:checkbox" v-if="true"></i>
            <i class="i-carbon:checkbox" v-else></i>
          </div>
          <!-- 课程头图 -->
          <div class="py-2">
            <div class="w-45 h-32 bg-center bg-cover" :style="{ backgroundImage: `url(${course.image})` }"></div>
          </div>
          <div class="flex-1 flex flex-col items-start h-full justify-between py-4 px-4">
            <!-- 标题 -->
            <div class="text-xl">{{ course.title }}</div>
            <div>
              <!-- 老师、标签 -->
              <div class="text-sm">{{ course.teacher }}|{{ course.tag }}</div>
              <!-- 购买用户，更新信息 -->
              <div class="text-sm">{{ course.count }}人购买|已更新：{{ course.progress }}</div>
            </div>
          </div>
          <!-- 价格 -->
          <div class="border-r-1 h-full px-4 flex items-center justify-center">￥{{ course.price }}</div>
          <!-- 操作 -->
          <div class="flex items-center justify-center px-4">
            <!-- delete -->
            <span class="text-red-500" @click="show = !show">删除</span>
            <!-- favorite -->
          </div>
        </li>
      </ul>
    </Container>

    <teleport to='body'>
      <Modal v-model="show">
        hello world
      </Modal>
    </teleport>
  </div>
  <Container class="bg-white flex justify-between items-center w-full px-2 py-2">
    <div class="flex">
      <div class="px-2 text-xl">
        <!-- 选中 -->
        <i class="i-radix-icons:checkbox" v-if="true"></i>
        <!-- 为选中 -->
        <i class="i-carbon:checkbox" v-else></i>
      </div>
      <span class="text-gray-400">全选</span>
    </div>
    <div class="flex items-center">
      <span class="mr-2 text-gray-400">合计：</span>
      <span class="text-orange-400">999</span>
      <div class="btn px-8 ml-4">结算</div>
    </div>
  </Container>
</template>

<script setup lang='ts'>
import bg from '@/assets/images/bg.png'

interface CartItemType {
  image: string,
  title: string,
  teacher: string,
  tag: string,
  count: number,
  progress: string,
  price: number
}
interface CartType {
  courses: CartItemType[]
}
withDefaults(defineProps<CartType>(), {
  courses: () => [
    {
      image: bg,
      title: '大前端高级前端工程师',
      teacher: 'Brian',
      tag: '前端',
      count: 1000,
      progress: '10/20',
      price: 999.00
    }
  ]
})

const show = ref(false)
</script>
<style scoped></style>