<script setup lang="ts">
import { ref } from 'vue';

defineEmits<{
    (e: 'addNewTask', title: string, description: string, type: string): void
}>()
const title = ref("")
const description = ref("")
const type = ref("")
</script>

<template>
    <div class="task new"> 
        <div class="form">
            <label>Title:</label>
            <input v-model="title" placeholder="Enter a Task Title"/>
        </div>
        <div class="form">
            <label>Description:</label>
            <textarea v-model="description" placeholder="Enter a Task Description"></textarea>
        </div>
        <div class="form">
            <label>Type:</label>
            <label class="form-control">
                <input v-model="type" type="radio" value="text" name="type" checked/>
                Text
            </label>
            <label class="form-control">
                <input v-model="type" type="radio" value="geo" name="type"/>
                Geolocation
            </label>
            <label class="form-control">
                <input v-model="type" type="radio" value="image" name="type"/>
                Image
            </label>
            <label class="form-control">
                <input v-model="type" type="radio" value="sound" name="type"/>
                Sound
            </label>
        </div>
        <div class="addBtn" @click="$emit('addNewTask', title, description, type)">Add New<hr class="divider"/></div>
    </div>
</template>

<style scoped lang="scss">
    .new {
        transition: all .5s linear;
        display: flex;
        flex-direction: column;
    }

    .form {
        display: flex;
        flex-direction: column;
    }

    .form > label {
        text-align: left;
        font-size: 18px;
    }

    .addBtn {
        font-size: 22px;
        cursor: pointer;
    }

    .addBtn:hover > hr {
        transition: all .5s;
        border-color: beige;
    }

</style>