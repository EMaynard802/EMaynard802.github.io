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

  "Node.js is ___________ written in?",

    choice1: "Javascript",

    choice2: "C",

    choice3: "C++",

    choice4: "All of the above",

    answer: 4

  },

  {

  question: 

    "Which extension is used to save Node.js files?",

    choice1: ".node",

    choice2: ".java",

    choice3: ".js",

    choice4: ".txt",

    answer: 3

  },

  {

  question: 

  "Which function is used to include modules in Node.js ",

    choice1: "require();",

    choice2: "include();",

    choice3: "attach();",

    choice4: "add();",

    answer: 1

  },

  {

    question:

      "Which of the following is not a built-in Node module?",

    choice1: "zlib",

    choice2: "https",

    choice3: "dgram",

    choice4: "fsread",

    answer: 4

  },

  {

    question: "How Node.js modules are available externally?",

    choice1: "module.spread",

    choice2: "module.expose",

    choice3: "module.exports",

    choice4: "None of the above",

    answer: 3

  },

  {

    question: "What is the default scope in Node.js application?",

    choice1: "Local",

    choice2: "Public",

    choice3: "Private",

    choice4: "Global",

    answer: 1

  },

  {

    question: "Which of the following template engines can be used with Node.js?",

    choice1: "Jade",

    choice2: "Handlebars",

    choice3: "Vash",

    choice4: "All of the above",

    answer: 2

  },

  {

    question: "What is a Callback?",

    choice1: "Callback is an asynchronous equivalent for a function.",

    choice2: "Callback is a technique in which a method call back the caller method.",

    choice3: "Both of the above.",

    choice4: "None of the above.",

    answer: 3

  },

  {

    question: "In which of the following areas is Node.js perfect to use?",

    choice1: "I/O bound Applications",

    choice2: "Data Streaming Applications",

    choice3: "Data Intensive Realtime Applications DIRT",

    choice4: "All of the above",

    answer: 4

  },

  {

    question: "Command to start Node REPL?",

    choice1: "$ node start",

    choice2: "$ node repl",

    choice3: "$ node",

    choice4: "$ node console",

    answer: 3

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