<template>
  <div class="homepage-wrapper">

  <!-- hero section -->
    <HeroSection />

  <!-- categories slider section -->    
    <CategoriesSlider />

    <!--promo banner Section -->
    <PromoBanner />

  <!-- snack quiz section -->    
    <SnackQuiz />

    <!-- Ad Popup -->
    <div v-if="showAd" class="ad-popup-overlay">
    <div class="ad-popup">
      <div class="ad-content">
        <button class="close-btn" @click="closeAd">×</button>
        <h2>🔥 Limited Time Offer!</h2>
        <p>Get 20% off all chocolate snacks 🍫</p>
        <button class="shop-now-btn" @click="shopNow">
          <span v-if="!loading">Shop Now</span>
          <span v-else><i class="fas fa-spinner fa-spin"></i> Redirecting...</span>
        </button>
      </div>
    </div>
    </div>

    <!-- Ad 2 Popup -->
    <!-- Sign Up Benefits Popup -->
    <div v-if="showSignupPopup" class="signup-popup-overlay">
      <div class="signup-popup-box">
        <button class="close-btns" @click="closeSignupPopup">×</button>
        <h2>✨ Why Sign Up?</h2>
        <ul class="benefits-list">
          <li>🍪 Unlock exclusive snack discounts</li>
          <li>🚀 Enjoy faster checkouts</li>
          <li>🎁 Get early access to new arrivals</li>
        </ul>
        <button class="signup-btn" @click="goToSignup">Sign Up Now</button>
      </div>
    </div>

    <!-- Ad 6 Popup -->
    <!-- Snack Wheel Popup -->
    <div v-if="showSnackWheel" class="snackwheel-overlay">
      <div class="snackwheel-box">
        <button class="snackwheel-close" @click="closeSnackWheel">×</button>
        <h2>🎡 Spin the Snack Wheel!</h2>
        <p class="snackwheel-text">
          Tap below to try your luck and win <strong>free snacks</strong>, <strong>discounts</strong>, or even <strong>free delivery</strong>!
        </p>
        <button class="snackwheel-btn" @click="spinWheel" :disabled="spinning">
          {{ spinning ? "Spinning..." : "Spin Now" }}
        </button>
        <p v-if="resultMessage" class="spin-result">{{ resultMessage }}</p>
      </div>
    </div>

    <!-- Ad 7 Popup -->
    <!-- Flash Deal Popup -->
     <div v-if="showFlashDeal" class="flashdeal-overlay">
      <div class="flashdeal-box">
        <button class="flashdeal-close" @click="closeFlashDeal">×</button>
        <h2>🔥 Flash Deal!</h2>
        <p class="flashdeal-message">
          Get <strong>20% OFF</strong> all snacks for the next <strong>2 hours</strong>! Don’t miss out.
        </p>
        <button class="flashdeal-btn" @click="goToDeals">Claim Deal</button>
      </div>
    </div>


    <!-- Snack Sections -->
    <div
      v-for="(section, index) in snackSections"
      :key="index"
      class="snack-section"
      :style="{ animationDelay: index * 0.2 + 's' }"
    >
      <div class="section-title">
        <i class="fas fa-cookie-bite icon"></i>
        <h2>{{ section.title }}</h2>
      </div>
      <div class="snack-grid"
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-delay="200"
      data-aos-offset="120"
      data-aos-easing="ease-in-out">
        <div v-for="(snack, i) in section.items" :key="i" class="snack-item">
          <img :src="snack.image" alt="snack" /> 
          <h3>{{ snack.name }}</h3>
          <h4>&#8358;{{ snack.price.toLocaleString() }}</h4>
          <p>{{ snack.description }}</p>
          <button @click="addToCart(snack, $event)">Add to Cart</button>
        </div>
      </div>
    </div>

  <!-- top picks section -->
    <TopPicks />

  <!-- social proof section -->
    <SocialProof />

    <!--snack tips Section -->
    <SnackTips />

    <!-- blog preview -->
    <BlogPreview />

    <!--customer highlight -->
    <CustomerHighlights />

    <!-- socialfeeds Section -->
     <SocialFeed />

    <!-- meet the team Section -->
     <MeetTeam />

    <!-- Customer Section -->
     <CustomerSection />

    <!-- Back to Top Arrow -->
    <button class="back-to-top" @click="scrollToTop">↑</button>
  </div>
</template>

<script>
import HeroSection from "@/components/HeroSection.vue";
import CategoriesSlider from "@/components/CategoriesSlider.vue";
import CustomerSection from "@/components/CustomerSection.vue";
import SnackQuiz from "@/components/SnackQuiz.vue";
import CustomerHighlights from "@/components/CustomerHighlights.vue";
import SocialProof from "@/components/SocialProof.vue";
import SnackTips from "@/components/SnackTips.vue";
import BlogPreview from "@/components/BlogPreview.vue";
import PromoBanner from "@/components/PromoBanner.vue";
import SocialFeed from "@/components/SocialFeed.vue";
import MeetTeam from "@/components/MeetTeam.vue";
import TopPicks from "@/components/TopPicks.vue";
import {eventBus} from '@/eventBus';

export default {
  components: { HeroSection, CategoriesSlider, CustomerSection, SnackQuiz, CustomerHighlights, SocialProof, SnackTips, BlogPreview, PromoBanner, SocialFeed, MeetTeam, TopPicks },
  data() {
    return {
      snackSections: [
        { title: "Best Sellers", items: [] },
        { title: "New Arrivals", items: [] },
        { title: "Kids' Favorites", items: [] },
        { title: "Hot Deals", items: [] },
        { title: "Budget Bites", items: [] },
        { title: "Healthy Picks", items: [] },
      ],
      snackData: [],
      showAd: false,
      loading: false,
      adDismissed: false,
      showSignupPopup: false,
      showExitAd: false,
      exitShown: false,    
      showFreeShippingAd: false,
      submittingShipping: false,
      showNewsletterAd: false,
      submitting: false,
      confirmationMessage: "",
      showSnackWheel: false,
      spinning: false,
      resultMessage: ""  ,
      showFlashDeal: false,
      isPopupActive: false,
      popupQueue: [],
      activePopup: null
    };
  },
  
mounted() {
  const allSnacks = [
    { id: 3, name: "Lay’s Sour Cream", price: 3368, description: "Delicious and crunchy.", image: "https://i5.walmartimages.com/seo/Lay-s-Potato-Chips-Cheddar-Sour-Cream-7-75-oz-Bag_8a71fcba-e670-4b5c-9120-8b162d739de3_1.39861ccb364e931a9b4411d1e96484c5.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF" },
    { id: 4, name: "Pringles Original", price: 2648, description: "Delicious and crunchy.", image: "https://i5.walmartimages.com/seo/Pringles-Original-Potato-Crisps-Chips-Lunch-Snacks-5-2-oz-Canister_391a664c-d197-4ba6-9b9f-4115207842a8.cd7d4607a70d78115c49402ab08cde3b.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF" },
    { id: 203, name: "Sprite", price: 6368, description: "Refresh Your day with every sip.", image: "https://i5.walmartimages.com/seo/Sprite-Lemon-Lime-Soda-Pop-16-9-fl-oz-6-Pack-Bottles_de312534-8fb0-4ba4-b835-8f50ce281234.392a100f71782ba7fd8cf132afa07e54.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF" },
    { vid: 51, name: "Oreo Original", price: 6368, description: "Sweet little treat with big flavor.", image: "https://i5.walmartimages.com/seo/OREO-Chocolate-Sandwich-Cookies-13-29-oz_0c0a7e5a-1b55-4295-892e-8000c7e82091.768b59f3877d9bb2c413420259005289.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF" },
    { id: 52, name: "Chips Ahoy!", price: 6368, description: "Sweet little treat with big flavor.", image: "https://i5.walmartimages.com/seo/CHIPS-AHOY-Original-Chocolate-Chip-Cookies-13-oz_96a27615-4086-4e03-817e-e7da7b3da1c6.a18cc58f14d21ceb1822607a0df21032.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF" },
    { id: 9, name: "Tostitos Scoops", price: 4848, description: "Delicious and crunchy.", image: "https://i5.walmartimages.com/seo/Tostitos-Scoops-Party-Size-Tortilla-Chips-14-5-oz-Bag_1da35363-3938-4fe8-9821-55139fe59e1f.8b980f7e9bf4008ed292276401cd2b3c.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF" },
    { id: 60, name: "Lorna Doone Shortbread", price: 5888, description: "Sweet little treat with big flavor.", image: "https://i5.walmartimages.com/seo/Lorna-Doone-Shortbread-Cookies-10-Snack-Packs-4-Cookies-Per-Pack_0d4c1586-9b02-44b9-9feb-fb6a062c199e.b64b68cf5aee066e992aa31d47791d55.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF" },
    { id: 109, name: "Swedish Fish", price: 1568, description: "Sweet moment in every bites.", image: require("@/assets/6.jpeg") },
    { id: 113, name: "M&M’s Milk Chocolate", price: 2368, description: "Sweet moment in every bites.", image: require("@/assets/1.jpeg") },
    { id: 217, name: "Capri Sun Summer Blast", price: 6368, description: "Refresh Your day with every sip.", image: "https://i5.walmartimages.com/seo/60Z-CAPRI-SUN-SUMMER-BLAST-4-10CT_46aa2061-cb6b-4ff5-a3dd-78ab96405272.af7cbf4ea842b19dc9c54e94139ded24.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF" },
    { id: 452, name: "Caramel Popcorn", price: 1500, description: "Delicious and crunchy.", image: require("@/assets/52.jpeg") },
    { id: 218, name: "Kool-Aid Tropical Punch", price: 5568, description: "Refresh Your day with every sip.", image: "https://i5.walmartimages.com/seo/Kool-Aid-Unsweetened-Tropical-Punch-Artificially-Flavored-Powdered-Drink-Mix-0-16-oz-Packet_3ec73069-9f4f-43e5-99f4-0dfe57bc23e9.aeef1ad4665a99e41bc801f450491e49.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF" },
    { id: 101, name: "Skittles Original", price: 1568, description: "Sweet moment in every bites.", image: "https://i5.walmartimages.com/seo/SKITTLES-POP-D-Originals-Freeze-Dried-Candy-5-5-Oz-Bag_28907744-fc74-4eb2-8f6d-2183d0cd6ab8.96c5f4b0a3c0a319c9de14695a99195a.png?odnHeight=640&odnWidth=640&odnBg=FFFFFF" },
    { id: 306, name: "Lemon Tart", price: 1500, description: "Sweet little treat with big flavor.", image: "https://i5.walmartimages.com/seo/Freshness-Guaranteed-4-Mini-Baked-Lemon-Pie-3-5-oz_a430519d-8363-4a02-a53a-6b4b8f7838a2.792249c4b0a6dda2f297d56c26468eda.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF" },
    { id: 455, name: "White Cheddar Popcorn", price: 1450, description: "Sweet moment in every bites.", image: require("@/assets/55.jpeg") },
    { id: 321, name: "Chocolate Chip Muffin", price: 1300, description: "Sweet moment in every bites.", image: "https://i5.walmartimages.com/seo/Betty-Crocker-Chocolate-Chip-Muffin-and-Quick-Bread-Mix-14-75-oz_3e5670c0-d393-48c2-a7b8-1b7a343ec76a.02fcfdf4c03ff6f738c513ad23c742d3.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF" },
    { id: 304, name: "Vanilla Cupcake", price: 600, description: "Sweet moment in every bites.", image: "https://i5.walmartimages.com/seo/Freshness-Guaranteed-Confetti-Mini-Cupcakes-10-oz-12-Count_ccd43106-d60a-4b9a-a852-10692f2ae56e.2cb4fcccbd677dfb2d59810e76c87ceb.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF" },
    { id: 301, name: "Chocolate Croissant", price: 800, description: "Sweet moment in every bites.", image: "https://i5.walmartimages.com/seo/7Days-Soft-Croissant-Chocolate-Croissant-Breakfast-Pastry-Individually-Wrapped-On-The-Go-Snack-Non-GMO-Pack-of-6_4bfc4b3c-6896-4ffe-a161-688d203ce2d2.1183ae8af6b93bec54946568abc9211d.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF" },
    { id: 99, name: "Parle G", price: 200, description: "Sweet little treat with big flavor.", image: "https://i5.walmartimages.com/seo/Parle-G-Biscuits-Original-Gluco-Biscuits-56-4g-Pack-of-12_9db18bee-9d6b-4eb6-a5e5-7c954445e6d2.30cd2508c92dd6855accaea92142df78.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF" },
    { id: 104, name: "Snickers Bar", price: 868, description: "Sweet moment in every bites.", image: "https://i5.walmartimages.com/seo/Snickers-Fun-Size-Bar-2-6oz-73g-5-Count-Plastic-Packet_9b9c3cf6-9b69-4940-8689-3758d4a558aa.5d1fc4343495c829066f37881b5b782d.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF" },
    { id: 470, name: "Herb & Spice Popcorn", price: 6500, description: "Delicious and crunchy.", image: require("@/assets/70.jpeg") },
    { id: 53, name: "Nabisco Ginger Snaps", price: 4888, description: "Sweet little treat with big flavor.", image: "https://i5.walmartimages.com/seo/Ginger-Snaps-Cookies-Ginger-Cookies-16-oz_b1c8ac8b-b9f0-44a8-a8be-1fb4709cb03e.e6de40f6b8af7a309acf6c1155bf67f6.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF" },
    { id: 214, name: "Lipton Green Tea", price: 6368, description: "Refresh Your day with every sip.", image: "https://i5.walmartimages.com/seo/Lipton-Peach-Iced-Tea-Bottled-Tea-Drink-16-9-oz-12-Pack_2ecf1af9-d714-4906-b333-d7a116a4dcaa.081bc24e2c2332957b2542b1c48dd852.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF" },
    { id: 480, name: "Garlic Herb Popcorn", price: 6500, description: "Delicious and crunchy.", image: require("@/assets/80.png") },
  ];

  this.snackSections.forEach((section, index) => {
    const start = index * 4;
    section.items = allSnacks.slice(start, start + 4);
  });
/* 
sessionStorage.removeItem("adDismissed"); // 👈 clear it for now
setTimeout(() => {
  this.showAd = true;
}, 2000);
 */
 /* ad 1 */
  if(!sessionStorage.getItem("adDismissed")) { // 👈 clear it for now
    setTimeout(() => {
      this.showAd = true;
      }, 10000);
  }
  /* 
sessionStorage.removeItem("signupPopupDismissed"); // 👈 clear it for now
setTimeout(() => {
  this.showSignupPopup = true;
}, 1000);
 */
  /* ad 2 */
 if (!sessionStorage.getItem("signupPopupDismissed")) {
    setTimeout(() => {
      this.showSignupPopup = true;
    }, 45000); // Show after 60 seconds (adjust if needed)
  }

    /* 
sessionStorage.removeItem("snackWheelDismissed"); // 👈 clear it for now
setTimeout(() => {
  this.showSnackWheel = true;
}, 5000);
 */
   /* ad 6 */
  if (!sessionStorage.getItem("snackWheelDismissed")) {
    setTimeout(() => {
      this.showSnackWheel = true;
    }, 75000); // Show after 90 seconds
  }

    /* 
sessionStorage.removeItem("flashDealDismissed"); // 👈 clear it for now
setTimeout(() => {
  this.showFlashDeal = true;
}, 55000);
 */
   /* ad 7 */
  if (!sessionStorage.getItem("flashDealDismissed")) {
    setTimeout(() => {
      this.showFlashDeal = true;
    }, 105000); // Show after 30 seconds
  }

},
  watch: {
  showAd(newVal) {
    document.body.style.overflow = newVal ? 'hidden' : 'auto';
  }
},
  methods: {
    // pop up 1
    closeAd() {
      this.showAd = false;
      sessionStorage.setItem("adDismissed", "true");
    },
    shopNow() {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
        sessionStorage.setItem("adDismissed", "true");
        if (this.$router) {
          this.$router.push("/ShopPage");
        } else {
          window.location.href = "/ShopPage";
        }
      }, 1500);
    },
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
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
     // pop up 2
      closeSignupPopup() {
      this.showSignupPopup = false;
      sessionStorage.setItem("signupPopupDismissed", "true");
    },
    goToSignup() {
      sessionStorage.setItem("signupPopupDismissed", "true");
      this.showSignupPopup = false;
      this.$router.push("/SignUp"); // or use window.location.href = '/SignUp';
     },
       // pop up 3
      closeExitPopup() {
      this.showExitAd = false;
      sessionStorage.setItem("exitAdShown", "true");
    },
    goToShop() {
      sessionStorage.setItem("signupPopupDismissed", "true");
      this.showExitAd = false;
      this.$router.push("/ShopPage"); // or use window.location.href = '/SignUp';
     },
    // pop up 4
      closeFreeShippingAd() {
    this.showFreeShippingAd = false;
    sessionStorage.setItem("freeShippingAdSeen", "true");
  },
  confirmFreeShippingAd() {
    this.submittingShipping = true;
    setTimeout(() => {
      this.submittingShipping = false;
      this.showFreeShippingAd = false;
      sessionStorage.setItem("freeShippingAdSeen", "true");
      this.$router.push("/ShopPage");
    }, 1500);
   },
    // pop up 5
      closeNewsletterAd() {
      this.showNewsletterAd = false;
      sessionStorage.setItem("newsletterAdDismissed", "true");
    },
    confirmNewsletterAd() {
      this.submitting = true;
      setTimeout(() => {
        this.submitting = false;
        this.confirmationMessage = "✅ You're now subscribed!";
        sessionStorage.setItem("newsletterAdDismissed", "true");
        setTimeout(() => {
          this.showNewsletterAd = false;
          this.confirmationMessage = "";
        }, 2000);
      }, 1500);
    },
    // pop up 6
        closeSnackWheel() {
      this.showSnackWheel = false;
      sessionStorage.setItem("snackWheelDismissed", "true");
    },
    spinWheel() {
      this.spinning = true;
      this.resultMessage = "";
      setTimeout(() => {
        this.spinning = false;
        const rewards = [
          "🎁 Free Snack Added to Cart!",
          "🚚 Free Delivery on Next Order!",
          "💸 10% Discount Applied!",
          "🔥 You Almost Won... Try Again Next Time!",
          "🎉 Bonus Snack on First Purchase!"
        ];
        this.resultMessage = rewards[Math.floor(Math.random() * rewards.length)];
        sessionStorage.setItem("snackWheelDismissed", "true");
      }, 2000);
    },
    // pop up 7
      closeFlashDeal() {
      this.showFlashDeal = false;
      sessionStorage.setItem("flashDealDismissed", "true");
    },
    goToDeals() {
      this.showFlashDeal = false;
      sessionStorage.setItem("flashDealDismissed", "true");
      this.$router.push("/ShopPage");
    }
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@600;700&display=swap');
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css');

body {
  font-family: 'Plus Jakarta Sans', sans-serif;
  background: #fafafa;
  margin: 0;
  overflow-x: hidden;
}

.homepage-wrapper {
  background: #f4f4f8;
  padding-bottom: 4rem;
}

@keyframes flyToCart {
  0% {
    transform: scale(1);
    opacity: 1;
    left: var(--start-left);
    top: var(--start-top);
  }
  100% {
    transform: scale(0.1);
    opacity: 0;
    left: var(--end-left);
    top: var(--end-top);
  }
}

.fly-to-cart-img {
  position: fixed;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  z-index: 9999;
  pointer-events: none;
  object-fit: cover;
  animation: flyToCart 2s ease-in-out forwards;
}

.snack-section {
  padding: 2rem 1.5rem;
  background: #ffffff;
  margin: 1.2rem auto;
  max-width: 1200px;
  box-shadow: 0 6px 14px rgba(0, 0, 0, 0.04);
  animation: fadeInUp 0.6s ease forwards;
  opacity: 0;
  border-radius: 14px;
}

.section-title {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 1rem;
  padding-left: 1rem;
}

.section-title h2 {
  font-size: 2rem;
  color: #ff6600;
  font-weight: 700;
}

.section-title .icon {
  font-size: 1.8rem;
  color: #ff9900;
}

.snack-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 1.2rem;
  justify-content: center;
}

.snack-item {
  width: calc(20% - 1rem);
  background: #fff;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  transition: 0.3s ease;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
}

.snack-item img {
  width: 100%;
  height: 150px;
  object-fit: contain;
  border-radius: 10px;
}

.snack-item h3 {
  margin: 0;
  font-weight: 600;
  font-size: 1.1rem;
}

.snack-item h4 {
  margin-bottom: -13px;
  margin-top: 3px;
  font-size: 1rem;
}

.snack-item p {
  font-size: 0.9rem;
  color: #666;
}

.snack-item button {
  margin-top: 0;
  padding: 0.5rem 1rem;
  background-color: #ff6600;
  color: white;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s ease;
}

.snack-item button:hover {
  background-color: #e54b00;
}

.back-to-top {
  position: fixed;
  right: 1.5rem;
  bottom: 1.5rem;
  background-color: #ff6600;
  color: white;
  border: none;
  font-size: 1.6rem;
  border-radius: 50%;
  width: 45px;
  height: 45px;
  cursor: pointer;
  z-index: 999;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

/* Ad Popup 1 Styles */
.ad-popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  background-color: rgba(0, 0, 0, 0.6); /* dark background */
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: auto; /* ensure overlay blocks interaction */
}

.ad-popup {
  background: white;
  padding: 30px;
  border-radius: 10px;
  text-align: center;
  position: relative;
  width: 300px;
  max-width: 90%;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
  animation: pop-in 0.3s ease-out;
}

.ad-content h2 {
  color: #ff6600;
}

.ad-content .countdown {
  font-size: 1rem;
  color: #333;
  margin-top: 0.5rem;
}

.ad-content button {
  margin-top: 1rem;
  background: #ff6600;
  color: white;
  border: none;
  padding: 0.6rem 1.2rem;
  font-size: 1.1rem;
  border-radius: 5px;
  cursor: pointer;
}

.close-btn {
  position: absolute;
  top: -12px;
  right: 4px;
  font-size: 1.5rem;
  border: none;
  background: transparent;
  cursor: pointer;
  color: #ff6600;
}

/* ad popup 2 */
.signup-popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}

.signup-popup-box {
  background: #fff;
  max-width: 400px;
  width: 90%;
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  text-align: center;
  position: relative;
  font-family: 'Plus Jakarta Sans', sans-serif;
  animation: popUpScale 0.3s ease;
}

@keyframes popUpScale {
  0% {
    transform: scale(0.8);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

.close-btns {
  position: absolute;
  top: 0;
  left: 0;
  background: transparent;
  border: none;
  font-size: 22px;
  color: #444;
  cursor: pointer;
}

.signup-popup-box h2 {
  margin-bottom: 1rem;
  font-weight: 700;
  color: #ff6600;
}

.benefits-list {
  list-style: none;
  padding: 0;
  margin: 0 0 1.5rem 0;
  text-align: left;
  font-size: 16px;
  color: #333;
  line-height: 1.8;
}

.benefits-list li {
  margin-bottom: 8px;
  display: flex;
  align-items: center;
}

.signup-btn {
  background-color: #ff6600;
  color: white;
  border: none;
  padding: 12px 20px;
  font-size: 16px;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s ease;
}

.signup-btn:hover {
  background-color: #e05500;
}

/* ad pop up 3*/
.exit-popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.exit-popup {
  background: #fff;
  padding: 2rem;
  border-radius: 14px;
  max-width: 400px;
  width: 90%;
  text-align: center;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
  position: relative;
  animation: fadeInUp 0.3s ease;
}

.exit-popup h2 {
  color: #ff6b3d;
  font-size: 24px;
  margin-bottom: 10px;
}

.exit-popup p {
  color: #444;
  font-size: 16px;
  margin-bottom: 20px;
}

.exit-shop-btn {
  background: #ff6b3d;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
}

.exit-shop-btn:hover {
  background: #e65224;
}

.exit-close {
  position: absolute;
  top: 8px;
  right: 12px;
  font-size: 22px;
  background: none;
  border: none;
  cursor: pointer;
}

/* ad pop up 4 */
.shipping-overlay {
  position: fixed;
  top: 0; left: 0;
  width: 100vw; height: 100vh;
  background-color: rgba(0, 0, 0, 0.75);
  display: flex; align-items: center; justify-content: center;
  z-index: 9999;
}

.shipping-popup {
  background: white;
  padding: 2rem;
  border-radius: 16px;
  width: 90%;
  max-width: 400px;
  text-align: center;
  font-family: 'Plus Jakarta Sans', sans-serif;
  position: relative;
  animation: fadeInSlide 0.4s ease;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.2);
}

@keyframes fadeInSlide {
  from {
    transform: translateY(40px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.shipping-popup h2 {
  font-size: 24px;
  color: #FF6B00;
  margin-bottom: 14px;
}

.shipping-popup p {
  font-size: 15px;
  color: #333;
  margin-bottom: 20px;
  line-height: 1.6;
}

.shop-btn {
  background: #FF6B00;
  color: white;
  border: none;
  padding: 12px 20px;
  border-radius: 8px;
  font-size: 15px;
  font-weight: 600;
  width: 100%;
  cursor: pointer;
  transition: background 0.3s ease;
}

.shop-btn:hover {
  background-color: #e95d00;
}

.ship-close-btn {
  position: absolute;
  top: 12px;
  right: 16px;
  font-size: 22px;
  background: none;
  border: none;
  cursor: pointer;
  color: #888;
}

/* ad pop up 5 */
.newsletter-overlay {
  position: fixed;
  top: 0; left: 0;
  width: 100vw; height: 100vh;
  background-color: rgba(0, 0, 0, 0.75);
  display: flex; justify-content: center; align-items: center;
  z-index: 9999;
}

.newsletter-popup {
  background: #fff;
  padding: 2rem;
  border-radius: 16px;
  width: 90%;
  max-width: 400px;
  text-align: center;
  font-family: 'Plus Jakarta Sans', sans-serif;
  animation: fadeSlideIn 0.4s ease;
  position: relative;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.2);
}

@keyframes fadeSlideIn {
  0% { transform: translateY(40px); opacity: 0; }
  100% { transform: translateY(0); opacity: 1; }
}

.news-close-btn {
  position: absolute;
  top: 12px;
  right: 16px;
  font-size: 22px;
  background: none;
  border: none;
  cursor: pointer;
  color: #888;
}

.newsletter-popup h2 {
  font-size: 24px;
  color: #FF6B00;
  margin-bottom: 14px;
}

.newsletter-popup p {
  font-size: 15px;
  color: #333;
  line-height: 1.6;
  margin-bottom: 18px;
}

.signup-btn {
  background: #FF6B00;
  color: white;
  border: none;
  padding: 12px 20px;
  border-radius: 8px;
  font-size: 15px;
  font-weight: 600;
  width: 100%;
  cursor: pointer;
  transition: background 0.3s ease;
}

.signup-btn:hover {
  background: #e95d00;
}

.confirmation-msg {
  margin-top: 12px;
  font-size: 14px;
  color: #28a745;
}

/* ad pop up 6 */
.snackwheel-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw; height: 100vh;
  background-color: rgba(0, 0, 0, 0.75);
  display: flex; align-items: center; justify-content: center;
  z-index: 9999;
}

.snackwheel-box {
  background: #fff;
  padding: 2rem;
  border-radius: 16px;
  width: 90%;
  max-width: 440px;
  text-align: center;
  font-family: 'Plus Jakarta Sans', sans-serif;
  animation: wheelFadeIn 0.4s ease;
  position: relative;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.25);
}

@keyframes wheelFadeIn {
  0% { transform: scale(0.8); opacity: 0; }
  100% { transform: scale(1); opacity: 1; }
}

.snackwheel-close {
  position: absolute;
  top: 10px;
  right: 14px;
  font-size: 22px;
  background: none;
  border: none;
  cursor: pointer;
  color: #666;
}

.snackwheel-box h2 {
  font-size: 26px;
  color: #FF6B00;
  margin-bottom: 14px;
}

.snackwheel-text {
  font-size: 16px;
  color: #333;
  margin-bottom: 24px;
  line-height: 1.6;
}

.snackwheel-btn {
  background-color: #FF6B00;
  color: white;
  border: none;
  padding: 12px 20px;
  border-radius: 8px;
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;
  transition: background 0.3s ease;
}

.snackwheel-btn:hover {
  background-color: #e65c00;
}

.spin-result {
  margin-top: 20px;
  font-size: 16px;
  font-weight: bold;
  color: #28a745;
}

/* ad pop up 7 */
.flashdeal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}

.flashdeal-box {
  background: #fff;
  padding: 2rem;
  border-radius: 12px;
  max-width: 420px;
  width: 90%;
  text-align: center;
  font-family: 'Plus Jakarta Sans', sans-serif;
  animation: flashDealBounce 0.4s ease;
  position: relative;
  box-shadow: 0 20px 40px rgba(255, 102, 0, 0.2);
}

@keyframes flashDealBounce {
  0% {
    transform: scale(0.8);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

.flashdeal-close {
  position: absolute;
  top: 10px;
  right: 12px;
  font-size: 20px;
  background: none;
  border: none;
  color: #888;
  cursor: pointer;
}

.flashdeal-box h2 {
  font-size: 26px;
  margin-bottom: 12px;
  color: #ff4500;
}

.flashdeal-message {
  font-size: 16px;
  color: #333;
  margin-bottom: 20px;
}

.flashdeal-btn {
  background-color: #ff4500;
  color: white;
  border: none;
  padding: 12px 20px;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  transition: background 0.3s ease;
}

.flashdeal-btn:hover {
  background-color: #d93700;
}


@keyframes fadeInUp {
  from {
    transform: translateY(40px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

/* Animations */
@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes popIn {
  0% {
    transform: scale(0.6);
    opacity: 0;
  }
  100% {
    transform: scale(1);
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


@media (max-width: 768px) {
  .snack-item {
    width: calc(50% - 1rem);
  }
}
</style>
