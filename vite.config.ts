import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

import { VueRouterAutoImports } from 'unplugin-vue-router'

import VueRouter from 'unplugin-vue-router/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import Layouts from 'vite-plugin-vue-layouts'
import UnoCSS from 'unocss/vite'

import { VitePWA } from 'vite-plugin-pwa'

import { viteMockServe } from 'vite-plugin-mock'
import postcsspxtoviewport8plugin from 'postcss-px-to-viewport-8-plugin'

import Markdown from 'unplugin-vue-markdown/vite'
import MarkdownItAnchor from 'markdown-it-anchor'
import MarkdownItPrism from 'markdown-it-prism'

import { unheadComposablesImports } from 'unhead'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    VueRouter({
      extensions: ['.vue', '.md']
    }),
    vue({
      include: [/\.vue$/, /\.md$/],
      script: {
        // 开启defineModel配置
        defineModel: true
      }
    }),
    vueJsx(),
    // Vue3.3以后，不需要这些新的特性了
    // VueMacros.vite({
    //   plugins: {
    //     vue: vue(),
    //     vueJsx: vueJsx() // 如果需要
    //   }
    // }),
    UnoCSS(),
    Markdown({
      headEnabled: true,
      // default options passed to markdown-it
      // see: https://markdown-it.github.io/markdown-it/
      markdownItOptions: {
        html: true,
        linkify: true,
        typographer: true
      },
      // A function providing the Markdown It instance gets the ability to apply custom settings/plugins
      markdownItSetup(md) {
        // for example
        md.use(MarkdownItAnchor)
        md.use(MarkdownItPrism)
      },
      // Class names for the wrapper div
      wrapperClasses: 'markdown-body'
    }),
    AutoImport({
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/,
        /\.vue\?vue/, // .vue
        /\.md$/ // .md
      ],

      // global imports to register
      imports: [
        // presets
        'vue',
        // 'vue-router'
        VueRouterAutoImports,
        '@vueuse/core',
        'pinia',
        unheadComposablesImports[0]
      ]
    }),
    Components({
      directoryAsNamespace: true,
      collapseSamePrefixes: true,
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/]
    }),
    Layouts({
      layoutsDirs: 'src/layouts',
      defaultLayout: 'default'
    }),
    VitePWA({
      manifest: {
        name: 'Vite App',
        short_name: 'Vite App',
        theme_color: '#ffffff',
        icons: [
          {
            src: '/192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      },
      registerType: 'autoUpdate'
    }),
    viteMockServe({
      mockPath: 'mock',
      enable: false
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    postcss: {
      // plugins: [
      //   postcsspxtoviewport8plugin({
      //     // unitToConvert: 'px', //需要转换的单位
      //     viewportWidth: (file) => {
      //       let num = 1920
      //       if (file.indexOf('m_') !== -1) {
      //         num = 375
      //       }
      //       return num
      //     },
      //     unitPrecision: 5, // 单位转换后保留的精度
      //     propList: ['*'], // 能转化为vw的属性列表
      //     viewportUnit: 'vw', // 希望使用的视口单位
      //     fontViewportUnit: 'vw', // 字体使用的视口单位
      //     selectorBlackList: [], // 需要忽略的CSS选择器，不会转为视口单位，使用原有的px等单位。
      //     minPixelValue: 1, // 设置最小的转换数值，如果为1的话，只有大于1的值会被转换
      //     mediaQuery: true, // 媒体查询里的单位是否需要转换单位
      //     replace: true, //  是否直接更换属性值，而不添加备用属性
      //     exclude: [/node_modules\/ant-design-vue/], // 忽略某些文件夹下的文件或特定文件，例如 'node_modules' 下的文件
      //     include: [], // 如果设置了include，那将只有匹配到的文件才会被转换
      //     landscape: false, // 是否添加根据 landscapeWidth 生成的媒体查询条件 @media (orientation: landscape)
      //     landscapeUnit: 'vw', // 横屏时使用的单位
      //     landscapeWidth: 1024 // 横屏时使用的视口宽度
      //   })
      // ]
    }
  },
  build: {
    // ...
    rollupOptions: {
      external: ['512x512.png']
    }
  }
})
