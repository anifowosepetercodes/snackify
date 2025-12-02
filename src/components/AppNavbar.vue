 <template>
  <div class="navbar-wrapper">
    <!-- Top white logo area -->
    <div class="logo-section">
      <h1 class="logo-text">SNACKIFY</h1>
    </div>

    <!-- Sticky navbar -->
    <header class="navbar"> 
      <div class="nav-container">
        <!-- Page Title Under Logo Section -->
        <div class="page-title">
         <p>{{ currentPage }}</p>
        </div>

        <!-- Hamburger for mobile -->
        <div class="hamburger" @click="toggleMenu">
          <i :class="isOpen ? 'fas fa-times' : 'fas fa-bars'"></i>
        </div>

        <!-- Navigation Links -->
        <nav :class="['nav-links', { open: isOpen }]">
          <router-link to="/" class="nav-item" @click="setCurrent('HOME')">HOME</router-link>
          <div class="nav-item categories-toggle" @click="toggleDropdown">
            Categories
            <i class="fas fa-chevron-down arrow-icon"></i>
            <div v-if="showDropdown" class="dropdown">
              <a href="#">Chips & Crackers</a>
              <a href="#">Biscuits & Cookies</a>
              <a href="#">Candy & Sweets</a>
              <a href="#">Chocolate</a> 
              <a href="#">Drinks & Beverages</a> 
              <a href="#">Pastries & Cake</a> 
              <a href="#">Popcorn & Corn Snacks</a> 
            </div>
          </div>
          <router-link to="/ShopPage" class="nav-item" @click="setCurrent('SHOP')">SHOP</router-link>
          <router-link to="/AboutPage" class="nav-item" @click="setCurrent('ABOUT')">ABOUT</router-link>
          <router-link to="/ContactPage" class="nav-item" @click="setCurrent('CONTACT')">CONTACT</router-link>

          <!-- ✅ MOBILE SIGN UP ONLY -->
          <router-link
            v-if="isMobile"
            to="/SignUp"
            class="nav-item signup-btns mobile-signup"
            @click="setCurrent('SIGNUP')"
          >
            SIGN UP
          </router-link>
        </nav>

        <!-- Always-visible Cart + Profile (right side) -->
        <div class="cart-profile-icons" v-show="!isOpen">
          <!-- Desktop Sign Up (Only for !isMobile) -->
          <router-link
            v-if="!isMobile"
            to="/SignUp"
            class="signup-btns"
            @click="setCurrent('SIGNUP')"
          >
            Sign Up
          </router-link>

          <!-- Cart -->
          <router-link to="/cartPage">
            <div class="cart-icon" id="cart-icon">
              <i class="fas fa-shopping-cart"></i>
              <span class="cart-count" v-if="cartCount > 0">{{ cartCount }}</span>
            </div>
          </router-link>

          <!-- Profile -->
          <div class="profile-icon" @click="handleProfileClick">
            <span v-if="isLoggedIn" class="initials">{{ initials }}</span>
            <i v-else class="fas fa-user-circle default-icon"></i>
          </div>
        </div>
       </div>

    </header>
  </div>
</template>

<script>
import Toastify from "toastify-js";
import { eventBus } from "@/eventBus";
import "toastify-js/src/toastify.css";

export default {
  name: "AppNavbar",
  data() {
    return {
      isOpen: false,
      showDropdown: false,
      currentPage: "HOME",
      isMobile: false,
      isLoggedIn: false,
      initials: "",
      cartCount: 0,
    };
  },
  created() {
    this.updateCartCount();
    window.addEventListener("storage", this.updateCartCount);
    eventBus.on("cart-updated", this.updateCartCount); // main update
  },

  beforeUnmount() {
    window.removeEventListener("storage", this.updateCartCount);
    eventBus.off("cart-updated", this.updateCartCount);
  },
  mounted() {
    this.checkMobile();
    window.addEventListener("resize", this.checkMobile);
    this.loadUser();
    window.addEventListener("storage", this.loadUser);
  },
  methods: {
    updateCartCount() {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      this.cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    },
    toggleMenu() {
      this.isOpen = !this.isOpen;
    },
    toggleDropdown() {
      this.showDropdown = !this.showDropdown;
    },
    setCurrent(name) {
      this.currentPage = name;
      this.showDropdown = false;
      this.isOpen = false;
    },
    checkMobile() {
      this.isMobile = window.innerWidth <= 768;
    },
    handleProfileClick() {
      const activeUser = JSON.parse(localStorage.getItem("activeUser"));
      if (!activeUser) {
        Toastify({
          text: "User isn't logged in",
          duration: 1500,
          gravity: "top",
          position: "right",
          backgroundColor: "#f00",
        }).showToast();
        setTimeout(() => {
          this.$router.push("/LoginPage");
        }, 1500);
      } else {
        this.$router.push("/ProfilePage");
      }
    },
    loadUser() {
      try {
        const activeUser = JSON.parse(localStorage.getItem("activeUser"));
        if (activeUser) {
          this.isLoggedIn = true;
          const first = activeUser.firstName || "";
          const last = activeUser.lastName || "";
          this.initials = first.charAt(0).toUpperCase() + last.charAt(0).toUpperCase();
        } else {
          this.isLoggedIn = false;
          this.initials = "";
        }
      } catch (err) {
        console.error("Error loading user data:", err);
        this.isLoggedIn = false;
        this.initials = "";
      }
    },
  },
};
</script>


<!-- Load Font Awesome -->
<style>
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@600;700&display=swap');
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css');
:root {
  --orange: #ff6b3d;
  --orange-dark: #e65224;
  --white: #ffffff;
  --gray: #f6f6f6;
  --text-dark: #1e1e1e;
}

body {
  margin: 0;
  padding-top: 164px;
}

</style>

<style scoped>
  
/* Wrapper for navbar */
.navbar-wrapper {
  font-family: 'Plus Jakarta Sans', sans-serif;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 9999;
  padding-bottom: 40px;
  background-color: var(--white);
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);
}

/* Top logo area */
.logo-section {
  background: var(--white);
  text-align: center;
  padding: 1.2rem 0 0.5rem;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);
}

.logo-text {
  color: var(--orange);
  font-size: 2rem;
  font-weight: 700;
  letter-spacing: 3px;
  margin: 0;
}

/* Orange sticky navbar */
.navbar {
  background: var(--orange);
  position: sticky;
  top: 0;
  z-index: 1000;
  padding: 0.5rem 0;
  color: var(--white);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
}

.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  padding: 0 2rem;
  margin: auto;
  flex-wrap: wrap;
  position: relative;
}

/* Page title bar */
.page-title {
  position: absolute;
  right: 68px;
  top: -90px;
  background: var(--orange);
  color: var(--white);
  padding: 0.7rem 1.4rem;
  border-radius: 0 0 0px 0px;
  width: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.page-title{
  font-weight: bold;
  font-size: 1.2rem;
  letter-spacing: 2px;
  text-transform: uppercase;
}

/* Navigation Links */
.nav-links {
  display: flex;
  gap: 1.5rem;
  align-items: center;
}

.nav-item {
  color: var(--white);
  text-decoration: none;
  font-weight: 600;
  letter-spacing: 2px;
  text-transform: uppercase;
  padding: 0.6rem 0.8rem;
  position: relative;
  transition: all 0.2s ease;
}

.nav-item::after {
  content: '';
  position: absolute;
  width: 0%;
  height: 2px;
  bottom: 4px;
  left: 0;
  background-color: var(--white);
  transition: width 0.3s ease;
}

.nav-item:hover::after {
  width: 100%;
}

.categories-toggle {
  cursor: pointer;
  position: relative;
}

.arrow-icon {
  margin-left: 8px;
  font-size: 0.7rem;
}

.dropdown {
  position: absolute;
  top: 2.5rem;
  left: 0;
  background: var(--white);
  color: var(--orange-dark);
  border-radius: 6px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  min-width: 140px;
  z-index: 10;
}

.dropdown a {
  padding: 0.5rem 1rem;
  color: var(--orange-dark);
  text-decoration: none;
  font-weight: 600;
  border-radius: 4px;
  transition: background 0.2s;
}

.dropdown a:hover {
  background: var(--orange);
  color: var(--white);
}

/* Cart & Sign Up */
/* .extras {
  display: flex;
  align-items: center;
  gap: 1rem;
}
 */
.signup-btns {
  background: var(--white);
  color: var(--orange-dark);
  padding: 0.5rem 1rem;
  border-radius: 6px;
  font-weight: 600;
  text-decoration: none;
  letter-spacing: 2px;
  text-transform: uppercase;
  text-align: center;
}

.cart-icon {
  position: relative;
  color: var(--white);
  font-size: 1.3rem;
}

.cart-icon:hover {
    animation: bounce 0.4s;
    box-shadow: 0 0 12px rgba(255, 107, 61, 0.8);
    transform: scale(1.05);
}

@keyframes bounce {
  0% {transform: translateY(0);}
  40% {transform: translateY(-6px);}
  60% {transform: translateY(3px);}
  100% {transform: translateY(0);}
}

.cart-count {
  position: absolute;
  top: -6px;
  right: -10px;
  background: var(--white);
  color: var(--orange-dark);
  font-size: 0.7rem;
  font-weight: bold;
  border-radius: 50%;
  padding: 2px 6px;
}

/* profile icon */
.cart-profile-icons {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.profile-icon {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: var(--orange-dark);
  color: white;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: -50px;
  cursor: pointer;
}

.profile-icon:hover{
  background-color: var(--orange);
}

.initials {
  font-size: 14px;
  letter-spacing: 2px;
  margin-left: 2px;
  text-align: center;
  cursor: pointer;
}

.default-icon{
  font-size: 34px;
  cursor:pointer;
}

/* Hamburger menu */
.hamburger {
  display: none;
  font-size: 1.8rem;
  cursor: pointer;
  color: var(--white);
}

.mobile-only {
  display: flex;
}

/* Responsive */
@media (max-width: 1030px) {
  .hamburger {
    display: block;
  }

  .nav-links {
    flex-direction: column;
    width: 100%;
    max-height: 0;
    overflow: hidden;
    background: var(--orange);
    margin-top: 1rem;
  }

  .nav-links.open {
    max-height: 400px;
    padding: 1rem 0;
  }

  .nav-item {
    text-align: center;
    padding: 1rem 0;
    width: 100%;
  }

  .mobile-only {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    margin-top: 1rem;
  }

  .page-title {
    display: none;
  }
}
/* ✅ Fix position of cart/profile icons */
.cart-profile-icons {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-left: auto;
  position: absolute;
  right: 35px;
}

/* ✅ Only show mobile signup inside menu */
.mobile-signup {
  display: none;
}

@media (max-width: 1030px) {
  .mobile-signup {
    display: block;
    background: var(--white);
    color: var(--orange-dark);
    padding: 0.7rem;
    text-align: center;
    width: 90%;
    margin: 0 auto 0;
    border-radius: 6px;
    font-weight: 600;
    letter-spacing: 2px;
  }

    /* ✅ Fix position of cart/profile icons */
  .cart-profile-icons {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-left: auto;
    position: absolute;
    right: 60px;
  }
}
 
@media(max-width: 1290px) and (min-width: 1000px) {
  .cart-profile-icons {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-left: auto;
    position: absolute;
    right: 60px;
  }  
  .page-title {
  position: absolute;
  right: 95px;
  top: -90px;
  background: var(--orange);
  color: var(--white);
  padding: 0.7rem 1.4rem;
  border-radius: 0 0 0px 0px;
  width: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
}
} 
</style>
