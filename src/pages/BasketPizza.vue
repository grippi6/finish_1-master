<script >
// import {Pizzas} from "@/main";

import TheHeader from "@/components/TheHeader.vue";
import TheFooter from "@/components/TheFooter.vue";
import CardBasket from "../components/CardBasket.vue";
export default {
  components:{TheHeader,TheFooter,CardBasket},
  data() {
    return {
      aut: false, // Assuming you're managing authentication state
      logName: "",
      text: ""
    };
  },
  created() {
    const savedUsername = sessionStorage.getItem('username');
    if (savedUsername) {
      this.logName = savedUsername;
      this.aut = true; // Set aut to true if username is found
    }
  },
  methods: {
    LogIn() {
      this.aut = true; // Assuming successful login
      this.logName = this.text;
      sessionStorage.setItem('username', this.logName);
    }
  }
}
</script>

<template>
  <TheHeader :log="logName" :authorization="aut"></TheHeader>
  <div class="d">
    <CardBasket ></CardBasket>
  </div>
  <TheFooter></TheFooter>
</template>

<style scoped>
  .d{
    padding-bottom: 39.1em;
  }
</style>