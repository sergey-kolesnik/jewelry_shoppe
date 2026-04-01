// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    '~/assets/scss/normalize.scss',
    '~/assets/scss/main.scss',
    'swiper/css',
    'swiper/css/navigation',
    'swiper/css/pagination',
  ],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/scss/index.scss" as *;',
        },
      },
    },
  },
  runtimeConfig: {
    public: {
      apiBaseUrl: import.meta.env.API_BASE_URL,
    },
  },

  modules: ['nuxt-swiper'],
})
