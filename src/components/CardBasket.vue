<template>

    <div v-for="el in pizza" :key="el.id" class="card">
      <div class="card-full">
        <img class="card-image" :src="el.imageUrl" alt="image">
        <div class="content">
            <h1>{{ el.name }} gwf</h1>
            <p>{{el.title}}</p>
            <p>{{el.price}}</p>
        </div>
        <div></div>
    </div>
      <div>
        <button class="delete_btn" @click="">-</button>
        <button class="plus_btn">+</button>

      </div>
    </div>



</template>


<script >

import {Pizzes} from "@/main.js";
export default{
     data(){
        return{
            pizza:[],
        }
     },
     methods:{
       async loadPizza(){
        this.pizza = Pizzes;
       }
     },
     mounted(){
       this.loadPizza();
     }

}
</script>

<style scoped>

.card {
    width: 50%;
    height: 50%;
    display: flex;
  flex-direction: row;
  margin-top: 10px;
  margin-bottom: 50px;
  background: #f9f9f9;
  border-right: 1px solid black;
  align-items: center;
}
.card-full{
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.content{
    display:flex;
    flex-direction: column;
  align-items: flex-start;
}

.card-image {
  width: 100px;
  height: 100px;
}
.delete_btn, .plus_btn {
  width: 20px;
  height: 20px;
}

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