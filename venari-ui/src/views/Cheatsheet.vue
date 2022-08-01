<script setup lang="ts">
// @ts-ignore
import { marked } from 'marked';
import { ref } from 'vue'
import linux from '../assets/cheatsheets/linux.md?raw';
import css from '../assets/cheatsheets/css.md?raw';
import vue from '../assets/cheatsheets/vue.md?raw';
import springboot from '../assets/cheatsheets/springboot.md?raw';
import csharp from '../assets/cheatsheets/csharp.md?raw';
import docker from '../assets/cheatsheets/docker.md?raw';

const categories = [
  { name: "Languages", sheets: [csharp, css] },
  { name: "Frameworks", sheets: [vue, springboot] },
  { name: "Tools", sheets: [docker] },
  { name: "OS", sheets: [linux] },
  { name: "Other", sheets: [] }
]
const activeCategory = ref(0)
</script>

<template>
  <div class="content">
    <div class="categories">
      <div v-for="(category, index) in categories">
        <div class="category" @click="activeCategory = index" :class="activeCategory == index && 'selected'">
          <font-awesome-icon icon="fa-solid fa-folder">2</font-awesome-icon>
          {{ category.name }}
        </div>
      </div>
    </div>
    <div class="sheetContainer" v-dragscroll>
      <div v-for="sheet in categories[activeCategory].sheets" class="sheet" v-html="marked(sheet)" v-dragscroll></div>
    </div>>
  </div>
</template>

<style scoped>

.content {
    display: flex;
    flex-direction: column;
    height: 100vh;
    gap: 1em;
    margin: auto;
    overflow: auto;
}

.categories {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 50px;
  width: 50vw;
  margin: auto;
  gap: 3vw;
  background-color: var(--vt-c-deepblue);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
}

.category {
  padding: 10px;
  font-size: 1em;
  color: beige;
  cursor: pointer;
}

.selected {
  color: var(--vt-c-lightblue);
}

.sheetContainer {
  display: flex;
  height: 100vh;
  max-width: 100vw;
  padding: 10px;
  gap: 1em;
  margin: auto;
  overflow: auto;
}
.sheet {
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  width: 30vw;
  text-align: left;
  padding: 1vh;
  color: beige;
  background-color: var(--vt-c-deepblue);
  animation: basicFade 1s ease-in-out;
  overflow: auto;
}

.sheet :deep(hr) {
  border-bottom: 1px solid beige;
  margin-bottom: 3vh;
}

.sheet :deep(h1) {
  font-size: 1.5em;
}
.sheet :deep(h2) {
  font-size: 1em;
  margin-left: 2em;
}
.sheet :deep(h3) {
  color: var(--vt-c-lightblue);
  font-size: 1em;
  margin-left: 4em;
}

</style>