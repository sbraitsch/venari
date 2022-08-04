<script setup lang="ts">
import NavigationTile from './NavigationTile.vue'

const link = (url: string) => {
  window.location.href = url
}
</script>

<template>
  <div class="navbar">
    <NavigationTile title="VENARI" icon="fa-solid fa-dungeon" @link-external="$router.push('/venari')" color="beige" theme="dark"/>
    <NavigationTile title="CHEATSHEETS" icon="fa-solid fa-user-secret" @link-external="$router.push('/cheatsheet')" color="mint" theme="dark"/>
    <NavigationTile title="DEV.LOG" icon="fa-solid fa-terminal" @link-external="" color="red" theme="dark"/>
    <NavigationTile title="GITHUB" icon="fa-brands fa-github" @link-external="link('https://github.com/sbraitsch')" color="slate" theme="dark"/>
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