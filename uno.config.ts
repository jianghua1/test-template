// uno.config.ts
import { defineConfig } from 'unocss'
// import presetWind from '@unocss/preset-wind'
import { presetWind, presetIcons, transformerDirectives, transformerVariantGroup } from 'unocss'

export default defineConfig({
  //全局样式
  shortcuts: {
    'bg-image': 'w-full h-full bg-cover bg-no-repeat bg-center-top'
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
  transformers: [transformerDirectives(), transformerVariantGroup()]
})
