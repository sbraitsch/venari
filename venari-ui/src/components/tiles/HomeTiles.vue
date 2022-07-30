<script setup lang="ts">
import NavigationTile from './NavigationTile.vue'

const link = (url: string) => {
  window.location.href = url
}
</script>

<template>
  <div class="navbar">
    <NavigationTile title="VENARI" @link-external="$router.push('/venari')" color="beige" theme="dark"/>
    <NavigationTile title="CHEATSHEETS" @link-external="$router.push('/cheatsheet')" color="mint" theme="dark"/>
    <NavigationTile title="{DEV.LOG}" @link-external="" color="red" theme="dark"/>
    <NavigationTile title="GITHUB" @link-external="link('https://github.com/Napfschnecke')" color="slate" theme="dark"/>
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

@media(max-width: 1024px) {
  .navbar {
    flex-direction: column;
    justify-content: center;
  }
}

</style>