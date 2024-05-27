<template>
   
  <div class="pizza-menu">

    <div class="pizza-item" v-for="pizza in pizzas" :key="pizza.id">
      <img :src="pizza.imageUrl" :alt="pizza.name" class="pizza-image">
      <div class="pizza-details">
        <h3>{{ pizza.name }}</h3>
        <p>{{ pizza.title }}</p>
        <div class="button_price">
          <button  :id="pizza.id" @click="AddPizzaBasket($event.target.id)">В корзину</button>
          <h1>{{ pizza.price }} ₽</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script >

import {addPizza} from "@/main.js";





export default {
  data() {
    return {
      pizzas: []
    }
  },
  mounted() {
    this.loadPizzaMenu();
  },

  methods: {
AddPizzaBasket(id){
   addPizza(this.pizzas[id-1].name,this.pizzas[id-1].title,this.pizzas[id-1].price,this.pizzas[id-1].imageUrl);
},

    async loadPizzaMenu() {
      try {
        const response = await fetch('https://5fd6e4ecd3393440.mokky.dev/cart');
        const data = await response.json();
        this.pizzas = data;
      } catch (error) {
        console.error('Failed to load pizza menu:', error);
      }
    },
  }
};
</script>

<style>
.pizza-image {
  width: 100%;
  height: 240px;
  border-radius: 10px;
  object-fit: cover;
}

.pizza-item {
  background: #FFFFFF;
  border-radius: 10px;
  width: 100%;
  box-sizing: border-box;
  padding: 15px;
}

.pizza-menu {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 120px 40px;
}

.pizza-details h3 {
  margin-top: 10px;
  font-family: "overdoze sans";
  font-size: 24px;
  color: #333333;
}

.pizza-details-details p {
  height:200px;
  font-family: Roboto;
  font-size: 14px;
  line-height: 1.5;
  margin-top: 5px;
}

.pizza-details {
  width: 100%;
}

.button_price {
  display: flex;
  margin-top: 4%;
  margin-bottom: 5%;
  align-items: center;
}

.button_price button {
  background: #FF991F;
  border-radius: 10px;
  border: none;
  width: 100%;
  height: 40px;
  color: #FFFFFF;
  font-size: 14px;
  cursor: pointer;
}

.button_price h1 {
  font-size: 20px;
  font-family: Roboto;
  color: #333333;
  margin-left: 10px;
}
</style>