<script setup lang="ts">
import { Task } from '@/model/task';
import { useVenariStore } from '@/stores/venariStore'
import DefaultTask from './tasks/DefaultTask.vue'
import NewTask from './tasks/NewTask.vue'

const store = useVenariStore()
store.fetchVenari()

const addTaskToVenari = (title: string, description: string, type: string, ) => {
  store.venari.tasks.push(new Task(title, description))
}

const moveTask = (oldIndex: number, newIndex: number) => {
  if (newIndex >= 0 && newIndex < store.venari.tasks.length) {
    var temp = store.venari.tasks[oldIndex]
    store.venari.tasks[oldIndex] = store.venari.tasks[newIndex]
    store.venari.tasks[newIndex] = temp
  }
}

const outputJson = () => {
  console.log(JSON.stringify(store.venari))
}
</script>

<template>
  <div class="taskContainer">
    {{store.venari.name}}
    <DefaultTask v-for="(task, index) in store.venari.tasks" :task="task" :index="index" @move="moveTask"/>
    <NewTask @add-new-task="addTaskToVenari"/>
    <font-awesome-icon class="clickable" icon="fa-solid fa-file-export" @click="outputJson" title="Output as JSON to Console"/>
  </div>
</template>

<style lang="scss">
  .taskContainer {
    display: flex;
    flex-direction: column;
    gap: 1vh;
    width: 20vw;
    color: black;
  }
</style>
