<template>
  <div v-if="language === 'en'">
    <div class="fixed-bottom"><a href="/" class="bn13" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
    Create new product</a></div>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasRightLabel">Create new product</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <p>Enter the name of the product and number of calories in it, as well as select the appropriate type of your product
        in order to create a new product.</p>
        <form class="row g-3 needs-validation" novalidate>
        <div class="input-group mb-2">
          <span class="input-group-text" id="product-name1">Name</span>
          <input type="text" class="form-control" v-model="name" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" required>
          <div class="invalid-feedback">
            Please provide a name.
          </div>
        </div>
        <div class="input-group mb-2">
          <span class="input-group-text" id="product-kcal1">Kcal</span>
          <input type="number" class="form-control" v-model="kcal" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" required>
          <div class="invalid-feedback">
            Please provide a kcal number.
          </div>
        </div>
        <div class="input-group mb-2">
          <label class="input-group-text" for="product-type">Product type</label>
          <select class="form-select" id="product-type1" v-model="type" required>
            <option selected>Choose...</option>
            <option value="FRUIT">Fruit</option>
            <option value="VEGETABLES">Vegetables</option>
            <option value="DRINKS">Drinks</option>
            <option value="MEAT">Meat</option>
            <option value="FISH">Fish</option>
            <option value="UNKNOWN">Others</option>
          </select>
          <div class="invalid-feedback">
            Please choose a type.
          </div>
        </div>
        <div class="mt-5">
          <button class="btn btn-primary me-3" type="submit" @click="createProduct">Create</button>
          <button class="btn btn-danger" type="reset" @click="this.name='', this.kcal='', this.type=''">Reset</button>
        </div>
        </form>
      </div>
    </div></div>
  <div v-if="language === 'de'"><div class="fixed-bottom"><a href="/" class="bn13" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
    Neues Produkt erstellen</a></div>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasRightLabel">Neues Produkt erstellen</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <p>Geben Sie den Namen des Produkts und die Anzahl der darin enthaltenen Kalorien ein und wählen Sie den entsprechenden Typ Ihres Produkts aus
          um ein neues Produkt zu erstellen.</p>
        <form class="row g-3 needs-validation" novalidate>
        <div class="input-group mb-2">
          <span class="input-group-text" id="product-name">Name</span>
          <input type="text" class="form-control" v-model="name" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" required>
          <div class="invalid-feedback">
            Bitte geben Sie einen Namen an.
          </div>
        </div>
        <div class="input-group mb-2">
          <span class="input-group-text" id="product-kcal">Kcal</span>
          <input type="number" class="form-control" v-model="kcal" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" required>
          <div class="invalid-feedback">
            Bitte geben Sie eine kcal-Zahl an.
          </div>
        </div>
        <div class="input-group mb-2">
          <label class="input-group-text" for="product-type">Product type</label>
          <select class="form-select" id="product-type" v-model="type" required>
            <option selected>Choose...</option>
            <option value="FRUIT">Obst</option>
            <option value="VEGETABLES">Gemüse</option>
            <option value="DRINKS">Getränk</option>
            <option value="MEAT">Fleisch</option>
            <option value="FISH">Fisch</option>
            <option value="UNKNOWN">Anderes</option>
          </select>
          <div class="invalid-feedback">
            Bitte wählen Sie einen Typ aus.
          </div>
        </div>
        <div class="mt-5">
          <button class="btn btn-primary me-3" type="submit" @click="createProduct">Create</button>
          <button class="btn btn-danger" type="reset" @click="this.name='', this.kcal='', this.type=''">Reset</button>
        </div>
        </form>
      </div>
    </div></div>
</template>

<script>
export default {
  name: 'ProductCreateForm',
  props: ['mode', 'language'],
  emits: ['created'],
  data () {
    return {
      name: '',
      kcal: '',
      type: ''
    }
  },
  methods: {
    async createProduct () {
      if (this.validate()) {
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
    },
    validate () {
      let valid = true
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      const forms = document.querySelectorAll('.needs-validation')

      // Loop over them and prevent submission
      Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
          if (!form.checkValidity()) {
            valid = false
            event.preventDefault()
            event.stopPropagation()
          }

          form.classList.add('was-validated')
        }, false)
      })
      return valid
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
