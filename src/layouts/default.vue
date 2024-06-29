<template>
  <!-- fixed是固定布局 距上边距0 width 100% -->
  <!-- 当垂直滚动条向下滑动后 黑色背景和30%透明度生效 -->
  <div class="fixed top-0 w-full z-50 transition-all duration-500 h-0"
    :class="[{ 'bg-black bg-opacity-30': y > 0 }, { 'lt-sm:(bg-black h-full)': show }]">
    <Container>
      <img src="/512x512.png" class="w-14 h-full lt-sm:mx-auto" alt="">
      <div @click="() => toggle()"
        :class="[show ? 'i-system-uicons:cross' : 'i-ic-round-menu', 'text-gray-300 text-2xl absolute right-5 top-5 cursor-pointer hover:text-white']">
      </div>
      <Menu v-show="show" class="lt-sm:(absolute top-14 right-0 w-full flex-col)" align="vertical"></Menu>
    </Container>
  </div>
  <router-view></router-view>
  <div>
    <DefaultFooter></DefaultFooter>
  </div>
</template>

<script setup lang="ts">
// 滚动条事件
const { y } = useWindowScroll()

const [show, toggle] = useToggle(false)

useResizeObserver(document.body, () => {
  const width = window.innerWidth
  if (width >= 640) {
    show.value = false
  }
})
</script>

<style scoped></style>
