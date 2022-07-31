<script setup lang="ts">
import VenariLayout from '../components/VenariConstructionLayout.vue';
</script>

<template>
  <div class="content">
    <VenariLayout/>
  </div>
</template>

<style scoped>

.content {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    width: 100vw;
    background-color: beige;
    gap: 1vh;
    overflow-y: scroll;
}
</style>