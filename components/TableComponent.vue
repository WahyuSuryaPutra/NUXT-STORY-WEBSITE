<script setup lang="ts">
const props = defineProps({
  thead_data: {required:true}
})
</script>

<template>
  <table class="table">
    <thead>
    <tr>
      <th v-for="(item, index) in props.thead_data">{{item}}</th>
    </tr>
    </thead>
    <tbody>
      <slot></slot>
    </tbody>
  </table>
</template>

<style scoped>

</style>