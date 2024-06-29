<template>
  <div class="bg-gray-100">
    <div class="bg-white">
      <Container class="flex-col">
        <!-- 内容区域 -->
        <!-- 课程介绍 -->
        <div class="flex w-full">
          <!-- 左图右文 -->
          <div class="w-1/2 bg-orange-300"></div>
          <div class="w-1/2 flex flex-col items-start">
            <div class="text-3xl">前端高级工程师（大前端）</div>
            <div class="text-gray-300 mb-4 line-clamp-3">教你轻松提升高阶能力</div>
            <div class="flex justify-start text-sm text-gray-300">
              <div class="pr-2">tomic</div>|<div class="pl-2">前端大牛</div>
            </div>
            <div class="flex justify-start text-sm text-gray-300 mb-4">
              <div>2000人学习</div>|<div>已更新 10/29</div>
            </div>
            <div class="text-orange-500 mb-6">￥3680.00</div>
            <div class="flex justify-start">
              <div class="btn mr-4 cursor-pointer">加入购物车</div>
              <div class="btn-plain px-10 cursor-pointer">收藏</div>
            </div>
          </div>
        </div>
      </Container>
    </div>
    <Container>
      <!-- 课程详情 -->
      <div class="flex">
        <div class="w-[calc(75%-1rem)] bg-white mr-4">
          <div class="border-b-2 border-b-gray-200">
            <Tabs :items="['课程介绍', '课程目录', '学员评价']"></Tabs>
          </div>
          <div class="p-4">
            <!-- markdown详情 -->
            <router-view></router-view>
            <!-- 课程目录 -->
            <!-- 评价 -->
          </div>
        </div>
        <!-- 右边侧边栏 -->
        <div class="w-1/4">
          <div class="bg-white mb-4 h-20">边栏</div>
          <div class="bg-white mb-4 h-20">边栏2</div>
        </div>
      </div>
    </Container>
  </div>
</template>

<script lang="ts" setup>
import { useParams } from '@/hooks'


</script>

<style></style>

<route lang="yaml">
meta:
  layout: default
</route>
