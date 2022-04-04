<template>
  <div>{{fromParent}}{{name}}{{job}}</div>
</template>
  
<script setup>
  defineProps({
    fromParent:{
      type:String,
      default:'11'
    },
    name:{
      type:String,
      default:'11'
    },
    job:{
      type:String,
      default:'11'
    }
  })
</script>

<style>
</style>
  