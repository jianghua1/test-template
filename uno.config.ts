// uno.config.ts
import { defineConfig } from 'unocss'
// import presetWind from '@unocss/preset-wind'
import { presetWind, presetIcons, transformerDirectives, transformerVariantGroup } from 'unocss'

export default defineConfig({
  //全局样式
  shortcuts: {
    'bg-image': 'w-full h-full bg-cover bg-no-repeat bg-center-top',
    btn: 'px-4 py-2 bg-sky-400 text-white hover:bg-sky-300',
    'btn-plain': 'px-4 py-2 border border-sky-400 text-sky-400 hover:(bg-gray-300 text-sky-500)'
  },
  presets: [
    presetWind(),
    presetIcons({
      prefix: 'i-',
      extraProperties: {
        display: 'inline-block'
      }
    })
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
  //这里的图标是从接口动态加载出来的class
  safelist: ['i-mdi:web']
})
