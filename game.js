const btn = document.querySelector("button");
//const imgs = document.querySelectorAll("img");
//const img1 = imgs[0];
//const img2 = imgs[1];
//const img3 = imgs[2];
const numbers = document.querySelectorAll("p");
const header = document.querySelector('[data-summary="your-choice"]');
const gameSummary = {
  numbers: 0,
  wins: 0,
  looses: 0,
  draws: 0,
};
const game = {
  playerHand: "",
  aiHand: "",
};
const hands = [...document.querySelectorAll("img")];

function handselection() {
  hands.forEach((hand) => {
    hand.style.boxShadow = "";
  });
  game.playerHand = this.dataset.option;
  this.style.boxShadow = "0 0 0 4px yellow";

  return game.playerHand;
}
function checkresult() {
  if (
    (game.playerHand == "papier" && game.aiHand == "kamień") ||
    (game.playerHand == "kamień" && game.aiHand == "nożyczki") ||
    (game.playerHand == "nożyczki" && game.aiHand == "papier")
  ) {
    return "wygrales";
  } else if (game.playerHand == game.aiHand) {
    return "remis";
  } else return "przegrales";
}

function publishResult(player, ai, result) {
  header.textContent = player;
  document.querySelector('[data-summary="ai-choice"]').textContent = ai;
  document.querySelector("p.numbers span").textContent = ++gameSummary.numbers;

  if (result == "wygrales") {
    document.querySelector("p.wins span").textContent = ++gameSummary.wins;
    document.querySelector('[data-summary="who-win"]').textContent = "Ty :]";
    document.querySelector('[data-summary="who-win"]').style.color = "green";
  } else if (result == "remis") {
    document.querySelector("p.draws span").textContent = ++gameSummary.draws;
    document.querySelector('[data-summary="who-win"]').textContent = "Remis :|";
    document.querySelector('[data-summary="who-win"]').style.color = "blue";
  } else if (result == "przegrales") {
    document.querySelector("p.losses span").textContent = ++gameSummary.looses;
    document.querySelector('[data-summary="who-win"]').textContent = "AI :[";
    document.querySelector('[data-summary="who-win"]').style.color = "red";
  }
}

function letsPlay() {
  const index = Math.floor(Math.random() * 3);
  game.aiHand = hands[index].dataset.option;
  console.log(game.aiHand);
  const gameResult = checkresult();
  console.log(gameResult);
  publishResult(game.playerHand, game.aiHand, gameResult);
  hands.forEach((hand) => {
    hand.style.boxShadow = "";
  });
  return game.aiHand;
}
hands.forEach((hand) => hand.addEventListener("click", handselection));
btn.addEventListener("click", letsPlay);
