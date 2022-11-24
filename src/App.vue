<template>
  <div class="app" v-bind:class="mode">
    <NavBar v-bind:mode="mode" @toggle="toggle"></NavBar>
    <router-view/>
  <div class="container">
    <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
      <div class="col-md-4 d-flex align-items-center">
        <a href="/" class="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
        </a>
        <span class="mb-3 mb-md-0 text-muted">&copy; 2022 Company, Inc</span>
      </div>
      <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
      </ul>
    </footer>
  </div>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar'

export default {
  name: 'App',
  data () {
    return {
      mode: 'dark'
    }
  },
  components: { NavBar },
  methods: {
    toggle () {
      if (this.mode === 'dark') {
        this.mode = 'light'
      } else {
        this.mode = 'dark'
      }
    }
  }
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.app {
  background-color: white;
  color: black;
  min-height: 110vh;
  background-image: url("../public/rm218-katie-08.jpg");
  background-size: cover;
  background-clip: border-box;
}

.dark {
  background-image: url("../src/assets/19425921.jpg");
  background-size: cover;
  min-height: 110vh;
  background-clip: border-box;
  color: white;
}
.container{
  margin-top: 250px ;
}

</style>
