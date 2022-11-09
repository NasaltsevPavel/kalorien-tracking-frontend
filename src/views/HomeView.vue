<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Kalorien Tracker"/>
  </div>
</template>
<style>
img {
  width: 400px;
  height: 400px;
  -webkit-filter: drop-shadow(3px 6px 7px #000);
  filter: drop-shadow(3px 6px 7px #000000);
  transition: transform 0.6s;
}

img:hover{
  transform: scale(1.3);
}

</style>
<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>
