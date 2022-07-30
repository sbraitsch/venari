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
        <div class="box" @click="$emit('addNewTask', title, description, type)">Add New<hr class="divider"/></div>
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
        font-weight: bold;
        font-size: 18px;
    }

    .addBtn {
        background-color: slategray;
        border: none
    }

    .box {
        font-size: 20px;
        font-weight: bold;
    }

    .box:hover {
        transition: all 1s linear;

        &:after{
            margin-left:-50%;
            width: 100%;
            border-color:black;
        }

        &:before{
            top:0;
            height: 100%;
            border-color:black;
        }
  }

  .box:hover > hr {
    border-color: transparent;
    transition: all 1s;
  }
</style>