<template>
  <div class="blog-read-page">
    <h1 class="title">Top 5 Snacks Kids Love</h1>
    <p class="date">Published on July 21, 2025</p>

    <img src="@/assets/img2.jpg" alt="Top Snacks for Kids" class="main-image" />

    <section class="content">
      <p>
        Kids can be picky eaters, but when it comes to snacks, there are a few tried-and-true favorites that always hit the spot. Here are the top 5 snacks kids love:
      </p>

      <h2>1. Fruit Gummies</h2>
      <p>
        These chewy treats are packed with fruity flavor and are often fortified with vitamins, making them a win-win for parents and kids alike.
      </p>

      <h2>2. Mini Cheese Balls</h2>
      <p>
        Bite-sized and full of flavor, cheese balls are a great source of calcium and perfect for lunchboxes.
      </p>

      <h2>3. Yogurt Tubes</h2>
      <p>
        Fun to squeeze and eat, yogurt tubes are a nutritious snack rich in probiotics and protein.
      </p>

      <h2>4. Chocolate-Covered Pretzels</h2>
      <p>
        A mix of sweet and salty, these are perfect for occasional treats and parties.
      </p>

      <h2>5. Popcorn Cups</h2>
      <p>
        Light and airy, popcorn is a healthier snack that kids enjoy while watching movies or as an after-school munch.
      </p>

      <p>
        Offering a mix of taste and nutrition keeps kids happy and healthy. Try rotating these in your snack box!
      </p>
    </section>
  </div>
</template>

<script>
export default {
  name: "TopSnacks",
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@600;700&display=swap');
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css');
</style>

<style scoped>
.blog-read-page {
  padding: 2rem;
  font-family: 'Plus Jakarta Sans', sans-serif;
  color: #333;
}
.title {
  font-size: 2rem;
  color: #ff6600;
}
.date {
  font-size: 0.9rem;
  color: #888;
  margin-bottom: 1rem;
}
.main-image {
  width: 100%;
  max-height: 450px;
  object-fit: cover;
  border-radius: 8px;
  margin: 1rem 0;
}
.content h2 {
  margin-top: 1.5rem;
  color: #ff6600;
}
.content p {
  line-height: 1.6;
  margin-top: 0.5rem;
}
</style>
