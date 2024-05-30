// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  devtools: { enabled: true },
  css: ['@/assets/main.css', 'bootstrap/dist/css/bootstrap.min.css','@fortawesome/fontawesome-svg-core/styles.css'],
  app:{
    head:{
      script:[{
        src:"https://kit.fontawesome.com/f1a55980af.js",
        crossorigin:"anonymous",
      }]
    }
  },

  modules: [
    '@pinia/nuxt',
    '@vee-validate/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    // 'cookie-universal-nuxt',
      // '@nuxtjs/axios',
  ],
  veeValidate: {
    autoImports: true,
    componentNames: {
      Form: 'VeeForm',
      Field: 'VeeField',
      FieldArray: 'VeeFieldArray',
      ErrorMessage: 'VeeErrorMessage',
    },
  },
})
