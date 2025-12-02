<template>
  <footer class="main-footer"
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-delay="200"
      data-aos-offset="120"
      data-aos-easing="ease-in-out">
    <div class="footer-content">
      <!-- Quick Links -->
      <div class="footer-column">
        <h3>Quick Links</h3>
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/AboutPage">About Us</router-link></li>
          <li><router-link to="/ContactPage">Contact</router-link></li>
          <li><router-link to="/PrivatePolicy">Privacy Policy</router-link></li>
          <li><router-link to="/TermsPage">Terms & Conditions</router-link></li>
          <li><router-link to="/FaqPage">FAQs</router-link></li>
          <li><router-link to="/HelpPage">Help</router-link></li>
        </ul>
      </div>

      <!-- Contact -->
      <div class="footer-column">
        <h3>Contact Us</h3>
        <ul>
          <li><i class="fas fa-map-marker-alt"></i> 123 Snack Street, Lagos</li>
          <li><i class="fas fa-phone-alt"></i> +234 800 123 4567</li>
          <li><i class="fas fa-envelope"></i> support@snackify.ng</li>
        </ul>

        <div class="social-icons">
          <a href="#"><i class="fab fa-facebook-f"></i></a>
          <a href="#"><i class="fab fa-twitter"></i></a>
          <a href="#"><i class="fab fa-instagram"></i></a>
        </div>
      </div>

      <!-- Discover -->
      <div class="footer-column">
        <h3>Discover</h3>
        <ul>
          <li><a href="#">Snack Tips</a></li>
          <li><a href="#">Healthy Choices</a></li>
          <li><a href="#">Offers & Deals</a></li>
          <li><a href="#">Snackify Blog</a></li>
        </ul>
      </div>

      <!-- Get the App -->
      <div class="footer-column">
        <h3>Get the App</h3>
        <p>Download Snackify on your device for faster access.</p>
        <div class="store-buttons">
          <img src="@/assets/footer3.jpg" alt="Google Play" />
          <img src="@/assets/footer4.jpg" alt="App Store" />
        </div>
      </div>
    </div>

    <hr />

    <div class="footer-bottom">
      <p>
        <i class="far fa-copyright"></i>
        2025 Snackify. All rights reserved. Designed by Anifowose Peter.
      </p>
    </div>
  </footer>
</template>

<script>/* 
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js"; */
export default {
  name: "FooterSection",
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@600;700&display=swap');
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css');
</style>

<style scoped>
.main-footer {
  background-color: #000;
  color: #fff;
  font-family: "Plus Jakarta Sans", sans-serif;
  padding: 60px 20px 30px;
  animation: slide-up 1s ease-in;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 40px;
  max-width: 1200px;
  margin: 0 auto;
}

.footer-column {
  flex: 1 1 220px;
}

.footer-column h3 {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 15px;
  color: #ff6a00;
}

.footer-column ul {
  list-style: none;
  padding: 0;
}

.footer-column ul li {
  margin-bottom: 10px;
  font-size: 14px;
  font-weight: bold;
}

.footer-column ul li i {
  margin-right: 8px;
  color: #ff6a00;
}

.footer-column a {
  text-decoration: none;
  color: #fff;
  transition: color 0.3s;
}

.footer-column a:hover {
  color: #ff6a00;
}

.social-icons {
  margin-top: 15px;
}

.social-icons a {
  color: #fff;
  font-size: 18px;
  margin-right: 15px;
  transition: color 0.3s;
}

.social-icons a:hover {
  color: #ff6a00;
}

.store-buttons {
  margin-top: 15px;
}

.store-buttons img {
  width: 120px;
  margin-right: 10px;
  border-radius: 10px;
  border: 1px solid #333;
}

hr {
  border-color: rgba(255, 255, 255, 0.1);
  margin: 30px 0;
}

.footer-bottom {
  text-align: center;
  font-size: 14px;
  font-weight: bold;
  color: #fff;
}

/* Animation */
@keyframes slide-up {
  from {
    transform: translateY(100px);
    opacity: 0;
  }
  to {
    transform: translateY(0px);
    opacity: 1;
  }
}

/* Animation */
@keyframes slideInUp {
  from {
    transform: translateY(80px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.slide-in-up {
  animation: slideInUp 0.8s ease-out forwards;
  opacity: 0;
}


/* Responsive */
@media (max-width: 768px) {
  .footer-content {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .footer-column {
    flex: 1 1 100%;
  }

  .social-icons {
    justify-content: center;
  }

  .store-buttons img {
    width: 100px;
    margin-bottom: 10px;
  }
}
</style>
