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
var finalScore = (score * 10) + secondsLeft;

var displayTime = function () {
    timerEl.textContent = secondsLeft;
};

var subtractTime = function () {
    timerEl.textContent = secondsLeft - 5
}

var setTime = function () {
    displayTime();
    var timerInterval = setInterval(function () {
        secondsLeft--;
        displayTime();
        if (secondsLeft === 0 || cursor > boxes.length - 4) {
            clearInterval(timerInterval);
        }

    }, 1000);
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
        }
    }
    displayBox();
};

form.addEventListener('change', function (event) {
    var radio = event.target;
    if (radio.matches('.choice')) {
        if (radio.value == answers[cursor - 1]) {
            score += 20;
            alert('correct!');
        } else {
            secondsLeft -= 5;
            alert('incorrect! -5 seconds')
            displayTime();
        }
        advance();
    }
});

nextEl.addEventListener('click', advance)
var save = document.querySelector('#save');
var finishEl = document.querySelector('#completeEl');
var submitButton = document.querySelector('#submitButton');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    score += secondsLeft;
    finishEl.textContent = 'your score is:' + score;
    endGameEl.setAttribute('style', 'display: block');
    submitButton.setAttribute('style', 'display: none');
});

var highScoresEl = document.querySelector('ul');
var endGameEl = document.querySelector('#endGame');
var showHighScores = function (obj) {
    for (ob of obj) {
        var o = document.createElement('li')
        o.textContent = ob;
        highScoresEl.appendChild(o)
    }
    playAgain = document.createElement('button');
    playAgain.textContent = 'Play Again';
    endGameEl.appendChild(playAgain);
    playAgain.addEventListener('click', function (event) {
        event.preventDefault();
        cursor = 0;
        nextEl.setAttribute('style', 'display: block');
        secondsLeft = 100;
        endGameEl.setAttribute('style', 'display: none');
        submitButton.setAttribute('style', 'display: block');
        document.getElementById("highScores").innerHTML = "";
        finishEl.textContent = '';
        score = 0;
        var radioClears = document.getElementsByClassName("choice");
        for (var i = 0; i < radioClears.length; i++)
            radioClears[i].checked = false;
        displayTime();
        displayBox();
    })
};

save.addEventListener('click', function (event) {
    event.preventDefault();
    var scoresObj = JSON.parse(localStorage.getItem('scoresObj')) || [];
    var userNameEl = document.querySelector('#userNameInput');
    var userName = userNameEl.value;
    var userNameLabel = document.querySelector('#userNameLabel');
    scoresObj.push(userName + ':' + score)
    localStorage.setItem('scoresObj', JSON.stringify(scoresObj));
    showHighScores(scoresObj);
    save.setAttribute('style', 'display: none');
    userNameEl.setAttribute('style', 'display: none');
    userNameLabel.setAttribute('style', 'display: none');
});


displayBox();


