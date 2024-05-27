<template>
  <div class="drink-menu">
    <div class="drink-item" v-for="drink in drinks" :key="drink.id">
      <img :src="drink.imageUrl" :alt="drink.name" class="drink-image">
      <div class="drink-details">
        <h3>{{ drink.name }}</h3>
        <p>{{ drink.title }}</p>
        <div class="button_price">
          <button>В корзину</button>
          <h1>{{ drink.price }}₽</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drinks: []
    };
  },
  mounted() {
    this.loadDrinkMenu();
  },
  methods: {
    async loadDrinkMenu() {
      try {
        const response = await fetch('https://5fd6e4ecd3393440.mokky.dev/cart-drinks');
        const data = await response.json();
        this.drinks = data;
      } catch (error) {
        console.error('Failed to load drink menu:', error);
      }
    }
  }
};
</script>

<style>
.drink-image {
  width: 100%;
  height: 240px;
  border-radius: 10px;
  object-fit: cover;
}

.drink-item {
  background: #FFFFFF;
  border-radius: 10px;
  width: 100%;
  box-sizing: border-box;
  padding: 15px;
}

.drink-menu {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); /* Use auto-fit for responsive columns */
  gap:120px 40px;
}

.drink-details h3 {
  margin-top: 10px;
  font-family: "overdoze sans";
  font-size: 24px;
  color: #333333;
}

.drink-details p {
  height: 50px;
  font-family: Roboto;
  font-size: 14px;
  line-height: 1.5;
  margin-top: 5px;
}

.drink-details {
  width: 100%;
}

.button_price {
  display: flex;
  margin-top: 10%;
  margin-bottom: 10px;
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
}

.button_price h1 {
  font-size: 20px;
  font-family: Roboto;
  color: #333333;
  margin-left: 10px;
}
</style>