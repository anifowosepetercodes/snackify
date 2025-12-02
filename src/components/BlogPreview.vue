<template>
  <section class="blog-preview" data-aos="fade-up">
    <div class="container">
      <h2 class="section-title">
        <i class="fas fa-newspaper blog-icon"></i> Snack Blog
      </h2>

      <div class="blog-grid">
        <div class="blog-card" v-for="(post, index) in blogPosts" :key="index">
          <img :src="post.image" :alt="post.title" class="blog-image" />
          <div class="blog-content">
            <span class="blog-tag">{{ post.category }}</span>
            <h3>{{ post.title }}</h3>
            <p>{{ post.description }}</p>
            <router-link :to="post.path" class="read-more">Read More</router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "BlogPreview",
  data() {
    return {
      blogPosts: [
        {
          title: "Top 5 Snacks Kids Love",
          description: "Check out these fun, healthy, and yummy snacks your kids will beg for every day.",
          image: require('@/assets/img2.jpg'),
          category: "Trending",
          path:"/TopSnack"
        },
        {
          title: "Snacks in 5 Minutes",
          description: "Short on time? Try these quick snack ideas you can make in minutes!",
          image: require('@/assets/img3.jpg'),
          category: "Tips",
          path:"/QuickSnack"
        },
        {
          title: "Storing Snacks Properly",
          description: "Preserve freshness and avoid spoilage with these snack storage tips.",
          image: require('@/assets/img4.jpg'),
          category: "Advice",
          path:"/SnackStorage"
        }
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
.blog-preview {
  background: #fefefe;
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
.blog-icon {
  font-size: 1.6rem;
}
.blog-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 30px;
}
.blog-card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}
.blog-card:hover {
  transform: scale(1.03);
  box-shadow: 0 8px 20px rgba(255, 106, 0, 0.2);
}
.blog-image {
  width: 100%;
  height: 180px;
  object-fit: cover;
}
.blog-content {
  padding: 20px;
}
.blog-tag {
  background: #FF6A00;
  color: white;
  font-size: 0.75rem;
  padding: 4px 10px;
  border-radius: 20px;
  display: inline-block;
  margin-bottom: 10px;
  font-weight: 500;
}
.blog-content h3 {
  font-size: 1.2rem;
  margin-bottom: 8px;
  font-weight: bold;
}
.blog-content p {
  font-size: 0.95rem;
  color: #444;
  margin-bottom: 15px;
}
.read-more {
  background: #FF6A00;
  color: white;
  border: none;
  padding: 8px 15px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 500;
  transition: background 0.3s ease;
  text-decoration: none; 
}
.read-more:hover {
  background: #e35c00;
}
</style>
