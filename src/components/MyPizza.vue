<template>
  <div class="main_page">
    <div class="posts_pizza">
      <h5>Пицца</h5>
      <PizzaMenu />
      <h5>Напитки</h5>
      <DrinkMenu />
    </div>
  </div>
</template>

<script>





import PizzaMenu from '@/components/PizzaMenu.vue';
import DrinkMenu from "@/components/DrinkMenu.vue";
export default {
  components: {
    PizzaMenu,
    DrinkMenu
  },




};
</script>

<style>
 body{
   background:#229821;
 }
 .posts_pizza{
   width: 73%;
 }
.posts_pizza h5{
  font-size:96px;
  color: #FFFFFF;
  font-family: "overdoze sans";
  margin-bottom:5%;
  margin-top: 5%;
}
.posts_drink h5{
   font-size:96px;
   color: #FFFFFF;
   font-family: "overdoze sans";
   margin-bottom:5%;
   margin-top: 5%;
}
.pizza_post img{
  border-radius: 10px;
}
.drink_post img{
   border-radius: 10px;
}
.pizza_post p{
   color: #333333;
   font-size: 2.5em;
   font-family: "overdoze sans";
    margin-left:0.9em;
}
.drink_post p{
   color: #333333;
   font-size: 2.5em;
   font-family: "overdoze sans";
   margin-left:0.9em;
}
.pizza_post h1{
  font-family: Roboto;
   font-size: 1em;
   color: #333333;
  line-height: 25px;
  margin-left: 2em;
  margin-top: 1em;
}
.drink_post h1{
   font-family: Roboto;
   font-size: 1em;
   color: #333333;
   line-height: 25px;
   margin-left: 2em;
   margin-top: 1em;
}
.pizza_post button{
  background: #FF991F;
  color: #FFFFFF;
  font-size:1em;
  width:153px ;
  height: 3em;
  border-radius:10px;
  border: none;
}
 .drink_post button{
   background: #FF991F;
   color: #FFFFFF;
   font-size:1em;
   width:153px ;
   height: 3em;
   border-radius:10px;
   border: none;
 }
.posts_pizza h4{
  font-family: Roboto;
  font-size: 1.5em;
  color: #333333;
}
 .posts_drink h4{
   font-family: Roboto;
   font-size: 1.5em;
   color: #333333;
 }
</style>