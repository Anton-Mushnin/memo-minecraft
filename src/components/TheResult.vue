<script setup lang="ts">
import { useRoundStore } from '@/stores/roundStore';


const roundStore = useRoundStore();
</script>

<template>
  <div class="result">
    {{`${roundStore.round.errors} error${roundStore.round.errors === 1 ? '' : 's'}`}}
  </div>
</template>


<style scoped>
.result {
  width: 275px;
  background-color: rgba(255, 255, 255, 0.5);
  padding: 5px 50px;
  border: 1px solid green;
  margin-top: 15px;
  font-size: 18px;
  font-weight: 600;
}
</style>
