<script setup>
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}
</script>

<template>
  <footer>
    <div id="nav">
      <p @click="scrollToTop"><router-link class="test" to="/main">PIZZAIOLO</router-link></p>
      <h1 @click="scrollToTop"><router-link class="nav_footer" to="/contacts">Контакты</router-link></h1>
      <h1 @click="scrollToTop"><router-link class="nav_footer" to="/about">О нас</router-link></h1>
      <h1>+7 800 555 35 35</h1>
      <a href="https://vk.com/son_maminojpodrugi"><img src="../assets/img/Pizza/vk.png" alt="#"></a>
    </div>
  </footer>
</template>
<style scoped>
footer {
  display: flex;
  background: #FFFFFF;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap; /* Разрешаем перенос элементов на новую строку */
  padding: 20px 0; /* Добавляем внутренние отступы сверху и снизу */
  margin-top: 5%;
}

#nav{
  width: 98%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap; /* Разрешаем перенос элементов на новую строку */
}

.nav_footer {
  color: #198F30;
  font-size: 16px; /* Уменьшаем размер шрифта */
  font-family: Roboto;
}

.test {
  font-family: "overdoze sans";
  font-size: 24px;
  color: black;
  margin-right: 20px;
}

 nav p {
  font-family: "overdoze sans";
  font-size: 1em;
  margin-right: 20px;
}

footer h1 {
  color: #198F30;
  font-size: 16px; /* Уменьшаем размер шрифта */
  font-family: Roboto;
}

/* Стили для изображения VK */
#nav img {
  width: 24px; /* Устанавливаем ширину изображения */
  height: auto; /* Поддерживаем соотношение сторон */
}

@media (max-width: 768px) {
  .test, p, footer h1
  {
    font-size: 14px; /* Уменьшаем размер шрифта на мобильных устройствах */
  }
  #nav {
    flex-direction: column; /* Изменяем направление расположения элементов на столбец */
    align-items: center; /* Выравниваем элементы по центру */
  }

  .test,
  p {
    margin-bottom: 10px; /* Добавляем отступ снизу между элементами */
  }

  footer h1 {
    margin-bottom: 10px; /* Добавляем отступ снизу между элементами */
  }
}
</style>