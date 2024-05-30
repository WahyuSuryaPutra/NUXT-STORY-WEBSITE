<script setup lang="ts">

import Hero_section from "~/components/sections/hero_section.vue";
import Story_section from "~/components/sections/story_section.vue";
import {authStore} from "~/stores/auth";
definePageMeta({
  layout: 'homelayouts'
})
const auth = authStore()
</script>

<template>
  <header class="">
    <Hero_section />
  </header>
  <Story_section />
</template>

<style scoped>
header {
  height: 91dvh;
}
</style>