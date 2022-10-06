<template>
  <el-menu default-active="1" class="el-menu-vertical-demo" mode="horizontal">
    <router-link :to="{ name: 'guessGame' }">
      <el-menu-item :index="'guessGame'">
        <template #title>
          <span>Guess Game</span>
        </template>
      </el-menu-item>
    </router-link>
  </el-menu>
</template>

<script lang="ts" setup></script>

<style scoped></style>
