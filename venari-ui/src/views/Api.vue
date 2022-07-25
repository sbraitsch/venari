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
  <button @click="store.fetchHunts">Press me</button>
  <h1>{{store.hunts}}</h1>
</template>
