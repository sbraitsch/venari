<script lang="ts">
import { useHuntStore } from '@/stores/hunts'

export default {
  setup() {
    const store = useHuntStore()

    return {
      store
    }
  },
  methods: {
  }
}
</script>
<template>
  <div class="api">
    <button @click="store.fetchHunts">Press me</button>
    <h1>{{store.hunts}}</h1>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .api {
    align-items: center;
  }
}
</style>
