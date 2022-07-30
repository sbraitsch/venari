<script setup lang="ts">
// @ts-ignore
import { marked } from 'marked';
import cheats from '../assets/cheatsheet.md?raw';

const sheets = cheats.split("/split")
</script>

<template>
  <div class="content" v-dragscroll>
    <div class="sheet" v-for="sheet in sheets">
      <div v-html="marked(sheet)"></div>
    </div>
  </div>
</template>

<style scoped>

.content {
    display: flex;
    gap: 1vw;
    color: rgb(169, 223, 215);
    margin: 10px;
    overflow-x: scroll;
    cursor: grab;
}
.sheet {
  display: flex;
  flex-direction: column;
  width: 25vw;
  height: 100vh;
  text-align: left;
  justify-content: start;
  flex-shrink: 0;
  border-radius: 4px;
  padding: 1vh;
  background-color: var(--vt-c-slategray-muted);
}

.sheet :deep(hr) {
  border: 1px solid beige;
  margin-bottom: 20px;
}

.sheet :deep(h1) {
  font-weight: bold;
}

</style>