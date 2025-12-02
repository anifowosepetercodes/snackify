<template>
    <section id="about" class="about-section">
      <div class="container" data-aos="fade-up">
        <h2 class="section-title">About Me</h2>
  
        <p class="about-text">
          I'm a frontend web developer who enjoys creating modern, responsive, and fast web experiences using Vue.js, HTML, CSS, and JavaScript.  
          I believe in clean code, user-first design, and learning every day to stay ahead in the tech world.
        </p>
  
        <div class="quick-facts" data-aos="fade-left">
          <div class="fact-card">
             <i class="fas fa-laptop-code"></i>
            <p><span>2+</span> Projects Online</p>
          </div>
          <div class="fact-card">
            <i class="fas fa-tools"></i>
            <p>Frontend Only<br /><span>(Vue, JS, HTML, CSS)</span></p>
          </div>
          <div class="fact-card">
            <i class="fas fa-brain"></i>
            <p>Currently Learning<br /><span>Git & Firebase integration</span></p>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: "AboutSection",
  };
  </script>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Grostek:wght@700&family=Inter:wght@400;500&display=swap');
  
  .about-section {
    background-color: #1d1e2b;
    padding: 4rem 2rem;
    color: #eeeeee;
    font-family: 'Inter', sans-serif;
  }
  
  .container {
    max-width: 1100px;
    margin: 0 auto;
    text-align: center;
  }
  
  .section-title {
    font-family: 'Grostek', sans-serif;
    font-size: 2.5rem;
    margin-bottom: 1rem;
    color: #f9b233;
    letter-spacing: 1px;
  }
  
  .about-text {
    font-size: 1.1rem;
    color: #cccccc;
    max-width: 800px;
    margin: 0 auto 3rem;
    line-height: 1.7;
  }

  i {
    font-size: 40px;
  }
  
  .quick-facts {
    display: flex;
    justify-content: center;
    gap: 2rem;
    flex-wrap: wrap;
  }
  
  .fact-card {
    background-color: #26263a;
    padding: 2rem 1.5rem;
    border-radius: 12px;
    min-width: 200px;
    max-width: 260px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.25);
    transition: transform 0.3s ease;
  }
  
  .fact-card:hover {
    transform: translateY(-6px);
  }
  
  .fact-card h3 {
    font-size: 2rem;
    margin-bottom: 0.8rem;
  }
  
  .fact-card p {
    font-size: 1rem;
    color: #eeeeee;
  }
  
  .fact-card span {
    color: #f9b233;
    font-weight: bold;
  }
  
  @media (max-width: 768px) {
    .about-text {
      font-size: 1rem;
    }
  
    .fact-card {
      width: 100%;
    }
  }
  </style>
  