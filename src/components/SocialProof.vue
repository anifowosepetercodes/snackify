<template>
  <section class="social-proof" data-aos="fade-up">
    <div class="proof-content">
      <h2 class="title">
        Trusted by Snack Lovers Nationwide 🍿
      </h2>
      <p class="subtitle">
        We’re rated 5 stars by snack lovers across Nigeria for our delicious treats and speedy delivery!
      </p>

      <div class="proof-grid">
        <div class="proof-box" v-for="(item, i) in stats" :key="i">
          <i :class="item.icon" class="proof-icon"></i>
          <h3 class="proof-title">{{ item.title }}</h3>
          <p class="proof-text">{{ item.text }}</p>
        </div>
      </div>
<!--
      <div class="badges">
        <img src="@/assets/hero-img1.jpg" alt="Badge 1" />
        <img src="@/assets/hero-img1.jpg" alt="Badge 2" />
        <img src="@/assets/hero-img1.jpg" alt="Badge 3" />
      </div> -->
    </div>
  </section>
</template>

<script>
export default {
  name: 'SocialProof',
  data() {
    return {
      stats: [
        {
          icon: 'fas fa-star',
          title: '4.9/5 Rating',
          text: 'Based on 2,000+ verified reviews',
        },
        {
          icon: 'fas fa-shipping-fast',
          title: 'Fast Delivery',
          text: '98% orders delivered within 24hrs',
        },
        {
          icon: 'fas fa-smile',
          title: 'Happy Customers',
          text: 'Over 10,000 satisfied snackers!',
        },
      ],
    }
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@600;700&display=swap');
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css');
</style>

<style scoped>
.social-proof {
  background-color: #fff;
  padding: 4rem 1.5rem;
  text-align: center;
  font-family: 'Plus Jakarta Sans', sans-serif;
  color: #222;
}

.title {
  font-size: 2rem;
  font-weight: 800;
  color: orange;
  margin-bottom: 0.5rem;
}

.subtitle {
  font-size: 1.1rem;
  margin-bottom: 2.5rem;
  color: #555;
}

.proof-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 2.5rem;
}

.proof-box {
  background: #fefefe;
  padding: 1.5rem;
  border-radius: 15px;
  width: 260px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease;
  cursor: pointer;
}
.proof-box:hover {
  transform: scale(1.05);
}

.proof-icon {
  font-size: 2rem;
  color: orange;
  margin-bottom: 1rem;
}

.proof-title {
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.proof-text {
  font-size: 0.95rem;
  color: #555;
}

.badges img {
  height: 40px;
  margin: 0 10px;
  opacity: 0.8;
  transition: 0.3s ease;
}
.badges img:hover {
  transform: scale(1.1);
  opacity: 1;
}
</style>
