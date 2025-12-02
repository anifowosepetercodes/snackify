<template>
    <div>
      <!-- Original Scroll Nav (Desktop) -->
      <nav class="scroll-nav">
        <ul>
          <li><a href="#hero" title="Home"><i class="fas fa-home"></i></a></li>
          <li><a href="#about" title="About"><i class="fas fa-user-circle"></i></a></li>
          <li><a href="#skills" title="Skills"><i class="fas fa-tools"></i></a></li>
          <li><a href="#projects" title="Projects"><i class="fas fa-briefcase"></i></a></li>
          <li><a href="#goals" title="Goals"><i class="fas fa-bullseye"></i></a></li>
          <li><a href="#contact" title="Contact"><i class="fas fa-phone-alt"></i></a></li>
        </ul>
      </nav>
  
      <!-- Hamburger Menu Button (Mobile) -->
      <div class="hamburger-icon" @click="toggleMenu">
        <i class="fas" :class="isOpen ? 'fa-times' : 'fa-bars'"></i>
      </div>
  
      <!-- Dropdown Menu (Mobile) -->
      <transition name="fade">
        <ul class="mobile-nav" v-if="isOpen">
          <li><a href="#hero" @click="closeMenu"><i class="fas fa-home"></i></a></li>
          <li><a href="#about" @click="closeMenu"><i class="fas fa-user-circle"></i></a></li>
          <li><a href="#skills" @click="closeMenu"><i class="fas fa-tools"></i> </a></li>
          <li><a href="#projects" @click="closeMenu"><i class="fas fa-briefcase"></i></a></li>
          <li><a href="#goals" @click="closeMenu"><i class="fas fa-bullseye"></i></a></li>
          <li><a href="#contact" @click="closeMenu"><i class="fas fa-phone-alt"></i></a></li>
        </ul>
      </transition>
    </div>
  </template>
  
  <script>
  export default {
    name: "ScrollNav",
    data() {
      return {
        isOpen: false,
      };
    },
    methods: {
      toggleMenu() {
        this.isOpen = !this.isOpen;
      },
      closeMenu() {
        this.isOpen = false;
      },
    },
  };
  </script>
  
  <style scoped>
  /* Original Scroll Nav */
  .scroll-nav {
    position: fixed;
    top: 50%;
    right: 1.2rem;
    transform: translateY(-50%);
    z-index: 1000;
  }
  
  .scroll-nav ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    background-color: #2a2b3d;
    padding: 2rem 0.8rem;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.35);
  }
  
  .scroll-nav a {
    display: block;
    color: #eeeeee;
    font-size: 1.25rem;
    text-align: center;
    padding: 0.5rem;
    transition: background 0.3s, transform 0.3s;
    border-radius: 50%;
  }
  
  .scroll-nav a:hover {
    background-color: #f9b233;
    color: #1d1e2b;
    transform: scale(1.2);
  }
  
  i {
    font-size: 30px;
  }

   .hamburger-icon {
    display: none;
  } 
  
  /* Hide scroll nav on small screens */
  @media (max-width: 1024px) {
    .scroll-nav {
      display: none;
    }
    .hamburger-icon {
      display: block;
      position: fixed;
      top: 1.2rem;
      right: 1.2rem;
      font-size: 1.8rem;
      color: #f9b233;
      z-index: 2000;
      cursor: pointer;
    }
  
    .mobile-nav {
      position: fixed;
      top: 4rem;
      right: 1.2rem;
      background-color: #2a2b3d;
      border-radius: 10px;
      padding: 1.2rem;
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 1.2rem;
      z-index: 1500;
      box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
    }
  
    .mobile-nav a {
      color: #eeeeee;
      font-size: 1.1rem;
      display: flex;
      align-items: center;
      gap: 8px;
      transition: color 0.3s;
      text-decoration: none;
    }
  
    .mobile-nav a:hover {
      color: #f9b233;
    }
  }
  
  /* Optional fade animation */
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.3s;
  }
  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
  </style>
  