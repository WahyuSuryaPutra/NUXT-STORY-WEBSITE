<script setup lang="ts">

import BaseButton from "~/components/ui/BaseButton.vue";
const stories = storyStore()
const keyword = ref('')
const search = () => {
  stories.$state.keyword = keyword.value
  stories.searchStory()
}
</script>

<template>
<div class="d-flex">
  <input type="text" class="form-control" placeholder="search story..." v-model="keyword">
  <BaseButton btn-title="" btn-class="btn-main" @click="search">
    <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </BaseButton>
</div>
</template>

<style scoped>

</style>