/** @format */

let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";

let mesageEl = document.getElementById("message");
let sumEl = document.getElementById("sum-el");
let cardEl = document.getElementById("card-el");

function getRandomCard() {
  let randomNumber = Math.floor(Math.random() * 13) + 1;
  if (randomNumber > 10) {
    return 10;
  } else if (randomNumber === 1) {
    return 11;
  } else {
    return randomNumber;
  }
}

function StartGame() {
  isAlive = true;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  renderGame();
}

function renderGame() {
  cardEl.textContent = "Cards: ";
  for (let i = 0; i < cards.length; i++) {
    cardEl.textContent += cards[1] + " ";
  }
  sumEl.textContent = "Sum: " + sum;
  cardEl.textContent = "Card: " + cards[0] + " " + cards[1];
  if (sum <= 20) {
    message = "do you want to draw a new card?";
  } else if (sum === 21) {
    message = "Wohoo! You've got a BlackJack";
    hasBlackJack = true;
  } else {
    message = "You are out of the game! ";
    isAlive = false;
  }
  console.log(sum);

  mesageEl.textContent = message;
}

function NewCard() {
  let card = getRandomCard();
  sum += card;
  cards.push(card);

  renderGame();
}
