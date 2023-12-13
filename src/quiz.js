class Quiz {
  // YOUR CODE HERE:

  constructor(questions, timeLimit, timeRemaining) {
    this.questions = questions;
    this.timeLimit = timeLimit;
    this.timeRemaining = timeRemaining;
    this.correctAnswers = 0;
    this.currentQuestionIndex = 0;
  }

  getQuestion() {
    return this.questions[this.currentQuestionIndex];
  }

  moveToNextQuestion() {
    this.currentQuestionIndex++;
  }

  shuffleQuestions() {
    for (var i = this.questions.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = this.questions[i];
      this.questions[i] = this.questions[j];
      this.questions[j] = temp;
    }
  }

  checkAnswer(answer) {
    this.correctAnswers++;
  }

  hasEnded() {
    if (this.currentQuestionIndex === this.questions.length) {
      return true;
    } else return false;
  }
  filterQuestionsByDifficulty(difficulty) {
    const filteredQuestions = this.questions.filter((question) => {
      return question.difficulty === difficulty;
    });
    return filterQuestionsByDifficulty;
  }
  averageDiffculty() {
    const sumOfDiffulty = this.questions.reduce((acc, question) => {
      return acc + question.difficulty;
    }, 0);
    const average = (sumOfDiffulty / this.questions.length).toFixed(2);
    return Number(average);
  }
}
const testQuestions = [
  { text: "Question 1", choices: ["a", "b", "c"], answer: "a", difficulty: 1 },
  { text: "Question 2", choices: ["d", "e", "f"], answer: "e", difficulty: 2 },
  { text: "Question 3", choices: ["x", "y", "z"], answer: "z", difficulty: 2 },
];

const quiz1 = new Quiz(testQuestions, 60, 60);
console.log(quiz1.averageDifficulty());
