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
var nextEl = document.querySelector('.advance');
var boxes = document.querySelectorAll('.box');
var answers = ["choice1", "choice2", "choice3", "choice4", "choice1"];
var cursor = 0;

console.log(boxes[1].dataset.index);
console.log(boxes)

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

// form.addEventListener('submit', function (event) {
//     event.preventDefault();
//     var el = event.target;

//     if (el.matches('#choice')) {

//     }
// });

displayBox();

