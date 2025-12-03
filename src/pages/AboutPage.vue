<template>
  <div class="about-container">
    <section class="intro-section">
      <h1>About Snackify</h1>
      <p>
        At Snackify, we don’t just sell snacks — we deliver happiness, spark joy, and create lasting memories one bite at a time. We’re proudly homegrown and proudly obsessed with taste, quality, and customer satisfaction.
      </p>
    </section>

    <section class="section">
      <h2>🌟 Our Vision</h2>
      <p>
        To become the most beloved snack brand across Nigeria and beyond — redefining everyday snacking with unbeatable flavor, consistency, and creativity.
      </p>
    </section>

    <section class="section">
      <h2>🎯 Our Mission</h2>
      <p>
        To deliver premium, affordable snacks made with love and local ingredients, while creating a seamless, joyful customer experience both online and offline.
      </p>
    </section>

    <section class="section">
      <h2>💡 Our Core Values</h2>
      <ul>
        <li><strong>Quality First:</strong> We don’t compromise. Every snack is tested, trusted, and tasty.</li>
        <li><strong>Customer Obsession:</strong> Your satisfaction fuels our hustle.</li>
        <li><strong>Innovation:</strong> We’re not afraid to break the snack rules.</li>
        <li><strong>Community:</strong> Supporting local farmers, workers, and dreamers.</li>
        <li><strong>Transparency:</strong> Honest snacks, honest business.</li>
      </ul>
    </section>

    <section class="section">
      <h2>🚀 What We Want to Achieve</h2>
      <p>
        We want every household in Nigeria to recognize and trust Snackify as a part of their lifestyle — whether during school breaks, office hours, celebrations, or quiet moments alone.
      </p>
    </section>

    <section class="section">
      <h2>📖 Our Brand Story</h2>
      <p>
        Snackify started with a dream — to offer something better. Not just another chip or cookie, but a movement. A local revolution. Built from scratch, fueled by love, and grown by a loyal community, our journey is just getting started.
      </p>
    </section>

    <section class="section">
      <h2>🤝 Why Choose Us</h2>
      <ul>
        <li>Fast, friendly service.</li>
        <li>Handpicked flavors you won’t forget.</li>
        <li>Affordable pricing without compromise.</li>
        <li>Safe, secure, and reliable delivery.</li>
        <li>A customer experience built for YOU.</li>
      </ul>
    </section>

    <section class="section">
      <h2>🔐 Our Commitment</h2>
      <p>
        We’re committed to earning your trust, your taste buds, and your loyalty. Every day, every order, every snack.
      </p>
    </section>
  </div>
</template>

<script>
export default {
  name: 'AboutPage',
};
</script>

<style scoped>
.about-container {
  font-family: 'Plus Jakarta Sans', sans-serif;
  background: #fff9f4;
  padding: 60px 20px;
  max-width: 1000px;
  margin: auto;
  color: #333;
}

.intro-section {
  text-align: center;
  margin-bottom: 40px;
  animation: fadeIn 1s ease-in-out;
}

h1 {
  font-size: 2.8rem;
  color: #ff6b00;
  margin-bottom: 16px;
}

h2 {
  font-size: 1.6rem;
  color: #ff6b00;
  margin-bottom: 12px;
}

.section {
  margin-bottom: 35px;
  background: #fff;
  padding: 25px;
  border-radius: 12px;
  box-shadow: 0 8px 16px rgba(255, 107, 0, 0.07);
  transition: transform 0.3s ease;
}

.section:hover {
  transform: translateY(-4px);
}

p {
  line-height: 1.7;
  font-size: 1.05rem;
  color: #444;
}

ul {
  padding-left: 20px;
}

li {
  margin-bottom: 10px;
  line-height: 1.6;
  font-size: 1.02rem;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(15px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
