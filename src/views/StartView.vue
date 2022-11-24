<template>
  <div class="home">
    <img class="logo" alt="Logo" src="../assets/logo.png">
    <h1 class="text">Kalorien</h1>
    <h1 class="text1">Tracker</h1>
    <a href="/about"><button class="bn632-hover bn24">Get Started</button></a>
  </div>
</template>
<style>
.home {
  font-family: "Arial Black";
}
.logo {
  width: 400px;
  height: 400px;
  -webkit-filter: drop-shadow(3px 6px 7px #000);
  filter: drop-shadow(3px 6px 7px #000000);
  transition: transform 0.6s;
  animation: 3s show ease;
}

@keyframes show {
  from { opacity: 0;}
  to { opacity: 1;}
}

.logo:hover{
  transform: scale(1.3);
}

.bn632-hover {
  width: 160px;
  font-size: 16.5px;
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
  animation: 3s show ease;
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
.text{
  margin-top: -50px;
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
  animation: 3s show ease;
}
.text1{
  margin-top: -25px ;
  margin-bottom: 30px;
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
  animation: 3s show ease;
}
</style>
<script>
// @ is an alias to /src
export default {
  name: 'HomeView'
}
</script>
