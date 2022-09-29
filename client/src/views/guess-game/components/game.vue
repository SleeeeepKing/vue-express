<template>
  <div>
    <el-input
        v-model="inputStr"
        @change="changeHandle"
        :maxlength="ansStr.length"
    ></el-input>
    <el-divider></el-divider>
    <el-space direction="vertical" :size="20">
      <el-row v-for="items in historyStr"
      >
        <div v-for="item in items">
          <el-space :size="30">
            <el-col>
              <el-tag size="large" type="danger" v-if="item === '-'" style="min-width: 35px">{{ item }}</el-tag>
              <el-tag v-else-if="item.length === 2" size="large" type="warning" style="min-width: 35px">{{ item[0] }}</el-tag>
              <el-tag v-else size="large" type="success" style="min-width: 35px">{{ item }}</el-tag>
            </el-col>
          </el-space>
        </div>
      </el-row>
    </el-space>

  </div>
</template>

<script lang="ts" setup>
import {onMounted, ref} from "vue";
import { getAnswer, checkAnswer} from '@/api/GuessGame'
const inputStr = ref("");
const ansStr = ref('');
const historyStr = ref([])
const ansArr = ref([])


function init(){
  historyStr.value = []
  for (let i =0; i < ansStr.value.length; i++){
    ansArr.value.push(ansStr.value.charAt(i))
  }
  historyStr.value.push(ansArr.value[0]+ansStr.value.substring(1).replace(/./g,'-'))
}


onMounted(async ()=>{
  const { data } = await getAnswer()
  ansStr.value = data
  init()
})

async function changeHandle(){
  const { data } = await checkAnswer({answer: inputStr.value})
  if (data.Flag !== 2){
    alert(data.Msg)
    if (data.Flag === 0){
      init()
    }
  } else {
    historyStr.value.push(data.resArr)
  }
}
</script>

<style scoped>

</style>