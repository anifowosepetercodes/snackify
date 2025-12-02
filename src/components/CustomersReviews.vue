<template>
  <div class="review-carousel">
    <h2 class="review-heading">What Our Customers Say</h2>
    
    <div class="review-slide" v-if="currentReview">
   <!--   <img :src="require(`@/assets/${currentReview.avatar}`)" class="avatar" alt="User" /> -->
      <i class="fas fa-user-circle avatar"></i>
      <h3 class="name">{{ currentReview.name }}</h3>
      
      <div class="stars">
        <i v-for="n in 5" :key="n" class="fa-star" :class="n <= currentReview.rating ? 'fas' : 'far'"></i>
      </div>
      
      <p class="quote">“{{ currentReview.quote }}”</p>
    </div>
  </div>
</template>


<script>
export default {
  name: "CustomersReviews",
  data() {
    return {
      reviews: [
        {
          name: "Ada Obi",
          rating: 5,
          quote: "Amazing snacks! Super fresh and tasty.",
//          avatar: "hero-img1.jpg"
        },
        {
          name: "Tunde Bello",
          rating: 4,
          quote: "Fast delivery and great packaging!",
  //        avatar: "hero-img1.jpg"
        },
        {
          name: "Chidera Eze",
          rating: 5,
          quote: "Best snack shop I’ve used online.",
    //      avatar: "hero-img1.jpg"
        },
        {
          name: "Uche Nwosu",
          rating: 3,
          quote: "Decent prices but could improve variety.",
          avatar: "hero-img1.jpg"
        },
        {
          name: "Grace Adebayo",
          rating: 5,
          quote: "Loved every bite! Will order again.",
      //    avatar: "hero-img1.jpg"
        }
      ],
      currentIndex: 0,
      interval: null,
    };
  },
  computed: {
    currentReview() {
      return this.reviews[this.currentIndex];
    }
  },
  mounted() {
    this.startAutoSlide();
  },
  beforeUnmount() {
    clearInterval(this.interval);
  },
  methods: {
    startAutoSlide() {
      this.interval = setInterval(() => {
        this.currentIndex = (this.currentIndex + 1) % this.reviews.length;
      }, 4000); // Change every 4 seconds
    }
  }
};
</script>


<style scoped>
.review-carousel {
  max-width: 400px;
  margin: 60px auto;
  text-align: center;
  background: #fff7f2;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  position: relative;
  animation: fadeSlide 1s ease-in-out;
}

.review-heading {
  font-size: 1.8rem;
  margin-bottom: 20px;
  color: #ff6f00;
}

.avatar {
  font-size: 130px; 
  border-radius: 50%;
  margin-bottom: 0.5rem;
  color: orange;
}

.name {
  font-size: 1.2rem;
  font-weight: bold;
  color: #333;
}

.stars {
  color: #ffc107;
  margin: 6px 0;
}

.stars .fas,
.stars .far {
  margin: 0 1px;
}

.quote {
  font-style: italic;
  color: #555;
  margin-top: 10px;
  transition: opacity 0.5s ease;
}

/* Fade animation */
@keyframes fadeSlide {
  0% { opacity: 0; transform: translateY(10px); }
  100% { opacity: 1; transform: translateY(0); }
}
</style>