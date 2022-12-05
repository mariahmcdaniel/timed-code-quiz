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
var nextEl = document.querySelector('.advance');
var boxes = document.querySelectorAll('.box');
var answers = ['b', 'b', 'c', 'd', 'a'];
var cursor = 0;
var score = 0;
var savedName = localStorage.getItem('userName');
var savedScore = localStorage.getItem('score');
var timerEl = document.querySelector('h1');
var secondsLeft = 100;

var displayTime = function () {
    timerEl.textContent = secondsLeft;
};

var setTime = function () {
    displayTime();
    var timerInterval = setInterval(function () {
        secondsLeft--;
        displayTime();

        if (secondsLeft === 0 || cursor > boxes.length - 4) {
            clearInterval(timerInterval);
        }

    }, 500);
};

var displayBox = function () {
    for (var box of boxes) {
        if (box.dataset.index == cursor) {
            box.setAttribute('style', 'display: block')
        } else {
            box.setAttribute('style', 'display: none')
        }
    }
};

var advance = function () {
    if (cursor < boxes.length - 1) {
        cursor++
        if (cursor === 1) {
            setTime();
        } else if (cursor >= 5) {
            nextEl.setAttribute("style", "display: none")
        }
    }
    displayBox();
};

nextEl.addEventListener('click', advance)
var save = document.querySelector('#save');
var finishEl = document.querySelector('#endMessage');

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
    finishEl.textContent = 'your score is:' + ((score * 10) + secondsLeft);
    localStorage.setItem('score', score);
    advance();


});
var highScores = document.querySelector('article');

save.addEventListener('click', function (event) {
    event.preventDefault();

    var userName = document.querySelector('#userNameInput').value;
    localStorage.setItem('userName', userName);
    finishEl.textContent = savedName + ': ' + savedScore;

})


displayBox();


