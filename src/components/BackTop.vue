<template>
    <button v-show="showButton" @click="scrollToTop" class="back-to-top">
      <i class="fas fa-arrow-up"></i>
    </button>
  </template>
  
  <script>
  export default {
    name: "BackTop",
    data() {
      return {
        showButton: false,
      };
    },
    mounted() {
      window.addEventListener("scroll", this.handleScroll);
    },
    beforeUnmount() {
      window.removeEventListener("scroll", this.handleScroll);
    },
    methods: {
      handleScroll() {
        this.showButton = window.scrollY > 300;
      },
      scrollToTop() {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      },
    },
  };
  </script>
  
  <style scoped>
  .back-to-top {
    position: fixed;
    bottom: 2rem;
    right: 1.5rem;
    background-color: #f9b233;
    color: #1d1e2b;
    border: none;
    border-radius: 50%;
    padding: 0.9rem;
    font-size: 1.2rem;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
    cursor: pointer;
    z-index: 999;
    transition: transform 0.3s ease;
  }
  .back-to-top:hover {
    transform: scale(1.15);
  }
  </style>
  