<script setup lang="ts">
const props = defineProps({
  btnClass : {required: true, type:String},
  btnTitle : {required: true, type:String},
})
</script>

<template>
  <button class="btn" :class="btnClass">{{btnTitle}}<slot></slot></button>
</template>

<style scoped>
.btn {
  border-radius: 0 !important;
  padding: 8px 24px !important;
}
.btn-main {
  background: #343434;
  color: #fff;
  transition-duration: 200ms;
}
.btn-main:hover{
  background: #000;
}
.btn-second {
  background: #ffffff;
  color: #343434;
  border: 1px solid #343434;
  transition-duration: 200ms;
}
.btn-second-danger {
  background: #ffffff;
  color: #ff3535;
  border: 1px solid #ff3535;
  transition-duration: 200ms;
}
.btn-main:active{
  color: #fff !important;
}
.btn-second:active {
  color: #343434 !important;
}
</style>