<script setup lang="ts">
// @ts-ignore
import { marked } from 'marked';
import cheats from '../assets/cheatsheet.md?raw';
import { ref } from 'vue'

const sheets = cheats.split("/split").map((sheet) => sheet.substring(sheet.indexOf("#")))
const active = ref(0)

</script>

<template>
  <div class="content" v-dragscroll>
    <div class="sheet" v-for="(sheet, index) in sheets" :class="active == index && 'active'" @click="active = index">
      <h1 class="collapsed" v-if="active != index">{{ sheet.substring(sheet.indexOf(' '), sheet.indexOf('-'))}}</h1>
      <div class="delayed" v-html="marked(sheet)" v-if="active == index"></div>
    </div>
  </div>
</template>

<style scoped>

.content {
    display: flex;
    gap: 1em;
    color: black;
    padding: 10px;
    cursor: grab;
    justify-content: center;
    align-items: flex-end;
    color: beige;
}
.sheet {
  display: flex;
  flex-direction: column;
  width: 6vw;
  height: 50vh;
  text-align: left;
  flex-shrink: 0;
  border-radius: 4px;
  padding: 1vh;
  background-color: var(--vt-c-slategray-muted);
  transition: transform .2s ease-in-out;
}

.sheet:hover {
  transform: translateY(-3vh);
  background-color: var(--vt-c-slategray-mid);
}

.sheet:hover > .collapsed {
  color: black;
}

.active {
  width: 50vw;
  height: 98vh;
  background-color: var(--vt-c-deepblue);
  border: 2px solid rgba(245, 245, 220, 0.548);
  animation: basicFade 1s ease;
}

.active:hover {
  transform: none;
  background-color: var(--vt-c-deepblue);
}

.collapsed {
  font-size: 22px !important;
  font-weight: bold;
  color: slategray;
}

.delayed {
  animation: delayedFade .5s linear;
}

.sheet :deep(hr) {
  border: 1px solid beige;
  margin-bottom: 20px;
}

.sheet :deep(h1) {
  font-size: 40px;
}
.sheet :deep(h2) {
  font-size: 20px;
  font-weight: bold;
}
.sheet :deep(h3) {
  color: rgb(238, 138, 6);
  margin-left: 2em;
  font-weight: bold;
}

</style>