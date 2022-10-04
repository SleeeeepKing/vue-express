<template>
  <div class="common-layout">
    <el-container>
      <el-header><top-bar style="padding-left: 40%"></top-bar></el-header>
      <el-main><app></app></el-main>
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