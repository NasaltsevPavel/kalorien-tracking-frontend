<template>
  <div v-if="language === 'en'">
  <!-- Button trigger modal -->
  <button type="button" class="button-38" data-bs-toggle="modal" data-bs-target="#exampleModal">
    Delete Product
  </button>
  <!-- Modal -->
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <form class="row g-3 needs-validation" novalidate>
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Delete Product</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <p>Write the name of product you want to delete and confirm the deletion with the button</p>
          <div class="input-group mb-2">
            <span class="input-group-text" id="user-age">Name</span>
            <input type="text" class="form-control" v-model="name" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" required>
            <div class="invalid-feedback">
              Please provide a name.
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="submit" class="btn btn-danger" @click="deleteProduct">Delete product</button>
        </div>
        </form>
      </div>
    </div>
  </div>
  </div>
  <div v-if="language === 'de'">
    <!-- Button trigger modal -->
    <button type="button" class="button-38" data-bs-toggle="modal" data-bs-target="#exampleModal1">
      Produkt löschen
    </button>
    <!-- Modal -->
    <div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel1" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <form class="row g-3 needs-validation" novalidate>
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel1">Produkt löschen</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <p>Write the name of product you want to delete and confirm the deletion with the button</p>
            <div class="input-group mb-2">
              <span class="input-group-text" id="user-age1">Name</span>
              <input type="text" class="form-control" v-model="name" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" required>
              <div class="invalid-feedback">
                Please provide a name.
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button  class="btn btn-danger" type="submit" @click="deleteProduct">Delete product</button>
          </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductDeleteForm',
  props: ['mode', 'language'],
  emits: ['deleted'],
  data () {
    return {
      name: ''
    }
  },
  methods: {
    async deleteProduct () {
      if (this.validate()) {
        const baseUrl = 'http://localhost:8080/v1'
        const name = this.name
        const endpoint = baseUrl + '/products/' + name
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

.dark .modal-content{
  background-color: #160519;
  color: white;
}

.button-38 {
  margin-top: 10px;
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
