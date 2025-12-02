<template>
    <section id="contact" class="contact-section">
      <div class="container" data-aos="fade-up">
        <h2 class="section-title">Get in Touch</h2>
        <p class="contact-subtext">
          Have a question, a project idea, or just want to say hi?  
          I’d love to hear from you.
        </p>
  
        <div class="contact-cards" data-aos="fade-up" data-aos-delay="100">
          <a href="mailto:anifowosepeter29@gmail.com" class="contact-card" target="_blank">
            <i class="fas fa-envelope"></i>
            <span>Email</span>
            <p>anifowosepeter29@gmail.com</p>
          </a>
  
          <a href="https://wa.me/2349044348334" class="contact-card" target="_blank">
            <i class="fab fa-whatsapp"></i>
            <span>WhatsApp</span>
            <p>+234 904 434 8334</p>
          </a>
  
          <a href="https://github.com/anifowosepetercodes" class="contact-card" target="_blank">
            <i class="fab fa-github"></i>
            <span>GitHub</span>
            <p>/anifowosepetercodes</p>
          </a>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: "ContactSection",
  };
  </script>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Grostek:wght@700&family=Inter:wght@400;500&display=swap');
  
  .contact-section {
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
  
  .contact-subtext {
    font-size: 1.1rem;
    color: #bbbbbb;
    margin-bottom: 3rem;
  }
  
  .contact-cards {
    display: flex;
    justify-content: center;
    gap: 2rem;
    flex-wrap: wrap;
  }
  
  .contact-card {
    background-color: #26263a;
    border-radius: 12px;
    padding: 2rem 1.5rem;
    width: 280px;
    text-align: center;
    color: #eeeeee;
    text-decoration: none;
    box-shadow: 0 4px 12px rgba(0,0,0,0.25);
    transition: transform 0.3s ease, background 0.3s ease;
  }
  
  .contact-card:hover {
    transform: translateY(-6px);
    background-color: #f9b233;
    color: #1d1e2b;
  }
  
  .contact-card i {
    font-size: 2rem;
    margin-bottom: 0.8rem;
  }
  
  .contact-card span {
    font-weight: 600;
    font-family: 'Grostek', sans-serif;
    display: block;
    margin-bottom: 0.3rem;
  }
  
  .contact-card p {
    font-size: 0.9rem;
    color: inherit;
  }
  </style>
  