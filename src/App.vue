<template>
  <div id="app">
     <AppNavbar />
      
      <router-view />

      <FooterSection v-if="!hideFooter"/>

          <button class="back-to-top" @click="scrollToTop" v-if="!hideFooter">↑</button>
  </div>
</template>

<script>
import AppNavbar from './components/AppNavbar.vue';
import FooterSection from './components/FooterSection.vue';

export default {
  components: {
    AppNavbar,
    FooterSection
  },
  methods: {
      scrollToTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  },
  computed: {
    hideFooter() {
      return this.$route.path.includes('ThankYou');
    }
  }  
}
</script>

<style>

html,body{
/*  overflow-x: hidden; */
/*   overflow-y: auto; */
 padding-top: 60px; 
}

#app {
  overflow: visible;
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
</style>