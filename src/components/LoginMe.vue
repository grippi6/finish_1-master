<template>
  <div>
    <TheHeader :log="logName" :authorization="aut"></TheHeader>
    <body class="demo1">
    <div class="main">
      <form class="bl_form" @submit.prevent="false">
        <input type="text" class="label_better" v-model="text" placeholder="Имя"  required>
        <input type="email" class="label_better" placeholder="Email"  required>
        <input type="password" class="label_better" v-model="password" placeholder="Пароль"  required>
        <input type="password" class="label_better" v-model="confirmPassword" placeholder="Подтверждение пароля"  required>
        <button @click="LogIn"  class="btn_aftor">Авторизироваться</button>
      </form>
    </div>
    </body>
    <TheFooter></TheFooter>
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";
import TheFooter from "@/components/TheFooter.vue";

export default {
  components: {
    TheHeader,
    TheFooter
  },
  data() {
    return {
      aut: false,
      logName: "",
      text: "",
      password: "",
      confirmPassword: ""
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
      if (this.password !== this.confirmPassword) {
        alert("Пароль и его подтверждение не совпадают.");
        return
      }
      this.aut = true;
      this.logName = this.text;
      sessionStorage.setItem('username', this.logName);
    },

  }
};
</script>

<style scoped>
.bl_form {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 80%;
  margin: 0 auto;
}

.btn_aftor {
  background: rgba(255, 255, 255, 0.70);
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
  border: none;
  padding: 10px 15px;
  border-radius: 25px;
  font-size: 1.5em;
  margin-top: 5%;
  cursor: pointer;
}

.bl_form input {
  background: rgba(255, 255, 255, 0.70);
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
  border: none;
  padding: 10px 15px;
  border-radius: 25px;
  font-size: 1.5em;
  margin-top: 5%;
}

body {
  width: 100%;
  -webkit-font-smoothing: antialiased;
  text-align: center;
}

@media (max-width: 768px) {
  .bl_form {
    width: 90%;
  }

  .btn_aftor {
    font-size: 1.2em;
  }

  .bl_form input {
    font-size: 1.2em;
  }
}
</style>