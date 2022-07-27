<script setup lang="ts">

const props = defineProps({
  title: String,
    route: String,
    rightBorder: Boolean,
    leftBorder: Boolean,
    color: String
})
defineEmits(['linkExternal'])
</script>

<template>
  <div class="vl" v-if="leftBorder"></div>
  <div class="tile" :class="color" @click="$emit('linkExternal')">
    <div class="box"><span>{{ title }}</span></div>
  </div>
  <div class="vl" v-if="rightBorder"></div>
</template>

<style lang="scss">
  .tile {
    display: flex;
    flex: 1;
    height: 100%;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  .beige {
    color: beige;
  }

  .beige:hover {
    background-color: beige;
    transition: all 1.5s;
  }

  .mint:hover {
    background-color: var(--vt-c-mint-mute);
    transition: all 1.5s;
  }

  .slate {
    color: slategray;
  }

  .slate:hover {
    background-color: slategray;
    transition: all 1.5s;
  }

  @media(max-width: 1024px) {
    .vl {
        border-bottom: 1px solid var(--vt-c-mint-mute);
        border-left: none;
        width: 100%;
        height: 1px !important;
    }
    .tile {
      width: 100%;
    }
  }

  .vl {
  height: 100%;
  border-left: 1px solid var(--vt-c-divider-dark-1);
  }

  .tile:hover > .box {
    color: black;
    transition: all 1.5s linear;

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

  .box{
    display:flex;
    position:relative;
    border-collapse:collapse;
    text-decoration:none;
    padding: 10px;
    justify-content: center;
    font-size: 36px;
    font-weight: bold;
    user-select: none;

    &:before{
      transition: all 1s;
      position:absolute;
      content:"";
      width:100%;
      height:0;
      left:50%;
      margin-left:-50%;
      top:50%;
      border-color:rgba(31, 175, 152,0);
      border-style:solid;
      border-width: 0 2px;
    }

    &:after{
      transition: all 1s;
      position:absolute;
      content:"";
      width: 0;
      height:100%;
      left:50%;
      margin-left: 0;
      top:0;
      border-color:rgba(31, 175, 152,0);
      border-style:solid;
      border-width: 2px 0;
    }
  }
</style>