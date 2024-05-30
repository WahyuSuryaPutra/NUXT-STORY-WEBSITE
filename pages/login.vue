<script setup lang="ts">
import BaseInput from "~/components/ui/BaseInput.vue";
import BaseButton from "~/components/ui/BaseButton.vue";
import Cookies from "js-cookie";
definePageMeta({
  layout:'authlayout',
  middleware:'is-login'
})
const inputType = ref('password')
const loginInput = reactive({
  identifier: '',
  password: ''
})
const login = authStore()
console.log(login.$state.isLogin)

const signIn = async () => {
  try {
    const res = await login.login(loginInput)
    return navigateTo('/user')
  } catch (error) {
    console.log(error)
  }
}
const changeInputType = () => {
  if(inputType.value === 'password') {
    inputType.value = 'text'
  } else {
    inputType.value = 'password'
  }
}

// AUTH\\

const auth = authStore()
</script>
<template>
  <form @submit.prevent="signIn" class="mt-4 d-flex flex-column gap-3">
    <BaseInput v-model="loginInput.identifier" input-name="email/username" input-placeholder="Enter email/username" input-title="Email/Username" input-type="text" />
    <div class="position-relative">
      <div class="position-absolute z-3 eye-icon">
        <svg @click="changeInputType" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
          <g id="SVGRepo_iconCarrier">
            <path d="M9 4.45962C9.91153 4.16968 10.9104 4 12 4C16.1819 4 19.028 6.49956 20.7251 8.70433C21.575 9.80853 22 10.3606 22 12C22 13.6394 21.575 14.1915 20.7251 15.2957C19.028 17.5004 16.1819 20 12 20C7.81811 20 4.97196 17.5004 3.27489 15.2957C2.42496 14.1915 2 13.6394 2 12C2 10.3606 2.42496 9.80853 3.27489 8.70433C3.75612 8.07914 4.32973 7.43025 5 6.82137" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path>
            <path d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z" stroke="#1C274C" stroke-width="1.5"></path>
          </g>
        </svg>
      </div>
      <div class="position-relative">
        <BaseInput v-model="loginInput.password" input-name="password" input-placeholder="Enter password" input-title="Password" :input-type="inputType" />
      </div>
    </div>
    <BaseButton type="submit" btn-title="Login" btn-class="btn-main w-100" />
  </form>
  <p class="mt-4 text-center">
    don't have an account? <NuxtLink class="text-decoration-none text-black fw-medium" to="register">Register</NuxtLink>
  </p>
</template>

<style scoped>
.eye-icon{
  top: 50%;
  right: 10px;
}
</style>