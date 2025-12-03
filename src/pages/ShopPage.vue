<template>
  <div class="shop-page">

    <!-- Header -->
    <section class="shop-hero">
      <h1>🛒Snack Store</h1>
      <p>Shop the finest bites across your favorite categories!</p>
    </section>

    <!-- Filters Bar -->
    <section class="filter-bar">
      <input v-model="searchQuery" type="search" placeholder="🔍 Search snacks..." />
      <div class="filter-row">
        <select v-model="selectedCategory">
          <option value="">All Categories</option>
          <option v-for="cat in categories" :key="cat">{{ cat }}</option>
        </select>

        <select v-model="selectedDiet">
          <option value="">All Diet Types</option>
          <option>Vegan</option>
          <option>Gluten-Free</option>
          <option>Sugar-Free</option>
          <option>Nut-Free</option>
        </select>

        <select v-model="selectedPrice">
          <option value="">All Prices</option>
          <option value="low">₦0 - ₦5,000</option>
          <option value="mid">₦5,001 - ₦10,000</option>
          <option value="high">₦10,001+</option>
        </select>
      </div>
    </section>

    <!-- Snacks by Category -->
     <template v-if="snacks.length"> 
      <section
        v-for="(snacks, category) in filteredGroupedSnacks"
        :key="category"
        class="category-block"
      >

      <div class="category-header">
        <h2>{{ category }}</h2>
      </div>

      <div class="snack-grid">
        <div class="snack-card" v-for="snack in snacks" :key="snack.id">
          <div class="snack-img">
            <img :src="snack.image" :alt="snack.name" />
<!--            <div
              class="wishlist-icon"
              @click="handleWishlist(snack)"
              :class="{ disabled: !isLoggedIn }"
              title="Add to wishlist"
            >
              ♥
            </div> --> 
          </div>
          <div class="snack-info">
            <h3>{{ snack.name }}</h3>
            <p class="price">₦{{ snack.price.toLocaleString() }}</p>
     <!--       <p class="tag">{{ snack.dietType }}</p>  -->
<!--            <button @click="addToCart(snack)">➕</button> -->
            <button @click="addToCart(snack, $event)">➕</button>
          </div>
        </div>
      </div> 
    </section>
        <p v-if="Object.keys(filteredGroupedSnacks).length === 0">No snacks found 😢</p>
  </template>
 </div>
</template>

  <script>
  import { snacks } from "@/data/snacks.js";
  import { eventBus } from "@/eventBus";

  export default {
    name: "ShopPage",
    data() {
      return {
        searchQuery: "",
        selectedCategory: "",
        selectedDiet: "",
        selectedPrice: "",
        isLoggedIn: false,
        categories: [
          "Chips & Crackers",
          "Biscuits & Cookies",
          "Candy & Sweets",
          "Chocolate",
          "Drinks & Beverages",
          "Pastries & Cake",
          "Popcorn & Corn Snacks",
        ],
        snacks,
      };
    },
  computed: {
    filteredGroupedSnacks() {
      const grouped = {};
      const isSearching = this.searchQuery.trim() !== "";

      if (this.selectedCategory) {
        const group = this.snacks.filter((s) => {
          const matchCategory = s.category === this.selectedCategory;
          const matchSearch = s.name.toLowerCase().includes(this.searchQuery.toLowerCase());
          const matchDiet = !this.selectedDiet || s.dietType === this.selectedDiet;
          const matchPrice =
            !this.selectedPrice ||
            (this.selectedPrice === "low" && s.price <= 5000) ||
            (this.selectedPrice === "mid" && s.price > 5000 && s.price <= 10000) ||
            (this.selectedPrice === "high" && s.price > 10000);
          return matchCategory && matchSearch && matchDiet && matchPrice;
        });

        if (group.length > 0) {
          grouped[this.selectedCategory] = group;
        }
      } else {
        this.categories.forEach((cat) => {
          let group = this.snacks.filter((s) => {
            const matchCategory = s.category === cat;
            const matchSearch = s.name.toLowerCase().includes(this.searchQuery.toLowerCase());
            const matchDiet = !this.selectedDiet || s.dietType === this.selectedDiet;
            const matchPrice =
              !this.selectedPrice ||
              (this.selectedPrice === "low" && s.price <= 5000) ||
              (this.selectedPrice === "mid" && s.price > 5000 && s.price <= 10000) ||
              (this.selectedPrice === "high" && s.price > 10000);
            return matchCategory && matchSearch && matchDiet && matchPrice;
          });

          // ✅ Only include category if it has snacks
          if (group.length > 0) {
            grouped[cat] = isSearching ? group : group.slice(0, 24);
          }
        });
      }

      return grouped;
    },
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
.shop-page {
  font-family: "Plus Jakarta Sans", sans-serif;
  padding: 2rem 1rem;
  background-color: #fffefb;
  min-height: 100vh;
}

.shop-hero {
  text-align: center;
  margin-bottom: 2rem;
}
.shop-hero h1 {
  font-size: 2.5rem;
  color: #ff6b00;
}
.shop-hero p {
  color: #555;
  font-size: 1.1rem;
}

/* Filters */
.filter-bar {
  max-width: 1500px;
  margin: 0 0 2.5rem;
  padding: 1rem 0;
  background: #fff3ea;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(255, 107, 0, 0.15);
  position: sticky;
  top: 160px;
  z-index: 999;
}
.filter-bar input {
  width: 100%;
  padding: 0.8rem;
  font-size: 1rem;
  margin-bottom: 1rem;
  border: 2px solid #ff6b00;
  border-radius: 10px;
}
.filter-row {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}
.filter-row select {
  flex: 1;
  padding: 0.7rem;
  border: 1px solid #ccc;
  border-radius: 10px;
}

/* Category Section */
.category-block {
  margin-bottom: 4rem;
}
.category-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}
.category-header h2 {
  font-size: 1.6rem;
  color: #222;
}
.category-header a {
  color: #ff6b00;
  font-weight: bold;
  text-decoration: none;
}

/* Snacks */
.snack-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 1.5rem;
}
.snack-card {
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
  position: relative;
  transition: 0.3s ease;
}
.snack-card:hover {
  transform: translateY(-5px);
}
.snack-img {
  position: relative;
  height: 150px;
  overflow: hidden;
}
.snack-img img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.wishlist-icon {
  position: absolute;
  top: 10px;
  right: 10px;
  background: #fff;
  padding: 6px;
  border-radius: 50%;
  font-size: 1rem;
  cursor: pointer;
  transition: 0.3s ease;
}
.wishlist-icon.disabled {
  opacity: 0.5;
  pointer-events: none;
}
.snack-info {
  padding: 1rem;
  text-align: center;
}
.snack-info h3 {
  font-size: 1rem;
  margin-bottom: 0.25rem;
  color: #333;
  position: relative;
}
.snack-info .price {
  font-weight: bold;
  margin-bottom: 0.25rem;
}
.snack-info .tag {
  font-size: 0.8rem;
  background: #ffe6d4;
  color: #b94f00;
  display: inline-block;
  padding: 3px 10px;
  border-radius: 8px;
  margin-bottom: 0.5rem;
}
.snack-info button {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background: #ff6b00;
  color: white;
  font-size: 1rem;
  border: none;
  cursor: pointer;
  transition: 0.2s;
  position: absolute;
  bottom: 20px;
  right: 5px;
}
.snack-info button:hover {
  background: #e95d00;
}
</style>
