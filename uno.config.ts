import {
  defineConfig, presetAttributify, presetIcons,
  presetTypography, presetUno, presetWebFonts,
  transformerDirectives, transformerVariantGroup
} from 'unocss'

export default defineConfig({
  rules: [
    //     ['m-1', { margin: '70px' }],
    //  ['m-1', { margin: '1px' }],
    [/^m-top-(\d+)$/, ([_, num]) => ({ marginTop: `${num}vh` })],
    [/^m-left-(\d+)$/, ([_, num]) => ({ marginLeft: `${num}vh` })],
    [/^m-right-(\d+)$/, ([_, num]) => ({ marginRight: `${num}vh` })],
    [/^m-bottom-(\d+)$/, ([_, num]) => ({ marginBottom: `${num}vh` })],
    [/^w-(\d+)$/, ([_, num]) => ({ width: `${num}vw` })],
    [/^h-(\d+)$/, ([_, num]) => ({ height: `${num}vh` })],
  ],
  shortcuts: [
    { logo: 'i-logos-solidjs-icon w-6em h-6em transform transition-800 hover:rotate-360' },
    // ...
  ],
  theme: {
    colors: {
      // ...
    }
  },
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons(),
    presetTypography(),
    presetWebFonts({
      fonts: {
        // ...
      },
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
})