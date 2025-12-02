<template>
    <section id="skills" class="skills-section">
      <div class="container" data-aos="fade-up">
        <h2 class="section-title">My Skills</h2>

        <div class="skills-grid" data-aos="fade-up" data-aos-delay="100">
          <div class="skill-card">
            <i class="fa-brands fa-html5"></i>
            <p>HTML</p>
          </div>
          <div class="skill-card">
            <i class="fa-brands fa-css3-alt"></i>
            <p>CSS</p>
          </div>
          <div class="skill-card">
            <i class="fa-duotone fa-regular fa-file-code"></i>
            <p>JavaScript</p>
          </div>
          <div class="skill-card">
            <i class="fa-brands fa-vuejs"></i>
            <p>Vue.js</p>
          </div>
          <!-- Add more as you learn -->
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: "SkillSection",
  };
  </script>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Grostek:wght@700&family=Inter:wght@400;500&display=swap');
  
  .skills-section {
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
    margin-bottom: 3rem;
    color: #f9b233;
    letter-spacing: 1px;
  }
  
  .skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    gap: 2rem;
    justify-items: center;
    align-items: center;
  }
  
  .skill-card {
    background-color: #26263a;
    border-radius: 12px;
    padding: 1.5rem 1rem;
    width: 100%;
    max-width: 140px;
    text-align: center;
    transition: transform 0.3s ease;
    box-shadow: 0 4px 12px rgba(0,0,0,0.2);
  }
  
  .skill-card:hover {
    transform: translateY(-5px);
  }
  
  .skill-card i {
     font-size: 50px;
  }
  
  .skill-card p {
    font-size: 1rem;
    color: #f9b233;
    font-weight: 500;
  }
  </style>
  