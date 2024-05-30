import app from "~/app.vue";
import Cookies from 'js-cookie'
import {token} from "~/helpers/globalVariable";
import {useLocalStorage} from "@vueuse/core";


export default defineNuxtRouteMiddleware((to, from) => {
    const auth = authStore()
    auth.isLogin = token.value !== undefined;
   if (!auth.isLogin) {
       return navigateTo('/login')
   }
})