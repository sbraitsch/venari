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
    <NavigationTile title="CREATE|EDIT" icon="fa-solid fa-brain" @link-external="$router.push('/venari/create')" color="venariColor" />
    <NavigationTile title="EXPLORE" icon="fa-brands fa-wpexplorer" @link-external="" color="venariColor"/>
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