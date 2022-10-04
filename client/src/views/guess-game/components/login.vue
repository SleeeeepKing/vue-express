<template>
  <div>
    <el-form
        :model="form"
    >
      <el-form-item
          :label="'Please enter your name'">
        <el-input v-model="form.username" placeholder="Name"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submit">Submit</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>

import {ref} from "vue";
import {addUser} from "@/api/GuessGame";

const form = ref({
  username: '',
});

const submit = async () => {
  console.log(form.value);
  await addUser(form.value);
};
</script>

<style scoped>

</style>