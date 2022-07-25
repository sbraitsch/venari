<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue';
import Logo from './components/Logo.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <div class="content">
    <b class="neon constructionSign">Under Construction</b>
    <Logo/>
    <Navbar/>
    <RouterView></RouterView>
  </div>
  <Footer></Footer>
</template>

<style scoped>

.content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    min-height: 100vh;
    gap: 2vh;
}
</style>
