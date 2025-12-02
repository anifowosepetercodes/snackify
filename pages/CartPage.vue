<template>
  <div class="cart-page">
    <h1 class="cart-title">🛒 Your Cart</h1>

    <div v-if="cartItems.length === 0" class="empty-cart">
      <img src="@/assets/cart1.jpg" alt="Empty Cart" />
      <p>Your cart is empty. Start shopping!</p>
      <router-link to="/ShopPage" class="shop-now">Continue Shopping</router-link>
    </div>

    <div v-else class="cart-content">
      <div class="cart-items">
        <div v-for="item in cartItems" :key="item.id" class="cart-card">
          <img :src="item.image" :alt="item.name" class="item-image" />
          <div class="item-details">
            <h2>{{ item.name }}</h2>
            <p class="diet">{{ item.dietType }}</p>
            <p class="price">₦{{ item.price.toLocaleString() }}</p>
            <div class="quantity">
              <button @click="updateQuantity(item, -1)" :disabled="item.quantity === 1">-</button>
              <span>{{ item.quantity }}</span>
              <button @click="updateQuantity(item, 1)">+</button>
            </div>
            <button class="remove" @click="removeItem(item.id)">Remove ❌</button>
          </div>
        </div>
      </div>
<div class="cart-summary">
      <div>
        <h2>Order Summary</h2>
        <p>Total Items: {{ totalItems }}</p>
        <p>Total Price: ₦{{ totalPrice.toLocaleString() }}</p>
        <button class="checkout-button" @click="checkout">Proceed to Checkout</button>
      </div>
  <router-link to="/ShopPage" class="keep-shopping-btn">
    <i class="fas fa-arrow-left"></i> Keep Shopping
  </router-link>
</div>
    </div>
  </div>
</template>

<script>
import { eventBus } from '@/eventBus';

export default {
  name: 'CartPage',
  data() {
    return {
      cartItems: JSON.parse(localStorage.getItem('cart')) || []
    };
  },
  computed: {
    totalPrice() {
      return this.cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    },
    totalItems() {
      return this.cartItems.reduce((acc, item) => acc + item.quantity, 0);
    }
  },
  methods: {
    updateQuantity(item, change) {
      item.quantity += change;
      if (item.quantity < 1) item.quantity = 1;
      this.saveCart();
    },
    removeItem(id) {
      this.cartItems = this.cartItems.filter(item => item.id !== id);
      this.saveCart();
    },
    saveCart() {
      localStorage.setItem('cart', JSON.stringify(this.cartItems));
      eventBus.emit('cart-updated'); // sync count in navbar
    },
    checkout() {
/*       alert('Redirecting to checkout page...'); */
      this.$router.push('/DeliveryPage');
    }
  }
};
</script>


<style scoped>
.cart-page {
  padding: 2rem;
  font-family: 'Plus Jakarta Sans', sans-serif;
  background: #fffefb;
  min-height: 100vh;
}

.cart-title {
  text-align: center;
  font-size: 2.5rem;
  color: #ff6b00;
  margin-bottom: 2rem;
}

.empty-cart {
  text-align: center;
  padding: 3rem;
}
.empty-cart img {
  max-width: 300px;
  margin-bottom: 1rem;
}
.empty-cart p {
  font-size: 1.2rem;
  color: #444;
}
.shop-now {
  display: inline-block;
  margin-top: 1rem;
  padding: 0.75rem 1.5rem;
  background: #ff6b00;
  color: white;
  border-radius: 8px;
  text-decoration: none;
  font-weight: bold;
}

.cart-content {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
}

.cart-items {
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.cart-card {
  display: flex;
  background: white;
  box-shadow: 0 4px 20px rgba(0,0,0,0.08);
  border-radius: 16px;
  overflow: hidden;
  padding: 1rem;
  align-items: center;
}

.item-image {
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 12px;
  margin-right: 1rem;
}

.item-details {
  flex: 1;
}
.item-details h2 {
  font-size: 1.2rem;
  color: #333;
  margin-bottom: 0.3rem;
}
.item-details .diet {
  font-size: 0.9rem;
  color: #888;
  margin-bottom: 0.5rem;
}
.item-details .price {
  font-weight: bold;
  font-size: 1rem;
  color: #ff6b00;
  margin-bottom: 0.5rem;
}
.quantity {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.8rem;
}
.quantity button {
  background: #ff6b00;
  color: white;
  border: none;
  padding: 4px 10px;
  border-radius: 6px;
  font-size: 1rem;
  cursor: pointer;
}
.remove {
  background: transparent;
  border: none;
  color: #b30000;
  font-weight: bold;
  cursor: pointer;
}

.cart-summary {
  flex: 1;
  background: #fff3ea;
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(255,107,0,0.2);
  max-width: 350px;
  height: fit-content;
  position: sticky;
  top: 170px;
  align-self: flex-start;
  transition: top 0.3s ease;
/*   display: flex;
  flex-direction: column;
  gap: 10px; */
}

.cart-summary h2 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #333;
}
.cart-summary p {
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
}
.checkout-button {
  width: 100%;
  padding: 1rem;
  background: #ff6b00;
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  margin-top: 1.5rem;
  transition: background 0.3s;
}
.checkout-button:hover {
  background: #e55c00;
}

.keep-shopping-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: #ff6b00;
  color: #fff;
  font-weight: 600;
  padding: 0.8rem 1.5rem;
  border-radius: 12px;
  text-decoration: none;
  font-size: 1rem;
  margin: 1.5rem 0;
  transition: background 0.3s ease;
  box-shadow: 0 4px 12px rgba(255, 107, 0, 0.3);
}
.keep-shopping-btn:hover {
  background: #e65c00;
  transform: translateY(-1px);
}
.keep-shopping-btn i {
  font-size: 1.1rem;
}

</style>
