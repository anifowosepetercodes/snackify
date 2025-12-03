<template>
  <div class="contact-container">
    <section class="contact-hero">
      <h1>Contact Us</h1>
      <p>We’d love to hear from you! Reach out for questions, feedback, or just to say hi. 🍪</p>
    </section>

    <form @submit.prevent="handleSubmit" novalidate>
      <div class="form-group">
        <label>Full Name</label>
        <input
          v-model="form.name"
          @blur="validateField('name')"
          type="text"
          placeholder="Enter your full name"
        />
        <span class="error" v-if="errors.name">{{ errors.name }}</span>
      </div>

      <div class="form-group">
        <label>Email</label>
        <input
          v-model="form.email"
          @blur="validateField('email')"
          type="email"
          placeholder="example@gmail.com"
        />
        <span class="error" v-if="errors.email">{{ errors.email }}</span>
      </div>

      <div class="form-group">
        <label>Phone Number</label>
        <input
          type="tel"
          v-model="form.phone"
          @keydown="allowOnlyNumbers"
          @blur="validateField('phone')"
          maxlength="12"
          placeholder="0812345678"
        />
        <span class="error" v-if="errors.phone">{{ errors.phone }}</span>
      </div>

      <div class="form-group">
        <label>Subject</label>
        <input
          v-model="form.subject"
          @blur="validateField('subject')"
          type="text"
          placeholder="Subject of your message"
        />
        <span class="error" v-if="errors.subject">{{ errors.subject }}</span>
      </div>

      <div class="form-group">
        <label>Message</label>
        <textarea
          v-model="form.message"
          @blur="validateField('message')"
          rows="5"
          placeholder="Write your message here..."
        ></textarea>
        <span class="error" v-if="errors.message">{{ errors.message }}</span>
      </div>

      <button type="submit">Send Message</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "ContactPage",
  data() {
    return {
      form: {
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      },
      errors: {}
    };
  },
  methods: {
    validateField(field) {
      const value = this.form[field];
      if (!value) {
        this.errors[field] = "This field is required.";
      } else {
        this.errors[field] = "";
        if (field === "email" && !/^[^\s@]+@[^\s@]+\.(com|net|org|ng)$/.test(value)) {
          this.errors.email = "Enter a valid email address.";
        }
        if (field === "phone" && value.length < 10) {
          this.errors.phone = "Phone number must be at least 10 digits.";
        }
        if (field === "subject" && value.length < 3) {
          this.errors.subject = "Subject is too short.";
        }
        if (field === "message" && value.length < 5) {
          this.errors.message = "Message must be at least 5 characters.";
        }
      }
    },
    handleSubmit() {
      Object.keys(this.form).forEach(this.validateField);
      const hasError = Object.values(this.errors).some(Boolean);
      if (!hasError) {
        alert("Message sent successfully!");
        this.form = {
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: ""
        };
      }
    },
    allowOnlyNumbers(e) {
      const key = e.key;
      if(!/^\d$/.test(key) && key !== 'Backspace' && key !== 'ArrowLeft' && key !== 'ArrowRight' && key !== 'Delete') {
        e.preventDefault();
    }
   }
  }
};
</script>

<style scoped>
.contact-container {
  font-family: 'Plus Jakarta Sans', sans-serif;
  background: #fffdfb;
  color: #333;
  padding: 40px 20px;
  max-width: 800px;
  margin: auto;
}

.contact-hero {
  text-align: center;
  margin-bottom: 30px;
}

.contact-hero h1 {
  font-size: 36px;
  color: #ff6600;
  margin-bottom: 10px;
}

.contact-hero p {
  font-size: 16px;
  color: #666;
  max-width: 600px;
  margin: 0 auto;
}

form {
  display: flex;
  flex-direction: column;
  gap: 25px;
  margin-top: 20px;
}

.form-group {
  display: flex;
  flex-direction: column;
}

label {
  font-weight: 600;
  margin-bottom: 5px;
  color: #333;
}

input,
textarea {
  border: 1px solid #ccc;
  padding: 12px;
  border-radius: 6px;
  font-size: 15px;
  background: #fffefc;
  transition: border-color 0.3s;
}

input:focus,
textarea:focus {
  border-color: #ff6600;
  outline: none;
}

button {
  background: #ff6600;
  color: white;
  border: none;
  padding: 14px;
  border-radius: 6px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s;
}

button:hover {
  background: #e25500;
}

.error {
  color: red;
  font-size: 13px;
  margin-top: 4px;
}
</style>
