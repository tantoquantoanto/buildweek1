const questions = [
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does CPU stand for?",
    correct_answer: "Central Processing Unit",
    incorrect_answers: [
      "Central Process Unit",
      "Computer Personal Unit",
      "Central Processor Unit",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
    correct_answer: "Final",
    incorrect_answers: ["Static", "Private", "Public"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "The logo for Snapchat is a Bell.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question:
      "Pointers were not used in the original C programming language; they were added later on in C++.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the most preferred image format used for logos in the Wikimedia database?",
    correct_answer: ".svg",
    incorrect_answers: [".png", ".jpeg", ".gif"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In web design, what does CSS stand for?",
    correct_answer: "Cascading Style Sheet",
    incorrect_answers: [
      "Counter Strike: Source",
      "Corrective Style Sheet",
      "Computer Style Sheet",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the code name for the mobile operating system Android 7.0?",
    correct_answer: "Nougat",
    incorrect_answers: ["Ice Cream Sandwich", "Jelly Bean", "Marshmallow"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "On Twitter, what is the character limit for a Tweet?",
    correct_answer: "140",
    incorrect_answers: ["120", "160", "100"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Linux was first created as an alternative to Windows XP.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"],
  },
];

let labels = document.querySelectorAll(".answerLabel");
let inputButtons = document.querySelectorAll(".inputButtons");
let questionNumber = 0;
let answersArray = [];
let printedQuestion = document.createElement("span");

function printAnswers(questionIndex) {
 
  let currentQuestion = questions[questionIndex];
  answersArray = [
    currentQuestion.correct_answer,
    ...currentQuestion.incorrect_answers,
  ];

  answersArray.sort();

  labels.forEach((label, index) => {
    if (index < answersArray.length) {
      label.textContent = answersArray[index];
    } else {
      label.textContent = "";
    }
  });
 
  printedQuestion.textContent =currentQuestion.question;
  printedQuestion.classList.add("printedQuestion")
  

  document.getElementById("questionContainer").appendChild(printedQuestion);
}

printAnswers(questionNumber);

inputButtons.forEach((inputButton, index) => {
  inputButton.addEventListener("change", function () {
    if (inputButton.checked) {
      questionNumber++;
      if (questionNumber < questions.length) {
        printAnswers(questionNumber);
      } 
      if (answersArray.length <= 2) {
        // Disabilita e nasconde check3 e check4
        document.getElementById("check3").setAttribute("disabled", "disabled");
        document.getElementById("check4").setAttribute("disabled", "disabled");
        document.getElementById("button3").classList.add("hiddenInput");
        document.getElementById("button4").classList.add("hiddenInput");
      } else {
        // Assicura che check3 e check4 siano abilitati e visibili
        document.getElementById("check3").removeAttribute("disabled");
        document.getElementById("check4").removeAttribute("disabled");
        document.getElementById("button3").classList.remove("hiddenInput");
        document.getElementById("button4").classList.remove("hiddenInput");
        
      }
    }
  });
});

/*questions.forEach((question) => {
newCorrectAnswers.push(question.correct_answer);
newIncorrectAnswers.push(question.incorrect_answers.join());
})
console.log(newCorrectAnswers);
console.log(newIncorrectAnswers)



newCorrectAnswers.forEach((newCorrectAnswer) => {
labels.forEach((label) => {
label.textContent = newCorrectAnswer;

}) 
})



function printAnswers() {

arrayAnswers = questions[questionNumber].incorrect_answers;


for(let i = 0; i < questions[questionNumber].incorrect_answers.length; i++){
answers = questions[questionNumber].incorrect_answers[i];
}


    labels.forEach((label) => {
      for(let i = 0; i < arrayAnswers.length; i++) {
        answers = arrayAnswers[i];
        label.textContent = answers;
      }
    
  })








}

inputButtons.forEach((inputButton) => {
inputButton.addEventListener("change", function(){
if(inputButton.checked) {
  questionNumber++;
  printAnswers();
}
})
})











/*let answersArray = [];
answersArray = questions.flatMap((question) => 
  [question.correct_answer, ...question.incorrect_answers]
);


console.log(answersArray);

function shuffleArray(array) {
for(let i = array.length - 1; i > 0; i--){
  const j = Math.floor(Math.random() * (i+1));
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}
 return array
}

let shuffledArray = shuffleArray(answersArray);
*/
