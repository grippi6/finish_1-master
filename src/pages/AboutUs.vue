<script>
import TheHeader from "@/components/TheHeader.vue";
import TheFooter from "@/components/TheFooter.vue";
export default {
  components:{TheHeader,TheFooter},
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
      this.aut = true;
      this.logName = this.text;
      sessionStorage.setItem('username', this.logName);
    }
  }
}
</script>

<template>
  <TheHeader :log="logName" :authorization="aut"></TheHeader>
  <div class="all_aboutus">
    <p>O нас</p>
    <div class="content">
      <div class="text_plus_img"><h3>PIZZAIOLO - это больше, чем просто место, где можно
        вкусно<br> поесть. Это атмосфера тепла и уюта, где каждый
        гость<br> чувствует себя как дома.</h3>
        <img src="../assets/img/Pizza/atmosphere_place%201.png" alt="#"></div>
      <div class="text_plus_img">
        <img src="../assets/img/Pizza/pizza_image_about.png" alt="#">
        <h3>Мы создали пространство, где можно<br> провести время с
        семьей и друзьями,<br> отметить важное событие или просто<br>
        насладиться вкусной пиццей в приятной <br>компании.</h3>
      </div>
      <div class="text_plus_img">
      <h3>Приходите к нам и почувствуйте себя<br> частью нашей
        большой семьи!</h3>
        <img src="../assets/img/Pizza/pizza_image_about_2.png" alt="#">
      </div>
    </div>
  </div>
  <TheFooter></TheFooter>
</template>

<style scoped>
.all_aboutus {
  margin-top: 5%;
  color: #FFFFFF;
  font-size: 3em;
  font-family: Roboto;
  width: 80%;
}

.content {
  border-radius: 10px;
  border: none;
  background: #FFFFFF;
  margin-bottom: 5%;
  margin-top: 3%;
  padding: 2%;
}

.text_plus_img {
  display: flex;
  align-items: center;
  padding-top: 2%;
}

.text_plus_img :last-child {
  padding-bottom: 2%;
}

.content h3 {
  color: black;
  font-size:32px;
  margin-bottom: 5%;
  line-height: 1.5em;
}

.adaptive-img {
  max-width: 100%; /* Изображение будет масштабироваться до ширины контейнера */
  height: auto; /* Поддерживает соотношение сторон, чтобы избежать искажений */
}
</style>