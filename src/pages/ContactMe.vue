<script>
import MapOne from "@/components/MapOne.vue";
import MapTwo from "@/components/MapTwo.vue";
import TheHeader from "@/components/TheHeader.vue";
import TheFooter from "@/components/TheFooter.vue";
export default {
  components:{MapOne,MapTwo,TheHeader,TheFooter},
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
  <div class="filials">
    <p>Контакты</p>
    <div class="filials_one">
      <MapOne></MapOne>
      <div class="text">
        <div class="zagolovki">Наш адресс</div>
        <div class="op_text">Комсомольский проспект,13Б ,ТРЦ<br> «Изумрудный город»,2 этаж</div>
        <div class="zagolovki">Режим работы</div>
        <div class="op_text">пн-чт<br> c 9:00 до 22:00<br> пт-вс <br>с 9:00 до 22:00</div>
      </div>
  </div>
    <div class="filials_two">
      <MapTwo></MapTwo>
      <div class="text">
        <div class="zagolovki">Наш адресс</div>
        <div class="op_text">ул. Генерала Кузнецова, д. 22, ТРЦ<br> «Миля», 3 этаж</div>
        <div class="zagolovki">Режим работы</div>
        <div class="op_text">пн-чт<br> c 9:00 до 22:00<br> пт-вс <br>с 9:00 до 22:00</div>
      </div>
    </div>
  </div>
  <TheFooter></TheFooter>
</template>

<style>
.filials {
  width: 80%;
  margin-top: 5%;
  margin-bottom: 5%;
}

.text {
  margin-right: 23em;
  height: 410px;
  margin-left: 5em;
  font-size: 1em;
}

.zagolovki {
  color: #000000;
  font-family: Roboto;
  font-size: 2.5em;
}

.zagolovki:first-child {
  color: #000000;
  font-family: Roboto;
  font-size: 2.5em;
  margin-top: 2.5em;
}

.op_text {
  font-size: 1.5em;
  font-family: Roboto;
  color: #5B5B5B;
  margin-top: 1em;
  margin-bottom: 1em;
  hyphens: none;
}

.filials p {
  color: #FFFFFF;
  font-size: 6em;
  font-family: Roboto;
}

.filials_one,
.filials_two {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border: none;
  border-radius: 10px;
  background: #FFFFFF;
  margin-top: 3%;
  width: 100%;
  max-width: 1920px;
  height: 666px;
}

@media (max-width: 1200px) {
  .text {
    margin-right: 10em;
  }
}

@media (max-width: 992px) {
  .text {
    margin-right: 5em;
  }
}

@media (max-width: 768px) {
  .text {
    margin-right: 0;
    margin-left: 0;
  }
}

@media (max-width: 576px) {
  .filials {
    width: 90%;
  }
  .filials_one,
  .filials_two {
    flex-direction: column;
    height: auto;
  }
  .text {
    margin: 0;
    height: auto;
  }
}
</style>