<template>
  <div>
    <div style="margin-left: 20%; margin-right: 40%;">
      <h2>Welcome to Guess Game</h2>
      <login v-if="!showGame" @openGame="openGame"></login>
      <score v-if="showGame" @closeGame="closeGame"></score>
      <game v-if="showGame"></game>
    </div>
  </div>
</template>
<script lang="ts" setup>
import Game from "@/views/guess-game/components/game.vue";
import {ref} from "vue";
import Login from "@/views/guess-game/components/login.vue";
import Score from "@/views/guess-game/components/score.vue";

const showGame = ref(false);
function openGame() {
  showGame.value = true;
}

function closeGame() {
  showGame.value = false;
}
</script>

<style scoped>

</style>