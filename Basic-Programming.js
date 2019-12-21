// select all my elements

const question = document.getElementById("question");

const choices = Array.from(document.getElementsByClassName("choice-text"));

const progressText = document.getElementById("progressText");

const scoreText = document.getElementById("score");

const progressBarFull = document.getElementById("progressBarFull");

let currentQuestion = {};

let acceptingAnswers = false;

let score = 0;

let questionCounter = 0;

let availableQuesions = [];

// create my questions

let questions = [

  {

  question: 

  "What is the only thing computers understand?",

    choice1: "Machine Code",

    choice2: "Low Level Languages",

    choice3: "High Level Languages",

    choice4: "Algorithms",

    answer: 1

  },

  {

  question: 

    "Before a computer can understand a program it must be...",

    choice1: "Translated into Binary Code",

    choice2: "Translated into a Low Level Language",

    choice3: "Translated into a High Level Language",

    choice4: "Translated into Machine Code",

    answer: 4

  },

  {

  question: 

  "Which type of translator creates an executable file of machine code from a program written in a high level language?",

    choice1: "Interpreter",

    choice2: "Compiler",

    choice3: "Assembler",

    choice4: "Executor",

    answer: 2

  },

  {

    question:

  "Two categories of Low Level Language are... ",

    choice1: "Machine Code and Algorithms",

    choice2: "Assembly and Algorithms",

    choice3: "Algorithms and Binary",

    choice4: "Machine Code and Assembly",

    answer: 4

  },

  {

    question: "Which of the following commands would not be found in an Assembly Language?",

    choice1: "LOAD",

    choice2: "ADD",

    choice3: "STORE",

    choice4: "SORT",

    answer: 4

  },

  {

    question: "What is the smallest unit of measure used to quantify computer data?",

    choice1: "BIT",

    choice2: "BYTE",

    choice3: "KILOBYTE",

    choice4: "MEGABYTE",

    answer: 1

  },

  {

    question: "Java, PHP, Python, and C++ are examples of...",

    choice1: "Low Level Languages",

    choice2: "Medium Level Languages",

    choice3: "High Level Languages",

    choice4: "Graphic Arts Languages",

    answer: 2

  },

  {

    question: "One kilobyte is equal to approximately _______ memory locations?",

    choice1: "1,000,000",

    choice2: "100,000",

    choice3: "10,000",

    choice4: "1,000",

    answer: 4

  },

  {

    question: "An error in a program that prevents the program from running as expected",

    choice1: "Bug",

    choice2: "Error Report",

    choice3: "Mistake",

    choice4: "Algorithm",

    answer: 1

  },

  {

    question: "How many bits make up one letter in Binary Code?",

    choice1: "4",

    choice2: "8",

    choice3: "6",

    choice4: "10",

    answer: 2

  }

];





// Not really happy with my timer, 

//its functional but not exactly what I would like

timer = 80;



//Time to make the constants, set max questions & bonus for getting question correct

const CORRECT_BONUS = 10;

const MAX_QUESTIONS = 10;



startGame = () => {

  questionCounter = 0;

  score = 0;

  availableQuesions = [...questions];

  getNewQuestion();

};

// grab some questions based on whats left

getNewQuestion = () => {

  if (availableQuesions.length === 0 || questionCounter >= MAX_QUESTIONS) {

    localStorage.setItem("mostRecentScore", score);

    //go to the end page

    return window.location.assign("endGame.html");

  }

  questionCounter++;

  progressText.innerText = `Question ${questionCounter}/${MAX_QUESTIONS}`;

  //Update the progress bar

  progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;



  const questionIndex = Math.floor(Math.random() * availableQuesions.length);

  currentQuestion = availableQuesions[questionIndex];

  question.innerText = currentQuestion.question;



  choices.forEach(choice => {

    const number = choice.dataset["number"];

    choice.innerText = currentQuestion["choice" + number];

  });



  availableQuesions.splice(questionIndex, 1);

  acceptingAnswers = true;

};

// validate the answers

choices.forEach(choice => {

  choice.addEventListener("click", e => {

    if (!acceptingAnswers) return;



    acceptingAnswers = false;

    const selectedChoice = e.target;

    const selectedAnswer = selectedChoice.dataset["number"];



    const classToApply =

      selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";



    if (classToApply === "correct") {

      incrementScore(CORRECT_BONUS);

    }



    selectedChoice.parentElement.classList.add(classToApply);

//timeout

    setTimeout(() => {

      selectedChoice.parentElement.classList.remove(classToApply);

      getNewQuestion();

    }, 1000);

  });

});

//keep score 

incrementScore = num => {

  score += num;

  scoreText.innerText = score;

};



//timer function

function secondsCounter () {

timer = timer - 1;

if (timer < 80) {

  count.innerHTML = timer;

} 



else {

  window.clearInterval(update);

  timer = "-";

  window.location.href = "HoH.html";

  

}



if (timer < 1) {

  window.clearInterval(update);

  window.location.href = "HoH.html";

  



}

}









update = setInterval("secondsCounter()", 1000);

















startGame();