<script setup lang="ts">
import {storyStore} from "~/stores/story";

const functionSelector = ref('tes')
const changeSelector = (e:any) => {
  functionSelector.value = e.target.value
  console.log('babi')
  console.log(functionSelector.value)
  filter()
}

const stories = storyStore()
const filter = () => {
  if (functionSelector.value !== '') {
    console.log(functionSelector.value)
  }
  if(functionSelector.value === 'new') {
    stories.sortNewestData()
  } else if (functionSelector.value === 'asc') {
    stories.sortAsc()
  } else if (functionSelector.value === 'desc') {
    stories.sortDesc()
  }
}
</script>

<template>
  <select class="form-select" v-model="functionSelector" @change="changeSelector">
    <option value="tes" disabled>Sort</option>
    <option value="new">Newest</option>
    <option value="asc">A-Z</option>
    <option value="desc">Z-A</option>
  </select>
</template>

<style scoped>

</style>