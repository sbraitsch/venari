<script setup lang="ts">
// @ts-ignore
import { marked } from 'marked';
import cheats from '../assets/cheatsheet.md?raw';
import { ref } from 'vue'

const sheets = cheats.split("/split").map((sheet) => sheet.substring(sheet.indexOf("#")))
const active = ref(0)

</script>

<template>
  <div class="content">
    <div class="activeContent" v-html="marked(sheets[active])"></div>
    <div class="inactiveContent">
      <font-awesome-icon icon="fa-solid fa-archive"/> Archive
      <div class="archive">
        <div  v-for="(sheet, index) in sheets">
          <div class="sheet" @click="active = index" :class="active == index && 'active'"><font-awesome-icon icon="fa-solid fa-file"/><span class="customSpan">{{ sheet.substring(sheet.indexOf(' '), sheet.indexOf('-')) }}</span></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

.content {
    display: flex;
    width: 100vw;
    padding: 10px;
    align-items: flex-start;
    gap: 1em;
    overflow: hidden;
}
.activeContent {
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 98vh;
  text-align: left;
  padding: 1vh;
  color: beige;
  background-color: var(--vt-c-deepblue);
  animation: basicFade 1s ease;
}

.inactiveContent {
  width: 5vw;
  height: 98vh;
  display: flex;
  flex-direction: column;
  padding: 1vh;
  color: beige;
  background-color: var(--vt-c-deepblue);
  animation: basicFade 1s ease;
  user-select: none;
  transition: all .5s ease;
  margin-left: auto;
  text-align: center;
}

.inactiveContent:hover {
  width: 15vw;
  transition: all .5s ease;
}

.inactiveContent:hover > .archive {
  opacity: 1;
  transition: all .8s ease;
}

.inactiveContent:hover :deep(.customSpan) {
  display: flex;
  color: beige;
  transition: all 1s ease;
}

.archive {
  display: grid;
  grid-template-columns: 1fr;
  text-align: left;
  margin: 1vh;
  padding: 1vh;
  gap: 1em;
}

.sheet {
  display: flex;
  gap: 1em;
  justify-content: left;
  align-items: center;
  padding: 1vh;
  background-color: transparent;
  color: beige;
  font-size: 1.5em;
}

.customSpan {
  color: transparent;
  white-space: nowrap;
  transition: all .1s ease;
}
.sheet:hover {
  transition: all .3s ease-in-out;
  background-color: var(--vt-c-slategray-mid);
  cursor: pointer;
}

.active {
  color: var(--vt-c-neon);
}

.activeContent :deep(hr) {
  border: 1px solid beige;
  margin-bottom: 20px;
}

.activeContent :deep(h1) {
  font-size: 40px;
}
.activeContent :deep(h2) {
  font-size: 20px;
  font-weight: bold;
}
.activeContent :deep(h3) {
  color: rgb(238, 138, 6);
  margin-left: 2em;
  font-weight: bold;
}

</style>