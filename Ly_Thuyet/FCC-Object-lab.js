const questions = [
  {
    category: "Math",
    question: "What is 2 + 2?",
    choices: ["3", "4", "5"],
    answer: "4"
  },
  {
    category: "Science",
    question: "What planet is known as the Red Planet?",
    choices: ["Earth", "Mars", "Jupiter"],
    answer: "Mars"
  },
  {
    category: "Geography",
    question: "Which country has the largest population?",
    choices: ["USA", "India", "China"],
    answer: "China"
  },
  {
    category: "History",
    question: "Who was the first president of the United States?",
    choices: ["Abraham Lincoln", "George Washington", "Thomas Jefferson"],
    answer: "George Washington"
  },
  {
    category: "Technology",
    question: "Which company created the iPhone?",
    choices: ["Samsung", "Apple", "Google"],
    answer: "Apple"
  }
];

function getRandomQuestion(question){
    return question[Math.floor(Math.random()*question.length)];
}

function getRandomComputerChoice(choices) {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function getResults(question, computerChoice) {
  if (computerChoice === question.answer) {
    return "The computer's choice is correct!";
  } else {
    return `The computer's choice is wrong. The correct answer is: ${question.answer}`;
  }
}