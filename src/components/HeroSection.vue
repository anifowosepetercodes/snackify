<template>
  <div class="carousel-wrapper">
    <swiper
      :modules="swiperModules"
      :slides-per-view="1"
      :loop="true"
      :autoplay="{ delay: 2000, disableOnInteraction: false }"
      :speed="1000"
      navigation
      class="hero-swiper"
    >
      <swiper-slide v-for="(img, index) in images" :key="index">
        <img :src="img" class="slide-img" />
      </swiper-slide>
    </swiper>
  </div>
</template>


<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

export default {
  name: 'HeroSection',
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      images: [
        require('@/assets/hero-img1.jpg'),
        require('@/assets/hero-img2.jpg'),
        require('@/assets/img5.jpg'),
      ],
      swiperModules: [Navigation, Autoplay],
    };
  },
};
</script>



<style>
.carousel-wrapper {
  position: relative;
  max-width: 100%;
  overflow: hidden;
}

.slide-img {
  width: 100%;
  height: 600px;
  object-fit: cover;
  display: block;
}

.swiper-button-prev,
.swiper-button-next {
  color: white;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 50%;
  padding: 15px 27px;
}
</style>
