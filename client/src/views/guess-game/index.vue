<template>
<h1>Welcome to Guess Game</h1>
</template>

<script lang="ts" setup>


import {onMounted} from "vue";
import {test} from "@/api/GuessGame";

onMounted(()=>{
  test()
})
</script>

<style scoped>

</style>