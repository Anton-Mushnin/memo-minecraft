<script setup lang="ts">
import { sets } from '@/model/Round';
import {ref} from 'vue';
import {useRoundStore} from '../stores/roundStore';

const roundStore = useRoundStore();

const sizeIndex = ref(roundStore.round.options.numberOfCards);
const currenSet = ref(roundStore.round.options.setName);
const sizes = [4, 6, 8, 12, 16, 24];

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
      @change="roundStore.setSize(sizes[sizeIndex])" 
      min="0" 
      step="1" 
      :max="sizes.length - 1" 
      v-model="sizeIndex" 
      type="range" 
      class="slider"
    />
  </div>
</template>

<style scoped>

.container {
  margin-bottom: 15px;
  margin-top: 10px;
  background-color: rgba(255, 255, 255, 0.7);
  padding: 5px 10px 15px 10px;
  border: 1px solid green;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.selected {
  font-weight: 800;
}
input[type=range]
{
    -webkit-appearance: none;
    appearance: none;
    width: 255px;
    height: 8px;
    padding: 0 5px;
    background: rgba(62, 145, 135, 0.9);
    outline: none;

}


.sets {
  display: flex;
  color: rgba(31, 71, 66, 0.9);
  letter-spacing: 0.1em;
  font-family: 'Minecraftia', sans-serif;
  margin-bottom: 10px;
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
  background: rgba(100, 233, 217, 0.9);
  cursor: pointer;
}
</style>
