import app from "~/app.vue";
import Cookies from "js-cookie";

export const apiUrl = 'https://storytime-api.strapi.timedoor-js.web.id/api/'
export const imageUrl = 'https://storytime-api.strapi.timedoor-js.web.id'
export const token = ref(Cookies.get('token'))
export const userLogin = ref(Cookies.get('user'))
// export const isLogin = localStorage.getItem('useAuthStore')
