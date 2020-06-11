var startButton = document.getElementById("startButton");
var answerOne = document.getElementById("answer1");
var answerTwo = document.getElementById("answer2");
var answerThree = document.getElementById("answer3");
var answerFour = document.getElementById("answer4");
var viewHighscores = document.getElementById("highscores");
var timeEl = document.getElementById("timeEl")


var questionOne = {
    question: "Commonly used data types DO NOT include",
    answerOne: "strings",
    answerTwo: "booleans",
    answerThree: "alerts",
    answerFour: "numbers",
    correctAnswer: "strings"
}
var questionTwo = {
    question: "The condition in an if/else statement is enclosed within _______",
    answerOne: "quotes",
    answerTwo: "curly brackets",
    answerThree: "parentheses",
    answerFour: "square brackets",
    correctAnswer: "curly brackets"
}
var questionThree = {
    question: "Arrays in JavaScript can be used to store _______",
    answerOne: "numbers and strings",
    answerTwo: "other arrays",
    answerThree: "booleans",
    answerFour: "all of the above",
    correctAnswer: "all of the above"
}
var questionFour = {
    question: "String values must be enclosed within _______ when being assigned to variables.",
    answerOne: "commas",
    answerTwo: "curly brackets",
    answerThree: "quotes",
    answerFour: "parentheses",
    correctAnswer: "quotes"
}
var questionFive = {
    question: "A very useful tool used during development and debugging for printing content to the debugger is:",
    answerOne: "JavaScript",
    answerTwo: "terminal/bash",
    answerThree: "for loops",
    answerFour: "console.log",
    correctAnswer: "console.log"
}

var highScores = []
// GIVEN I am taking a code quiz
// WHEN I click the start button

    // on start button click the timer starts
    var secondsLeft = 75;
    function countDown() {
      var timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = secondsLeft + " seconds left";
    
        if(secondsLeft === 0) {
          clearInterval(timerInterval);
        }
      }, 1000);
    }   
    // on start button click the start page switches the the first question
    var currentQuestionIndex = 0;
    var arrayOfQuestions = [questionOne, questionTwo, questionThree, questionFour, questionFive];

    // on start button click the answer buttons appear
    // function answerAppear() {
    //     var x = document.getElementById("answerButtons");
    //     if (x.style.display !== "block") {
    //       x.style.display = "none";
    //     } else {
    //       x.style.display = "block";
    //     }
    //   }
    
    function nextQuestion() {
        
          // Use DOM Manipulation to display the next question
            document.querySelector(".jumbotron").innerHTML = "";
        for (var i = 0; i<arrayOfQuestions.length; i++){
            
            console.log(arrayOfQuestions[i])
        }

          
        
    }

// THEN a timer starts and I am presented with a question

// WHEN I answer a question
function askQuestions(){
}
// THEN I am presented with another question
// WHEN I answer a question incorrectly
function incorrect(){
}
// THEN time is subtracted from the clock
function subtractTime(){
}
// WHEN all questions are answered or the timer reaches 0
function allDone(){
}
// THEN the game is over
function gameOver(){
}
// WHEN the game is over
// THEN I can save my initials and score
function leaderBoard(){   
}

//function calls

document.getElementById("startButton").addEventListener("click", countDown);
document.getElementById("startButton").addEventListener("click", nextQuestion);
// document.getElementById("startButton").addEventListener("click", answerAppear);