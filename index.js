let firstCard = getRandomCard();
let secondCard = getRandomCard();

let cards = [firstCard, secondCard];

let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";

let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardEl = document.getElementById("card-el");

function getRandomCard() {
  return 5;
}
function startGame() {
  renderGame();
}

function renderGame() {
  cardEl.textContent = "Cards : ";
  for (let i = 0; cards.length; i++) {
    cardEl.textContent += cards[i] + " ";
  }

  sumEl.textContent = "Sum : " + sum;
  if (sum < 21) {
    message = "Do you want to draw a new card ? ";
  } else if (sum === 21) {
    message = "You've got Blackjack ";
    hasBlackJack = true;
  } else {
    message = "You're out of the game";
    isAlive = false;
  }

  messageEl.textContent = message;
}

function newCard() {
  let card = getRandomCard();

  sum += card;
  cards.push(card);
  renderGame();
}
