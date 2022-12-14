<script setup lang="ts">
import { useRoundStore } from '@/stores/roundStore';
import { assetsPath } from '@/urls.config';
import { watch, reactive, onMounted } from 'vue';
import {VueFlip} from 'vue-flip';

const roundStore = useRoundStore();

function dimensions () {
  const size = roundStore.round.options.numberOfCards;
  const shortSide = maxDivider(size);
  if (window.innerHeight > window.innerWidth) {
    return [shortSide, size / shortSide];
  }
  return [size / shortSide, shortSide];
}

const maxDivider = (n: number) => {
  let maxD = Math.floor(Math.sqrt(n));
  while(maxD > 1) {
    if (n % maxD === 0) { return maxD }
    maxD -= 1;
  }
  return 1;
}

function calcSize() {
  const maxHeight = screen.availHeight * 0.4;
  const maxWidth = screen.availWidth * 0.8;
  const [cols, rows] = dimensions();
  const imgHeight = maxHeight / rows;
  const imgWidth = maxWidth / cols;
  const imgSize = Math.max(Math.min(imgHeight, imgWidth, 100), 47);
  styleObject.width = `${cols * (imgSize + 10) + 16}px`;
  if (window.innerHeight < 750 && imgSize < 50) {
    styleObject.width = `${window.innerWidth - 10}px`
  }
  imgStyleObject.height= `${imgSize}px`;
  imgStyleObject.width= `${imgSize}px`;
}

window.addEventListener('resize', calcSize);

watch(() => roundStore.round.options.numberOfCards, () => {calcSize();})
onMounted(() => {calcSize()});

let styleObject = reactive({
  width: ``,
})

let imgStyleObject = reactive({
  width: '50px',
  height: '50px',
})

</script>


<template>
  <div class="container" :style="styleObject">
    <div 
      class="card" 
      v-for="(card, index) in roundStore.round.cards" 
      :key='index'
      >
      <vue-flip 
        v-model="card.open"
        :height="`${imgStyleObject.height}`"
        :width="`${imgStyleObject.width}`"
      >
        <template v-slot:front>
          <img 
            @click="roundStore.round.click(index)"
            :class="{
              active: !roundStore.round.cards[index].open && roundStore.round.started,
            }"
            :style="imgStyleObject"
            :src="assetsPath + (card.frontImg)" 
      />    
        </template>
        <template v-slot:back>
          <img 
            :style="imgStyleObject"
            :src="assetsPath + (card.backImg)" 
      /> 
        </template>
      </vue-flip>
    </div>
  </div>
</template>

<style scoped>

.container {
  display: flex;
  flex-wrap: wrap;
  border: 1px solid green;
  min-width: 275px;
  max-width: 95vw;
  justify-content: space-evenly;
  background-color: rgba(255, 255, 255, 0.5);
  padding: 5px;
}

img {
  border: 1px solid black;
  vertical-align: middle;
}

.active:hover {
  scale: 1.05;
}

.card {
  padding: 5px;
}


</style>
