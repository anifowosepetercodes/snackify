<template>
  <section class="meet-team" data-aos="fade-up">
    <h2 class="section-title">
      <i class="fas fa-users"></i> Meet Our Snack Heroes
    </h2>

    <div class="team-grid">
      <div class="team-card" v-for="(member, index) in team" :key="index">
      <!--  <img :src="member.photo" :alt="member.name" class="profile-pic" /> -->
      <i class="fas fa-user-circle profile-pic"></i>
        <h3 class="name">{{ member.name }}</h3>
        <p class="role">{{ member.role }}</p>
        <p class="desc">{{ member.desc }}</p>
        <div class="socials">
          <a v-if="member.instagram" :href="member.instagram" target="_blank">
            <i class="fab fa-instagram"></i>
          </a>
          <a v-if="member.linkedin" :href="member.linkedin" target="_blank">
            <i class="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name:"MeetTeam",
  data() {
    return {
      team: [
        {
          name: 'Chef Remi',
          role: 'Head Chef',
          desc: 'Crafting delicious snack recipes daily.',
        //  photo: require("@/assets/hero-img1.jpg"),
          instagram: '#',
          linkedin: '#'
        },
        {
          name: 'Tola Ajayi',
          role: 'Marketing Lead',
          desc: 'Spreading snack love across Nigeria.',
        //  photo: require("@/assets/hero-img1.jpg"),
          instagram: '#',
          linkedin: '#'
        },
        {
          name: 'Nkem Okafor',
          role: 'Creative Director',
          desc: 'Designing visuals that bite.',
        //  photo: require("@/assets/hero-img1.jpg"),
          instagram: '#',
          linkedin: '#'
        },
        {
          name: 'Ahmed Bello',
          role: 'Logistics Manager',
          desc: 'Ensuring snacks arrive on time.',
        //  photo: require("@/assets/hero-img1.jpg"),
          instagram: '#',
          linkedin: '#'
        },
        {
          name: 'Ahmed Bello',
          role: 'Logistics Manager',
          desc: 'Ensuring snacks arrive on time.',
        //  photo: require("@/assets/hero-img1.jpg"),
          instagram: '#',
          linkedin: '#'
        },
        {
          name: 'Ahmed Bello',
          role: 'Logistics Manager',
          desc: 'Ensuring snacks arrive on time.',
      //    photo: require("@/assets/hero-img1.jpg"),
          instagram: '#',
          linkedin: '#'
        },
      ]
    };
  }
};
</script>

<style scoped>
.meet-team {
  background: #fff;
  padding: 4rem 1rem;
  font-family: 'Plus Jakarta Sans', sans-serif;
  text-align: center;
}

.section-title {
  font-size: 2rem;
  font-weight: 800;
  color: var(--main-orange, #f57c00);
  margin-bottom: 2rem;
}

.team-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
}

.team-card {
  background: #fff;
  border-radius: 12px;
  padding: 2rem;
  width: 260px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease;
  flex: 1 1 250px;
  max-width: 300px;
}

.team-card:hover {
  transform: scale(1.05);
}

.profile-pic {
  border-radius: 50%;
  margin-bottom: 0.5rem;
  font-size: 130px;
  color: orange;
}

.name {
  font-weight: bold;
  font-size: 1.2rem;
  color: #333;
}

.role {
  color: var(--main-orange, #f57c00);
  font-weight: 600;
  margin: 0.3rem 0;
}

.desc {
  font-size: 0.9rem;
  color: #555;
}

.socials a {
  color: #f57c00;
  font-size: 1.2rem;
  margin: 0 0.3rem;
  transition: color 0.3s;
}

.socials a:hover {
  color: #000;
}
</style>
