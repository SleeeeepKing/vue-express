<template>
  <div>
    <el-tag>User:<el-tag>100</el-tag></el-tag>
    <el-button type="primary" style="float: right" @click="quit"
      >Quit</el-button
    >
  </div>
</template>

<script lang="ts" setup>
  import { defineEmits } from 'vue';

  const emits = defineEmits(['closeGame']);
  const quit = () => {
    emits('closeGame');
  };
</script>

<style scoped></style>
