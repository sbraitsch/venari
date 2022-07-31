<script setup lang="ts">
import { Task } from '@/model/task';
import { useVenariStore } from '@/stores/venariStore'
import DefaultTask from './tasks/DefaultTask.vue'
import NewTask from './tasks/NewTask.vue'
import draggable from 'vuedraggable'
import { ref } from 'vue'

const store = useVenariStore()
store.fetchVenari()

const drag = ref(false)

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
</script>

<template>
  <div class="taskContainer">
    {{store.venari.name}}
    <draggable v-model="store.venari.tasks" @start="drag=true" @end="drag=false" item-key="title">
      <template #item="{element, index}">
        <DefaultTask :task="element" :index="index" @move="moveTask" />
      </template>
    </draggable>
    <NewTask @add-new-task="addTaskToVenari"/>
  </div>
</template>

<style lang="scss">
  .taskContainer {
    display: flex;
    flex-direction: column;
    gap: 1vh;
    width: 50vw;
    color: black;
    cursor: grab;
    margin: 1vh;
    padding: 1vh;
    overflow-y: auto;
  }

</style>
