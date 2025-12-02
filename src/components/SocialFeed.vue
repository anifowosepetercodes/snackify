<template>
  <section class="social-feed">
    <h2 class="feed-title"><i class="fas fa-hashtag"></i> Follow Us @SnackZone</h2>
    <div class="feed-grid">
      <div class="feed-item" v-for="(post, i) in posts" :key="i">
        <img :src="post.img" :alt="'Post ' + (i + 1)" />
        <div class="overlay">
          <i class="fab fa-instagram"></i>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "SocialFeed",
  data() {
    return {
      posts: [
        { img: require("@/assets/img22.jpg") },
        { img: require("@/assets/img26.jpg") },
        { img: require("@/assets/img7.jpg") },
        { img: require("@/assets/img8.jpg") },
        { img: require("@/assets/img9.jpg") },
        { img: require("@/assets/img10.jpg") }
      ]
    };
  }
};
</script>

<style scoped>
.social-feed {
  padding: 50px 20px;
  background-color: #fff;
  text-align: center;
  font-family: 'Plus Jakarta Sans', sans-serif;
}

.feed-title {
  font-size: 2rem;
  margin-bottom: 30px;
  font-weight: 700;
  color: #ff5200;
}

.feed-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 20px;
}

.feed-item {
  position: relative;
  overflow: hidden;
  border-radius: 12px;
}

.feed-item img {
  width: 110%;
  height: 200px;
  display: block;
  transition: transform 0.3s;
}

.feed-item:hover img {
  transform: scale(1.1);
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 82, 0, 0.6);
  color: white;
  font-size: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s;
}

.feed-item:hover .overlay {
  opacity: 1;
}
</style>
