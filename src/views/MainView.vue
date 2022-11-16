<template>
<nav-bar></nav-bar>
  <router-view/>
  <h1>This is the Mainpage</h1>
</template>

<script>
import NavBar from '@/components/NavBar'
export default {
  name: 'MainView',
  components: { NavBar }
}
</script>

<style scoped>

</style>
