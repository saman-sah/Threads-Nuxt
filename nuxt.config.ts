// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // devtools: { enabled: true },
  css: ['~/assets/css/main.sass'],
  runtimeConfig: {
    public: {
      backetUrl: process.env.BUCKET_URL
    }
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    'nuxt-icon',
    '@nuxtjs/supabase',
    '@pinia/nuxt',
    '@vite-pwa/nuxt'
  ],
  pwa: {
    manifest: {
      name: "Threads Clone",
      short_name: "Threads Clone",
      description: "This is a Threads Clone",
      theme_color: "#000000",
      icons: [
        {
          src: "pwa-192x192.png",
          sizes: "192x192",
          type: "image/png",
        },
        {
          src: "pwa-512x512.png",
          sizes: "512x512",
          type: "image/png",
        },
      ],
    },
    devOptions: {
      enabled: true,
      type: "module",
    },
  },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
    }
  }
})
