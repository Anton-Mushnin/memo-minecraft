<script setup lang="ts">
import TheOptions from './components/TheOptions.vue';
import TheField from './components/TheField.vue';



</script>

<template>
  <header>
    Memo-minecraft
  </header>

  <main>
    <TheOptions />
    <TheField />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}


/* 
@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
} */
</style>
