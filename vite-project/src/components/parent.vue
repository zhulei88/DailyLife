<template>
  <div>
    <Child :fromParent="fromParent" name="haha"  v-bind="$attrs"></Child>
  </div>
</template>
  
<script setup>
  import { ref } from '@vue/reactivity';
  import Child from './child.vue';
  const fromParent = ref('我从父组件来')
</script>

<style>
</style>
  