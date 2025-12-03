<template>
  <div class="checkout-page">
    <h1 class="page-title">💳 Checkout</h1><div class="checkout-grid">
  <!-- Left: Delivery Details -->
  <div class="checkout-left">
    <div class="delivery-summary">
      <h2>📦 Delivery Info</h2>
      <p><strong>Name:</strong> {{ delivery.name }}</p>
      <p><strong>Email:</strong> {{ delivery.email }}</p>
      <p><strong>Phone:</strong> {{ delivery.phone }}</p>
      <p><strong>Address:</strong> {{ delivery.address }}</p>
      <p><strong>State:</strong> {{ delivery.state }}</p>
      <p v-if="delivery.instructions"><strong>Instructions:</strong> {{ delivery.instructions }}</p>
    </div>

    <div class="payment-method">
      <h2>💰 Payment Method</h2>
      <label>
        <input type="radio" value="card" v-model="paymentMethod" />
        Pay with Card
      </label>
      <label>
        <input type="radio" value="pod" v-model="paymentMethod" />
        Pay on Delivery
      </label>

<div v-if="paymentMethod === 'card'" class="card-section">
  <input type="text" placeholder="Cardholder Name" v-model="card.name" />
  <span v-if="errors.cardName" class="error-msg">{{ errors.cardName }}</span>

  <input type="text" placeholder="Card Number" v-model="card.number" maxlength="16" @input="allowOnlyNumbers('number')" />
  <span v-if="errors.cardNumber" class="error-msg">{{ errors.cardNumber }}</span>

  <input type="text" placeholder="Expiry (MM/YY)" v-model="card.expiry" maxlength="5" @input="card.expiry = card.expiry.replace(/[^0-9/]/g, '')" />
  <span v-if="errors.cardExpiry" class="error-msg">{{ errors.cardExpiry }}</span>

  <input type="text" placeholder="CVV" v-model="card.cvv" maxlength="3" @input="allowOnlyNumbers('cvv')" />
  <span v-if="errors.cardCVV" class="error-msg">{{ errors.cardCVV }}</span>
</div>

    </div>
  </div>

  <!-- Right: Order Summary -->
 <div> 
  <div class="checkout-summary">
    <h2>🧾 Order Summary</h2>
    <div v-for="item in cart" :key="item.id" class="summary-item">
      <div class="item-info">
        <h4>{{ item.name }}</h4>
        <p>Qty: {{ item.quantity }}</p>
      </div>
      <div class="item-price">₦{{ (item.price * item.quantity).toLocaleString() }}</div>
    </div>

    <div class="summary-total">
      <strong>Total:</strong> ₦{{ totalPrice.toLocaleString() }}
    </div>

    <button class="confirm-btn" @click="confirmOrder">Confirm Order</button>
  </div>
    <router-link to="/DeliveryPage" class="keep-shopping-btn">
    <i class="fas fa-arrow-left"></i> Change Delivery Info
  </router-link>
  </div>
</div>

<div v-if="processing" class="processing-popup">
  <div class="popup-inner">
    <div class="spinner"></div>
    <p>Processing payment, please wait...</p>
  </div>
</div>


  </div>
</template>
<script>
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

export default {
  name: 'CheckoutPage',
  data() {
    return {
      delivery: {},
      cart: [],
      paymentMethod: 'card',
      processing: false,
      errors: {},
      card: {
        name: '',
        number: '',
        expiry: '',
        cvv: ''
      }
    }
  },
  computed: {
    totalPrice() {
      return this.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    }
  },
  created() {
    this.delivery = JSON.parse(localStorage.getItem('deliveryInfo')) || {};
    this.cart = JSON.parse(localStorage.getItem('cart')) || [];
  },
  methods: {
    confirmOrder() {
    this.errors = {}; // Reset errors

    // Delivery validation
    ['name', 'email', 'phone', 'address', 'state'].forEach(field => {
        if (!this.delivery[field]) {
        this.errors[field] = 'This field is required.';
        }
    });

    // Card validation
    if (this.paymentMethod === 'card') {
        if (!this.card.name) this.errors.cardName = 'Cardholder name is required.';
        if (!/^\d{16}$/.test(this.card.number)) this.errors.cardNumber = 'Card number must be 16 digits.';
        if (!/^\d{2}\/\d{2}$/.test(this.card.expiry)) this.errors.cardExpiry = 'Expiry must be in MM/YY format.';
        if (!/^\d{3}$/.test(this.card.cvv)) this.errors.cardCVV = 'CVV must be 3 digits.';
    }

    if (Object.keys(this.errors).length > 0) return; // Stop if errors

    // 🧠 Real fix starts here
    // Let Vue render the spinner before processing
    this.processing = true;

    // Delay slightly to ensure DOM updates
   setTimeout(() => {
        Toastify({
          text: "Payment Successful",
          duration: 2000,
          gravity: "top",
          position: "center",
          backgroundColor: "#4caf50",
          close: true
        }).showToast();
    setTimeout(() => {
        this.processing = false;
        localStorage.removeItem('cart');        
        this.$router.push('/ThankYou');
    }, 2000);
    }, 100);
    },
    allowOnlyNumbers(field) {
      this.card[field] = this.card[field].replace(/\D/g, '');
    }
  }
}
</script>

<style scoped>
.error-msg {
  color: red;
  font-size: 0.9rem;
  margin-top: -0.8rem;
  margin-bottom: 1rem;
  display: block;
}

.checkout-page {
  padding: 3rem 2rem;
  background: #fffefb;
  font-family: 'Plus Jakarta Sans', sans-serif;
  min-height: 100vh;
  position: relative;
}

.page-title {
  font-size: 2.3rem;
  color: #ff6b00;
  text-align: center;
  margin-bottom: 2rem;
}

.checkout-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 5rem;
  justify-content: center;
}

.checkout-left {
  flex: 1 1 400px;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.delivery-summary,
.payment-method {
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);
}

.payment-method input[type="radio"] {
  margin-right: 8px;
  margin-bottom: 1rem;
}

.card-section input {
  display: block;
  width: 95%;
  padding: 0.9rem;
  font-size: 1rem;
  margin-bottom: 1rem;
  border: 2px solid #ccc;
  border-radius: 8px;
}

.checkout-summary {
  background: white;
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
  align-self: flex-start;
}

.item-price, .checkout-summary p{
    font-weight: bolder;
}

.summary-item {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  border-bottom: 1px dashed #ddd;  
  padding-bottom: 0.5rem;
}

.summary-total {
  font-size: 1.2rem;
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
  font-weight: bold;
}

.confirm-btn {
  margin-top: 2rem;
  width: 100%;
  padding: 1rem;
  background: #ff6b00;
  color: white;
  font-size: 1.1rem;
  font-weight: bold;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: background 0.3s ease;
}

.confirm-btn:hover {
  background: #e85e00;
}

.processing-popup {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}

.popup-inner{
    background: white;
    padding: 2rem 3rem;
    border-radius: 14px;
    font-size: 1.2rem;
    color: #333;
    text-align: center;
}

.spinner {
  width: 50px;
  height: 50px;
  margin: 0 auto 1rem;
  border: 6px solid #f3f3f3;
  border-top: 6px solid #ff6b00;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
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