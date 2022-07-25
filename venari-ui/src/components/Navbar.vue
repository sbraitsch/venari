
<template>
  <div class="navbar">
    <h3 class="navitem">Create</h3>
    <h3 class="navitem">Explore</h3>
    <h3 class="navitem" @click="$router.push('/api')">{API}</h3>
  </div>
</template>

<style>

.navbar {
  display: flex;
  align-items: center;
  padding: 0 2rem;
  color: rgb(81, 167, 124);
  font-size: x-large;
  gap: 4vw;
}

.navitem {
  color: #fff;
}

.navitem:hover {
  cursor: pointer;
}

.pushRight {
  margin-left: auto;
}

</style>