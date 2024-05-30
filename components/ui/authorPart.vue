<script setup lang="ts">
import {storyStore} from "~/stores/story";
import {imageUrl} from "~/helpers/globalVariable";

const stories = storyStore()
const route = useRoute()
const routeId:String = route.params.id
stories.getStoryById(routeId)
</script>

<template>
  <div class="sticky-top">
    <div class="card">
      <div class="card-body">
        <div class="d-flex flex-column align-items-center w-100">
          <p class="text-center">Author</p>
          <div class="mt-4">
            <img v-if="stories.story.author" :src="imageUrl + stories.story.author.profile_picture.url" alt="" class="author-img">
            <p class="fs-6 fw-medium mt-2 text-center" v-if="stories.story.author">{{stories.story.author.name}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.author-img{
  width: 50px;
  height: 50px;
  aspect-ratio: 1/1;
  border-radius: 50%;
  object-fit: cover;
}
.sticky-top{
  top: 7rem !important;
}
</style>