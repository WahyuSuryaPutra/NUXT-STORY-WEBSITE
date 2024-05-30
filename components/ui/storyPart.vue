<script setup lang="js">
import {storyStore} from "~/stores/story";
import {imageUrl} from "~/helpers/globalVariable";
import {formattedDate} from "../../helpers/DateFormat.ts";

const stories = storyStore()
const route = useRoute()
const routeId = route.params.id
stories.getStoryById(routeId)
</script>

<template>
  <div class="">
    <h4 class="fs-3">{{stories.story.title}}</h4>
    <p>{{formattedDate(stories.story.createdAt)}}</p>
  </div>
  <div class="">
<!--    <img :src="imageUrl + stories.story.cover_image.url" :alt="stories.story.cover_image.name" class="img-detail-story">-->
    <img v-if="stories.story.cover_image" :src="imageUrl+stories.story.cover_image.url" :alt="stories.story.cover_image.name" class="img-detail-story" />
   <div v-html="stories.story.content" class="mt-5"></div>
  </div>

</template>

<style scoped>
.img-detail-story{
  width: 100%;
  aspect-ratio: 16/9;
  object-fit: cover;
  margin-top: 20px;
  border-radius: 4px;
}

</style>