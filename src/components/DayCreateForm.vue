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
        <p>Enter day, month and year of your day in order to create a new day.</p>
        <form class="row g-3 needs-validation" novalidate>
        <div class="input-group mb-2">
          <span class="input-group-text" id="day1">Day</span>
          <input type="number" class="form-control" v-model="day" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" required>
          <div class="invalid-feedback">
            Please provide a day.
          </div>
        </div>
        <div class="input-group mb-2">
          <span class="input-group-text" id="product-name1">Month</span>
          <input type="number" class="form-control" v-model="month" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" required>
          <div class="invalid-feedback">
            Please provide a month.
          </div>
        </div>
        <div class="input-group mb-2">
          <span class="input-group-text" id="product-kcal1">Year</span>
          <input type="number" class="form-control" v-model="year" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" required>
          <div class="invalid-feedback">
            Please provide a year.
          </div>
        </div>
        <div class="mt-5">
          <button class="btn btn-primary me-3" type="submit" @click="createDay">Create</button>
          <button class="btn btn-danger" type="reset" @click="this.day=0, this.month=0, this.year=0">Reset</button>
        </div>
        </form>
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
        <p>Geben Sie den Tag, den Monat und das Jahr Ihres Tages, um einen neuen Tag zu erstellen.</p>
        <form class="row g-3 needs-validation" novalidate>
        <div class="input-group mb-2">
          <span class="input-group-text" id="day">Tag</span>
          <input type="number" class="form-control" v-model="day" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
          <div class="invalid-feedback">
            Bitte geben Sie einen Tag an.
          </div>
        </div>
        <div class="input-group mb-2">
          <span class="input-group-text" id="product-name">Monat</span>
          <input type="number" class="form-control" v-model="month" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
          <div class="invalid-feedback">
            Bitte geben Sie einen Monat an.
          </div>
        </div>
        <div class="input-group mb-2">
          <span class="input-group-text" id="product-kcal">Jahr</span>
          <input type="number" class="form-control" v-model="year" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
          <div class="invalid-feedback">
            Bitte geben Sie ein Jahr an.
          </div>
        </div>
        <div class="mt-5">
          <button class="btn btn-primary me-3" type="submit" @click="createDay">Erstellen</button>
          <button class="btn btn-danger" type="reset" @click="this.day=0, this.month=0, this.year=0">Zurücksetzen</button>
        </div>
        </form>
      </div>
    </div></div>
</template>

<script>
export default {
  name: 'DayCreateForm',
  props: ['mode', 'language'],
  emits: ['created'],
  data () {
    return {
      day: '',
      month: '',
      year: 2023
    }
  },
  methods: {
    async createDay () {
      if (this.validate()) {
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
