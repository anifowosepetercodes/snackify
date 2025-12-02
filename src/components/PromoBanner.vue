<template>
  <section class="promo-banner">
    <div class="promo-content" data-aos="zoom-in">
      <h2 class="promo-title">🔥 Limited Time Snack Deals!</h2>
      <p class="promo-subtext">Get up to <strong>50% OFF</strong> on selected snacks this week only.</p>
      <router-link to="/ShopPage" >
      <button class="promo-button">Shop Now</button>
      </router-link>
    </div>
  </section>
</template>

<script>
export default {
  name: "PromoBanner"
};
</script>

<style scoped>
.promo-banner {
  background: linear-gradient(135deg, #ff7b00, #ff5200);
  padding: 50px 20px;
  text-align: center;
  color: white;
  font-family: "Plus Jakarta Sans", sans-serif;
  border-radius: 12px;
  margin: 40px 0;
  box-shadow: 0 0 30px rgba(255, 87, 34, 0.4);
}

.promo-title {
  font-size: 2.2rem;
  font-weight: 800;
  margin-bottom: 10px;
}

.promo-subtext {
  font-size: 1.1rem;
  font-weight: 500;
  margin-bottom: 20px;
}

.promo-button {
  background: #fff;
  color: #ff5200;
  padding: 12px 30px;
  font-weight: 700;
  font-size: 1rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.promo-button:hover {
  transform: scale(1.05);
  box-shadow: 0 6px 20px rgba(255, 255, 255, 0.3);
}
</style>
