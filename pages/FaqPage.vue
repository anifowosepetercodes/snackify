<template>
  <section class="faq-page">
    <div class="container">
      <h1>Frequently Asked Questions</h1>
      <div class="faq-list">
        <details v-for="(item, index) in faqs" :key="index" class="faq-item">
          <summary>{{ item.question }}</summary>
          <p>{{ item.answer }}</p>
        </details>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "FaqPage",
  data() {
    return {
      faqs: [
        {
          question: "What types of snacks do you offer?",
          answer: "We offer a wide range including chips, cookies, healthy bars, nuts, and seasonal limited editions.",
        },
        {
          question: "Do you offer international shipping?",
          answer: "Currently, we only ship within Nigeria, but international options are being explored.",
        },
        {
          question: "Can I subscribe to monthly snack boxes?",
          answer: "Yes, we offer flexible snack subscription plans. You can customize or cancel anytime.",
        },
        {
          question: "Are your snacks suitable for kids?",
          answer: "Yes! We have a special 'Kids' Favorites' section curated for younger snackers.",
        },
        {
          question: "Do you offer gluten-free or vegan options?",
          answer: "Absolutely! We tag snacks with gluten-free, vegan, and other dietary filters.",
        },
        {
          question: "What payment methods do you accept?",
          answer: "We accept Pay on Delivery, bank transfer, and all major debit/credit cards.",
        },
        {
          question: "Can I track my order?",
          answer: "Yes, you'll receive a tracking link via email or SMS once your order ships.",
        },
        {
          question: "How long does delivery take?",
          answer: "Lagos orders typically arrive in 1–2 days, other states may take 2–4 days.",
        },
        {
          question: "What if my order is damaged or missing items?",
          answer: "Contact our support within 48 hours with photos and order ID. We’ll sort it out quickly.",
        },
        {
          question: "Can I return or exchange snacks?",
          answer: "For hygiene reasons, snacks can't be returned. However, we offer store credit for valid complaints.",
        },
        {
          question: "How do I use a discount code?",
          answer: "Enter your promo code at checkout in the designated box. One code per order is allowed.",
        },
        {
          question: "Do you have a referral program?",
          answer: "Yes! Share your referral link and earn snack points or discounts for each friend that orders.",
        },
        {
          question: "Where can I see customer reviews?",
          answer: "You can view testimonials on our homepage or product pages under the 'Customer Reviews' section.",
        },
        {
          question: "How do I reset my account password?",
          answer: "Go to the login page, click 'Forgot Password', and follow the email instructions.",
        },
        {
          question: "Do you support bulk or corporate orders?",
          answer: "Yes, we handle party packs, events, and corporate gifting. Contact our support for bulk pricing.",
        },
        {
          question: "Is my payment info secure?",
          answer: "100%. We use encrypted payment gateways and never store your card details.",
        },
        {
          question: "Can I request a custom snack mix?",
          answer: "You can! Check the 'Custom Mix' page to choose your preferred combination.",
        },
        {
          question: "What are snack points and how do I earn them?",
          answer: "You earn points with every order, referral, and review. Redeem them for discounts.",
        },
        {
          question: "Where can I update my shipping address?",
          answer: "Log into your account, click 'My Profile', and update your address under 'Shipping Info'.",
        },
        {
          question: "How do I contact support?",
          answer: "Use the live chat button or visit the 'Help' page. We're available 9 AM – 9 PM daily.",
        },
        {
          question: "Do you offer same-day delivery?",
          answer: "In select cities, yes. Choose the express option at checkout if available.",
        },
        {
          question: "Are snacks locally sourced or imported?",
          answer: "We mix both! Many of our snacks are proudly made in Nigeria, while some are imported treats.",
        },
        {
          question: "Will you launch a mobile app?",
          answer: "Yes, our mobile app is in development. Stay subscribed for launch updates!",
        },
        {
          question: "How do I cancel an order?",
          answer: "If your order hasn't shipped, contact support immediately to cancel or edit it.",
        },
        {
          question: "Do you have a loyalty or VIP program?",
          answer: "Yes! Frequent shoppers unlock exclusive tiers with better perks and early access to launches.",
        }
      ]
    };
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@600;700&display=swap');
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css');
</style>

<style scoped>
.faq-page {
  padding: 3rem 1rem;
  background: #fffefc;
  font-family: 'Plus Jakarta Sans', sans-serif;
  color: #333;
}

.faq-page h1 {
  text-align: center;
  margin-bottom: 2rem;
  color: #ff6600;
  font-size: 2.2rem;
}

.faq-item {
  margin-bottom: 1.2rem;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  padding: 1rem 1.2rem;
  transition: all 0.3s ease;
}

.faq-item summary {
  font-weight: bold;
  cursor: pointer;
  color: #ff6600;
  outline: none;
}

.faq-item p {
  margin-top: 0.5rem;
  font-size: 0.95rem;
  color: #444;
}
</style>
