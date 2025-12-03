<template>
  <div class="reset-password">
    <h2>Reset Your Password</h2>
    <form @submit.prevent="submitReset">
      <div class="input-group">
        <label>New Password</label>
        <input
          type="password"
          v-model="newPassword"
          @blur="validatePassword"
          :class="{ error: passwordError }"
        />
        <p v-if="passwordError" class="error-message">Password must be at least 6 characters.</p>
      </div>

      <div class="input-group">
        <label>Confirm Password</label>
        <input
          type="password"
          v-model="confirmPassword"
          @blur="validateConfirm"
          :class="{ error: confirmError }"
        />
        <p v-if="confirmError" class="error-message">Passwords do not match.</p>
      </div>

      <button type="submit">Submit New Password</button>
    </form>
  </div>
</template>
 
<script>
import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css';
export default {
  data() {
    return {
      newPassword: "",
      confirmPassword: "",
    };
  },
  methods: {
    resetPassword() {
      if (this.newPassword !== this.confirmPassword) {
        alert("Passwords do not match!");
        return;
      }

      const userData = JSON.parse(localStorage.getItem("userData"));
      userData.password = this.newPassword;
      localStorage.setItem("userData", JSON.stringify(userData));

      Toastify({
        text: "Password reset successfully!",
        duration: 3000,
        gravity: "top",
        position: "right",
        style: { background: "#ff7a00" },
      }).showToast();

      this.$router.push("/LoginPage");
    },
  },
};
</script>

<style scoped>
.reset-password {
  max-width: 400px;
  margin: 60px auto;
  background: #fff;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 0 15px rgba(255, 165, 0, 0.3);
  font-family: 'Plus Jakarta Sans', sans-serif;
}
h2 {
  text-align: center;
  color: #f57c00;
  margin-bottom: 25px;
}
.input-group {
  margin-bottom: 20px;
}
label {
  display: block;
  font-weight: bold;
  margin-bottom: 6px;
}
input {
  width: 100%;
  padding: 10px;
  border: 2px solid #ddd;
  border-radius: 5px;
  transition: 0.3s;
}
input.error {
  border-color: red;
}
.error-message {
  color: red;
  font-size: 0.85rem;
  margin-top: 5px;
}
button {
  width: 100%;
  background-color: #f57c00;
  color: white;
  border: none;
  padding: 12px;
  font-weight: bold;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s;
}
button:hover {
  background-color: #e95f00;
}
</style>

