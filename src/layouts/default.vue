<template>
  <div class="flex flex-col min-h-100vh">
    <!-- fixed是固定布局 距上边距0 width 100% -->
    <!-- 当垂直滚动条向下滑动后 黑色背景和30%透明度生效 -->
    <div class="fixed top-0 w-full z-50 transition-all duration-500 h-0"
      :class="[{ 'bg-black bg-opacity-30': y > 0 }, { 'lt-sm:(bg-black h-full)': show }]">
      <Container>
        <img src="/512x512.png" class="w-14 h-full lt-sm:mx-auto" alt="">
        <div @click="() => toggle()"
          class="text-gray-300 text-2xl absolute right-5 top-5 cursor-pointer hover:text-white">
          <transition name="rotate-icon" mode="out-in">
            <div class="i-system-uicons:cross" v-if="show"></div>
            <div class="i-ic-round-menu" v-else></div>
          </transition>
        </div>
        <Menu v-show="show" class="lt-sm:(absolute top-14 right-0 w-full flex-col)" align="vertical"></Menu>
      </Container>
    </div>
    <router-view></router-view>
    <div>
      <DefaultFooter></DefaultFooter>
    </div>
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
<style scoped lang="scss">
// 过渡态
.rotate-icon-enter-active {
  animation: scaleYIn 0.5s;
}

.rotate-icon-leave-active {
  animation: scaleYIn 0.5s reverse;
}

// 关键帧
@keyframes scaleYIn {
  0% {
    transform: scaleY(0);
  }

  100% {
    transform: scaleY(1);
  }
}
</style>
