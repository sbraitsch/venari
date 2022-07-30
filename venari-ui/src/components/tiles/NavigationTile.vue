<script setup lang="ts">
defineProps({
  title: String,
  route: String,
  color: String,
  theme: String
})
defineEmits(['linkExternal'])
</script>

<template>
  <div class="tile" :class="color" @click="$emit('linkExternal')">
    <div class="box" :class="theme"><span>{{ title }}</span><hr :class="theme"/></div>
  </div>
</template>

<style scoped lang="scss">
  .tile {
    display: flex;
    flex: 1;
    height: 100%;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: all .7s ease-in-out;
  }

  .light {
    color: black;
    border-color: black;
  }

  .tile:hover {
    transition: all 1s ease-in-out;
  }

  .beige {
    color: beige;
    background-color: var(--vt-c-beige-dark);
  }

  .beige:hover {
    background-color: beige;
  }

  .red {
    color: beige;
    background-color: var(--vt-c-red-dark);
  }

  .red:hover {
    background-color: var(--vt-c-red-muted);
  }

  .mint {
    color: beige;
    background-color: var(--vt-c-mint-dark);
  }

  .mint:hover {
    background-color: var(--vt-c-mint-mute);
  }

  .slate {
    color: beige;
    background-color: var(--vt-c-slategray-dark);
  }

  .slate:hover {
    background-color: slategray;
  }

  @media(max-width: 1024px) {
    .vl {
        border-bottom: 1px solid var(--vt-c-divider-dark-1);
        border-left: none;
        width: 100%;
        height: 1px !important;
    }
    .tile {
      width: 100%;
    }
  }

  .tile:hover > .box {
    color: black;
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

  hr {
    border: 1px solid beige;
  }

  .tile:hover > .box > hr {
    transition: all .5s linear;
    border-color: transparent;
  }
</style>