<template>
  <div class="common-layout">
    <el-container>
      <el-header style="padding-left: 0"><top-bar></top-bar></el-header>
      <el-container>
        <el-aside width="200px"><side-bar></side-bar></el-aside>
        <el-main><app></app></el-main>
      </el-container>
    </el-container>
  </div>
</template>


<script lang="ts" setup>

import TopBar from "@/views/dashboard/components/TopBar.vue";
import SideBar from "@/views/dashboard/components/SideBar.vue";
import App from "@/App.vue";
</script>

<style scoped>
</style>