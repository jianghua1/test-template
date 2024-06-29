<!--  -->
<template>
  <!-- felx布局，主轴居左排列 交叉轴居中排列 固定宽度1200px（4个盒子+一张图的宽度，当屏幕很窄的时候如果没有这个属性，盒子会变宽，因为宽度不够内容要展示，字体就要垂直排列） marin 0 auto -->
  <div class="flex flex-justify-start flex-items-center w-full max-w-[1200px] mx-auto">
    <slot>
    </slot>
  </div>
</template>

<script setup lang='ts'>

</script>
<style scoped></style>