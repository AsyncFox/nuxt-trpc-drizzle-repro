import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
} from 'unocss'

export default defineConfig({
  shortcuts: {
    'maintitle': 'text-2rem font-bold font-noto mb-0',
    'subtitle': 'mt-1 pl-0.5 font-zodiak font-400 uppercase',

    // border
    'border-base': 'border-$c-border',
    'border-dark': 'border-$c-border-dark',
    'border-strong': 'border-$c-text-base',
    'border-bg-base': 'border-$c-bg-base',
    'border-primary-light': 'border-$c-primary-light',

    // background
    'bg-base': 'bg-$c-bg-base',
    'bg-border': 'bg-$c-border',
    'bg-active': 'bg-$c-bg-active',
    'bg-secondary': 'bg-$c-text-secondary',
    'bg-secondary-light': 'bg-$c-text-secondary-light',
    'bg-primary-light': 'bg-$c-primary-light',
    'bg-primary-fade': 'bg-$c-primary-fade',
    'bg-card': 'bg-$c-bg-card',
    'bg-code': 'bg-$c-bg-code',
    'bg-dm': 'bg-$c-bg-dm',
    'bg-inverted': 'bg-$c-text-base',

    // text colors
    'text-base': 'text-$c-text-base',
    'text-code': 'text-$c-text-code',
    'text-inverted': 'text-$c-bg-base',
    'text-secondary': 'text-$c-text-secondary',
    'text-secondary-light': 'text-$c-text-secondary-light',

    // buttons
    'btn-base': 'cursor-pointer disabled:pointer-events-none disabled:bg-$c-bg-btn-disabled disabled:text-$c-text-btn-disabled',
    // 'btn-solid': 'btn-base px-4 py-2 rounded text-$c-text-btn bg-$c-primary hover:bg-$c-primary-active',
    // 'btn-outline': 'btn-base px-4 py-2 rounded text-$c-primary border border-$c-primary hover:bg-$c-primary hover:text-inverted',
    // 'btn-text': 'btn-base px-4 py-2 text-$c-primary hover:text-$c-primary-active',
    'btn-action-icon': 'btn-base hover:bg-active rounded-2 h9 w9 flex items-center justify-center disabled:bg-transparent disabled:text-$c-text-secondary border-1 bg-white',
    // 'btn-danger': 'btn-base px-4 py-2 rounded text-white bg-$c-danger hover:bg-$c-danger-active',
    'btn-solid': 'cursor-pointer bg-base font-bold text-4 px-4 py-2 rounded-2 text-base border-none',
    'btn-inverted': 'btn-base font-bold text-lg rounded-2 px-4 py-2 border-none bg-inverted text-inverted',
  },
  transformers: [transformerDirectives()],
  theme: {
    breakpoints: {
      xs: '480px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    colors: {
      primary: {
        DEFAULT: 'var(--c-primary)',
        active: 'var(--c-primary-active)',
      },
      danger: {
        DEFAULT: 'var(--c-danger)',
        active: 'var(--c-danger-active)',
      },
    },
  },
  presets: [
    presetUno({ attributifyPseudo: true }),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      extraProperties: {
        'color': 'inherit',
        // Avoid crushing of icons in crowded situations
        'min-width': '1.2em',
      },
    }),
    presetTypography(),
    presetWebFonts({
      provider: 'google', // default provider
      fonts: {
        noto: [
          { name: 'Noto Sans SC', weights: ['400', '700'] },
          { name: 'sans-serif', provider: 'none' },
        ],
        zodiak: [
          { name: 'Zodiak', provider: 'fontshare' },
          { name: 'serif', provider: 'none' },
        ],
      },
    }),
  ],
})
