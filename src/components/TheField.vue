<script setup lang="ts">
import { useRoundStore } from '@/stores/roundStore';
import { watch, reactive } from 'vue';

const roundStore = useRoundStore();

watch(() => roundStore.round.options.numberOfCards, 
(size) => {
  styleObject.width = `${size / maxDivider(size) * 120 + 40}px`;
   
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
  width: `${roundStore.round.options.numberOfCards / maxDivider(roundStore.round.options.numberOfCards) * 120 + 40}px`,
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
      <img 
        :class="{
          active: !roundStore.round.cards[index].open && roundStore.round.started,
          solved: roundStore.round.cards[index].solved,
          }"
        :src="`src/assets/images/${card.display}`" 
      />    
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
  background-color: rgba(255, 255, 255, 0.5);
}

img {
  width: 100px;
  height: 100px;
  border: 1px solid black;
  opacity: 0.9;
}

.active:hover {
  scale: 1.05;
}
.solved {
  border: 5px solid rgb(100, 233, 217);
}

  .card {
    width: 120px;
    height: 120px;
    padding: 10px;
    /* background-color: white; */
  }


</style>
