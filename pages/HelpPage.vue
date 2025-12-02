<template>
  <section class="help-page">
    <div class="container">
      <h1>Need Help?</h1>
      <p class="intro">We’re here to assist you with anything related to your snacks, orders, account, or experience on our platform.</p>

      <div class="help-section">
        <h2>📞 Contact Support</h2>
        <ul>
          <li><strong>Email:</strong> support@snackhub.ng</li>
          <li><strong>Phone:</strong> +234 812 345 6789</li>
          <li><strong>Live Chat:</strong> Available 9AM – 9PM daily (bottom-right corner)</li>
        </ul>
      </div>

      <div class="help-section">
        <h2>⚙️ Quick Help Topics</h2>
        <ul>
          <li><router-link to="/FaqPage" class="helplink">How to track your order</router-link></li>
          <li><router-link to="/FaqPage" class="helplink">Issues with payment or delivery</router-link></li>
          <li><router-link to="/FaqPage" class="helplink">Changing your address</router-link></li>
          <li><router-link to="/FaqPage" class="helplink">Cancelling or editing an order</router-link></li>
          <li><router-link to="/TermsPage" class="helplink">Understanding our policies</router-link></li>
        </ul>
      </div>

      <div class="help-section">
        <h2>🧠 Troubleshooting Tips</h2>
        <ul>
          <li><strong>Not receiving emails?</strong> Check your spam folder or whitelist us.</li>
          <li><strong>Payment not going through?</strong> Try a different card or ensure your bank hasn’t blocked online payments.</li>
          <li><strong>Site not loading?</strong> Clear your browser cache or try using a different device or network.</li>
          <li><strong>Order not showing?</strong> Make sure you’re logged into the correct account used during purchase.</li>
        </ul>
      </div>

      <div class="help-section">
        <h2>📦 Order Support</h2>
        <p>If your snack order arrived damaged, is missing items, or wasn’t what you expected, kindly contact our support team within 48 hours. We’ll investigate and make things right as quickly as possible.</p>
      </div>

      <div class="help-section">
        <h2>💬 Still Need Help?</h2>
        <p>Don't worry — we're always just one message away. Use the live chat or reach out to us via email anytime.</p>
        <router-link class="btn" to="/contact">Contact Us</router-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "HelpPage",
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@600;700&display=swap');
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css');
</style>

<style scoped>
.help-page {
  padding: 3rem 1.5rem;
  background: #fffefc;
  font-family: 'Plus Jakarta Sans', sans-serif;
  color: #333;
}

.help-page h1 {
  text-align: center;
  font-size: 2.4rem;
  margin-bottom: 1rem;
  color: #ff6600;
}

.intro {
  text-align: center;
  margin-bottom: 2.5rem;
  font-size: 1.1rem;
  color: #555;
}

.help-section {
  margin-bottom: 2.5rem;
  background: #fff;
  padding: 1.5rem 1.2rem;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.03);
}

.help-section h2 {
  color: #ff6600;
  font-size: 1.3rem;
  margin-bottom: 1rem;
}

.help-section ul {
  padding-left: 1.2rem;
}

.help-section ul li {
  margin-bottom: 0.7rem;
  font-size: 0.95rem;
  color: #444;
}

.help-section .btn {
  display: inline-block;
  margin-top: 1rem;
  padding: 0.7rem 1.2rem;
  background-color: #ff6600;
  color: #fff;
  border-radius: 5px;
  text-decoration: none;
  font-weight: 500;
  transition: background 0.3s ease;
}

.help-section .btn:hover {
  background-color: #e05400;
}

.helplink{
    text-decoration: none;
    color: black;
}

.helplink:hover{
    text-decoration: underline;
    color: orange;
}
</style>
