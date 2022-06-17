const timeLeftDisplay = document.querySelector("#time-left");
const resultDisplay = document.querySelector("#result");
const startPauseButton = document.querySelector("#start-pause-button");
const squares = document.querySelectorAll(".grid div");
const logLeft = document.querySelectorAll(".log-left");
const logRight = document.querySelectorAll(".log-right");
let currentIndex = 76;
const width = 9;
let timerID;
let autComeTimerId;
let currentTime = 20;
const carsLeft = document.querySelectorAll(".car-left");
const carsRight = document.querySelectorAll(".car-right");

function moveFrog(e) {
  squares[currentIndex].classList.remove("frog");
  console.log(e);
  switch (e.key) {
    case "ArrowLeft":
      if (currentIndex % width !== 0) {
        currentIndex--;
        lose();
        win();
        console.log("left");
      }
      break;
    case "ArrowRight":
      if (currentIndex % width < width - 1) {
        console.log("right");
        lose();
        win();
        currentIndex++;
      }
      break;

    case "ArrowUp":
      if (currentIndex - width >= 0) {
        console.log("up");
        lose();
        win();
        currentIndex -= width;
      }
      break;

    case "ArrowDown":
      if (currentIndex + width < width * width) {
        console.log("down");
        lose();
        win();
        currentIndex += width;
      }
      break;
  }
  squares[currentIndex].classList.add("frog");
}

function autoMoveElements() {
  currentTime--;
  timeLeftDisplay.textContent = currentTime;
  logLeft.forEach((logLeft) => moveLogLeft(logLeft));
  logRight.forEach((logRight) => moveLogRight(logRight));
  carsLeft.forEach((carLeft) => moveCarLeft(carLeft));
  carsRight.forEach((carRight) => moveCarRight(carRight));
  win();
}
function checkOutComes() {
  lose();
  win();
}

function moveLogLeft(logLeft) {
  switch (true) {
    case logLeft.classList.contains("l1"):
      logLeft.classList.remove("l1");
      logLeft.classList.add("l2");
      break;
    case logLeft.classList.contains("l2"):
      logLeft.classList.remove("l2");
      logLeft.classList.add("l3");
      break;
    case logLeft.classList.contains("l3"):
      logLeft.classList.remove("l3");
      logLeft.classList.add("l4");
      break;
    case logLeft.classList.contains("l4"):
      logLeft.classList.remove("l4");
      logLeft.classList.add("l5");
      break;
    case logLeft.classList.contains("l5"):
      logLeft.classList.remove("l5");
      logLeft.classList.add("l1");
      break;
  }
}

function moveLogRight(logRight) {
  switch (true) {
    case logRight.classList.contains("l1"):
      logRight.classList.remove("l1");
      logRight.classList.add("l5");
      lose();
      break;
    case logRight.classList.contains("l2"):
      logRight.classList.remove("l2");
      logRight.classList.add("l1");
      lose();
      break;
    case logRight.classList.contains("l3"):
      logRight.classList.remove("l3");
      logRight.classList.add("l2");
      lose();
      break;
    case logRight.classList.contains("l4"):
      logRight.classList.remove("l4");
      logRight.classList.add("l3");
      lose();
      break;
    case logRight.classList.contains("l5"):
      logRight.classList.remove("l5");
      logRight.classList.add("l4");
      lose();
      break;
  }
}

function moveCarLeft(carLeft) {
  switch (true) {
    case carLeft.classList.contains("c1"):
      carLeft.classList.remove("c1");
      carLeft.classList.add("c2");
      lose();
      break;
    case carLeft.classList.contains("c2"):
      carLeft.classList.remove("c2");
      carLeft.classList.add("c3");
      lose();
      break;
    case carLeft.classList.contains("c3"):
      carLeft.classList.remove("c3");
      carLeft.classList.add("c1");
      lose();
      break;
  }
}
function moveCarRight(carRight) {
  switch (true) {
    case carRight.classList.contains("c1"):
      carRight.classList.remove("c1");
      carRight.classList.add("c3");
      lose();
      break;
    case carRight.classList.contains("c2"):
      carRight.classList.remove("c2");
      carRight.classList.add("c1");
      lose();
      break;
    case carRight.classList.contains("c3"):
      carRight.classList.remove("c3");
      carRight.classList.add("c2");
      lose();
      break;
  }
}

function lose() {
  if (
    squares[currentIndex].classList.contains("c1") ||
    squares[currentIndex].classList.contains("l4") ||
    squares[currentIndex].classList.contains("l5") ||
    currentTime <= 0
  ) {
    resultDisplay.textContent = "Game over";
    clearInterval(timerID);
    clearInterval(checkOutComes);
    squares[currentIndex].classList.remove("frog");
    document.removeEventListener("keyup", moveFrog);
  }
}

function win() {
  if (squares[currentIndex].classList.contains("ending-block")) {
    resultDisplay.textContent = "Win";
    clearInterval(timerID);
    clearInterval(checkOutComes);
    document.removeEventListener("keyup", moveFrog);
  }
}

startPauseButton.addEventListener("click", () => {
  if (timerID) {
    clearInterval(timerID);
    clearInterval(checkOutComes);
    checkOutComes = null;
    timerID = null;
    document.removeEventListener("keyup", moveFrog);
  } else {
    timerID = setInterval(autoMoveElements, 1000);
    autComeTimerId = setInterval(checkOutComes, 50);
    document.addEventListener("keyup", moveFrog);
  }
});
