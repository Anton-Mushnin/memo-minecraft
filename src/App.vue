<script setup lang="ts">
import TheOptions from './components/TheOptions.vue';
import TheField from './components/TheField.vue';
import { useRoundStore } from './stores/roundStore';
import TheResult from './components/TheResult.vue';
import { onMounted, ref } from 'vue';
import { assetsPath } from './urls.config';

const roundStore = useRoundStore();

const backgroundImage = ref('');
onMounted(() => {
  backgroundImage.value = `url('${assetsPath + 'IMG_6622.JPG'}')`;
});

</script>

<template>
  <div class="app" :style="{backgroundImage}">
  <header>
    Memo-minecraft
  </header>

  <main>
    <div class="wrapper">

      <TheOptions />
      <button 
        :disabled="roundStore.round.started" 
        type="button" 
        @click="roundStore.round.start"
      >
      PLAY
      </button>
      <TheField />
      <TheResult v-if="!roundStore.round.started && roundStore.round.errors > -1"/>
    </div>
  </main>
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
  text-align: center;
}
button {
  background-color: rgba(100, 233, 217, 0.9);
  border-style: none;
  color: black;
  font-weight: 200;
  padding: 3px 20px;
  font-size: 24px;
  margin-bottom: 20px;
}

.app {
  /* background-image: url('src/assets/images/IMG_6622.JPG'); */
  width: 100%;
  height: 100%;
  background-position: center;
}

button:hover:enabled {
  background-color: rgba(45, 155, 142, 0.9);
  cursor: pointer;
}

button:disabled {
  color: gray;
  background-color: rgba(100, 233, 217, 0.3);
  visibility: hidden;

}
.wrapper {
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

header {
  font-size: 32px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
}


</style>
