<script setup lang="ts">
import { useRoundStore } from '@/stores/roundStore';
import { assetsPath } from '@/urls.config';
import { watch, reactive, onMounted } from 'vue';

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
  // styleObject.width = `${cols * (imgSize + 10) + 16}px`;

  if (window.innerHeight < 750 && imgSize < 50) {styleObject.width = `${window.innerWidth - 10}px`}
  imgStyleObject.height= `${imgSize}px`;
  imgStyleObject.width= `${imgSize}px`;
}

window.onresize = calcSize;
watch(() => roundStore.round.options.numberOfCards, () => {calcSize();})
onMounted(() => {calcSize()});

let styleObject = reactive({
  width: ``,
})

let imgStyleObject = reactive({
  width: '',
  height: '',
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
          // solved: roundStore.round.cards[index].solved,
          }"
        :style="imgStyleObject"
        :src="assetsPath + (card.open ? card.backImg : card.frontImg)" 

      />    
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
  opacity: 1;
  vertical-align: middle;
}

.active:hover {
  scale: 1.05;
}
.solved {
  border: 3px solid rgb(100, 233, 217);
}

.card {
  padding: 5px;
}


</style>
