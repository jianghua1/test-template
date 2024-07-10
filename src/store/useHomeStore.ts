import { getHomeData } from '@/api/home'
export const useHomeStore = defineStore('home', {
  state: () => ({
    swipers: [],
    projects: [],
    courses: [],
    swiperProjects: []
  }),
  actions: {
    async fetchData() {
      const res = await getHomeData()
      if (res.status === 200) {
        this.swipers = res.data.swipers
        this.projects = res.data.projects
        this.courses = res.data.courses
        this.swiperProjects = res.data.swiperProjects
      } else {
        console.log('获取首页接口失败', res)
      }
    }
  }
})
