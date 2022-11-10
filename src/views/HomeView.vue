<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg1="Kalorien"/>
    <HelloWorld msg2="Tracker"/>
    <a href="/about"><button class="bn632-hover bn24">Get Started</button></a>

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

.bn632-hover {
  width: 160px;
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  -webkit-text-stroke: 0.5px black;
  cursor: pointer;
  margin: 20px;
  height: 55px;
  text-align: center;
  border: none;
  background-size: 300% 100%;
  border-radius: 50px;
  -o-transition: all 0.4s ease-in-out;
  -webkit-transition: all 0.4s ease-in-out;
  transition: all 0.4s ease-in-out;
}

.bn632-hover:hover {
  background-position: 100% 0;
  moz-transition: all .4s ease-in-out;
  -o-transition: all .4s ease-in-out;
  -webkit-transition: all .4s ease-in-out;
  transition: all .4s ease-in-out;
}

.bn632-hover:focus {
  outline: none;
}

.bn632-hover.bn24 {
  background-image: linear-gradient(
    to right,
    #6253e1,
    #852d91,
    #a3a1ff,
    mediumvioletred
  );
  box-shadow: 0 4px 15px 0 rgba(126, 52, 161, 0.75);
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
