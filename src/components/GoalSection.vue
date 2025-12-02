<template>
    <section id="goals" class="goals-section">
      <div class="container" data-aos="fade-up">
        <h2 class="section-title">My Learning Goals</h2>
        <p class="goals-subtext">“Always learning. Always building.”</p>
  
        <div class="goals-grid" data-aos="fade-up" data-aos-delay="100">
          <div class="goal-card">
            <h3><i class="fa-brands fa-vuejs"></i> Master Vue 3</h3>
            <p>Improve advanced Vue concepts like Composition API, reactivity, transitions, and State management.</p>
          </div>
          <div class="goal-card">
            <h3> <i class="fab fa-git-alt"></i> Learn Git & GitHub</h3>
            <p>Understand version control, commits, branches, pull requests, and sharing code professionally.</p>
          </div>
<!--           <div class="goal-card">
            <h3>🌐 Deploy Like a Pro</h3>
            <p>Get better with CPanel, domain setup, and exploring other options like Netlify or Vercel.</p>
          </div>
          <div class="goal-card">
            <h3>🧰 Learn Tailwind CSS</h3>
            <p>Use utility-first styling to build faster, more responsive designs with less CSS hassle.</p>
          </div> -->
          <div class="goal-card">
            <h3> <i class="fas fa-lock"></i> Learn Firebase Auth</h3>
            <p>Add user authentication to your projects — signup, login, and protected pages.</p>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: "GoalsSection",
  };
  </script>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Grostek:wght@700&family=Inter:wght@400;500&display=swap');
  
  .goals-section {
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
    margin-bottom: 0.5rem;
    color: #f9b233;
  }
  
  .goals-subtext {
    font-size: 1.1rem;
    color: #bbbbbb;
    margin-bottom: 3rem;
    font-style: italic;
  }
  
  .goals-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 2rem;
  }
  
  .goal-card {
    background-color: #26263a;
    padding: 2rem 1.5rem;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.25);
    transition: transform 0.3s ease;
    text-align: left;
  }
  
  .goal-card:hover {
    transform: translateY(-6px);
  }
  
  .goal-card h3 {
    color: #f9b233;
    font-family: 'Grostek', sans-serif;
    margin-bottom: 0.8rem;
    font-size: 1.2rem;
  }
  
  .goal-card p {
    font-size: 0.95rem;
    color: #cccccc;
    line-height: 1.5;
  }
  </style>
  