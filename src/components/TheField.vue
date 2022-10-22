<script setup lang="ts">
import { useRoundStore } from '@/stores/roundStore';
import { assetsPath } from '@/urls.config';
import { watch, reactive, ref } from 'vue';

const roundStore = useRoundStore();

// console.log(assetsPath);

// const orientation = ref('landscape');


function dimensions () {
  const size = roundStore.round.options.numberOfCards;
  const shortSide = maxDivider(size);
  if (window.innerHeight > window.innerWidth) {
    return [shortSide, size / shortSide];
  }
  return [size / shortSide, shortSide];
}

const imgWidth = ref(100);

watch(() => roundStore.round.options.numberOfCards, 
() => {
  // styleObject.width = `${dimensions()[0] * 120 + 40}px`;
  // styleObject.height = `${dimensions()[1] * 120}px`;
  calcSize();

  // imgWidth = styleObject.width
})

function calcSize() {
  let width = dimensions()[0] * 120;
  if (window.innerWidth - 10 < width) {
    width = window.innerWidth - 10;

  }
  let height = dimensions()[1] * 120 ;
  if (window.innerHeight * .75 < height) {
    height = window.innerHeight * .75;
  }
  const imgWidth = Math.min((width - 10) / dimensions()[0], height / dimensions()[1]);
  styleObject.width = `${width + 10}px`;
  styleObject.height = `${height}px`;

  imgStyleObject.height= `${imgWidth}px`;
  imgStyleObject.width= `${imgWidth}px`;

  // console.log(window.innerHeight);
  // console.log(height);
  // console.log(dimensions()[1]);
  // console.log(imgWidth.value);

}

function onResize() {
  // console.log(window.innerWidth, window.innerHeight);
  // styleObject.width = `${dimensions()[0] * 120 + 40}px`;
  // styleObject.height = `${dimensions()[1] * 120}px`;
  calcSize();


  // if (window.innerHeight > window.innerWidth)
}

window.onresize = onResize;

const maxDivider = (n: number) => {
  let maxD = Math.floor(Math.sqrt(n));
  while(maxD > 1) {
    if (n % maxD === 0) { return maxD }
    maxD -= 1;
  }
  return 1;
}

// const 

let styleObject = reactive({
  width: `${dimensions()[0] * 120 + 40}px`,
  height: `${dimensions()[1] * 120}px`,

})

let imgStyleObject = reactive({
  width: '100px',
  height: '100px',
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
        :src="assetsPath + card.display" 
      />    
    </div>
  </div>
</template>

<style scoped>

.container {
  display: inline-flex;
  flex-wrap: wrap;
  border: 1px solid green;
  min-width: 275px;
  /* width: fit-content;  */
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.5);
  max-width: 90%;
}

img {
  /* width: 100px;
  height: 100px; */
  border: 1px solid black;
  opacity: 1;
  max-width: 10vh;
  max-height: 10vh;
}

.active:hover {
  scale: 1.05;
}
.solved {
  border: 3px solid rgb(100, 233, 217);
  /* opacity: 0.6; */
}

  .card {
    /* width: 120px;
    height: 120px; */
    /* max-width: 12vh;
    max-height: 12vh; */
    padding: 5px;
    /* background-color: white; */
  }


</style>
