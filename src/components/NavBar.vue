<template>
  <nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Kalorien Tracker</a>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <router-link class="nav-link" to="/main">Home</router-link>
          <li class="nav-item dropdown">
          <router-link class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false" to="/products">Products</router-link>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item"><router-link class="nav-link" to="/products">All products</router-link></a></li>
              <li><a class="dropdown-item"><router-link class="nav-link" to="/createproduct">Create new product</router-link></a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style scoped>
.navbar .navbar-brand{
  color: #94128A;
  font-size: 25px;

}

</style>
