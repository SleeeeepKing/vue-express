<template>
  <el-menu
      default-active="1"
      class="el-menu-vertical-demo"
      mode="horizontal"
  >
    <router-link :to="{ name: 'guessGame' }">
      <el-menu-item
          :index="'guessGame'"
      >
        <span slot="title">Guess Game</span>
      </el-menu-item>
    </router-link>
  </el-menu></template>

<script lang="ts" setup>

</script>

<style scoped>

</style>