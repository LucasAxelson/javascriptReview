'use strict';

init();

document.querySelector(`.btn--roll`).addEventListener(`click`, function () {
  if (!dice.classList.contains(`hidden`) && player.heldScore <= 100) {
    checkScore();
    checkPlayer();

    let rollValue = diceRoll();

    if (rollValue === 1) {
      score = 0;
      rolledScore.textContent = score;
      newPlayer();
    } else {
      score += rollValue;
      rolledScore.textContent = score;
    }
  }
});

document.querySelector(`.btn--hold`).addEventListener(`click`, function () {
  checkPlayer();
  player.heldScore += score;
  currentScore.textContent = player.heldScore;
  rolledScore.textContent = 0;

  checkScore();
  newPlayer();
  score = 0;
});

document.querySelector(`.btn--new`).addEventListener(`click`, function () {
  init();
  dice.classList.remove(`hidden`);
});
