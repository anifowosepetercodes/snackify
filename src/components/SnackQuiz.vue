<template>
  <section class="snack-quiz" data-aos="zoom-in-up">
    <div class="quiz-box">
      <h2>🍿 Find Your Perfect Snack!</h2>
      <p class="tagline">Answer a few questions and we'll match you with your ideal treat.</p>

      <div v-if="!quizComplete">
        <div class="quiz-step">
          <h3>{{ questions[currentStep].question }}</h3>
          <div class="options">
            <button
              v-for="(option, index) in questions[currentStep].options"
              :key="index"
              @click="nextStep(option)"
              class="option-btn"
            >
              {{ option }}
            </button>
          </div>
        </div>
      </div>

      <div v-else class="result">
        <h3>🎉 You should try: <span class="highlight">{{ snackResult }}</span></h3>
        <button class="restart-btn" @click="restartQuiz">Try Again</button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "SnackQuiz",
  data() {
    return {
      currentStep: 0,
      quizComplete: false,
      answers: [],
      snackResult: "",
      questions: [
        {
          question: "What's your snack vibe?",
          options: ["Sweet", "Salty", "Spicy", "Crunchy"],
        },
        {
          question: "Choose your perfect setting:",
          options: ["Movie night", "Party", "Road trip", "Study time"],
        },
        {
          question: "Pick a favorite texture:",
          options: ["Soft", "Crispy", "Chewy", "Refreshing"],
        },
      ],
      resultsMap: {
        Sweet: "Cinnamon Sugar Popcorn",
        Salty: "PopCorners Sea Salt",
        Spicy: "Doritos Flamin Hot Nacho Flavored",
        Crunchy: "Chips Ahoy! Chocolate Chip",
        Soft: "Vanilla Cupcake",
        Crispy: "Cheetos Puffs",
        Chewy: "Sour Patch Watermelon",
        Refreshing: "V8 Splash Berry Blend",
      },
    };
  },
  methods: {
    nextStep(selectedOption) {
      this.answers.push(selectedOption);
      if (this.currentStep < this.questions.length - 1) {
        this.currentStep++;
      } else {
        this.determineResult();
      }
    },
    determineResult() {
      const picked = this.answers[Math.floor(Math.random() * this.answers.length)];
      this.snackResult = this.resultsMap[picked] || "a Surprise Snack";
      this.quizComplete = true;
    },
    restartQuiz() {
      this.currentStep = 0;
      this.answers = [];
      this.snackResult = "";
      this.quizComplete = false;
    },
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@600;700&display=swap');
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css');
</style>

<style scoped>
.snack-quiz {
  background: #fff7f0;
  padding: 4rem 1rem;
  text-align: center;
  font-family: 'Plus Jakarta Sans', sans-serif;
  color: #222;
}
.quiz-box {
  max-width: 600px;
  margin: 0 auto;
  border-radius: 15px;
  background: white;
  padding: 3rem 2rem;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
}
h2 {
  font-size: 2rem;
  color: #ff6b00;
  margin-bottom: 0.5rem;
}
.tagline {
  font-weight: 600;
  margin-bottom: 2rem;
  color: #555;
}
.quiz-step h3 {
  font-size: 1.2rem;
  margin-bottom: 1rem;
}
.options {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
}
.option-btn {
  padding: 0.8rem 1.5rem;
  background: #ff6b00;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s ease;
}
.option-btn:hover {
  background: #e55c00;
}
.result {
  font-size: 1.2rem;
  color: #333;
}
.highlight {
  color: #ff6b00;
  font-weight: 700;
}
.restart-btn {
  margin-top: 2rem;
  padding: 0.7rem 1.2rem;
  background: #333;
  color: white;
  border-radius: 8px;
  cursor: pointer;
}
.restart-btn:hover {
  background: #000;
}
</style>
