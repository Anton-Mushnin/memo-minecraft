<script setup lang="ts">
import { useRoundStore } from '@/stores/roundStore';
import { watch, ref } from 'vue';




const errorsStr = ref('');

const roundStore = useRoundStore();

watch(() => roundStore.round.errors,  
(errors) => {
  console.log(errors);
  errorsStr.value = `${errors ? errors : 'no'} error${errors === 1 ? '' : 's'}${errors ? '' : '!'}`
})

</script>

<template>
  <div class="result">
    {{roundStore.round.errorsStr}}
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
