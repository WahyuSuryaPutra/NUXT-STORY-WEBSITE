<script setup lang="ts">

import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
</script>

<template>
  <div class="col-lg-2 nav-profile-wrapper">
    <div class="nav-profile">
      <NuxtLink to="/user" class="d-flex gap-2 nav-profile-link align-items-center fw-medium">
        <i class="fa-regular fa-user fs-6"></i>
        Profile
      </NuxtLink>
    </div>
    <div class="nav-profile">
      <NuxtLink to="/user/story" class="d-flex gap-2 nav-profile-link align-items-center nav-profile fw-medium">
        <i class="fa-regular fa-file-lines"></i>
        Story
      </NuxtLink>
    </div>
    <div class="nav-profile">
      <NuxtLink to="/user/bookmark" class="d-flex gap-2 nav-profile-link align-items-center nav-profile fw-medium">
        <i class="fa-regular fa-bookmark"></i>
        Bookmark
      </NuxtLink>
    </div>

  </div>
</template>

<style scoped>
.nav-profile-wrapper{
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, .1);
  padding: 0;
}
.nav-profile:last-child .nav-profile-link{
  border-bottom: 0;
}

.nav-profile-link{
  border-bottom: 1px solid #eee;
  padding: 10px;
  text-decoration:none;
  color: #8f8f8f;
  font-size: 14px;
  transition-duration: 200ms;
}
.nav-profile:hover{
  color: black;
  background: #eee;
}
.nav-profile:hover .nav-profile-link{
  color: black;
}
.nav-profile-link:hover .nav-profile-link svg g{
  fill: black !important;
}
</style>