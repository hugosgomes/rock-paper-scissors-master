const screenGame = document.querySelector(".screen-game");
const screenPick = document.querySelector(".screen-pick");

const btnPickGames = document.querySelectorAll(".screen-game .pick");
const btnPlayAgain = document.querySelector(".result-pick button");

const yourPick = screenPick.querySelector(".your-pick .pick");
const housePick = screenPick.querySelector(".house-pick .pick");
const houseText = screenPick.querySelector(".house-pick span");

const spanResult = screenPick.querySelector(".result-pick span");
const valueScore = document.querySelector(".value-score");

const picks = ["paper", "rock", "scissor"];

const gameParams = {
  yourPick: "",
  housePick: "",
  resultPick: "",
  score: 0,
};

function setResultPick() {
  switch (gameParams.yourPick) {
    case "paper":
      if (gameParams.housePick === "paper") {
        gameParams.resultPick = "draw";
      } else if (gameParams.housePick === "rock") {
        gameParams.resultPick = "win";
      } else if (gameParams.housePick === "scissor") {
        gameParams.resultPick = "lose";
      }
      break;

    case "rock":
      if (gameParams.housePick === "paper") {
        gameParams.resultPick = "lose";
      } else if (gameParams.housePick === "rock") {
        gameParams.resultPick = "draw";
      } else if (gameParams.housePick === "scissor") {
        gameParams.resultPick = "win";
      }
      break;

    case "scissor":
      if (gameParams.housePick === "paper") {
        gameParams.resultPick = "win";
      } else if (gameParams.housePick === "rock") {
        gameParams.resultPick = "lose";
      } else if (gameParams.housePick === "scissor") {
        gameParams.resultPick = "draw";
      }
      break;

    default:
      break;
  }

  if (gameParams.resultPick === "win") {
    gameParams.score += 1;
    spanResult.textContent = "VOCÊ VENCEU";
    yourPick.classList.add("winner");
  } else if (gameParams.resultPick === "lose") {
    housePick.classList.add("winner");
    spanResult.textContent = "VOCÊ PERDEU";
  } else {
    spanResult.textContent = "EMPATE";
  }

  valueScore.textContent = gameParams.score;
  screenPick.classList.add("result-game");
}

function setPick(yourHousePick, pick) {
  yourHousePick.classList.remove("neutral-pick");
  yourHousePick.classList.add(pick);
}

function changeToScreenPick() {
  screenGame.style.display = "none";
  screenPick.style.display = "flex";
}

function setHousePick() {
  setTimeout(() => {
    const randomPick = picks[Math.floor(Math.random() * picks.length)];
    gameParams.housePick = randomPick;
    setPick(housePick, `pick-${randomPick}`);
    setResultPick();
    houseText.textContent = "O ADVERSÁRIO ESCOLHEU";
  }, 3000);
}

btnPickGames.forEach((pickGame) => {
  pickGame.addEventListener("click", function () {
    const yourPickClass = this.classList[1];
    gameParams.yourPick = yourPickClass.replace("pick-", "");
    houseText.textContent = "O ADVERSÁRIO ESTÁ ESCOLHENDO...";
    setPick(yourPick, yourPickClass);
    changeToScreenPick();
    setHousePick();
  });
});

btnPlayAgain.addEventListener("click", function () {
  screenGame.style.display = "flex";
  screenPick.style.display = "none";
  screenPick.classList.remove("result-game");
  yourPick.classList.add("neutral-pick");
  yourPick.classList.remove(`pick-${gameParams.yourPick}`, "winner");
  housePick.classList.add("neutral-pick");
  housePick.classList.remove(`pick-${gameParams.housePick}`, "winner");
  gameParams.yourPick = "";
  gameParams.housePick = "";
  gameParams.resultPick = "";
});
