<template>
  <div v-if="language === 'en'">
  <button class="button-38" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight1" aria-controls="offcanvasRight1">Update</button>

  <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight1" aria-labelledby="offcanvasRightLabel1">
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="offcanvasRightLabel1">Update your data</h5>
      <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
      <p>Enter new data below to update your card.</p>
      <form class="row g-3 needs-validation" novalidate>
      <div class="input-group mb-2">
        <span class="input-group-text" id="user-weight">Weight</span>
        <input type="number" class="form-control" v-model="weight" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" required>
        <div class="invalid-feedback">
          Please provide a weight number.
        </div>
      </div>
      <div class="input-group mb-2">
        <span class="input-group-text" id="user-height">Height</span>
        <input type="number" class="form-control" v-model="height" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" required>
        <div class="invalid-feedback">
          Please provide a height number.
        </div>
      </div>
      <div class="input-group mb-2">
        <span class="input-group-text" id="user-age">Age</span>
        <input type="number" class="form-control" v-model="age" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" required>
        <div class="invalid-feedback">
          Please provide a age number.
        </div>
      </div>
      <div class="input-group mb-2">
        <span class="input-group-text" id="user-goalw">Goal weight</span>
        <input type="number" class="form-control" v-model="goalW" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" required>
        <div class="invalid-feedback">
          Please provide a goal weight number.
        </div>
      </div>
      <div class="mt-5">
        <button class="btn btn-primary me-3" type="submit" @click="updateUser">Update</button>
        <button class="btn btn-danger" type="reset" @click="this.weight=0, this.height=0, this.age=0, this.goalW= 0">Reset</button>
      </div>
      </form>
    </div>
  </div>
  </div>
  <div v-if="language === 'de'">
    <button class="button-38" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight1" aria-controls="offcanvasRight1">Update</button>

    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight1" aria-labelledby="offcanvasRightLabel1">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasRightLabel1">Update your data</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <p>Geben Sie unten neue Daten ein, um Ihre Karte zu aktualisieren.</p>
        <form class="row g-3 needs-validation" novalidate>
          <div class="input-group mb-2">
            <span class="input-group-text" id="user-weight1">Gewicht</span>
            <input type="number" class="form-control" v-model="weight" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" required>
            <div class="invalid-feedback">
              Bitte geben Sie ihres Gewicht an.
            </div>
          </div>
          <div class="input-group mb-2">
            <span class="input-group-text" id="user-height1">Größe</span>
            <input type="number" class="form-control" v-model="height" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" required>
            <div class="invalid-feedback">
              Bitte geben Sie ihre Größe an.
            </div>
          </div>
          <div class="input-group mb-2">
            <span class="input-group-text" id="user-age1">Alter</span>
            <input type="number" class="form-control" v-model="age" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" required>
            <div class="invalid-feedback">
              Bitte geben Sie ihres Alter an.
            </div>
          </div>
          <div class="input-group mb-2">
            <span class="input-group-text" id="user-goalw1">Zielgewicht</span>
            <input type="number" class="form-control" v-model="goalW" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" required>
            <div class="invalid-feedback">
              Bitte geben Sie ihres Zielgewicht an.
            </div>
          </div>
          <div class="mt-5">
            <button class="btn btn-primary me-3" type="submit" @click="updateUser">Aktualisieren</button>
            <button class="btn btn-danger" type="reset" @click="this.weight=0, this.height=0, this.age=0, this.goalW= 0">Zurücksetzen</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardUpdateForm',
  props: ['mode', 'language'],
  emits: ['updated'],
  data () {
    return {
      weight: '',
      height: '',
      age: '',
      goalW: ''
    }
  },
  methods: {
    async updateUser () {
      if (this.validate()) {
        const myHeaders = new Headers()
        myHeaders.append('Content-Type', 'application/json')

        const raw = JSON.stringify({
          weight: this.weight,
          height: this.height,
          age: this.age,
          goalW: this.goalW
        })

        const requestOptions = {
          method: 'PUT',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        }

        fetch('http://localhost:8080/v1/users/1', requestOptions)
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
