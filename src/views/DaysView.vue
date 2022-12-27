<template>
  <div class="pr" v-if="language === 'en'">
  <h1>Welcome to My days</h1>
  <div class="daystext"><h5>On this page you will find information about all created days.</h5>
    <h5>You can also add new days and add products to days. Use the button "Create new day" on the end of this page.</h5>
    <h5>You can also use the button below to delete a day.</h5>
  <DayDeleteForm v-bind:mode="mode" v-bind:language="language"></DayDeleteForm></div>
  <div class="row row-cols-1 row-cols-md-4 g-4">
    <div class="col" v-for="day in days" :key="day.id">
      <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">Date: {{day.date}}</h5>
          <h6 class="card-subtitle mb-2 text-muted">Day ID: {{day.id}}</h6>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Products: {{day.productsNames}}</li>
            <li class="list-group-item">Calories: {{ day.todayKcal }} / {{day.dayBmr}}</li>
            <li class="list-group-item"><DayProductAddForm v-bind:mode="mode" v-bind:language="language"></DayProductAddForm></li>
            <li class="list-group-item"><DayProductDeleteForm v-bind:mode="mode" v-bind:language="language"></DayProductDeleteForm></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  </div>
  <div class="pr" v-if="language === 'de'">
    <h1>Willkommen auf der Tagen Seite</h1>
    <div class="daystext"><h5>Auf dieser Seite finden Sie Informationen zu allen erstellten Tagen.</h5>
      <h5>Sie können auch neue Tage hinzufügen und Produkte zu Tagen hinzufügen. Verwenden Sie den Button "Neuen Tag erstellen" am Ende dieser Seite.</h5>
      <h5>Sie können auch die Schaltfläche unten verwenden, um einen Tag zu löschen.</h5>
      <DayDeleteForm v-bind:mode="mode" v-bind:language="language"></DayDeleteForm></div>
    <div class="row row-cols-1 row-cols-md-4 g-4">
      <div class="col" v-for="day in days" :key="day.id">
        <div class="card" style="width: 18rem;">
          <div class="card-body">
            <h5 class="card-title">Datum: {{day.date}}</h5>
            <h6 class="card-subtitle mb-2 text-muted">Day ID: {{day.id}}</h6>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Produkte: {{day.productsNames}}</li>
              <li class="list-group-item">Kalorien: {{ day.todayKcal }} / {{day.dayBmr}}</li>
              <li class="list-group-item"><DayProductAddForm v-bind:mode="mode" v-bind:language="language"></DayProductAddForm></li>
              <li class="list-group-item"><DayProductDeleteForm v-bind:mode="mode" v-bind:language="language"></DayProductDeleteForm></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <DayCreateForm v-bind:mode="mode" v-bind:language="language" ></DayCreateForm>
</template>

<script>
import DayCreateForm from '@/components/DayCreateForm'
import DayProductAddForm from '@/components/DayProductAddForm'
import DayDeleteForm from '@/components/DayDeleteForm'
import DayProductDeleteForm from '@/components/DayProductDeleteForm'
export default {
  name: 'DaysView',
  components: { DayProductDeleteForm, DayDeleteForm, DayProductAddForm, DayCreateForm },
  props: ['mode', 'language'],
  data () {
    return {
      days: []
    }
  },
  mounted () {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    }

    fetch('http://localhost:8080/v1/days', requestOptions)
      .then(response => response.json())
      .then(result => result.forEach(day => {
        this.days.push(day)
      }))
      .catch(error => console.log('error', error))
  },
  addDay () {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    }

    fetch('http://localhost:8080/v1/products', requestOptions)
      .then(response => response.json())
      .then(day => this.days.push(day))
      .catch(error => console.log('error', error))
  }
}
</script>

<style scoped>
h1{
  margin-top: 10px;
}
.daystext {
  margin-top: 30px;
  margin-bottom: 50px;
}

.row {
  margin-right: 0px;
  margin-left: 5px;
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
</style>
