<script setup lang="ts">

import NavProfile from "~/components/ui/NavProfile.vue";

</script>

<template>
  <Navbar />
  <div class="container mt-5">
    <div class="row">
      <NavProfile />
      <div class="col-lg-9 offset-xl-1">
        <div class="page-content-wrapper">
          <slot />
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>

<style scoped>
.page-content-wrapper{
  padding: 24px;
  box-shadow:0 0 5px 0 rgba(0, 0, 0, .1) ;
}
</style>