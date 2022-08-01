<script setup lang="ts">

defineProps( {
    json: { type: String, required: true}
})

const outputJson = (json: string) => {
  console.log(json)
}
</script>

<template>
    <div class="exportContainer">
        <span >JSON Preview: <font-awesome-icon class="clickable" icon="fa-solid fa-file-export" @click="outputJson(json)" title="Output as JSON to Console"/> </span>
        <pre>{{json}}</pre>
    </div>
</template>

<style scoped>

.exportContainer {
    display: flex;
    flex-direction: column;
    gap: 1vh;
    overflow-y: auto;
    margin: 1vh;
    width: 50vw;
}

pre {
    background-color: rgba(173, 127, 121, 0.616);
    padding: 2vw;
    margin: 1vh;
    white-space: pre-wrap;
}
</style>