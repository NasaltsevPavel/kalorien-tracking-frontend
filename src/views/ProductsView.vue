<template>
  <NavBar></NavBar>
  <h1>Welcome to Products</h1>
  <div class="row row-cols-1 row-cols-md-4 g-4">
    <div class="col" v-for="product in products" :key="product.id">
      <div class="card" >
        <img :src="getAvatar(product)" class="card-img-top" :alt="product.name">
        <div class="card-body">
          <h5 class="card-title">{{ product.name }}</h5>
          <p class="card-text">{{ product.name }} hat {{ product.kcal }} Kcal</p>
        </div>
      </div>
    </div>
  </div>
<ProductCreateForm></ProductCreateForm>
</template>

<script>
import NavBar from '@/components/NavBar'
import ProductCreateForm from '@/components/ProductCreateForm'
export default {
  name: 'ProductsView',
  components: { ProductCreateForm, NavBar },
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
  }
}
</script>

<style scoped>
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
</style>
