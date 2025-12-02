<template>
    <section id="projects" class="projects-section">
      <div class="container" data-aos="fade-up">
        <h2 class="section-title">My Projects</h2>
  
        <div class="projects-grid" data-aos="fade-up" data-aos-delay="100">
          <div class="project-card" v-for="project in projects" :key="project.id">
            <img :src="project.image" :alt="project.title" class="project-img" />
            <h3>{{ project.title }}</h3>
            <p>{{ project.description }}</p>
            <a :href="project.link" target="_blank" rel="noopener" class="btn">View Live</a>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: "ProjectSection",
    data() {
      return {
        projects: [
        {
            id: 1,
            title: "First Remo Stars",
            description: "My first Remo Stars Site using HTML, CSS and JavaScript.",
            link: "https://oldremostars.anifowosecodes.com.ng/",
            image: require("@/assets/pro3.jpg"),
          },
          {
            id: 2,
            title: "Second Remo Stars",
            description: "A improved redesign of my original Remo Stars Site and Better design & usability.",
            link: "https://remostars.anifowosecodes.com.ng/",
            image: require("@/assets/pro2.jpg"),
          },
          {
            id: 3,
            title: "Snack Store",
            description: "An online snack shop with category filtering, checkout, and more.",
            link: "https://snackify.anifowosecodes.com.ng/",
            image: require("@/assets/pro1.jpg"),
          },
          {
            id: 4,
            title: "A movie Website",
            description: "A Vue based movie Website fetching data from an external API.",
            link: "https://yourdomain.com/contact-app",
            image: require("@/assets/project5.jpg"),
          },
          // Add more projects as needed
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Grostek:wght@700&family=Inter:wght@400;500&display=swap');
  
  .projects-section {
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
  
  .projects-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  justify-items: center;
 }

  
  .project-card {
    background-color: #26263a;
    border-radius: 12px;
    padding: 1.5rem;
    text-align: left;
    max-width: 340px;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.25);
    transition: transform 0.3s ease;
  }
  
  .project-card:hover {
    transform: translateY(-6px);
  }
  
  .project-img {
    width: 100%;
    height: 180px;
    object-fit: cover;
    border-radius: 8px;
    margin-bottom: 1rem;
  }
  
  .project-card h3 {
    color: #f9b233;
    font-family: 'Grostek', sans-serif;
    margin-bottom: 0.5rem;
  }
  
  .project-card p {
    font-size: 0.95rem;
    color: #cccccc;
    margin-bottom: 1rem;
    line-height: 1.5;
  }
  
  .btn {
    display: inline-block;
    padding: 0.6rem 1.2rem;
    background-color: #f9b233;
    color: #1d1e2b;
    border-radius: 6px;
    font-weight: 500;
    text-decoration: none;
    transition: background 0.3s;
  }
  
  .btn:hover {
    background-color: #f7941e;
  }
  .projects-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  justify-items: center;
}

@media (max-width: 1024px) {
  .projects-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }
}

  </style>
  