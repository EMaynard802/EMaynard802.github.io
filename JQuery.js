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

  "Which sign does jQuery use as a shortcut for jQuery?",

    choice1: "the % sign",

    choice2: "the ? sign",

    choice3: "the $ sign",

    choice4: "the + sign",

    answer: 3

  },

  {

  question: 

    "Which jQuery method is used to hide selected elements?",

    choice1: "hidden()",

    choice2: "hide()",

    choice3: "visible(false)",

    choice4: "display(none)",

    answer: 2

  },

  {

  question: 

  "Which jQuery method is used to set one or more style properties for selected elements?",

    choice1: "html()",

    choice2: "style()",

    choice3: "property()",

    choice4: "css()",

    answer: 4

  },

  {

    question:

      "What scripting language is jQuery written in?",

    choice1: "VBScript",

    choice2: "JavaScript",

    choice3: "C#",

    choice4: "C++",

    answer: 2

  },

  {

    question: 

    "Which jQuery method should be used to deal with name conflicts?",

    choice1: "noNameConflict()",

    choice2: "noConflict()",

    choice3: "nameConflict()",

    choice4: "conflict()",

    answer: 4

  },

  {

    question: "Which jQuery method is used to switch between adding/removing one or more classes (for CSS) from selected elements?",

    choice1: "switchClass()",

    choice2: "toggleClass()",

    choice3: "switch()",

    choice4: "altClass()",

    answer: 1

  },

  {

    question: "jQuery is a...",

    choice1: "Ruby Gem",

    choice2: "JavaScript Library",

    choice3: "PHP Framework",

    choice4: "None of the above",

    answer: 2

  },

  {

    question: "jQuery's main focus is...",

    choice1: "AJAX",

    choice2: "DOM Manipulation",

    choice3: "Animations",

    choice4: "All of the above",

    answer: 4

  },

  {

    question: "You can test whether the browser supports specific features using...",

    choice1: " $.support",

    choice2: "$.browser",

    choice3: "$.featureTest",

    choice4: "$.browserTest",

    answer: 1

  },

  {

    question: "The CSS selector engine that jQuery uses is called?",

    choice1: "Badaboom",

    choice2: "Mango",

    choice3: "Sizzle",

    choice4: "AwesomeX",

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