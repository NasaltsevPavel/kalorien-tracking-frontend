<template>
<nav-bar></nav-bar>
  <router-view/>
</template>

<script>
import NavBar from '@/components/NavBar'

export default {
  name: 'App',
  // eslint-disable-next-line vue/no-unused-components
  components: { NavBar }
}
</script>

<style>
#app {
  font-family: "Arial Black";

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
