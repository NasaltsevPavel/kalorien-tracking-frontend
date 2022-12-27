<template>
  <div class="pr" v-if="language === 'en'">
  <h1>Welcome to My Card</h1>
    <div class="col" v-for="user in users" :key="user.id">
      <div class="card-text">
        <h5>{{ user.username }} on this page you will find all your main information. </h5>
        <h5>You can always update your data with the button below. Pay attention on the tips on the sides of the page.</h5>
      </div>
      <div class="row1">
        <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active" data-bs-interval="10000">
              <img src="../assets/products/meat.png" class="d-block w-100" alt="...">
              <div class="carousel-caption d-none d-md-block">
                <h5>First slide label</h5>
                <p>Some representative placeholder content for the first slide.</p>
              </div>
            </div>
            <div class="carousel-item" data-bs-interval="2000">
              <img src="../assets/products/fish.jpg" class="d-block w-100" alt="...">
              <div class="carousel-caption d-none d-md-block">
                <h5>Is Salmon Good for You?</h5>
                <p>Salmon is one of the healthiest foods you can eat and a great source of protein.</p>
              </div>
            </div>
            <div class="carousel-item">
              <img src="../assets/products/VEGETABLES.jpg" class="d-block w-100" alt="...">
              <div class="carousel-caption d-none d-md-block">
                <h5>Eat plenty of fruit and veg</h5>
                <p>They contain plenty of vitamins and minerals.</p>
              </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
        <div class="card" style="width: 20rem;">
          <div class="card-header">
            Your data:
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Height: {{ user.height }} cm </li>
            <li class="list-group-item">Weight: {{ user.weight }} kg </li>
            <li class="list-group-item">Age: {{ user.age }} years</li>
            <li class="list-group-item">BMI: {{ user.bmi }}</li>
            <li class="list-group-item">Category: {{ user.category }}</li>
            <li class="list-group-item">Goal weight: {{ user.goalW }} kg</li>
            <li class="list-group-item"><card-update-form v-bind:mode="mode" v-bind:language="language" @updated="Update"></card-update-form></li>
          </ul>
        </div>
        <div id="carouselExampleDark1" class="carousel carousel-dark slide" data-bs-ride="carousel">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleDark1" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleDark1" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleDark1" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active" data-bs-interval="10000">
              <img src="../assets/products/meat.png" class="d-block w-100" alt="...">
              <div class="carousel-caption d-none d-md-block">
                <h5>First slide label</h5>
                <p>Some representative placeholder content for the first slide.</p>
              </div>
            </div>
            <div class="carousel-item" data-bs-interval="2000">
              <img src="../assets/products/meat.png" class="d-block w-100" alt="...">
              <div class="carousel-caption d-none d-md-block">
                <h5>Second slide label</h5>
                <p>Some representative placeholder content for the second slide.</p>
              </div>
            </div>
            <div class="carousel-item">
              <img src="../assets/products/meat.png" class="d-block w-100" alt="...">
              <div class="carousel-caption d-none d-md-block">
                <h5>Third slide label</h5>
                <p>Some representative placeholder content for the third slide.</p>
              </div>
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark1" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark1" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div id="bmr" class="card w-75">
        <div class="card-body">
          <h5 class="card-title">Your BMR:</h5>
          <h1>{{ user.bmr }} calories</h1>
          <p class="card-text">You need to eat this number of calories per day to reach your weight goal.</p>
        </div>
      </div>
    </div>
  </div>
  <div class="pr" v-if="language === 'de'">
    <h1>Welcome to My Card DE</h1>
    <div class="col" v-for="user in users" :key="user.id">
      <div class="card-text">
        <h5>{{ user.username }} on this page you will find all your main information. </h5>
        <h5>You can always update your data with the button below. Pay attention on the tips on the sides of the page.</h5>
      </div>
      <div class="row1">
        <div id="carouselExampleDark111" class="carousel carousel-dark slide" data-bs-ride="carousel">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleDark111" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleDark111" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleDark111" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active" data-bs-interval="10000">
              <img src="../assets/products/meat.png" class="d-block w-100" alt="...">
              <div class="carousel-caption d-none d-md-block">
                <h5>First slide label</h5>
                <p>Some representative placeholder content for the first slide.</p>
              </div>
            </div>
            <div class="carousel-item" data-bs-interval="2000">
              <img src="../assets/products/fish.jpg" class="d-block w-100" alt="...">
              <div class="carousel-caption d-none d-md-block">
                <h5>Is Salmon Good for You?</h5>
                <p>Salmon is one of the healthiest foods you can eat and a great source of protein.</p>
              </div>
            </div>
            <div class="carousel-item">
              <img src="../assets/products/VEGETABLES.jpg" class="d-block w-100" alt="...">
              <div class="carousel-caption d-none d-md-block">
                <h5>Eat plenty of fruit and veg</h5>
                <p>They contain plenty of vitamins and minerals.</p>
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark111" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark111" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <div class="card" style="width: 20rem;">
          <div class="card-header">
            Your data:
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Height: {{ user.height }} cm </li>
            <li class="list-group-item">Weight: {{ user.weight }} kg </li>
            <li class="list-group-item">Age: {{ user.age }} years</li>
            <li class="list-group-item">BMI: {{ user.bmi }}</li>
            <li class="list-group-item">Category: {{ user.category }}</li>
            <li class="list-group-item">Goal weight: {{ user.goalW }} kg</li>
            <li class="list-group-item"><card-update-form v-bind:mode="mode" v-bind:language="language"></card-update-form></li>
          </ul>
        </div>
        <div id="carouselExampleDark11" class="carousel carousel-dark slide" data-bs-ride="carousel">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleDark11" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleDark11" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleDark11" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active" data-bs-interval="10000">
              <img src="../assets/products/meat.png" class="d-block w-100" alt="...">
              <div class="carousel-caption d-none d-md-block">
                <h5>First slide label</h5>
                <p>Some representative placeholder content for the first slide.</p>
              </div>
            </div>
            <div class="carousel-item" data-bs-interval="2000">
              <img src="../assets/products/meat.png" class="d-block w-100" alt="...">
              <div class="carousel-caption d-none d-md-block">
                <h5>Second slide label</h5>
                <p>Some representative placeholder content for the second slide.</p>
              </div>
            </div>
            <div class="carousel-item">
              <img src="../assets/products/meat.png" class="d-block w-100" alt="...">
              <div class="carousel-caption d-none d-md-block">
                <h5>Third slide label</h5>
                <p>Some representative placeholder content for the third slide.</p>
              </div>
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark11" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark11" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div id="bmr1" class="card w-75">
        <div class="card-body">
          <h5 class="card-title">Your BMR:</h5>
          <h1>{{ user.bmr }} calories</h1>
          <p class="card-text">You need to eat this number of calories per day to reach your weight goal.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CardUpdateForm from '@/components/CardUpdateForm'
export default {
  name: 'CardView',
  components: { CardUpdateForm },
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
  },
  Update () {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    }

    fetch('http://localhost:8080/v1/users/1', requestOptions)
      .then(response => response.json())
      .then(user => this.users.push(user))
      .catch(error => console.log('error', error))
  }
}
</script>

<style scoped>
.card-text {
  margin-top: 30px;
  margin-bottom: 60px;
}
h1{
  margin-top: 10px;
}
#carouselExampleDark {
  width: 350px;
  margin-left: 90px;
  margin-right: 40px;
}
#carouselExampleDark1 {
  width: 350px;
  margin-left: 40px;
}
#carouselExampleDark11 {
  width: 350px;
  margin-left: 40px;
}
#carouselExampleDark111 {
  width: 350px;
  margin-left: 90px;
  margin-right: 40px;
}
.row1{
  display: flex;
  align-items: center;
}
#bmr {
  margin-top: 30px;
  margin-left: 140px;
}
#bmr1 {
  margin-top: 30px;
  margin-left: 140px;
}
.carousel-caption {
  color: black;
  font-weight: 600;
}

.dark .card {
  background: #160519;
  color: white;
}

.dark .list-group-item {
  background: #160519;
  color: white;
}

.pr {
  animation: 3s show ease;
}

@keyframes show {
  from { opacity: 0;}
  to { opacity: 1;}
}

.button-38 {
  background-color: #FFFFFF;
  border: 0;
  border-radius: .5rem;
  box-sizing: border-box;
  color: #111827;
  font-family: "Inter var",ui-sans-serif,system-ui,-apple-system,system-ui,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
  font-size: .875rem;
  font-weight: 600;
  line-height: 1.25rem;
  padding: .75rem 1rem;
  text-align: center;
  text-decoration: none #D1D5DB solid;
  text-decoration-thickness: auto;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  cursor: pointer;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.button-38:hover {
  background-color: rgb(249,250,251);
}

.button-38:focus {
  outline: 2px solid transparent;
  outline-offset: 2px;
}

.button-38:focus-visible {
  box-shadow: none;
}
</style>
