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
  <div class="sets">
    <div v-for="set in Object.keys(sets)" :key="set" @click="handle(set)">{{set}}</div>
  </div>
  <input :disabled="roundStore.round.started" @change="roundStore.setSize(size)" min="4" step="2" :max="sets[currenSet as keyof typeof sets].cardsNumber" v-model="size" type="range" />
  <div>{{currenSet}}  {{size}}</div>
</template>

<style scoped>

input[type=range]
{
    width: 175px;
    height: 8px;
    padding: 0 5px;
}
</style>
