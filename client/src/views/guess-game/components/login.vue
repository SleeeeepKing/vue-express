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

import {ref, defineEmits} from "vue";
import {addUser} from "@/api/GuessGame";

const emits = defineEmits(['openGame']);

const form = ref({
  username: '',
});

const submit = async () => {
  let flag = await addUser(form.value);
  if (flag.data.Flag === 0) {
    emits('openGame');
  } else {
    console.log(flag)
    alert('Username already exists');
  }
};
</script>

<style scoped>

</style>