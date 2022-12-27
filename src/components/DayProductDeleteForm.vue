<template>
  <div v-if="language === 'en'">
    <button class="button-38" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight9" aria-controls="offcanvasRight9">Delete products</button>

    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight9" aria-labelledby="offcanvasRightLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasRightLabel">Delete products</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <p>Enter the name of the product and the ID of the day to which the product should be deleted.</p>
        <form class="row g-3 needs-validation" novalidate>
        <div class="input-group mb-2">
          <span class="input-group-text" id="user-weight">Product name</span>
          <input type="text" class="form-control" v-model="productName" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" required>
          <div class="invalid-feedback">
            Please provide a product name.
          </div>
        </div>
        <div class="input-group mb-2">
          <span class="input-group-text" id="user-height">Day Id</span>
          <input type="number" class="form-control" v-model="id" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" required>
          <div class="invalid-feedback">
            Please provide a day ID.
          </div>
        </div>
        <div class="mt-5">
          <button class="btn btn-primary me-3" type="submit" @click="deleteProduct">Delete</button>
          <button class="btn btn-danger" type="reset" @click="this.productName='', this.id=0">Reset</button>
        </div>
        </form>
      </div>
    </div>
  </div>
  <div v-if="language === 'de'">
    <button class="button-38" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight19" aria-controls="offcanvasRight19">Delete products</button>

    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight19" aria-labelledby="offcanvasRightLabel1">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasRightLabel1">Text</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <p>Text</p>
        <div class="input-group mb-2">
          <span class="input-group-text" id="user-weight1">Produktname</span>
          <input type="text" class="form-control" v-model="productName" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
        </div>
        <div class="input-group mb-2">
          <span class="input-group-text" id="user-height1">Day Id</span>
          <input type="number" class="form-control" v-model="id" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
        </div>
        <div class="mt-5">
          <button class="btn btn-primary me-3" type="submit" @click="deleteProduct">Delete</button>
          <button class="btn btn-danger" type="reset" @click="this.productName='', this.id=0">Reset</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DayProductDeleteForm',
  props: ['mode', 'language'],
  data () {
    return {
      productName: '',
      id: ''
    }
  },
  methods: {
    async deleteProduct () {
      if (this.validate()) {
        const baseUrl = 'http://localhost:8080/v1'
        const productName1 = this.productName
        const idproduct = this.id
        const endpoint = baseUrl + '/days/' + idproduct + '/' + productName1
        const requestOptions = {
          method: 'DELETE',
          redirect: 'follow'
        }

        fetch(endpoint, requestOptions)
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
.dark .offcanvas{
  background-color: #160519;
  color: white;
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
