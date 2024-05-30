import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.min'

export default defineNuxtPlugin(nuxt => {
    nuxt.provide('bs', bootstrap)
})