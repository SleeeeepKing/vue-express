<template>
  <div>
    <el-form
        :model="form"
    >
      <el-form-item>
        <span>Please enter your name</span>
        <el-input v-model="form.name" placeholder="Name"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>

import {ref} from "vue";

const form = ref({
  name: '',
});
</script>

<style scoped>

</style>