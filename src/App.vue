<template>
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
</template>

<script>
import NavbarStart from '@/components/NavbarStart'

export default {
  name: 'App',
  // eslint-disable-next-line vue/no-unused-components
  components: { NavbarStart }
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.container{
  margin-top: 250px ;
}
</style>
