<script setup lang="ts">
import { useRoundStore } from '@/stores/roundStore';
import { watch, reactive } from 'vue';

const roundStore = useRoundStore();

watch(() => roundStore.round.options.numberOfCards, 
(size) => {
  styleObject.width = `${size / maxDivider(size) * 120 + 20}px`;
  console.log(size, maxDivider(size), styleObject.width);
   
})

const maxDivider = (n: number) => {
  let maxD = Math.floor(Math.sqrt(n));
  while(maxD > 1) {
    if (n % maxD === 0) { return maxD }
    maxD -= 1;
  }
  return 1;
}

let styleObject = reactive({
  width: `50%`,
})

</script>


<template>
  <div class="container" :style="styleObject">
    <div 
      class="card" 
      v-for="(card, index) in roundStore.round.cards" 
      :key='index' 
      @click="roundStore.round.click(index)"
    >
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
