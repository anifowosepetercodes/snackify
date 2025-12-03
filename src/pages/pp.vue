<template>
    <button class="confirm-btn" @click="confirmOrder">Confirm Order</button>

<div v-if="processing" class="processing-popup">
  <div class="popup-inner">
    <div class="spinner"></div>
    <p>Processing payment, please wait...</p>
  </div>
</div>


  </div>
</template>
<script>
export default {
  name: 'CheckoutPage',
  data() {
    return {
      processing: false,

methods: {
    this.processing = true;

    // Delay slightly to ensure DOM updates
    setTimeout(() => {
        localStorage.removeItem('cart');
        this.processing = false;
        this.$router.push('/ThankYou');
    }, 2000);
   },
  }
}
</script>

<style scoped>
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
</style>
