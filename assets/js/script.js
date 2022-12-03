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

var form = document.forms.codeQuiz;
var radio1 = form.elements.firstQ;
var value1 = radio1.value;
var radio2 = form.elements.secondQ;
var value2 = radio2.value;
var radio3 = form.elements.thirdQ;
var value3 = radio3.value
var radio4 = form.elements.fourthQ;
var value4 = radio4.value;
var radio5 = form.elements.fifthQ;
var value5 = radio5.value;
var nextEl = document.querySelector('.advance');
var boxes = document.querySelectorAll('.box');
var answers = ["a", "b", "c", "d", "a"];
var cursor = 0;
var score = 0;
// var userScore = localStorage.getItem("userScore");

var displayBox = function () {
    for (var box of boxes) {
        if (box.dataset.index == cursor) {
            box.setAttribute("style", "display: block")
        } else {
            box.setAttribute("style", "display: none")
        }
    }
};

var advance = function () {
    if (cursor < boxes.length - 1) {
        cursor++
    }
    displayBox();
};

nextEl.addEventListener('click', advance)

form.addEventListener('submit', function (event) {
    event.preventDefault();
    var checked1 = document.querySelector('input[name="firstQ"]:checked').value;
    var checked2 = document.querySelector('input[name="secondQ"]:checked').value;
    var checked3 = document.querySelector('input[name="thirdQ"]:checked').value;
    var checked4 = document.querySelector('input[name="fourthQ"]:checked').value;
    var checked5 = document.querySelector('input[name="fifthQ"]:checked').value;
    var chex = [checked1, checked2, checked3, checked4, checked5];
    console.log(chex);
    for (var i = 0; i < chex.length; i++) {
        if (chex[i] === answers[i]) {
            score++
        }
    }
    console.log("score: " + score)

});

displayBox();

