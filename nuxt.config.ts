// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  css: ["@/assets/css/main.css"],
  modules: [
      "@vueuse/nuxt",
      "@formkit/nuxt",
      '@pinia/nuxt',
      '@vite-pwa/nuxt'
  ],
  pwa: {
    registerType: 'autoUpdate',
    manifest: {
      name: 'Subur Jaya Grup Backend PWA',
      short_name: 'SJG_PWA',
      theme_color: '#ffffff',
      icons: [
        {
          src: 'icon/SJ_PWA_192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: 'icon/SJ_PWA_512.png',
          sizes: '512x512',
          type: 'image/png',
        },
        
      ],
    },
    installPrompt: true,
    periodicSyncForUpdates: 20,
    devOptions: {
      enabled: true,
      type: 'module',
    },
  },
  pinia: {
    autoImports: ['defineStore', 'acceptHMRUpdate'],
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  runtimeConfig: {
    // The private keys which are only available within server-side
    // Keys within public, will be also exposed to the client-side
    public: {
      //Firebase
      apiKey: process.env.FIRE_API_KEY,
      authDomain: process.env.FIRE_AUTHDOMAIN,
      databaseURL: process.env.FIRE_URL,
      projectId: process.env.FIRE_PROJECTID,
      storageBucket: process.env.FIRE_STORAGE,
      messagingSenderId: process.env.FIRE_MESSAGING,
      appId: process.env.FIRE_APPID,
      //woocommerce
      kiosURL: process.env.KIOS_URL,
      apiKiosBasic: process.env.KIOS_BASIC_CK_CS_AUTH,
      
      //Meilisearch
      meiURL: process.env.MEIURL,
      meiSearchKey: process.env.MEISEARCHKEY,
      meiAdminKey: process.env.MEIADMINKEY,
      //DAPUR-PATH
      dapurURL: process.env.DO_EXPRESS_URL,
    
      


    },
  },
});
