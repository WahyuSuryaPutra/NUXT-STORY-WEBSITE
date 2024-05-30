<script setup lang="ts">
const props = defineProps({
  contentImage : {required: true, type:String},
  imageDescription : {required: true, type:String},
  titleStory : {required: true, type:String},
  contentStory : {required: true, type:String},
  authorStory : {required: true, type:String},
  dateStory : {required: true, type:String},
  categoryStory : {required: true, type:String},
  idStory : {required: true, type:Number},
})

</script>

<template>
  <div class="col">
    <NuxtLink :to="{path: `/story/${props.idStory}`}" class="link-story-wrapper">
      <div class="card-story card h-100">
        <img :src="props.contentImage" alt="" class="card-img-top w-100 card-story-img">
        <div class="card-body">
          <h2 class="fs-5 story-title">{{props.titleStory}}</h2>
          <p class="story-content">{{props.contentStory}}</p>
          <p class="mt-1 small-text-story">{{props.authorStory}}</p>
          <p class="mt-2 small-text-story">{{props.dateStory}}</p>
          <div class="mt-3 p-1 bg-secondary small-text-story rounded category-wrapper">
            {{props.categoryStory}}
          </div>
        </div>
      </div>
    </NuxtLink>
  </div>
</template>

<style scoped>
.card-story {
  text-decoration: none !important;
}
.link-story-wrapper{
  text-decoration: none;
}
.story-content, .story-title{
  display: -webkit-box;
  line-height: 1.4;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
.small-text-story {
  font-size: 14px;
}
.card-story-img {
  aspect-ratio: 16/9;
  object-fit: cover;
}
.category-wrapper {
  width: fit-content;
  color: white;
}
</style>