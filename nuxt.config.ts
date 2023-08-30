// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/image',
    '@unocss/nuxt',
    '@vueuse/nuxt',
  ],
  devtools: { enabled: true },
  image: {
    domains: ['misc.joincosmo.link'],
    provider: 'none',
  },
  build: {
    transpile: ['motion/vue', '@motionone/vue', 'trpc-nuxt'],
  },
  css: ['~/styles/theme.css', '~/styles/global.css'],
  postcss: {
    plugins: {
      'postcss-nested': {},
    },
  },
  nitro: {
    preset: 'cloudflare-pages',
  },
})
