'use strict';

let randomNumber = Math.trunc(Math.random() * 20) + 1;
let scoreNumber = 20;
let points = 0;
console.log(randomNumber);

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  Number((document.querySelector('.number').textContent = guess));

  // When there is no input
  if (!guess || guess > 20) {
    document.querySelector('.message').textContent = '⛔ Not a valid number!';
    Number((document.querySelector('.number').textContent = '?'));

    // when player wins
  } else if (guess === randomNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number!';
    document.body.style.backgroundColor = '#cbe86b';
    Number((document.querySelector('.number').textContent = guess));

    if (scoreNumber > points) {
      points = scoreNumber;
      document.querySelector('.highscore').textContent = points;
    }

    // when guess is too high
  } else if (guess > randomNumber) {
    if (scoreNumber > 1) {
      document.querySelector('.message').textContent = '📈 Too High! ';
      scoreNumber--;
      document.querySelector('.score').textContent = scoreNumber;
    } else {
      document.querySelector('.message').textContent =
        '😵 Game Over! Try again! ';
      document.querySelector('.number').textContent = guess;
      document.querySelector('.score').textContent = 0;
      points = 0;
      document.querySelector('.highscore').textContent = points;
    }

    // when guess is too low
  } else {
    if (scoreNumber > 1) {
      document.querySelector('.message').textContent = '📉 Too Low! ';
      scoreNumber--;
      document.querySelector('.score').textContent = scoreNumber;
    } else {
      document.querySelector('.message').textContent =
        '😵 Game Over! Try again! ';
      document.querySelector('.number').textContent = guess;
      document.querySelector('.score').textContent = 0;
      points = 0;
      document.querySelector('.highscore').textContent = points;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  randomNumber = Math.trunc(Math.random() * 20) + 1;
  scoreNumber = 20;
  console.log(randomNumber);

  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = 20;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.body.style.backgroundColor = '#222';
});
