'use strict';
const newGameBtn = document.querySelector(`.btn--new`);
const rollDiceBtn = document.querySelector(`.btn--roll`);
const holdDiceBtn = document.querySelector(`.btn--hold`);
const dice = document.querySelector(`.dice`);

let rolledScoreOne = document.getElementById(`score--0`);
let rolledScoreTwo = document.getElementById(`score--1`);

let currentScoreOne = document.getElementById(`current--0`);
let currentScoreTwo = document.getElementById(`current--1`);

function resetScore() {
  rolledScoreOne.textContent = 0;
  rolledScoreTwo.textContent = 0;

  currentScoreTwo.textContent = 0;
  currentScoreTwo.textContent = 0;
}

function diceRoll() {
  let dice = Math.trunc(Math.random() * 6 + 1);
  return dice;
}

resetScore();

document.querySelector(`.btn--roll`).addEventListener(`click`, function () {
  let rollValue = diceRoll();
  dice.src = `dice-${rollValue}.png`;
});

document.querySelector(`.btn--new`).addEventListener(`click`, function () {
  resetScore();
});
