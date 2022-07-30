<script setup lang="ts">
import HuntLayout from '../components/HuntLayout.vue';
</script>

<template>
  <div class="content">
    <HuntLayout/>
  </div>
</template>

<style scoped>

.content {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    min-height: 100vh;
    width: 100vw;
    background-color: beige;
    gap: 1vh;
}
</style>