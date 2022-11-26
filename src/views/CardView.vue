<template>
  <h1>Welcome to my Card</h1>
  <h5>Text {{ language }}</h5>
    <div class="col" v-for="user in users" :key="user.id">
      <div class="row1">
      <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="false">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="../assets/products/meat.png" class="d-block w-100" alt="...">
            <div class="carousel-caption d-none d-md-block">
              <p>Some representative placeholder content for the first slide.</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="../assets/products/fish.jpg" class="d-block w-100" alt="...">
            <div class="carousel-caption d-none d-md-block">
              <p>Some representative placeholder content for the second slide.</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="../assets/products/drinks.jpg" class="d-block w-100" alt="...">
            <div class="carousel-caption d-none d-md-block">
              <p>Some representative placeholder content for the third slide.</p>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
        <div class="card" style="width: 20rem;">
          <div class="card-header">
            Featured
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">{{ user.username }} </li>
            <li class="list-group-item">{{ user.weight }} </li>
            <li class="list-group-item">{{ user.height }}</li>
            <li class="list-group-item">{{ user.age }}</li>
            <li class="list-group-item">A third item</li>
            <li class="list-group-item">A third item</li>
          </ul>
        </div>
        <div id="carouselExampleCaptions1" class="carousel slide" data-bs-ride="false">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions1" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions1" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions1" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="../assets/products/meat.png" class="d-block w-100" alt="...">
              <div class="carousel-caption d-none d-md-block">
                <p>Some representative placeholder content for the first slide.</p>
              </div>
            </div>
            <div class="carousel-item">
              <img src="../assets/products/fish.jpg" class="d-block w-100" alt="...">
              <div class="carousel-caption d-none d-md-block">
                <p>Some representative placeholder content for the second slide.</p>
              </div>
            </div>
            <div class="carousel-item">
              <img src="../assets/products/drinks.jpg" class="d-block w-100" alt="...">
              <div class="carousel-caption d-none d-md-block">
                <p>Some representative placeholder content for the third slide.</p>
              </div>
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions1" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions1" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div id="bmr" class="card w-75">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <h1>TExt</h1>
          <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'CardView',
  props: ['mode', 'language'],
  data () {
    return {
      users: []
    }
  },
  mounted () {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    }

    fetch('http://localhost:8080/v1/users/1', requestOptions)
      .then(response => response.json())
      .then(result => this.users.push(result)
      )
      .catch(error => console.log('error', error))
  }
}
</script>

<style scoped>
h1{
  margin-top: 10px;
}

h5{
  margin-bottom: 20px;
}
#carouselExampleCaptions {
  width: 350px;
  margin-left: 90px;
  margin-right: 40px;
}
#carouselExampleCaptions1 {
  width: 350px;
  margin-left: 40px;
}
.row1{
  display: flex;
  align-items: center;
}
#bmr {
  margin-top: 30px;
  margin-left: 140px;
}

.carousel-caption {
  color: black;
  font-weight: 650;

}

.dark .card {
  background: #160519;
  color: white;
}

.dark .list-group-item {
  background: #160519;
  color: white;
}
</style>
