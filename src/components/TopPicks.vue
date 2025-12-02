<template>
  <section class="top-picks-section" data-aos="fade-up">
    <h2 class="section-title">
      <i class="fas fa-fire"></i> Our Top Picks
    </h2>
    <div class="picks-grid">
      <div
        v-for="snack in topPicks" :key="snack.id"
        class="pick-card"
        data-aos="zoom-in"
        data-aos-delay="index * 100"
      >
        <img :src="snack.image" :alt="snack.name" class="snack-img" />
        <h3>{{ snack.name }}</h3>
        <h6 class="price">&#8358;{{ snack.price.toLocaleString() }}</h6>
        <p class="tagline">{{ snack.tagline }}</p>
        <span class="badge">{{ snack.badge }}</span>
        <button @click="addToCart(snack, $event)" class="add-cart">Add to Cart</button>        
      </div>
    </div>
  </section>
</template>

<script>
import {eventBus} from '@/eventBus';

export default {
  name: 'TopPicks',
  data() {
    return {
      topPicks: [
        {
          id: 155,
          name: "Godiva Dark Chocolate",
          tagline: "Loved by kids and adults!",
          price:3968,
          image: "https://i5.walmartimages.com/seo/Godiva-Dark-Chocolate-Ganache-Heart-Chocolates-Bag-Dark-Chocolate-Ganache-Heart-4-9oz-Pack-of-2_168beafa-d8ff-4fb3-9ffc-5094b796deeb.3e067997fbe77f1d71d5c539d6270afb.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF",
          badge: "Fan Favorite"
        },
        {
          id: 7,
          name: "Doritos Flamin Hot Nacho Flavored",
          tagline: "Addictive spice burst!",
          price: 3168,
          image: "https://i5.walmartimages.com/seo/DORITOS-FLAMIN-HOT-NACHO-9-25OZ_d549ada2-6f84-4fa9-926e-86dc234e6110.8f208ebaad8ec1a334cb1d53b324c041.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF",
          badge: "Editor's Pick"
        },
        {
          id: 23,
          name: "Cheez-It Original Crackers",
          tagline: "Extra crunchy, extra fun.",
          price: 2888,
          image: "https://i5.walmartimages.com/seo/Cheez-It-Original-Cheese-Crackers-Baked-Snack-Crackers-30-Count_8ef46cd1-f3d7-48cb-af5d-14655e2d254e.f11c4e5d02006dbe601c4a0f837201fd.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF",
          badge: "Top Rated"
        },
        {
          id: 58,
          name: "Shortbread Cookies (Walker’s)",
          tagline: "Perfect sugar fix.",
          price: 7968,
          image: "https://i5.walmartimages.com/seo/Walker-s-Shortbread-Fingers-5-3-oz_05055055-26ea-4b6a-826c-dd5d35e4a67a.2098cd7fab5b10ef1a160f0172d12291.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF",
          badge: "Most Bought"
        },
      ]
    };
  },
  methods: {
    addToCart(snack, event) {
      // Fly-to-cart animation logic stays
      const cartIcon = document.getElementById("cart-icon");
      if (!cartIcon || !event) return;

      const cartRect = cartIcon.getBoundingClientRect();
      const img = document.createElement("img");
      img.src = snack.image;
      img.className = "fly-to-cart-img";
      const startLeft = cartRect.left - 300;
      const startTop = cartRect.top;
      const endLeft = cartRect.left + cartRect.width / 2 - 15;
      const endTop = cartRect.top + cartRect.height / 2 - 15;

      img.style.setProperty("--start-left", `${startLeft}px`);
      img.style.setProperty("--start-top", `${startTop}px`);
      img.style.setProperty("--end-left", `${endLeft}px`);
      img.style.setProperty("--end-top", `${endTop}px`);

      img.style.left = `${startLeft}px`;
      img.style.top = `${startTop}px`;
      document.body.appendChild(img);

      img.addEventListener("animationend", () => {
        img.remove();
      });

      // Add to cart logic
      let cart = JSON.parse(localStorage.getItem("cart")) || [];
      const existingItem = cart.find((item) => item.id === snack.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        cart.push({ ...snack, quantity: 1 });
      }

      localStorage.setItem("cart", JSON.stringify(cart));
      setTimeout(() => {
      eventBus.emit("cart-updated"); // fire to navbar
      }, 2000);
    },
  },
};
</script>

<style scoped>
.top-picks-section {
  padding: 70px 20px;
  background: #fff7f2;
  text-align: center;
}
.section-title {
  font-size: 2rem;
  color: #ff6a00;
  font-weight: bold;
  margin-bottom: 2rem;
  font-family: 'Plus Jakarta Sans';
}
.picks-grid {
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
  justify-content: center;
}
.pick-card {
  background: white;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1);
  border-radius: 16px;
  padding: 20px;
  width: 220px;
  transition: transform 0.3s ease;
  position: relative;
}
.pick-card:hover {
  transform: scale(1.05);
}
.snack-img {
  width: 100%;
  border-radius: 12px;
  margin-bottom: 10px;
}
.price{
  font-size: 1rem;
  margin: -8px 0;
}
.tagline {
  font-size: 0.9rem;
  margin: 8px 0;
  color: #555;
}
.badge {
  display: inline-block;
  background: #ff6a00;
  color: white;
  padding: 4px 10px;
  border-radius: 20px;
  font-size: 0.75rem;
  position: absolute;
  top: 10px;
  right: 10px;
}
.add-cart {
  margin-top: 12px;
  padding: 8px 16px;
  background: black;
  color: white;
  border: none;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;
}
</style>
