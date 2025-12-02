<template>
  <section class="customer-section">
    <h2 class="section-title">Trusted by Snack Lovers Everywhere 🍪</h2>

    <div class="customer-grid">
      <!-- Left: Reviews Carousel -->
      <div class="carousel-wrapper"
      data-aos="fade-right"
      data-aos-duration="1000"
      data-aos-offset="200">
        <CustomersReviews />
      </div>

      <!-- Right: Newsletter Signup -->
      <div class="newsletter"
      data-aos="fade-left"
      data-aos-duration="1000"
      data-aos-offset="200">
        <div class="newsletter-inner">
        <div class="newsletter-icon">
        <img :src="require('@/assets/hero-img1.jpg')" alt="Newsletter Icon" />

        </div>
        <h3>Join Our Snack Club</h3>
        <p>Get sweet deals and tasty updates directly to your inbox.</p>
        <form @submit.prevent="subscribe">
          <input
            type="email"
            v-model="email"
            placeholder="Enter your email address"
            required
          />
          <button type="submit">Subscribe Now</button>
        </form>
        <p v-if="subscribed" class="thanks">Thanks for subscribing! 🎉</p>
      </div>
      </div>
    </div>
  </section>
</template>

<script>
import CustomersReviews from "@/components/CustomersReviews.vue";

export default {
  name: "CustomerSection",
  components: { CustomersReviews },
  data() {
    return {
      email: "",
      subscribed: false
    };
  },
  methods: {
    subscribe() {
      if (this.email) {
        this.subscribed = true;
       setTimeout(() => {
        this.subscribed = false;
        }, 2000);        
        this.email = "";
      }
    }
  }
};
</script>

<style scoped>
.customer-section {
  padding: 60px 20px;
  background: #fffdf9;
  text-align: center;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  color: #ff6600; /* Your orange theme color */
  letter-spacing: 2px;
}

.customer-grid {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 50px;
  max-width: 1100px;
  margin: auto;
}

/* Left - Carousel */
.carousel-wrapper {
  flex: 1;
  min-width: 300px;
}

/* Right - Newsletter */
.newsletter {
  flex: 1;
  min-width: 300px;
  background: linear-gradient(145deg, #fff1e6, #fffcf6);
  border-radius: 12px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.06);
  text-align: left;
  position: relative;
  overflow: hidden;
  padding: 80px 50px;
}

.newsletter-icon {
  position: absolute;
  top: -25px;
  right: -25px;
  opacity: 0.1;
}

.newsletter-icon img {
  width: 120px;
  height: 120px;
}

.newsletter h3 {
  margin-bottom: 12px;
  font-size: 22px;
  color: #222;
}

.newsletter p {
  font-size: 14px;
  color: #444;
  margin-bottom: 20px;
}

.newsletter input {
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 8px;
  margin-bottom: 15px;
  font-size: 14px;
}

.newsletter button {
  width: 100%;
  padding: 12px;
  background-color: #ff6a00;
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  font-size: 15px;
  cursor: pointer;
  transition: background 0.3s;
}

.newsletter button:hover {
  background-color: #e45800;
}

.thanks {
  color: green;
  font-weight: 600;
  margin-top: 10px;
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
