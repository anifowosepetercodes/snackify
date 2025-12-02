<template>
  <h1 class="categories-heading"> SHOP BY CATEGORIES </h1>

  <div class="category-slider">
    <!-- Left Arrow -->
    <button class="arrow left" @click="scrollLeft">‹</button>

    <!-- Categories Track -->
    <div class="slider-container" ref="slider">
      <div class="slider-track">
        <div
          v-for="(category, index) in categories"
          :key="index"
          class="category-item">
          <div class="category-circle">
            <img :src="category.image" alt="category" />
          </div>
          <p>{{ category.name }}</p>
        </div>
      </div>
    </div>

    <!-- Right Arrow -->
    <button class="arrow right" @click="scrollRight">›</button>
  </div>
</template>

<script>
export default {
  name: "CategoriesSlider",
  data() {
    return {
      categories: [
        { name: "CHIPS & CRACKERS", image: require('@/assets/img23.jpg') },
        { name: "BISCUITS & COOKIES", image: require('@/assets/img28.jpg') },
        { name: "CANDY & SWEETS", image: require('@/assets/img27.jpg') },
        { name: "CHOCOLATE", image: require('@/assets/img13.jpg') },
        { name: "DRINKS & BEVERAGES", image: require('@/assets/img19.jpg') },
        { name: "PASTRIES & CAKE", image: require('@/assets/img24.jpg') },
        { name: "POPCORN & CORN SNACKS", image: require('@/assets/img29.jpg') }
      ]
    };
  },
  methods: {
    scrollLeft() {
      this.$refs.slider.scrollBy({
        left: -this.$refs.slider.offsetWidth / 5,
        behavior: "smooth"
      });
    },
    scrollRight() {
      this.$refs.slider.scrollBy({
        left: this.$refs.slider.offsetWidth / 5,
        behavior: "smooth"
      });
    }
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@600;700&display=swap');
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css');
:root {
  --orange: #ff6b3d;
  --orange-dark: #e65224;
  --white: #ffffff;
  --gray: #f6f6f6;
  --text-dark: #1e1e1e;
}
</style>

<style scoped>
.categories-heading {
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  color: #ff6600; /* Your orange theme color */
  margin: 2rem 0 1.5rem;
  position: relative;
  letter-spacing: 2px;
}

.categories-heading::after {
  content: '';
  display: block;
  width: 200px;
  height: 4px;
  background-color: #ff6600;
  margin: 0.5rem auto 0;
  border-radius: 2px;
}


.category-slider {
  position: relative;
  width: 100%;
  overflow: hidden;
  padding: 1rem 0;
  background: #fff;
  display: flex;
  align-items: center;
}

.arrow {
  background-color: #f76c23;
  color: white;
  border: none;
  font-size: 2rem;
  padding: 0.2rem 1rem;
  cursor: pointer;
  z-index: 2;
  transition: background 0.3s ease;
  border-radius: 50%;
}
.arrow:hover {
  background-color: #e35d1a;
}

.slider-container {
  overflow-x: hidden;
  flex: 1;
}

.slider-track {
  display: flex;
  transition: transform 0.3s ease;
  gap: 1rem;
  padding: 0 1rem;
}

.category-item {
  flex: 0 0 calc(100% / 5 - 1rem);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.category-circle {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  overflow: hidden;
  border: 0.1px solid #f76c23;
  transition: transform 0.3s ease;
}

.category-circle:hover {
  transform: scale(1.1);
}

.category-circle img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.category-item p {
  margin-top: 0.5rem;
  font-weight: 600;
  color: #333;
}
 
/* Animation */
@keyframes slideInUp {
  from {
    transform: translateY(80px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.slide-in-up {
  animation: slideInUp 0.8s ease-out forwards;
  opacity: 0;
}

</style>
