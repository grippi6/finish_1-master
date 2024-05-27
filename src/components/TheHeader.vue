<template>
  <div class="all_header">
    <div id="nav">
      <p><router-link class="test" to="/">PIZZAIOLO</router-link></p>
      <h1><router-link class="nav" to="/contacts">Контакты</router-link></h1>
      <h1><router-link class="nav" to="/about">О нас</router-link></h1>
      <router-link class="logins" to="/login">
        <img v-if="authorization" src="../assets/img/Pizza/kot_finish.jpg" alt="Logged In Icon" width="50px" height="50px" >
        <img v-else src="../assets/img/Pizza/lk.png" alt="Login Icon">
        <p v-if="authorization" class="login-text">{{ log }}</p>
        <p v-else class="login-text">Войти</p>
      </router-link>
      <router-link to="/basket" class="dropdown">
        <button>Корзина</button>
        <div class="dropdown-content">

        </div>
      </router-link>
      <h4>+7 3822 990 255</h4>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    authorization: {
      type: Boolean,
      required: true
    },
    log: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>
.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

.dropdown:hover .dropdown-content {
  display: block;
}
.all_header {
  width: 100%;
  background: #FFFFFF;
}
.test {
  font-family: "overdoze sans";
  align-items: center;
  font-size: 96px;
  color: black;
}
.logins p{
  align-items: center;
  display: flex;
}
.test:hover {
  color: #FF991F;
  transition: 0.9s ease-in-out;
}
#nav {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  height: 126px;
  background: #FFFFFF;
  align-items: center;
  justify-content: space-between;

}
.nav {
  white-space: nowrap;
  color: #333333;
  font-size: 24px;
  font-family: Roboto;
  position: relative;
}
.nav:hover {
  color: #FF991F;
  transition: 0.5s ease-in-out;
}
#nav p {
  text-decoration: none;
}
#nav h4 {
  font-size: 24px;
  font-family: "overdoze sans";
}
#nav button {
  width: 153px;
  height: 48px;
  border-radius: 10px;
  border: none;
  background: #ff991f;
  color: #FFFFFF;
  font-size: 16px;
  cursor: pointer;
}
p {
  color: #333333;
  font-size: 24px;
  font-family: Roboto;

}
.logins {
  display: flex;
  justify-content: space-between;
}
@media only screen and (max-width: 768px) {
  .test {
    font-size: 48px;
  }
  .nav {
    font-size: 18px;
  }
  #nav button {
    width: 120px;
    font-size: 14px;
  }
}
</style>