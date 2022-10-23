<script setup lang="ts">


const props = defineProps<{
  front: string
  back: string
}>()

</script>

<template>

<div class="flip-container" ontouchstart="this.classList.toggle('hover');">
	<div class="flipper">
    <div class="front">
      <img :src="props.front">
		</div>
		<div class="back">
      <!-- back content -->
		</div>
	</div>
</div>
</template>
