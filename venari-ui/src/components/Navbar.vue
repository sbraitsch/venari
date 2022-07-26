<script setup lang="ts">
import NavigationTile from './NavigationTile.vue';
</script>

<template>
  <div class="navbar">
    <NavigationTile title="Create"/>
    <div class="vl"></div>
    <NavigationTile title="Explore"/>
    <div class="vl"></div>
    <NavigationTile @click="$router.push('/api')" title="{ API }"/>
  </div>
</template>

<style>

.navbar {
  display: flex;
  flex-grow: 1;
  align-items: center;
  font-size: x-large;
  height: 100vh;
}

.vl {
  height: 100%;
  border-left: 1px solid var(--vt-c-mint-mute);
}

</style>