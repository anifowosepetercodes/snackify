<template>
  <section class="highlights" data-aos="fade-up">
    <h2 class="title">Snackify Loved By Thousands</h2>
    <div class="stats">
      <div class="stat-box" data-aos="fade-right">
        <h3>150K+</h3>
        <p>Happy Snackers</p>
      </div>
      <div class="stat-box" data-aos="fade-up">
        <h3>500K+</h3>
        <p>Deliveries Completed</p>
      </div>
      <div class="stat-box" data-aos="fade-left">
        <h3>75K+</h3>
        <p>Followers</p>
      </div>
    </div>

    <div class="social-proof" data-aos="zoom-in">
      <img src="@/assets/img1.jpg" alt="Viral post" />
      <p class="caption">“These snacks are 🔥🔥🔥 — my family loves them!”</p>
    </div>
  </section>
</template>

<script>
export default {
  name: "CustomerHighlights",
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@600;700&display=swap');
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css');
</style>

<style scoped>
.highlights {
  background-color: #000;
  color: white;
  padding: 5rem 2rem;
  text-align: center;
  font-family: 'Plus Jakarta Sans', sans-serif;
}
.title {
  font-size: 2.5rem;
  color: orange;
  margin-bottom: 3rem;
  font-weight: bold;
}
.stats {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 2rem;
}
.stat-box {
  background-color: #111;
  border-radius: 12px;
  padding: 2rem 1.5rem;
  flex: 1 1 200px;
  transition: transform 0.3s ease;
  box-shadow: 0 0 20px rgba(255, 165, 0, 0.2);
  cursor: pointer;
}
.stat-box:hover {
  transform: scale(2.05);
}
.stat-box h3 {
  color: orange;
  font-size: 2rem;
  margin-bottom: 0.5rem;
  font-weight: bold;
}
.stat-box p {
  font-size: 1.1rem;
}
.social-proof {
  margin-top: 4rem;
}
.social-proof img {
  width: 100%;
  max-width: 500px;
  border-radius: 8px;
  box-shadow: 0 0 20px rgba(255, 165, 0, 0.3);
}
.caption {
  margin-top: 1rem;
  color: #ccc;
  font-style: italic;
}
</style>
