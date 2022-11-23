<template>
  <div class="fixed-bottom"><a href="/" class="bn13" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
    Create new product</a></div>
  <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="offcanvasRightLabel">Offcanvas text</h5>
      <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
      <p>Text</p>
      <div class="input-group mb-2">
        <span class="input-group-text" id="product-name">Name</span>
        <input type="text" class="form-control" v-model="name" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
      </div>
      <div class="input-group mb-2">
        <span class="input-group-text" id="product-kcal">Kcal</span>
        <input type="number" class="form-control" v-model="kcal" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
      </div>
      <div class="input-group mb-2">
        <label class="input-group-text" for="product-type">Product type</label>
        <select class="form-select" id="product-type" v-model="type">
          <option selected>Choose...</option>
          <option value="FRUIT">Fruit</option>
          <option value="VEGETABLES">Vegetables</option>
          <option value="DRINKS">Drinks</option>
          <option value="MEAT">Meat</option>
          <option value="FISH">Fish</option>
          <option value="UNKNOWN">Others</option>
        </select>
      </div>
      <div class="mt-5">
        <button class="btn btn-primary me-3" type="submit" @click="createProduct">Create</button>
        <button class="btn btn-danger" type="reset">Reset</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductCreateForm',
  data () {
    return {
      name: '',
      kcal: 0,
      type: ''
    }
  },
  methods: {
    createProduct () {
      const myHeaders = new Headers()
      myHeaders.append('Content-Type', 'application/json')

      const raw = JSON.stringify({
        name: this.name,
        kcal: this.kcal,
        type: this.type
      })

      const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      }

      fetch('http://localhost:8080/v1/products', requestOptions)
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

.bn13:hover {
  background-color: #2c3e50;
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
