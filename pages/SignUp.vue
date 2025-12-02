<template>
  <div class="signup-container">
    <h1 class="title">Create an Account</h1>
    <form @submit.prevent="handleSignup" class="signup-form">
      <div class="form-group">
        <label>First Name</label>
        <input v-model.trim="firstName" type="text" />
        <span v-if="errors.firstName" class="error">{{ errors.firstName }}</span>
      </div>
      <div class="form-group">
        <label>Last Name</label>
        <input v-model.trim="lastName" type="text" />
        <span v-if="errors.lastName" class="error">{{ errors.lastName }}</span>
      </div>
      <div class="form-group">
        <label>Email</label>
        <input v-model.trim="email" type="email" />
        <span v-if="errors.email" class="error">{{ errors.email }}</span>
      </div>
      <div class="form-group">
        <label>Phone Number</label>
        <input
          v-model="phone"
          type="text"
          maxlength="13"
          @input="phone = phone.replace(/\D/g, '')"
        />
        <span v-if="errors.phone" class="error">{{ errors.phone }}</span>
      </div>
      <div class="form-group">
        <label>Password</label>
        <input v-model="password" type="password" />
        <span v-if="errors.password" class="error">{{ errors.password }}</span>
      </div>
      <button class="submit-btn" type="submit">Sign Up</button>
      <p class="auth-linkx">
        Already have an account?
        <router-link to="/LoginPage" class="auth-router-linkx">Login</router-link>
      </p>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      password: "",
      errors: {},
    };
  },
  methods: {
    validateEmail(email) {
      const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return pattern.test(email);
    },
    handleSignup() {
      this.errors = {};

      if (!this.firstName.trim()) {
        this.errors.firstName = "First name is required";
      }
      if (!this.lastName.trim()) {
        this.errors.lastName = "Last name is required";
      }
      if (!this.email.trim()) {
        this.errors.email = "Email is required";
      } else if (!this.validateEmail(this.email)) {
        this.errors.email = "Invalid email address";
      }
      if (!this.phone.trim()) {
        this.errors.phone = "Phone number is required";
      } else if (!/^\d+$/.test(this.phone)) {
        this.errors.phone = "Phone number must be digits only";
      } else if (this.phone.length > 11) {
        this.errors.phone = "Phone number must not exceed 11 digits";
      }
      if (!this.password.trim()) {
        this.errors.password = "Password is required";
      }

      // Proceed only if there are no validation errors
      if (Object.keys(this.errors).length === 0) {
        // Make sure localStorage is always an array
        let stored = localStorage.getItem("userData");

        if (stored && !stored.startsWith("[")) {
          const singleUser = JSON.parse(stored);
          localStorage.setItem("userData", JSON.stringify([singleUser]));
        }

        const userData = {
          firstName: this.firstName.trim(),
          lastName: this.lastName.trim(),
          email: this.email.trim().toLowerCase(),
          phone: this.phone.trim(),
          password: this.password,
        };

        const existUsers = JSON.parse(localStorage.getItem("userData")) || [];

        const emailExists = existUsers.some(user => user.email === userData.email);
        const phoneExists = existUsers.some(user => user.phone === userData.phone);

        if (emailExists) {
          alert("A user with this email already exists!");
          return;
        }

        if (phoneExists) {
          alert("A user with this phone number already exists!");
          return;
        }

        // Save new user
        existUsers.push(userData);
        localStorage.setItem("userData", JSON.stringify(existUsers));

        // Redirect
        this.$router.push("/LoginPage");
      }
    },
  },
};
</script>

<style scoped>
.signup-container {
  padding: 40px 20px;
  max-width: 500px;
  margin: 0 auto;
  font-family: 'Plus Jakarta Sans', sans-serif;
}
.title {
  font-size: 32px;
  font-weight: 700;
  color: #FF6B00;
  margin-bottom: 30px;
  text-align: center;
}
.signup-form {
  background: #fff;
  padding: 30px 50px;
  border-radius: 12px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.07);
}
.form-group {
  margin-bottom: 20px;
}
label {
  font-weight: 600;
  display: block;
  margin-bottom: 6px;
}
input {
  width: 100%;
  padding: 15px 0;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 16px;
}
.submit-btn {
  width: 100%;
  background-color: #FF6B00;
  color: white;
  padding: 12px;
  font-size: 16px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s ease;
}
.submit-btn:hover {
  background-color: #e55c00;
}
.switch-link {
  margin-top: 20px;
  text-align: center;
}
.error {
  color: red;
  font-size: 14px;
  margin-top: 5px;
  display: block;
}
.auth-linkx {
  text-align: center;
  margin-top: 20px;
  font-size: 15px;
  color: #333;
  font-weight: 500;
}
.auth-router-linkx {
  color: #FF6B00;
  margin-left: 5px;
  text-decoration: underline;
  cursor: pointer;
  font-weight: 600;
}
</style>
