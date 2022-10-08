<template>
  <div>
    <el-form :model="form" @submit.prevent>
      <el-form-item :label="'Please enter your name'">
        <el-input v-model="form.username" placeholder="Name"></el-input>
      </el-form-item>
      <el-form-item v-show="false" :label="'Please enter your password'">
        <el-input
          v-model="form.password"
          placeholder="Password"
          type="password"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submit">Submit</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
  import { ref, defineEmits } from 'vue';
  import { addUser } from '@/api/GuessGame';

  const emits = defineEmits(['openGame']);

  const form = ref({
    username: '',
    password: '123',
  });

  const submit = async () => {
    const res = await addUser(form.value);
    if (res.data.Flag === 0) {
      emits('openGame');
    } else {
      alert(res.data.Msg);
    }
  };
</script>

<style scoped></style>
