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
    <div class="taskFrame">
        <div class="orderTool">
            <font-awesome-icon class="clickable" icon="fa-solid fa-arrow-up" @click="$emit('move', index, index - 1)"/>
            <font-awesome-icon class="clickable" icon="fa-solid fa-arrow-down" @click="$emit('move', index, index + 1)"/>
        </div>
        <div class="task"> 
            <span class="title">{{ task.title }}</span>
            <hr class="divider"/>
            <span class="description"> {{task.description}}</span>
        </div>
    </div>
</template>

<style scoped lang="scss">

    .taskFrame {
        display: flex;
        transition: all .5s ease-in-out;
    }

    .taskFrame:hover {
        transition: all .5s ease-in-out;
        transform: scale(1.05);
    }

    .orderTool {
        display: flex;
        flex-direction: column;
        justify-content: center;
        justify-content: space-around;
        padding: 5px;
    }

    .task {
        font-size: 22px;
        text-align: start;
        font-weight: bold;
        flex: 1;
    }
</style>