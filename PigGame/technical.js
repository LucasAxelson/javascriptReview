const One = {
  name: `Player One`,
  index: 0,
  rolledScore: 0,
  heldScore: 0,
};

const Two = {
  name: `Player Two`,
  index: 1,
  rolledScore: 0,
  heldScore: 0,
};

const dice = document.querySelector(`.dice`);
const gameWon = document.querySelector(`.player--winner`);
const textWon = document.querySelector(`.winner--text`);
const overlay = document.querySelector(`.overlay`);

let rolledScore = document.getElementById(`score--0`);
let currentScore = document.getElementById(`current--0`);

let player = One;
let score = 0;
let heldScore = 0;

function checkPlayer() {
  rolledScore = document.getElementById(`score--${player.index}`);
  currentScore = document.getElementById(`current--${player.index}`);
}

function alterRolledScore(objectValue, gameValue) {
  player.rolledScore = objectValue;
  rolledScore.textContent = gameValue;
}

function resetScores() {
  heldScore = 0;
  score = 0;
}

function newPlayer() {
  if (player === One) {
    player = Two;
  } else {
    player = One;
  }
}

function checkScore() {
  if (player.heldScore >= 100) {
    dice.classList.add(`hidden`);

    for (let i = 0; i < 2; i++) {
      document.getElementById(`score--${i}`).textContent = 0;
      document.getElementById(`current--${i}`).textContent = 0;
    }

    textWon.textContent = `${player.name} has won!`;
    gameWon.classList.remove(`hidden`);
    overlay.classList.remove(`hidden`);
  }
}

function resetGame() {
  checkPlayer();
  resetScores();

  for (let i = 0; i < 2; i++) {
    document.getElementById(`score--${i}`).textContent = 0;
    document.getElementById(`current--${i}`).textContent = 0;
  }

  One.heldScore = 0;
  Two.heldScore = 0;

  player = One;
  gameWon.classList.add(`hidden`);
  overlay.classList.add(`hidden`);
}

function diceRoll() {
  let roll = Math.trunc(Math.random() * 6 + 1);
  dice.src = `dice-${roll}.png`;
  return roll;
}
