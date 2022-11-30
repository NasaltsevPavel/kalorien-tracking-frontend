<template>
  <div v-if="language === 'en'">
  <button class="button-38" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Update</button>

  <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="offcanvasRightLabel">Offcanvas right</h5>
      <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
      <p>Text</p>
      <div class="input-group mb-2">
        <span class="input-group-text" id="user-weight">Weight</span>
        <input type="number" class="form-control" v-model="weight" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
      </div>
      <div class="input-group mb-2">
        <span class="input-group-text" id="user-height">Height</span>
        <input type="number" class="form-control" v-model="height" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
      </div>
      <div class="input-group mb-2">
        <span class="input-group-text" id="user-age">Age</span>
        <input type="number" class="form-control" v-model="age" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
      </div>
      <div class="input-group mb-2">
        <span class="input-group-text" id="user-goalw">Goal weight</span>
        <input type="number" class="form-control" v-model="goalW" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
      </div>
      <div class="mt-5">
        <button class="btn btn-primary me-3" type="submit" @click="updateUser">Update</button>
        <button class="btn btn-danger" type="reset" @click="this.weight=0, this.height=0, this.age=0, this.goalW= 0">Reset</button>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'CardUpdateForm',
  props: ['mode', 'language'],
  data () {
    return {
      weight: 0,
      height: 0,
      age: 0,
      goalW: 0
    }
  },
  methods: {
    updateUser () {
      const myHeaders = new Headers()
      myHeaders.append('Content-Type', 'application/json');

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
