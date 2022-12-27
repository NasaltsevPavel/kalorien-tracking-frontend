<template>
  <div class="pr" v-if="language === 'en'">
    <h1>Welcome to Products</h1>
    <div class="productstext"><h5>On this page you can find information about all products.</h5>
      <h5> You can also add new products. Use the button "Create new product" on the end of this page.</h5>
    <h5>You can also use the button below to delete a product.</h5>
    <ProductDeleteForm v-bind:mode="mode" v-bind:language="language" ></ProductDeleteForm></div>
    <div class="row row-cols-1 row-cols-md-4 g-4">
      <div class="col" v-for="product in products" :key="product.id">
        <div class="card" >
          <img :src="getAvatar(product)" class="card-img-top" :alt="product.name">
          <div class="card-body">
            <h5 class="card-title">{{ product.name }}</h5>
            <p class="card-text">Portion of {{ product.name }} has {{ product.kcal }} calories</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="pr" v-if="language === 'de'">
    <h1>Willkommen auf der Produktseite</h1>
    <div class="productstext"><h5>Auf dieser Seite finden Sie Informationen zu allen Produkten.</h5>
      <h5> Sie können auch neue Produkte hinzufügen. Verwenden Sie den Button "Neues Produkt erstellen" am Ende dieser Seite.</h5>
      <h5>Sie können auch den  unten verwenden, um ein Produkt zu löschen.</h5>
      <ProductDeleteForm v-bind:mode="mode" v-bind:language="language" @deleted="addProduct"></ProductDeleteForm></div>
    <div class="row row-cols-1 row-cols-md-4 g-4">
      <div class="col" v-for="product in products" :key="product.id">
        <div class="card" >
          <img :src="getAvatar(product)" class="card-img-top" :alt="product.name">
          <div class="card-body">
            <h5 class="card-title">{{ product.name }}</h5>
            <p class="card-text">Eine Portion {{ product.name }} hat {{ product.kcal }} Kalorien</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="pc"><ProductCreateForm v-bind:mode="mode" v-bind:language="language" ></ProductCreateForm></div>

</template>

<script>
import ProductCreateForm from '@/components/ProductCreateForm'
import ProductDeleteForm from '@/components/ProductDeleteForm'
export default {
  name: 'ProductsView',
  components: { ProductDeleteForm, ProductCreateForm },
  props: ['mode', 'language'],
  data () {
    return {
      products: []
    }
  },
  methods: {
    getAvatar (product) {
      if (product.type === 'MEAT') {
        return require('../assets/products/meat.png')
      }
      if (product.type === 'FISH') {
        return require('../assets/products/fish.jpg')
      }
      if (product.type === 'VEGETABLES') {
        return require('../assets/products/VEGETABLES.jpg')
      }
      if (product.type === 'FRUIT') {
        return require('../assets/products/FRUIT.jpg')
      }
      if (product.type === 'DRINKS') {
        return require('../assets/products/drinks.jpg')
      }
      if (product.type === 'UNKNOWN') {
        return require('../assets/products/unknown.jpg')
      }
    }
  },
  mounted () {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    }

    fetch('http://localhost:8080/v1/products', requestOptions)
      .then(response => response.json())
      .then(result => result.forEach(product => {
        this.products.push(product)
      }))
      .catch(error => console.log('error', error))
  },
  addProduct () {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    }

    fetch('http://localhost:8080/v1/products', requestOptions)
      .then(response => response.json())
      .then(product => this.products.push(product))
      .catch(error => console.log('error', error))
  },
  deleteProduct () {
    console.log('YES')
  }
}
</script>

<style scoped>
.productstext {
margin-top: 30px;
  margin-bottom: 30px;
}
.card {
  transition: transform 0.6s;
}
.card:hover{
  transform: scale(0.9);
}
h1{
 margin-top: 10px;
}

.row {
  margin-right: 0px;
  margin-left: 5px;
  margin-top: 20px;
}
.dark .card-body {
  background: #160519;
}

.dark .card {
  background: #160519;
}

.pr {
  animation: 3s show ease;
}

@keyframes show {
  from { opacity: 0;}
  to { opacity: 1;}
}
</style>
