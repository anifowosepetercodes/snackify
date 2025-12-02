<template>
  <div class="delivery-page">
    <h1 class="page-title">🚚 Delivery Information</h1>

    <form @submit.prevent="submitForm" class="delivery-form">
      <div class="form-group">
        <label>Full Name</label>
        <input v-model="form.name" type="text" placeholder="Enter your full name" />
        <span v-if="errors.name" class="error-msg">{{ errors.name }}</span>
      </div>

        <div class="form-group">
        <label>Email</label>
        <input v-model="form.email" type="text" placeholder="example@example.com" />
        <span v-if="errors.email" class="error-msg">{{ errors.email }}</span>
        </div>

        <div class="form-group">
        <label>Phone Number</label>
        <input v-model="form.phone" type="tel" placeholder="e.g. 08012345678" @input="allowOnlyDigits" maxlength="11"/>
        <span v-if="errors.phone" class="error-msg">{{ errors.phone }}</span>
        </div>

        <div class="form-group">
        <label>Address</label>
        <textarea v-model="form.address" placeholder="House No, Street, City"></textarea>
        <span v-if="errors.address" class="error-msg">{{ errors.address }}</span>
        </div>

        <div class="form-group">
        <label>State</label>
        <select v-model="form.state">
            <option disabled value="">Select a state</option>
            <option v-for="s in states" :key="s">{{ s }}</option>
        </select>
        <span v-if="errors.state" class="error-msg">{{ errors.state }}</span>
        </div>


      <div class="form-group">
        <label>Delivery Instructions (Optional)</label>
        <textarea v-model="form.instructions" placeholder="Leave at the gate, call on arrival..."></textarea>
      </div>

      <button class="submit-btn" type="submit">Proceed to Payment</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'DeliveryPage',
  data() {
    return {
      form: {
        name: '',
        email: '',
        phone: '',
        address: '',
        state: '',
        instructions: ''
      },
      errors: {},
      states: [
        'Lagos', 'Abuja', 'Oyo', 'Ogun', 'Rivers', 'Kaduna', 'Kano', 'Enugu', 'Delta', 'Cross River'
      ]
    };
  },
  methods: {
    submitForm() {
      this.errors = {};
      const trimmedEmail = this.form.email.trim().toLowerCase();
    //  const bannedDomains = ['gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com', 'aol.com', 'live.com'];
      const emailParts = trimmedEmail.split('@');

      if (!this.form.name) {
        this.errors.name = 'Please enter your full name.';
      } else {
        delete this.errors.name;
      }

      if (!trimmedEmail) {
        this.errors.email = 'Email is required.';
      } else if (emailParts.length !== 2 || !emailParts[1]) {
        this.errors.email = 'Enter a valid email address.';
      }/*  else if (bannedDomains.includes(emailParts[1])) {
        this.errors.email = 'Emails from Gmail, Yahoo, Hotmail, Outlook, AOL, and Live are not allowed.';
      } */ else {
        delete this.errors.email;
      }

      if (!this.form.phone) {
        this.errors.phone = 'Phone number is required.';
      } else if (this.form.phone.length < 10) {
        this.errors.phone = 'Phone number must be at least 10 digits.';
      } else {
        delete this.errors.phone;
      }

      if (!this.form.address) {
        this.errors.address = 'Address is required.';
      } else {
        delete this.errors.address;
      }

      if (!this.form.state) {
        this.errors.state = 'Please select a state.';
      } else {
        delete this.errors.state;
      }

      if (Object.keys(this.errors).length === 0) {
        localStorage.setItem('deliveryInfo', JSON.stringify(this.form));
        this.$router.push('/CheckoutPage');
      }
    },

    allowOnlyDigits() {
      this.form.phone = this.form.phone.replace(/\D/g, '');
    }
  }
};
</script>



<style scoped>
.delivery-page {
  padding: 3rem 2rem;
  background: #fffefb;
  font-family: 'Plus Jakarta Sans', sans-serif;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.page-title {
  font-size: 2.5rem;
  color: #ff6b00;
  margin-bottom: 2rem;
}

.delivery-form {
  background: white;
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 700px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: #333;
}

input,
select,
textarea {
  padding: 0.9rem 1rem;
  font-size: 1rem;
  border: 2px solid #ccc;
  border-radius: 10px;
  outline: none;
  transition: border 0.3s ease;
}

input:focus,
select:focus,
textarea:focus {
  border-color: #ff6b00;
}

textarea {
  resize: vertical;
  min-height: 100px;
}

.submit-btn {
  padding: 1rem;
  background: #ff6b00;
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s;
}

.submit-btn:hover {
  background: #e85e00;
}

.error-msg {
  color: red;
  font-size: 0.9rem;
  margin-top: 0.3rem;
}

</style>
