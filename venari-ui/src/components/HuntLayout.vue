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

</script>
<template>
  <div class="taskContainer">
    {{store.venari.name}}
    <DefaultTask v-for="task in store.venari.tasks" :task="task"/>
    <NewTask @add-new-task="addTaskToVenari"/>
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
