import app from "~/app.vue";
import Cookies from 'js-cookie'

export default defineNuxtRouteMiddleware((to, from) => {
    const auth = authStore()
    const token = ref(Cookies.get('token'))
    if (token.value !==undefined) {
        auth.isLogin = true
    }
    if (auth.isLogin && to.path === "/login") {
        return navigateTo('/')
    }
    if (auth.isLogin && to.path === "/register") {
        return navigateTo('/')
    }
})