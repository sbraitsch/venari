<script setup lang="ts">
import Navbar from '../components/TileView.vue';
import Footer from '../components/Footer.vue';
</script>

<template>
  <!-- <b class="neon constructionSign">Under Construction</b> -->
  <div class="content">
    <Navbar/>
  </div>
  <Footer></Footer>
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
}
</style>