<template>
<nav-bar></nav-bar>
  <router-view/>
  <h1>Welcome to  Create Products</h1>
</template>

<script>
import NavBar from '@/components/NavBar'

export default {
  name: 'CreateProductView',
  components: { NavBar }
}
</script>

<style scoped>

</style>
