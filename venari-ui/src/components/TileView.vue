<script lang="ts">
import NavigationTile from './NavigationTile.vue'

export default {
  components: {
    NavigationTile
  },
  methods: {
    link(url: string) {
      window.location.href = url
    }
  }
}
</script>

<template>
  <div class="navbar">
    <NavigationTile title="Venari" @link-external="$router.push('/venari')" color="beige"/>
    <NavigationTile title="Pathology" @link-external="link('https://pathology.sbraitsch.dev')" color="mint"/>
    <NavigationTile title="{dev.log}" @link-external="" color="red"/>
    <NavigationTile title="GitHub" @link-external="link('https://github.com/Napfschnecke')" color="slate"/>
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