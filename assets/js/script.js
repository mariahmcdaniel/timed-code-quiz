// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and my score

var form = document.querySelector('form');
var answers = ["choice1", "choice2", "choice3", "choice4", "choice1"];
var q1 = document.forms['codeQuiz']['firstQ'].input;
var q2 = document.forms['codeQuiz']['secondQ'].value;
var q3 = document.forms['codeQuiz']['thirdQ'].value;
var q4 = document.forms['codeQuiz']['fourthQ'].value;
var q5 = document.forms['codeQuiz']['fifthQ'].value;

var userScore = localStorage.getItem("userScore");

form.addEventListener('submit', function (event) {
    event.preventDefault();
});

