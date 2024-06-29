<template>
  <div>
    <!-- 推荐内容 -->
    <Container>
      <div class="text-3xl font-bold pb-2 pt-6">推荐内容</div>
    </Container>
    <Container>
      <div class="grid sm:grid-cols-4 grid-cols-2 gap-3 w-full lt-sm:px-4">
        <a :href="item.url" v-for="(item, index) in recomand" :key="index" target="_blank"
          class="flex hover:(bg-sky-500 shadow-lg transform-translate-y--1) transition-all">
          <!-- for遍历的内容：课程 -->
          <Card class="card" :image="item.image" image-type="rounded" :title="item.title" border>
            <div class="mx-4 flex justify-start items-center text-gray-500 mb-4">
              <span class="mr-2">Brian</span>
              <span class="ml-2">前端课程</span>
            </div>
            <div class="mx-4 flex justify-between items-center text-gray-500 mb-4">
              <div>
                <span class="mr-2">{{ item.price }}</span>
                <span>{{ item.counts }}人学习</span>
              </div>
              <div class="i-mdi:cart text-3xl text-sky-400"></div>
            </div>
          </Card>
        </a>
      </div>
    </Container>
    <!-- 每日一课 -->
    <Container>
      <!-- tabs -->
      <Tabs :items="['Java', 'Vue', 'React', '小程序']" v-model="activeIndex"></Tabs>
    </Container>
    <!-- Grid -->
    <!-- 精品微课 -->
    <Container>
      <div class="text-3xl font-bold pb-2 pt-6">精品微课</div>
    </Container>
    <Container>
      <div class="grid sm:grid-cols-4 grid-cols-2 gap-3 w-full lt-sm:px-4">
        <a :href="item.url" v-for="(item, index) in recomand" :key="index" target="_blank"
          class="flex hover:(bg-sky-500 shadow-lg transform-translate-y--1) transition-all">
          <!-- for遍历的内容：课程 -->
          <Card class="card" :image="item.image" image-type="rounded" :title="item.title" border>
            <div class="mx-4 flex justify-start items-center text-gray-500 mb-4">
              <span class="mr-2">Brian</span>
              <span class="ml-2">前端课程</span>
            </div>
            <div class="mx-4 flex justify-between items-center text-gray-500 mb-4">
              <div>
                <span class="mr-2">{{ item.price }}</span>
                <span>{{ item.counts }}人学习</span>
              </div>
              <div class="i-mdi:cart text-3xl text-sky-400"></div>
            </div>
          </Card>
        </a>
      </div>
    </Container>
    <!-- 学习计划 -->
    <Container>
      <div class="text-3xl font-bold pb-2 pt-6">学习计划</div>
    </Container>
    <Container>
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full">
        <div class="lt-sm:px-4 py-4 relative h-40 flex items-center justify-center 
          hover:(bg-sky-500 shadow-lg transform-translate-y--1) transition-all group" v-for="(item, index) in recomand"
          :key="index">
          <div class="absolute w-full h-full bg-cover bg-center w-full rounded-3 overflow-hidden"
            :style="{ 'background-image': 'url(' + item.image + ')' }">
            <i class="bg-black bg-opacity-30 w-full h-full group-hover:display-none"></i>
          </div>
          <div class="z-30 px-4 line-clamp-3 text-xl text-white">{{ item.title }}</div>
        </div>
      </div>
    </Container>
    <!-- 优质专栏 -->
    <Container>
      <div class="text-3xl font-bold pb-2 pt-6">优质专栏</div>
    </Container>
    <Container>
      <div class="grid sm:grid-cols-4 grid-cols-2 gap-3 w-full lt-sm:px-4">
        <a :href="item.url" v-for="(item, index) in recomand" :key="index" target="_blank"
          class="flex hover:(bg-sky-500 shadow-lg transform-translate-y--1) transition-all">
          <!-- for遍历的内容：课程 -->
          <Card class="card" :image="item.image" image-type="rounded" :title="item.title" border>
            <div class="mx-4 flex justify-start items-center text-gray-500 mb-4">
              <span class="mr-2">Brian</span>
              <span class="ml-2">前端课程</span>
            </div>
            <div class="mx-4 flex justify-between items-center text-gray-500 mb-4">
              <div>
                <span class="mr-2">{{ item.price }}</span>
                <span>{{ item.counts }}人学习</span>
              </div>
              <div class="i-mdi:cart text-3xl text-sky-400"></div>
            </div>
          </Card>
        </a>
      </div>
    </Container>
  </div>
</template>

<script lang="ts" setup>
import bg from "@/assets/images/bg.png"

const recomand = ref([
  {
    image: bg,
    title: "第四期开始报名了！行业风口、政策倾斜，新晋热门高薪不内卷！打通从0基础到高薪就业完整路径，抢占先发优势！",
    "comments": "9",
    url: "https://class.imooc.com/sale/embedded",
    "hours": "350 小时",
    "counts": "227",
    "price": "12999.00",
    "originPrice": "14999"
  },
  {
    image: bg,
    title: "前端入门如同写字，如果你不知道从哪开始，那就选择前端（含Vue3.x，React17,TS）",
    "comments": "9",
    url: "https://class.imooc.com/sale/fe2021",
    "hours": "350 小时",
    "counts": "227",
    "price": "4666.00",
    "originPrice": "5980"
  },
  {
    image: bg,
    title: "以一线互联网公司产品标准，打造适合零基础学习的全干货Java课程。选择Java，高薪就业的第一步！",
    "comments": "9",
    url: "https://class.imooc.com/sale/java2021",
    "hours": "350 小时",
    "counts": "227",
    "price": "4429.00",
    "originPrice": "5680"
  },
  {
    image: bg,
    title: "2022版全新上线！覆盖Python五大热门就业方向，零基础进击多领域高薪岗位。全能培养，告别选择困扰",
    "comments": "9",
    url: "https://class.imooc.com/sale/python2021",
    "hours": "350 小时",
    "counts": "227",
    "price": "4429.00",
    "originPrice": "5680"
  },
  {
    image: bg,
    title: "阿里P8级讲师亲授，全程直播授课，1V1答疑，带你从量变到质变，成长为技惊四座的技术牛人！",
    "comments": "9",
    url: "https://class.imooc.com/sale/os",
    "hours": "350 小时",
    "counts": "227",
    "price": "4500",
    "originPrice": null
  },
  {
    image: bg,
    title: "不想做开发，又羡慕程序员的高工资？那就选软件测试！从0起步掌握多岗位能力！",
    "comments": "9",
    url: "https://class.imooc.com/sale/test2022",
    "hours": "350 小时",
    "counts": "227",
    "price": "2188.00",
    "originPrice": "2999"
  },
  {
    image: bg,
    title: "未来3-5年企业高性能项目不可替代的语言，从基础到项目实战再到重构，真正从入门到精通",
    "comments": "9",
    url: "https://class.imooc.com/sale/newgo",
    "hours": "350 小时",
    "counts": "227",
    "price": "3099.00",
    "originPrice": "3888"
  },
  {
    image: bg,
    title: "仅100名上新特惠火热占位中！助力3年以上Java老手，铲平架构理论门槛，掌握超大型项目架构设计与落地能力。",
    "comments": "9",
    url: "https://class.imooc.com/sale/project",
    "hours": "350 小时",
    "counts": "227",
    "price": "3666.00",
    "originPrice": "4699"
  }])

const activeIndex = ref(2)
</script>

<style></style>

<route lang="yaml">
meta:
  layout: default
</route>
