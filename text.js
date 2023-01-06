/** @format */
let hands = ["paper", "scicors", "Man", "Boy"];
function getHand() {
  let randomIndex = Math.floor(Math.random() * 2);
  return hands[randomIndex];
}

console.log(getHand());
