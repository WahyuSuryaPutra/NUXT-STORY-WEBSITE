<script setup lang="ts">



import BaseInput from "~/components/ui/BaseInput.vue";
import BaseButton from "~/components/ui/BaseButton.vue";
import auth from "~/middleware/auth";
import * as yup from 'yup'

definePageMeta({
  layout:'authlayout',
  middleware:'is-login'
})
const registerInput = reactive({
  name: '',
  username: '',
  email: '',
  password: ''
})
const tempPassword = reactive({
  password: '',
  confirmPassword: '',
})
const passwordInputType = ref('password')
const confirmPasswordInputType = ref('password')

const register = authStore()
const changePasswordType = (id:string) => {
  if (id === '1') {
    if(passwordInputType.value === 'password') {
      passwordInputType.value = 'text'
    } else {
      passwordInputType.value = 'password'
    }
  } else {
    if(confirmPasswordInputType.value === 'password') {
      confirmPasswordInputType.value = 'text'
    } else {
      confirmPasswordInputType.value = 'password'
    }
  }

}
const schema = yup.object({
  name: yup.string(),
  username: yup.string().min(3),
  email: yup.string().email(),
  password: yup.string().min(6)
})
const { defineField, errors, handleSubmit} = useForm({
  validationSchema: schema
})
const [name, nameAttrs] = defineField('name')
const [username, usernameAttrs] = defineField('username')
const [email, emailAttrs] = defineField('email')
const [password, passwordAttrs] = defineField('password')
  const signUp = handleSubmit(values => {
    register.register(values)
    return navigateTo('/user')
  })




</script>

<template>
  <form @submit.prevent="signUp" class="mt-4 d-flex flex-column gap-3">
    <div class="">
      <BaseInput v-bind="nameAttrs" v-model="name" input-name="name" input-placeholder="Enter name" input-title="Name" input-type="text" />
      <p class="text-danger">{{errors.name}}</p>
    </div>
    <div class="">
      <BaseInput v-bind="usernameAttrs"  v-model="username" input-name="username" input-placeholder="Enter username" input-title="Username" input-type="text" />
      <p class="text-danger">{{errors.username}}</p>
    </div>
    <div class="">
      <BaseInput v-bind="emailAttrs" v-model="email" input-name="email" input-placeholder="Enter email" input-title="Email" input-type="email" />
      <p class="text-danger">{{errors.email}}</p>
    </div>
    <div class="position-relative">
      <div class="position-absolute z-3 eye-icon">
        <svg @click="changePasswordType('1')" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
          <g id="SVGRepo_iconCarrier">
            <path d="M9 4.45962C9.91153 4.16968 10.9104 4 12 4C16.1819 4 19.028 6.49956 20.7251 8.70433C21.575 9.80853 22 10.3606 22 12C22 13.6394 21.575 14.1915 20.7251 15.2957C19.028 17.5004 16.1819 20 12 20C7.81811 20 4.97196 17.5004 3.27489 15.2957C2.42496 14.1915 2 13.6394 2 12C2 10.3606 2.42496 9.80853 3.27489 8.70433C3.75612 8.07914 4.32973 7.43025 5 6.82137" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path>
            <path d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z" stroke="#1C274C" stroke-width="1.5"></path>
          </g>
        </svg>
      </div>
      <div class="position-relative">
        <BaseInput v-bind="passwordAttrs" v-model="password" input-name="password" input-placeholder="Enter password" input-title="Password" :input-type="passwordInputType" />
        <p class="text-danger">{{errors.password}}</p>
      </div>
    </div>
    <div class="position-relative">
      <div class="position-absolute z-3 eye-icon">
        <svg @click="changePasswordType('2')" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
          <g id="SVGRepo_iconCarrier">
            <path d="M9 4.45962C9.91153 4.16968 10.9104 4 12 4C16.1819 4 19.028 6.49956 20.7251 8.70433C21.575 9.80853 22 10.3606 22 12C22 13.6394 21.575 14.1915 20.7251 15.2957C19.028 17.5004 16.1819 20 12 20C7.81811 20 4.97196 17.5004 3.27489 15.2957C2.42496 14.1915 2 13.6394 2 12C2 10.3606 2.42496 9.80853 3.27489 8.70433C3.75612 8.07914 4.32973 7.43025 5 6.82137" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path>
            <path d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z" stroke="#1C274C" stroke-width="1.5"></path>
          </g>
        </svg>
      </div>
      <div class="position-relative">
        <BaseInput v-model="tempPassword.confirmPassword" input-name="Confirm password" input-placeholder="Enter confirm password" input-title="Confirm Password" :input-type="confirmPasswordInputType" />
      </div>
    </div>
    <BaseButton type="submit" btn-title="Register" btn-class="btn-main w-100" />
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