<template>
  <div class="hello">
    <h1 class="text">{{ msg1 }}</h1>
    <h1 class="text1">{{ msg2 }}</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg1: String,
    msg2: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.text{
  margin: -55px ;
  text-transform: uppercase;

  font-size: 5rem;
  background-image: url("../assets/gip2.gif");
  background-size: cover;
  background-clip: border-box;
  -webkit-background-clip: text;
  color: transparent;
  -webkit-filter: drop-shadow(6px 6px 5px #000000);
  filter: drop-shadow(6px 6px 5px #000000);
  -webkit-text-stroke: 0.75px white;
  -webkit-text-fill-color: transparent;
  transition: transform 0.6s;
}
.text1{
  margin: 30px ;
  text-transform: uppercase;

  font-size: 4rem;
  background-image: url("../assets/gip2.gif");
  background-size: cover;
  background-clip: border-box;
  -webkit-background-clip: text;
  color: transparent;
  -webkit-filter: drop-shadow(6px 6px 5px #000000);
  filter: drop-shadow(6px 6px 5px #000000);
  -webkit-text-stroke: 0.75px white;
  -webkit-text-fill-color: transparent;
  transition: transform 0.6s;
}
</style>
