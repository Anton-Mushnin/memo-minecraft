<script setup lang="ts">
import { useRoundStore } from '@/stores/roundStore';

const roundStore = useRoundStore();

</script>


<template>
  <div class="container">
    <div class="card" v-for="(card, index) in roundStore.round.cards" :key='index'>
      <img :src="`src/assets/images/${card.display}`" />    
    </div>
  </div>
</template>

<style scoped>

.container {
  display: inline-flex;
  flex-wrap: wrap;
  border: 1px solid green;
  width: fit-content; 
  justify-content: center;
}

img {
  width: 100px;
  height: 100px;
}

  .card {
    width: 120px;
    height: 120px;
    padding: 10px;
  }

</style>
