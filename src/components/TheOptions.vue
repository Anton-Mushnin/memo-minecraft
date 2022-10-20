<script setup lang="ts">
import { sets } from '@/model/Round';
import {ref} from 'vue';
import {useRoundStore} from '../stores/roundStore';

const roundStore = useRoundStore();

const size = ref(roundStore.round.options.numberOfCards);
const currenSet = ref(roundStore.round.options.setName);

const handle = (set: string) => {
  if (roundStore.round.started) { return }
  currenSet.value = set;
  roundStore.setSet(set)
}

</script>

<template>
  <div class="container">
    <div class="sets">
      <div 
        class="set" 
        :class="{ selected: set === currenSet}"
        v-for="set in Object.keys(sets)" 
        :key="set" 
        @click="handle(set)"
      >{{set}}
      </div>
    </div>
    <input 
      :disabled="roundStore.round.started" 
      @change="roundStore.setSize(size)" 
      min="4" 
      step="2" 
      :max="sets[currenSet as keyof typeof sets].cardsNumber" 
      v-model="size" 
      type="range" 
      class="slider"
    />
  </div>
</template>

<style scoped>

.container {
  margin-bottom: 15px;
  margin-top: 15px;
  background-color: rgba(255, 255, 255, 0.5);
  padding: 5px 50px;
  border: 1px solid green;
}

.selected {
  font-weight: 800;
}
input[type=range]
{
    -webkit-appearance: none;
    width: 175px;
    height: 8px;
    padding: 0 5px;
    background: rgba(62, 145, 135, 0.9);
    outline: none;

}

.sets {
  display: flex;
}

.set {
  cursor: pointer;
  margin-right: 10px;
}
.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 20px;
  height: 20px;
  /* border-radius: 50%; */
  background: rgba(100, 233, 217, 0.9);

  cursor: pointer;
}
</style>
