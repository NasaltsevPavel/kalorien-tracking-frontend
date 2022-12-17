<template>
  <div class="app" v-bind:class="mode">
    <NavBar v-bind:mode="mode" v-bind:language="language" @toggle="toggle" @toggle2="toggle2"></NavBar>
    <router-view v-bind:language="language"/>
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
      mode: 'dark',
      language: 'en',
      lg: 'ENGLISH'
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
    },
    toggle2 () {
      if (this.language === 'en') {
        this.lg = 'DEUTSCH'
        this.language = 'de'
      } else {
        this.lg = 'ENGLISH'
        this.language = 'en'
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
  color: #2c3e50;
  background-image: url("../public/rm218-katie-08.jpg");
  background-size: cover;
  background-clip: border-box;
}

.mb-3 {
  margin-right: 50px;
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

.language {
  font-weight: 700;
  color: #2c3e50;
  border: 2px solid #2c3e50;
}
.dark .language {
  font-weight: 700;
  color: white;
  border: 2px solid #160519;
  background-color: #160519;
}

</style>
