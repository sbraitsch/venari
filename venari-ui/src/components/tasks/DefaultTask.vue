<script setup lang="ts">
import { Task } from "../../model/task";

defineProps({
    task: { type: Task, required: true},
})

</script>

<template>
    <div class="task default"> 
        {{ task.title }}
        <hr class="divider"/>
        <span class="description"> {{task.description}}</span>
    </div>
</template>

<style scoped lang="scss">
</style>