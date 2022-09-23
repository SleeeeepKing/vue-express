<template>
  <h1>Hello World!</h1>
</template>

<script lang="ts" setup>
import axios from "axios";
import qs from 'qs'
import {onMounted} from "vue";

onMounted(() => {
  axios.post('/api/getStudents', qs.stringify({
    type: 'less',
    score: 99
  })).then(res => {
    console.log(res);
  }).catch(err=>{
    console.log(err)
  })
})
</script>

<style scoped>

</style>