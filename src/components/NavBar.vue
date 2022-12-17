<template>
  <header>
    <nav v-if="language === 'en'">
      <h1 class="brand">Kalorien</h1>
      <h1 class="brand2">Tracker</h1>
        <router-link class="nav-link" to="/">Home</router-link>
        <router-link class="nav-link"  v-bind:language="language" :to="{name: 'faqs'}">FAQs</router-link>
        <router-link class="nav-link" v-bind:language="language" :to="{name: 'products'}">Products</router-link>
        <router-link class="nav-link"  v-bind:language="language" :to="{name: 'card'}">My card</router-link>
        <router-link class="nav-link"  v-bind:language="language" :to="{name: 'days'}">My days</router-link>
       <button class="language" @click="$emit('toggle2')"> ENG </button>
        <div class="switch">  <p class="dm">Dark mode:</p> <Toggle :mode="mode" @toggle="$emit('toggle')"></Toggle></div>
    </nav>
    <nav v-if="language === 'de'">
      <h1 class="brand">Kalorien</h1>
      <h1 class="brand2">Tracker</h1>
      <router-link class="nav-link" to="/">Home</router-link>
      <router-link class="nav-link" to="/faqs">FAQs</router-link>
      <router-link class="nav-link" v-bind:language="language" :to="{name: 'products'}">Produkte</router-link>
      <router-link class="nav-link" v-bind:language="language"  :to="{name: 'card'}">Meine Karte</router-link>
      <router-link class="nav-link"  v-bind:language="language" :to="{name: 'days'}">Meine Tage</router-link>
      <button class="language" @click="$emit('toggle2')"> DE </button>
      <div class="switch"> <p class="dm">Dark mode:</p> <Toggle :mode="mode" @toggle="$emit('toggle')"></Toggle></div>
    </nav>
  </header>
</template>

<script>
import Toggle from '@/components/Toggle'
export default {
  name: 'NavBar',
  components: { Toggle },
  props: ['mode', 'language'],
  data () {
    return {
      test: 'test'
    }
  }
}
</script>

<style scoped>
header {
  text-transform: uppercase;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 25px;
  height: 70px;
  background: #C3C3C3;
  transition: background 0.3s ease-in-out;
}
.language {
  margin-left: 20px;
  background-color: #C3C3C3;
  border: none;
}
.dm {
  margin-top: -15px;
  margin-bottom: 0px;
}
.dark header  {
  background: #160519 ;
}

.brand {
  color: #852d91;
}

.dark .brand {
  color: white;
  color: #852d91;;
}
.switch {
  margin-top: 10px;
  margin-left: 550px;
}

.brand {
  font-size: 32px;
  margin-top: -5px;
  text-transform: uppercase;
  font-weight: 900;
}
.brand2 {
  font-size: 32px;
  text-transform: uppercase;
  font-weight: 900;
  margin-top: 20px;
  margin-left: -156px;
}
nav {
  display: flex;
  height: 60px;
}

header nav .nav-link {
  display: flex;
  align-items: center;
  margin-right: 10px;
  margin-left: 20px;
}

header nav .nav-link:hover {
  background: #B0B0B0;
}

.dark header nav .nav-link:hover{
  background: #22062e;
}

</style>
