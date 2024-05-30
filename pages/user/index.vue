<script setup lang="ts">
import BaseButton from "~/components/ui/BaseButton.vue";

definePageMeta({
  layout:'userlayouts',
  middleware:'auth'
})
</script>

<template>
  <div class="page-wrapper">
    <div class="d-flex justify-content-between">
      <h4 class="fs-3 fw-semibold">My Profile</h4>
      <BaseButton btn-title="" btn-class="btn-second">
        <i class="fa-regular fa-pen-to-square"></i>
        Edit Profile
      </BaseButton>
    </div>
  </div>
</template>

<style scoped>

</style>