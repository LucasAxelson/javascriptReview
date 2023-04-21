'use strict';

function changeColor(colour) {
  document.querySelector(`body`).style.backgroundColor = colour;
}

function diceRoll() {
  let value = Math.trunc(Math.random() * 20) + 1;
  return value;
}

function resetNumberValues(styleValue, textValue) {
  document.querySelector(`.number`).style.width = styleValue;
  document.querySelector(`.number`).textContent = textValue;
}

function guessTaken(highscore, comment, score) {
  document.querySelector(`.score`).textContent = score;
  document.querySelector(`.message`).textContent = comment;
  document.querySelector(`.highscore`).textContent = highscore;
}

function failedGuess(comment) {
  score--;
  guessTaken(highscore, comment, score);
  resetNumberValues(`15rem`, `?`);
}

function gameOver() {
  guessTaken(highscore, `Game Over`, 0);
  resetNumberValues(`15rem`, `?`);
}

function correctNumber() {
  score++;
  resetNumberValues(`30rem`, `${secretNumber}`);
  secretNumber = diceRoll();
  guessTaken(highscore, `🎉 Correct Number!`, score);
}

function restartGame() {
  if (score > highscore) {
    highscore = score;
  }

  executeGame();

  score = 20;

  changeColor(`#222`);
  resetNumberValues(`15rem`, `?`);
  guessTaken(highscore, `Start guessing...`, score);
  secretNumber = diceRoll();

  document.querySelector(`.guess`).value = ``;
}

function executeGame() {
  const guess = Number(document.querySelector(`.guess`).value);

  // If no guess
  if (!guess) {
    guessTaken(highscore, `⛔ No Number!`, score);
    changeColor(`#222`);
    resetNumberValues(`15rem`, `?`);
  }
  //If correct
  else if (guess === secretNumber) {
    correctNumber();
    changeColor(`green`);
  }
  //If not between 1 and 20
  else if (guess > 20) {
    guessTaken(highscore, `⛔ Between 1 and 20`, score);
    changeColor(`#222`);
    resetNumberValues(`15rem`, `?`);
  }
  // If too high
  else if (guess > secretNumber) {
    if (score > 1) {
      failedGuess(`👎 Too High!`);
      changeColor(`orange`);
    } else {
      gameOver();
      changeColor(`red`);
      restartGame();
      executeGame();
    }
  }
  // If too low
  else if (guess < secretNumber) {
    if (score > 1) {
      failedGuess(`👎 Too Low!`);
      changeColor(`orange`);
    } else {
      gameOver();
      changeColor(`red`);
      restartGame();
      executeGame();
    }
  }
}

let secretNumber = diceRoll();
let score = 20;
let highscore = 0;

document.querySelector(`.again`).addEventListener(`click`, function () {
  restartGame();
  executeGame();
});

document.querySelector(`.check`).addEventListener(`click`, function () {
  executeGame();
});

document.querySelector(`.guess`).addEventListener(`keypress`, function (e) {
  if (e.key === `Enter`) {
    executeGame();
  }
});
