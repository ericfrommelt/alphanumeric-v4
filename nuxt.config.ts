export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      title: 'Alphanumeric',
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: '' },
        { name: 'format-detection', content: 'telephone=no' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'preconnect', type: 'text/css', href: 'https://cdn.fonts.net'},
        { rel: 'stylesheet', type: 'text/css', href: 'https://cdn.fonts.net/kit/8a5fe159-d1d4-4273-a8f2-0246bada0942/8a5fe159-d1d4-4273-a8f2-0246bada0942.css'}
      ]
    },
  },
  build: {},
  css: ['~/assets/main.css'],
  gsap: {
    extraEases: {
      custom: true,
    },
    extraPlugins: {
      scrollTo: true,
      scrollTrigger: true,
    },
    clubPlugins: {
      gsDevTools: true,
      scrambleText: true,
      splitText: true,
    },
  },
  modules: ['@hypernym/nuxt-gsap'],
  runtimeConfig: {
    gsapToken: '47fab126-5492-4bd7-8169-4fc214e3f19a',
  },
});
