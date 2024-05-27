<script>

import {defineComponent} from "vue";
import MyPizza from "@/components/MyPizza.vue";
import SliderBlock from "@/components/SliderBlock.vue";
import TheHeader from "@/components/TheHeader.vue";
import TheFooter from "@/components/TheFooter.vue";
export default defineComponent({
  components: {MyPizza,SliderBlock,TheHeader,TheFooter},
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
      this.aut = true;
    }
  },
  methods: {
    LogIn() {
      this.aut = true; // Assuming successful login
      this.logName = this.text;
      sessionStorage.setItem('username', this.logName);
    }
  }
})
</script>

<template>
  <TheHeader :log="logName" :authorization="aut"></TheHeader>
  <div class="all">
  <SliderBlock></SliderBlock>
  <MyPizza></MyPizza>
  </div>
  <TheFooter></TheFooter>
</template>

<style scoped>
.all{
  width: 100%;
  min-width:360px;
}

</style>