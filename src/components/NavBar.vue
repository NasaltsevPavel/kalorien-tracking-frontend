<template>
  <header>
    <nav>
      <h1 class="brand">Kalorien Tracker</h1>
      <router-link class="nav-link" to="/main">Home</router-link>
      <router-link class="nav-link" to="/main">Home</router-link>
      <router-link class="nav-link" v-bind:mode="mode" to="/products">Products</router-link>
      <div class="switch">  <Toggle :mode="mode" @toggle="$emit('toggle')"></Toggle></div>

    </nav>
  </header>
</template>

<script>
import Toggle from '@/components/Toggle'
export default {
  name: 'NavBar',
  components: { Toggle },
  props: ['mode']
}

</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 25px;
  height: 70px;
  background: #C3C3C3;
  transition: background 0.3s ease-in-out;
}

.dark header  {
  background: #160519 ;
}

.brand {
  color: #852d91;;
}

.dark .brand {
  color: white;
}
.switch {
  margin-top: 10px;
  margin-left: 900px;
}

.brand {
  font-size: 32px;
  margin-top: 7px;
  text-transform: uppercase;
  font-weight: 900;
}
nav {
  display: flex;
  height: 60px;
}

header nav .nav-link {
  display: flex;
  align-items: center;
  padding:  0px 15px;
}

header nav .nav-link:hover {
  background: #B0B0B0;
}

.dark header nav .nav-link:hover{
  background: #22062e;
}

</style>
