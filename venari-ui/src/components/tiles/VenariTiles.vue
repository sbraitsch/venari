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
    <NavigationTile title="CREATE|EDIT" @link-external="$router.push('/venari/create')" color="mint" theme="light"/>
    <NavigationTile title="EXPLORE" @link-external="" color="slate" theme="light"/>
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