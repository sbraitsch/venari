<script setup lang="ts">
import VenariLayout from '../components/VenariConstructionLayout.vue';
import { useVenariStore } from '@/stores/venariStore'
import ExportPreview from '../components/ExportPreview.vue'

const store = useVenariStore()
store.fetchVenari()

</script>

<template>
  <div class="content">
    <VenariLayout/>
    <ExportPreview :json="JSON.stringify(store.venari, null, 2)"/>
  </div>
</template>

<style scoped>

.content {
    display: flex;
    justify-content: center;
    height: 100vh;
    background-color: beige;
    gap: 1vh;
}
</style>