<template>
  <section class="snack-tips" data-aos="fade-up">
    <div class="container">
      <h2 class="section-title">
        <i class="fas fa-lightbulb tip-icon"></i> Snack Tips
      </h2>

      <div class="tips-grid">
        <div class="tip-card" v-for="(tip, index) in tips" :key="index">
          <i :class="tip.icon" class="tip-card-icon"></i>
          <h3>{{ tip.title }}</h3>
          <p>{{ tip.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SnackTips',
  data() {
    return {
      tips: [
        {
          title: "Keep it Fresh",
          description: "Store chips in an airtight bag with a paper towel to keep crisp.",
          icon: "fas fa-seedling"
        },
        {
          title: "Snack Combos",
          description: "Try mixing peanuts and banana chips for an energy punch!",
          icon: "fas fa-mug-hot"
        },
        {
          title: "Crush It!",
          description: "Crushed cookies make perfect ice cream toppings.",
          icon: "fas fa-ice-cream"
        },
        {
          title: "Stay Cool",
          description: "Avoid keeping chocolate snacks near sunlight — store in cool spots.",
          icon: "fas fa-snowflake"
        },
      ]
    };
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@600;700&display=swap');
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css');
</style>

<style scoped>
.snack-tips {
  background: #fff;
  padding: 70px 20px;
  font-family: 'Plus Jakarta Sans', sans-serif;
}
.section-title {
  font-size: 2.5rem;
  color: #FF6A00;
  font-weight: bold;
  text-align: center;
  margin-bottom: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}
.tip-icon {
  font-size: 1.6rem;
}

.tips-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  gap: 25px;
}
.tip-card {
  background: #fff;
  border-radius: 12px;
  padding: 20px;
  text-align: center;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
  border: 2px solid transparent;
}
.tip-card-icon {
  font-size: 2.2rem;
  color: #FF6A00;
  margin-bottom: 15px;
}
.tip-card h3 {
  font-weight: bold;
  font-size: 1.2rem;
  margin-bottom: 10px;
}
.tip-card p {
  font-size: 0.95rem;
  color: #444;
}
.tip-card:hover {
  transform: scale(1.05);
  border-color: #FF6A00;
  box-shadow: 0 8px 20px rgba(255, 106, 0, 0.3);
}
</style>
