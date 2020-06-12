// var answerOne = document.getElementById("answer1");
// var answerTwo = document.getElementById("answer2");
// var answerThree = document.getElementById("answer3");
// var answerFour = document.getElementById("answer4");

var startButton = document.getElementById("startButton");
var viewHighscores = document.getElementById("highscores");
var timeEl = document.getElementById("timeEl");
var jumbo = document.getElementById("startJumbo");
var answerEl = document.getElementById("answers-ul");
var questionDiv = document.getElementById("question");
var highScores = document.getElementById("scoreboard");
var submitScore = document.getElementById("submit-button");

var secondsLeft = 75;
var currentQuestion;
var currentQuestionIndex = 0;
var arrayOfQuestions = [
  {
    question: "Commonly used data types DO NOT include",
    answers: ["strings", "booleans", "alerts", "numbers"],
    correctAnswer: "alerts",
  },
  {
    question:
      "The condition in an if/else statement is enclosed within _______",
    answers: ["quotes", "curly brackets", "parentheses", "square brackets"],
    correctAnswer: "curly brackets",
  },
  {
    question: "Arrays in JavaScript can be used to store _______",
    answers: [
      "numbers and strings",
      "other arrays",
      "booleans",
      "all of the above",
    ],
    correctAnswer: "all of the above",
  },
  {
    question:
      "String values must be enclosed within _______ when being assigned to variables.",
    answers: ["commas", "curly brackets", "quotes", "parentheses"],
    correctAnswer: "quotes",
  },
  {
    question:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    answers: ["JavaScript", "terminal/bash", "for loops", "console.log"],
    correctAnswer: "console.log",
  },
];
var questionEl = document.createElement("h5");

// GIVEN I am taking a code quiz
// WHEN I click the start button

function countDown() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left";

    if (secondsLeft === 0) {
      clearInterval(timerInterval);
    }
    if (currentQuestionIndex >= 5) {
      clearInterval(timerInterval);
      highScores.style.display = "block";
      jumbo.style.display = "none";
    }
  }, 1000);
  displayQuestion();
}
// on start button click the start page switches the the first question

function displayQuestion() {
  if (currentQuestionIndex >= arrayOfQuestions.length) {
    //   console.log("hello")
    questionEl.innerHTML = "";
    answerEl.innerHTML = "";
    // window.location.href = "highscore.html";
  } else {
    console.log("started quiz");

    var currentQuestion = arrayOfQuestions[currentQuestionIndex];
    var answers = currentQuestion.answers;

    // Use DOM Manipulation to clear the start screen
    jumbo.innerHTML = "";

    questionEl.textContent = currentQuestion.question;

    //create a for loop to iterate through the answers array
    for (var i = 0; i < answers.length; i++) {
      // create variables for a new list item, button, and content to be generated
      var newLI = document.createElement("li");
      var button = document.createElement("button");
      var content = document.createTextNode(answers[i]);

      //determine right/wrong
      var rightAnswer = currentQuestion.correctAnswer;
      var currentAnswer = answers[i];

      // console.log(rightAnswer);
      // console.log(answers[i]);

      //append new content
      button.appendChild(content);
      button.addEventListener("click", function () {
        nextQuestion(rightAnswer, currentAnswer);
      });

      newLI.appendChild(button);
      answerEl.appendChild(newLI);
      jumbo.append(questionEl);
    }
  }
}

function nextQuestion(rightAnswer, currentAnswer) {
  console.log(rightAnswer, currentAnswer);
  if (currentAnswer == rightAnswer) {
    console.log("correct");
  } else {
    console.log("incorrect");
    secondsLeft -= 10;
  }
  questionEl.innerHTML = "";
  answerEl.innerHTML = "";
  currentQuestionIndex = currentQuestionIndex + 1;
  //   console.log("hi");

  console.log(secondsLeft);
  displayQuestion();
}

//function calls

startButton.addEventListener("click", countDown);
viewHighscores.onclick = function () {
  window.location.href = "highscore.html";
};
submitScore.addEventListener("click", function () {
  var userName = document.getElementById("initials").value;
  console.log(userName);
  var userScore = window.localStorage.getItem(userName);
  userScore = secondsLeft;
  window.localStorage.setItem(userName, userScore);
  function displayScores() {
    var user;
    var score;
    var storedScores = Object.entries(localStorage).map(function (storedInfo) {
      return parseInt(storedInfo[1]);
    });
    var highestScore = Math.max(...storedScores);
    var usersWithHighScore = Object.entries(localStorage).map(function (
      keyValuePair
    ) {
      score = parseInt(keyValuePair[1]);
      user = keyValuePair[0];
      if (score === highestScore) {
        return user;
      }
      document.getElementById("scores").innerText = localStorage.getItem(userName, userScore);
    });
  }
});
