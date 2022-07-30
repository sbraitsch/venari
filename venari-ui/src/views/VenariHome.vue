<script setup lang="ts">
import TileView from '../components/tiles/VenariTiles.vue';
</script>

<template>
  <div class="content">
    <TileView/>
  </div>
</template>

<style scoped>

.content {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    min-height: 100vh;
    width: 100vw;
    gap: 2vh;
    background-color: beige;
}
</style>