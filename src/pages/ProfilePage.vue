<template>
  <div class="profile-container">
    <h1 class="profile-title">👤 Your Account</h1>

    <div class="profile-card">
      <div class="avatar">
        <span>{{ initials }}</span>
      </div>

      <div class="profile-details">
        <p><strong>First Name:</strong> {{ userData.firstName }}</p>
        <p><strong>Last Name:</strong> {{ userData.lastName }}</p>
        <p><strong>Email Address:</strong> {{ userData.email }}</p>
        <p><strong>Phone Number:</strong> {{ userData.phone }}</p>
      </div>

      <button class="logout-btn" @click="logout">Log Out</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userData: {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
      },
    };
  },
  computed: {
    initials() {
      const f = this.userData.firstName?.[0]?.toUpperCase() || "";
      const l = this.userData.lastName?.[0]?.toUpperCase() || "";
      return `${f}${l}`;
    },
  },
  mounted() {
    const activeUser = JSON.parse(localStorage.getItem("activeUser"));
    if (activeUser) {
      this.userData = activeUser;
    } else {
      this.$router.push("/LoginPage");
    }
  },
  methods: {
    logout() {
      localStorage.removeItem("activeUser");
      window.dispatchEvent(new Event("storage")); // Optional if other components depend on login state
      this.$router.push("/LoginPage");
    },
  },
};
</script>

<style scoped>
.profile-container {
  max-width: 500px;
  margin: 60px auto;
  padding: 40px 20px;
  background: #fff;
  border-radius: 20px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
  font-family: 'Plus Jakarta Sans', sans-serif;
  animation: fadeSlideUp 0.5s ease-in-out;
}

.profile-title {
  font-size: 34px;
  text-align: center;
  font-weight: 800;
  margin-bottom: 30px;
  color: #FF6B00;
}

.profile-card {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.avatar {
  width: 100px;
  height: 100px;
  background-color: #ffe2d1;
  color: #FF6B00;
  font-size: 36px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  margin-bottom: 20px;
  box-shadow: 0 10px 25px rgba(255, 107, 0, 0.2);
}

.profile-details {
  text-align: center;
  font-size: 16px;
  line-height: 1.8;
  margin-bottom: 25px;
}

.profile-details p {
  margin: 5px 0;
  color: #333;
}

.logout-btn {
  background: #FF6B00;
  color: white;
  border: none;
  padding: 12px 30px;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s ease;
}

.logout-btn:hover {
  background: #e95d00;
}

@keyframes fadeSlideUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0px);
  }
}

@media (max-width: 600px) {
  .profile-container {
    margin: 30px 15px;
    padding: 30px 15px;
  }

  .profile-title {
    font-size: 28px;
  }

  .logout-btn {
    width: 100%;
  }
}
</style>
