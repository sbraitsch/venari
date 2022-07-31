<script setup lang="ts">
import { Task } from "../../model/task";

defineProps({
    task: { type: Task, required: true},
    index: { type: Number, required: true}
})

defineEmits<{
    (e: 'move', oldIndex: number, newIndex: number): void
}>()

</script>

<template>
    <div class="task"> 
        <span class="title">{{ task.title }}</span>
        <hr class="divider"/>
        <span class="description"> {{task.description}}</span>
    </div>
</template>

<style scoped lang="scss">

    .task {
        font-size: 22px;
        text-align: start;
        font-weight: bold;
        flex: 1;
        margin-top: 1vh;
        transition: all .3s ease-in-out;
    }

    .task:hover {
        transition: all .3s ease-in-out;
        background-color: var(--vt-c-red-highlight);
    }

    .task:active {
        cursor: grabbing;
    }
</style>