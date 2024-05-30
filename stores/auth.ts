import axios from "axios";
import {apiUrl} from "~/helpers/globalVariable";
import Cookies from "js-cookie";
import {useLocalStorage} from "@vueuse/core";

export const authStore = defineStore('useAuthStore', {
    state: () => ({
        loginOutput:{},
        isLogin: false
    }),
    persist:true,
    actions: {
        async login (loginData:any) {
            try {
                const {data} = await axios.post(apiUrl + 'auth/local', loginData,
                    {
                            headers: {'Content-Type': 'multipart/form-data'}
                        }
                )
                this.loginOutput = data.data
                this.isLogin = true
                Cookies.set('token', this.loginOutput.jwt)
                Cookies.set('user', this.loginOutput.user.name)
                Cookies.set('user', this.loginOutput.user.name)
            } catch (e) {
                console.log(e)
            }
        },
        async register (registerData:any) {
            try{
                const {data} = await axios.post(apiUrl + 'auth/local/register', registerData,
                    {
                        headers: {'Content-Type': 'multipart/form-data'}
                    })
                this.loginOutput = data.data
                this.isLogin = true
                console.log(data.data)
                Cookies.set('token', this.loginOutput.jwt)
            } catch (e) {
                console.error(e)
            }

        }
    }
})