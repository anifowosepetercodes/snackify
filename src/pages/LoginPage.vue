<template>
  <div class="login-container">
    <h1 class="title">Login to Your Account</h1>

    <form @submit.prevent="handleLogin" class="form-box">
      <div class="input-group">
        <label>Email or Phone:</label>
        <input type="text" v-model.trim="email" placeholder="Enter your email or phone" />
        <p v-if="errors.email" class="error">{{ errors.email }}</p>
      </div>

      <div class="input-group">
        <label>Password:</label>
        <input type="password" v-model.trim="password" placeholder="Enter your password" />
        <p v-if="errors.password" class="error">{{ errors.password }}</p>
      </div>

      <p class="forgot" @click="showResetPopup = true">Forgot Password?</p>

      <button type="submit" class="login-btn">Login</button>
      <p v-if="errors.credentials" class="error">{{ errors.credentials }}</p>

      <p class="auth-linkx">
        Don't have an account?
        <router-link to="/SignUp" class="auth-router-linkx">Sign up</router-link>
      </p>
    </form>

    <!-- Reset Code Popup -->
    <div v-if="showResetPopup" class="popup-overlay">
      <div class="popup">
        <h3>Enter 4-digit code sent to your email</h3>
        <input type="text" v-model="resetCode" maxlength="4" placeholder="e.g. 1234" />
        <p class="error" v-if="resetError">{{ resetError }}</p>
        <div class="btns">
          <button @click="verifyCode">Submit</button>
          <button @click="showResetPopup = false">Cancel</button>
        </div>
      </div>
    </div>

    <!-- New Password Popup -->
    <div v-if="showNewPasswordPopup" class="popup-overlay">
      <div class="popup">
        <h3>Set a New Password</h3>
        <input type="password" v-model="newPassword" placeholder="New password" />
        <input type="password" v-model="confirmPassword" placeholder="Confirm password" />
        <p class="error" v-if="passwordError">{{ passwordError }}</p>
        <div class="btns">
          <button @click="resetPassword">Change Password</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      errors: {},
      showResetPopup: false,
      resetCode: "",
      resetError: "",
      showNewPasswordPopup: false,
      newPassword: "",
      confirmPassword: "",
      passwordError: "",
    };
  },
  methods: {
    validateEmailOrPhone(value) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const phoneRegex = /^\d{10,15}$/;
      return emailRegex.test(value) || phoneRegex.test(value);
    },

    handleLogin() {
      this.errors = {};

      if (!this.email.trim()) {
        this.errors.email = "Email or phone is required";
      } else if (!this.validateEmailOrPhone(this.email)) {
        this.errors.email = "Enter a valid email or phone number";
      }

      if (!this.password.trim()) {
        this.errors.password = "Password is required";
      }

      if (Object.keys(this.errors).length > 0) return;

      const users = JSON.parse(localStorage.getItem("userData")) || [];

      const loggedInUser = users.find(
        user =>
          (user.email === this.email || user.phone === this.email) &&
          user.password === this.password
      );

      if (!loggedInUser) {
        this.errors.credentials = "Invalid login credentials";
        return;
      }

      localStorage.setItem("activeUser", JSON.stringify(loggedInUser));
      window.dispatchEvent(new Event("storage")); // Update navbar initials if needed
      this.$router.push("/ProfilePage");
    },

    verifyCode() {
      if (this.resetCode === "1234") {
        this.showResetPopup = false;
        this.showNewPasswordPopup = true;
        this.resetError = "";
      } else {
        this.resetError = "Invalid reset code";
      }
    },

    resetPassword() {
      if (!this.newPassword || !this.confirmPassword) {
        this.passwordError = "Both fields are required";
        return;
      }
      if (this.newPassword !== this.confirmPassword) {
        this.passwordError = "Passwords do not match";
        return;
      }

      const users = JSON.parse(localStorage.getItem("userData")) || [];
      const index = users.findIndex(
        user => user.email === this.email || user.phone === this.email
      );

      if (index !== -1) {
        users[index].password = this.newPassword;
        localStorage.setItem("userData", JSON.stringify(users));
        alert("Password reset successful! You can now log in.");
        this.showNewPasswordPopup = false;
        this.passwordError = "";
      } else {
        this.passwordError = "User not found!";
        setTimeout(() => {
          this.$router.push("/SignUp");
        }, 1500);        
      }
    },
  },
};
</script>

<style scoped>
.login-container {
  max-width: 400px;
  margin: 40px auto;
  padding: 30px;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.07);
  font-family: 'Plus Jakarta Sans', sans-serif;
}
.title {
  font-size: 26px;
  font-weight: bold;
  margin-bottom: 25px;
  color: #333;
}
.form-box {
  display: flex;
  flex-direction: column;
}
.input-group {
  margin-bottom: 20px;
}
.input-group label {
  font-weight: 600;
}
.input-group input {
  padding: 20px 100px;
  border: 1px solid #ddd;
  border-radius: 6px;
  margin-top: 5px;
}
.error {
  color: red;
  font-size: 0.9rem;
  margin-top: 4px;
}
.forgot {
  color: #ff6600;
  font-size: 0.9rem;
  cursor: pointer;
  margin-bottom: 15px;
}
.login-btn {
  background-color: #ff6600;
  color: white;
  padding: 12px;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s ease;
}
.login-btn:hover {
  background-color: #e85c00;
}
.auth-linkx {
  text-align: center;
  margin-top: 15px;
}
.auth-router-linkx {
  color: #ff6600;
  font-weight: 600;
  margin-left: 5px;
}
.popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.6);
  display: flex;
  justify-content: center;
  align-items: center;
}
.popup {
  background: #fff;
  padding: 25px;
  border-radius: 12px;
  max-width: 350px;
  text-align: center;
}
.popup input {
  padding: 20px 50px;
  margin-top: 15px;
  border-radius: 6px;
  border: 1px solid #ccc;
}
.btns {
  margin-top: 20px;
  display: flex;
  gap: 15px;
  justify-content: center;
}
.btns button {
  padding: 10px 16px;
  border: none;
  border-radius: 6px;
  background-color: #ff6600;
  color: white;
  font-weight: bold;
  cursor: pointer;
}
</style>
