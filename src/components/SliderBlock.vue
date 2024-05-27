<template>
  <div class="container-Slider-Block">
    <button @click="slideLeft" ref="rowLeft">
      <img src="../assets/img/Pizza/Background+Shadow%20(1).png" alt="rowLeft" id="1"/>
    </button>
    <img :src="currentImage" alt="#">
    <button @click="slideRight" ref="rowRight">
      <img src="../assets/img/Pizza/Background+Shadow.png" alt="rowRight" id="2"/>
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      index: 0,
      interval: null,
      LinkItems: [
        'img/Pizza/pizza_for_slider.png',
        'img/Pizza/peperonni_1.png',
        'img/Pizza/olive.png',
      ],
    };
  },
  computed: {
    currentImage() {
      return require('@/assets/' + this.LinkItems[this.index]);
    },
  },
  created() {
    this.startSlider();
  },
  methods: {
    startSlider() {
      this.interval = setInterval(this.slideRight, 10000);
    },
    slideRight() {
      this.index = (this.index + 1) % this.LinkItems.length;
    },
    slideLeft() {
      this.index = (this.index - 1 + this.LinkItems.length) % this.LinkItems.length;
    },
  },
};
</script>

<style scoped>
#1,#2{}
.container-Slider-Block{
  width: 80%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 5em;
  margin-bottom: 3em;
  border-radius: 100px;
  transition: 1s ease-in-out;
}

.container-Slider-Block img {
  border-radius: 30px;
  display: flex;
  width: 90%;
  user-select: none;
}

.container-Slider-Block p {
  margin-right: 35em;
  margin-left: 35em;
}

.container-Slider-Block button {
  background: none;
  border: none;
  cursor: grabbing;
}


</style>