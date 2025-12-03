<template>
  <div class="blog-read-page">
    <h1 class="title">Snacks in Minutes: Quick Bites for Busy Days</h1>
    <p class="date">Published on July 21, 2025</p>

    <img src="@/assets/img3.jpg" alt="Quick Snacks" class="main-image" />

    <section class="content">
      <p>
        In today’s fast-paced world, there’s often little time to prepare elaborate meals. That’s where quick snacks come in — fast, tasty, and energizing! Here are some snacks you can make in minutes.
      </p>

      <h2>1. Peanut Butter Banana Sandwich</h2>
      <p>
        Just slice a banana, spread peanut butter between, and you have a healthy, protein-packed treat ready to go.
      </p>

      <h2>2. Microwave Popcorn</h2>
      <p>
        Three minutes in the microwave and you’ve got a crunchy, low-calorie snack perfect for any moment.
      </p>

      <h2>3. Greek Yogurt with Honey & Nuts</h2>
      <p>
        This combo offers sweetness, crunch, and protein — all in under a minute.
      </p>

      <h2>4. Apple Slices with Almond Butter</h2>
      <p>
        Core and slice an apple, dip in almond butter, and enjoy a fiber-rich, satisfying snack.
      </p>

      <h2>5. Cheese & Crackers</h2>
      <p>
        Stack cheese cubes and whole grain crackers for a quick energy boost between tasks.
      </p>

      <p>
        These snacks are proof that healthy and fast can go hand in hand. Keep ingredients handy and snack smart!
      </p>
    </section>
  </div>
</template>

<script>
export default {
  name: "QuickSnack",
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
