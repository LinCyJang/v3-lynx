<template>
  <div class="carousel">
    <div class="slides">
      <div v-for="(slide, index) in slides" class="slide" :key="index" :style="{ transform: `translateX(-${index * 100}%)` }">
        <!-- {{ currentSlide }} -->
      </div>
    </div>
    <ul class="dots">
      <li v-for="dot in slides.length" :key="dot" class="dot-item" ></li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const slides = ref<string[]>(['Slide 1', 'Slide 2', 'Slide 3',  'Slide 4']);
const currentSlide = ref(0);

const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + slides.value.length) % slides.value.length;
};

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % slides.value.length;
};
</script>

<style scoped>
.dots{
  display: flex;
  justify-content: space-around;
}
.dots .dot-item{
  width: 15px;
  height: 15px;
  background: #999;
  border-radius: 50%;
  transition: ease-in-out 0.2s all;
}
.dots{
  margin-top: 30px ;
  width: 120px;
  width: 120px;
  height: 40px;
  align-items: center;
}
.dots .dot-item:hover{
  width: 30px;
  height: 30px;
  background: #e95c0a;
}
.carousel {
  box-sizing: border-box;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.slide{
  width: 400px;
  height: 400px;
  /* background: #fff; */
  border-radius: 50%;
  box-shadow: inset 1px 1px 10px 4px #999;
}
.slides {
  display: flex;
  transition: transform 0.5s;
  height: 400px;
  width: 400px;
}

.slide {
  flex: 0 0 100%;
}

button {
  position: absolute;
  bottom: -20%;
  transform: translateY(-50%);
  padding: 10px;
  cursor: pointer;
}

.prev {
  left: 0;
}

.next {
  right: 0;
}
</style>
