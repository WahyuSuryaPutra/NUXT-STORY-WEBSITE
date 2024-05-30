<script setup lang="ts">
const props = defineProps({
  'inputTitle' : String,
  'inputName' : String,
  'inputPlaceholder' : String,
  'inputType' : String,
  'modelValue' : [String, Number],
})
</script>

<template>
  <div class="d-flex flex-column gap-1 w-100">
    <label :for="props.inputName">{{props.inputTitle}}</label>
    <input :name="props.inputName" :type="props.inputType" class="form-control" :placeholder="props.inputPlaceholder" :value="props.modelValue" @input="$emit('update:modelValue', $event.target.value)">
  </div>
</template>

<style scoped>

</style>