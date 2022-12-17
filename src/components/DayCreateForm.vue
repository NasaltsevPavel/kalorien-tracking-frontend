<template>
  <div v-if="language === 'en'">
    <div class="fixed-bottom"><a href="/" class="bn13" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight1" aria-controls="offcanvasRight1">
      Create new day</a></div>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight1" aria-labelledby="offcanvasRightLabel1">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasRightLabel1">Create new day</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <p>Enter the name of the product and number of calories in it, as well as select the appropriate type of your product
          in order to create a new product.</p>
        <div class="input-group mb-2">
          <span class="input-group-text" id="day1">Day</span>
          <input type="number" class="form-control" v-model="day" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
        </div>
        <div class="input-group mb-2">
          <span class="input-group-text" id="product-name1">Month</span>
          <input type="number" class="form-control" v-model="month" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
        </div>
        <div class="input-group mb-2">
          <span class="input-group-text" id="product-kcal1">Year</span>
          <input type="number" class="form-control" v-model="year" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
        </div>
        <div class="mt-5">
          <button class="btn btn-primary me-3" type="submit" @click="createDay">Create</button>
          <button class="btn btn-danger" type="reset" @click="this.day=0, this.month=0, this.year=0">Reset</button>
        </div>
      </div>
    </div></div>
  <div v-if="language === 'de'"><div class="fixed-bottom"><a href="/" class="bn13" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
    Neuen Tag erstellen</a></div>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasRightLabel">Neuen Tag erstellen</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <p>Geben Sie den Namen des Produkts und die Anzahl der darin enthaltenen Kalorien ein und wählen Sie den entsprechenden Typ Ihres Produkts aus
          um ein neues Produkt zu erstellen.</p>
        <div class="input-group mb-2">
          <span class="input-group-text" id="day">Tag</span>
          <input type="number" class="form-control" v-model="day" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
        </div>
        <div class="input-group mb-2">
          <span class="input-group-text" id="product-name">Monat</span>
          <input type="number" class="form-control" v-model="month" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
        </div>
        <div class="input-group mb-2">
          <span class="input-group-text" id="product-kcal">Jahr</span>
          <input type="number" class="form-control" v-model="year" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
        </div>
        <div class="mt-5">
          <button class="btn btn-primary me-3" type="submit" @click="createDay">Create</button>
          <button class="btn btn-danger" type="reset" @click="this.day=0, this.month=0, this.year=0">Reset</button>
        </div>
      </div>
    </div></div>
</template>

<script>
export default {
  name: 'DayCreateForm',
  props: ['mode', 'language'],
  data () {
    return {
      day: 0,
      month: 0,
      year: 2023
    }
  },
  methods: {
    createDay () {
      const myHeaders = new Headers()
      myHeaders.append('Content-Type', 'application/json')

      const raw = JSON.stringify({
        day: this.day,
        month: this.month,
        year: this.year
      })

      const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      }

      fetch('http://localhost:8080/v1/days', requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error))
    }
  }
}
</script>

<style scoped>
.input-group {
  margin-top: 30px;
}
.fixed-bottom{
  margin: 20px;
}

.bn13 {
  display: inline-block;
  padding: 0.65em 1.6em;
  border: 3px solid #2c3e50;
  margin: 0 0.3em 0.3em 0;
  border-radius: 0.1em;
  box-sizing: border-box;
  text-decoration: none;
  font-family: "Roboto", sans-serif;
  font-weight: 550;
  color: #2c3e50;
  text-align: center;
  transition: all 0.2s;
  animation: bn13bouncy 5s infinite linear;
  position: relative;
}
.dark .bn13 {
  border: 3px solid #852d91;
  color: #852d91;
}
.bn13:hover {
  background-color: #2c3e50;
  color: white;
}
.dark .bn13:hover {
  background-color: #160519;
  color: white;
}
.dark .offcanvas{
  background-color: #160519;
  color: white;
}

@keyframes bn13bouncy {
  0% {
    top: 0em;
  }
  40% {
    top: 0em;
  }
  43% {
    top: -0.9em;
  }
  46% {
    top: 0em;
  }
  48% {
    top: -0.4em;
  }
  50% {
    top: 0em;
  }
  100% {
    top: 0em;
  }
}
</style>
