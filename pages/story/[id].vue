<script setup lang="ts">

import StoryPart from "~/components/ui/storyPart.vue";
import AuthorPart from "~/components/ui/authorPart.vue";
definePageMeta({
  validate: async (route) => {
    return typeof route.params.id === 'string' && /^\d+$/.test(route.params.id)
  },
  layout:'homelayouts'
})
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-8 col-12">
        <StoryPart />
      </div>
      <div class="offset-xl-1 col-xl-3 col-12 col-lg-5">
        <AuthorPart />
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>