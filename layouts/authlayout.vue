<script setup lang="ts">
const route = useRoute()
console.log(route)
const routeName = route.name
</script>

<template>
  <div class="all-auth-layout">
    <navbar />
    <div class="auth-layout">
      <div class="card-login">
        <p class="fs-3 text-capitalize fw-medium">{{routeName}}</p>
        <slot />
      </div>
    </div>
    <Footer class="mt-5" />
  </div>

</template>

<style scoped>
.all-auth-layout{
  height: 100dvh !important;
}
.auth-layout{
  width: 100%;
  min-height: 75dvh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.card-login{
  width: 500px;
  border: 1px solid black;
  padding: 40px;
  border-radius: 2px;
}
</style>