
<template>
  <div class="navbar">
    <h1 class="brand" @click="$router.push('/')">Venari</h1>
    <h3 class="navitem">Create</h3>
    <h3 class="navitem">Explore</h3>
    <h3 class="navitem" @click="$router.push('/api')">{API}</h3>
    <h3 class="navitem pushRight">Login</h3>
    <h3 class="navitem">Sign Up</h3>
  </div>
</template>

<style>

.navbar {
  display: flex;
  align-items: center;
  padding: 0 2rem;
  width: 100vw;
  position: fixed;
  background-color: #31a881;
  color: white;
  z-index: 5;
}

.brand {
  padding-right: 2rem;
  cursor: pointer;
}

.navitem {
  padding: 1rem;
}

.navitem:hover {
  cursor: pointer;
}

.pushRight {
  margin-left: auto;
}

</style>