var startButton = document.getElementById("startButton");
var answerOne = document.getElementById("answer1");
var answerTwo = document.getElementById("answer2");
var answerThree = document.getElementById("answer3");
var answerFour = document.getElementById("answer4");
var viewHighscores = document.getElementById("highscores");
var timeEl = document.getElementById("timeEl");

var highScores = [];
// GIVEN I am taking a code quiz
// WHEN I click the start button

// on start button click the timer starts
var secondsLeft = 75;
function countDown() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left";

    if (secondsLeft === 0) {
      clearInterval(timerInterval);
    }
  }, 1000);
}
// on start button click the start page switches the the first question
var currentQuestionIndex = 0;
var arrayOfQuestions = [
  {
    question: "Commonly used data types DO NOT include",
    answerOne: "strings",
    answerTwo: "booleans",
    answerThree: "alerts",
    answerFour: "numbers",
    correctAnswer: "strings",
  },
  {
    question:
      "The condition in an if/else statement is enclosed within _______",
    answerOne: "quotes",
    answerTwo: "curly brackets",
    answerThree: "parentheses",
    answerFour: "square brackets",
    correctAnswer: "curly brackets",
  },
  {
    question: "Arrays in JavaScript can be used to store _______",
    answerOne: "numbers and strings",
    answerTwo: "other arrays",
    answerThree: "booleans",
    answerFour: "all of the above",
    correctAnswer: "all of the above",
  },
  {
    question:
      "String values must be enclosed within _______ when being assigned to variables.",
    answerOne: "commas",
    answerTwo: "curly brackets",
    answerThree: "quotes",
    answerFour: "parentheses",
    correctAnswer: "quotes",
  },
  {
    question:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    answerOne: "JavaScript",
    answerTwo: "terminal/bash",
    answerThree: "for loops",
    answerFour: "console.log",
    correctAnswer: "console.log",
  },
];

function nextQuestion() {
  console.log("started quiz");
  // Use DOM Manipulation to clear the start screen
  document.getElementById("startJumbo").style = "display: none"
  // THEN I am presented with a question
  document.getElementById("question-text").style = "display: block"

  //console.log(arrayOfQuestions[currentQuestionIndex].question);
  //if user gets question right add 1 to currentQuestionIndex
  //arrayOfQuestions[currentIndex].answers.length
  // document.querySelector("#start-text")

  // }
}

// WHEN I answer a question
function askQuestions() {}
// THEN I am presented with another question
// WHEN I answer a question incorrectly
function incorrect() {}
// THEN time is subtracted from the clock
function subtractTime() {}
// WHEN all questions are answered or the timer reaches 0
function allDone() {}
// THEN the game is over
function gameOver() {}
// WHEN the game is over
// THEN I can save my initials and score
function leaderBoard() {}

//function calls

startButton.addEventListener("click", countDown);
startButton.addEventListener("click", nextQuestion);
viewHighscores.onclick = function () {
    window.location.href = "highscore.html"};

