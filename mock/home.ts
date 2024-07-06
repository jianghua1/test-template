import type { MockMethod } from 'vite-plugin-mock'
import * as path from 'path'
import * as fs from 'fs'

const prefix = '/api/v1'
const bg = '/api/image/bg.png'

export default [
  {
    url: `${prefix}/home`,
    method: 'get',
    response: () => ({
      code: 200,
      data: {
        swipers: [
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
        ],
        projects: [
          {
            title: '前端高级工程师（大前端）',
            subTitle:
              '全新打造“技术成长&职业破局”双高体系，深度打通“全栈 + 全流程 +多端+ 提效+AI赋能” ',
            url: 'https://class.imooc.com/sale/fesenior',
            icon: 'i-mdi:web'
          },
          {
            title: '前端高级工程师（大前端）',
            subTitle:
              '全新打造“技术成长&职业破局”双高体系，深度打通“全栈 + 全流程 +多端+ 提效+AI赋能” ',
            url: 'https://class.imooc.com/sale/fesenior',
            icon: 'i-mdi:web'
          },
          {
            title: '前端高级工程师（大前端）',
            subTitle:
              '全新打造“技术成长&职业破局”双高体系，深度打通“全栈 + 全流程 +多端+ 提效+AI赋能”',
            url: 'https://class.imooc.com/sale/fesenior',
            icon: 'i-mdi:web'
          },
          {
            title: '前端高级工程师（大前端）',
            subTitle:
              '全新打造“技术成长&职业破局”双高体系，深度打通“全栈 + 全流程 +多端+ 提效+AI赋能”',
            url: 'https://class.imooc.com/sale/fesenior',
            icon: 'i-mdi:web'
          },
          {
            title: '前端高级工程师（大前端）',
            subTitle:
              '全新打造“技术成长&职业破局”双高体系，深度打通“全栈 + 全流程 +多端+ 提效+AI赋能”',
            url: 'https://class.imooc.com/sale/fesenior',
            icon: 'i-mdi:web'
          },
          {
            title: '前端高级工程师（大前端）',
            subTitle:
              '全新打造“技术成长&职业破局”双高体系，深度打通“全栈 + 全流程 +多端+ 提效+AI赋能”',
            url: 'https://class.imooc.com/sale/fesenior',
            icon: 'i-mdi:web'
          },
          {
            title: '前端高级工程师（大前端）',
            subTitle:
              '全新打造“技术成长&职业破局”双高体系，深度打通“全栈 + 全流程 +多端+ 提效+AI赋能”',
            url: 'https://class.imooc.com/sale/fesenior',
            icon: 'i-mdi:web'
          },
          {
            title: '前端高级工程师（大前端）',
            subTitle:
              '全新打造“技术成长&职业破局”双高体系，深度打通“全栈 + 全流程 +多端+ 提效+AI赋能”',
            url: 'https://class.imooc.com/sale/fesenior',
            icon: 'i-mdi:web'
          }
        ],
        courses: [
          {
            title: '前端高级工程师（大前端）',
            subTitle: '“技术成长&职业破局”双高体系,深度打通“全栈 + 全流程 +多端+ 提效+AI赋能”',
            url: 'https://class.imooc.com/sale/fesenior',
            image: 'front'
          },
          {
            title: '互联网人副业指南',
            subTitle: '专为互联网人打造，超越市面大多副业课，从0到1掌握副业成功密码',
            url: 'https://coding.imooc.com/class/598.html',
            image: 'project'
          },
          {
            title: 'NestJS 入门到实战',
            subTitle: '近几年快速发展的Node.js框架，掌握未来前端工程师后端开发能力',
            url: 'https://coding.imooc.com/class/617.html',
            image: 'nestjs'
          },
          {
            title: '六大场景 梳理开发痛点',
            subTitle: '摸清大前端成长之路 梳理开发痛点 解锁前端进阶路',
            url: 'https://coding.imooc.com/class/514.html',
            image: 'small'
          },
          {
            title: 'toimc 电子书平台',
            subTitle: '大前端高级进阶，电子书平台，服务于课程内容',
            url: 'https://coding.imooc.com/class/617.html',
            image: 'book'
          },
          {
            title: 'toimc 博客',
            subTitle: '热爱技术的发烧友，前端技术狂热者',
            url: 'https://www.toimc.com',
            image: 'blog'
          }
        ],
        swiperProjects: [
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
      }
    })
  },
  {
    url: '/api/image/:image',
    method: 'get',
    rawResponse: async (req: any, res: any) => {
      //从url中获取图片名称
      const imageName = req.url.replace('/api/image/', '')
      //path拼接正确的本地静态文件路径
      const imagePath = path.join(__dirname, 'assets/image', imageName)
      //使用fs进行静态文件的下载
      fs.readFile(imagePath, (err, data) => {
        if (err) {
          res.setHeader('Content-Type', 'text/plain')
          res.statusCode = 500
          res.end('Error:Unable to read image')
        } else {
          res.setHeader('Content-Type', 'image/jpeg')
          res.statusCode = 200
          res.end(data)
        }
      })
      return {
        code: 200
      }
    }
  }
] as MockMethod[]
