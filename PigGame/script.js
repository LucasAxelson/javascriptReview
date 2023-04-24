'use strict';

resetGame();

document.querySelector(`.btn--roll`).addEventListener(`click`, function () {
  if (!dice.classList.contains(`hidden`) && player.heldScore <= 100) {
    checkScore();
    checkPlayer();

    let rollValue = diceRoll();

    if (rollValue === 1) {
      score = 0;

      alterRolledScore(score, score);
      newPlayer();
    } else {
      score += rollValue;

      alterRolledScore(score, score);
    }
  }
});

document.querySelector(`.btn--hold`).addEventListener(`click`, function () {
  checkPlayer();
  heldScore += score;
  player.heldScore += heldScore;
  currentScore.textContent = player.heldScore;
  rolledScore.textContent = 0;

  checkScore();
  newPlayer();
  resetScores();
});

document.querySelector(`.btn--new`).addEventListener(`click`, function () {
  resetGame();
  diceRoll();
  dice.classList.remove(`hidden`);
});
