const timeLeftDisplay = document.querySelector("#time-left");
const resultDisplay = document.querySelector("#result");
const startPauseButton = document.querySelector("#start-pause-button");
const squares = document.querySelectorAll(".grid div");
const logLeft = document.querySelectorAll(".log-left");
const logRight = document.querySelectorAll(".log-right");
let currentIndex = 76;
const width = 9;
const carsLeft = document.querySelectorAll(".car-left");
const carsRight = document.querySelectorAll(".car-right");

function moveFrog(e) {
  squares[currentIndex].classList.remove("frog");
  console.log(e);
  switch (e.key) {
    case "ArrowLeft":
      if (currentIndex % width !== 0) {
        currentIndex--;
        console.log("left");
      }
      break;
    case "ArrowRight":
      if (currentIndex % width < width - 1) {
        console.log("right");
        currentIndex++;
      }
      break;

    case "ArrowUp":
      if (currentIndex - width >= 0) {
        console.log("up");
        currentIndex -= width;
      }
      break;

    case "ArrowDown":
      if (currentIndex + width < width * width) {
        console.log("down");
        currentIndex += width;
      }
      break;
  }
  squares[currentIndex].classList.add("frog");
}
document.addEventListener("keyup", moveFrog);

function autoMoveElements() {
  logLeft.forEach((logLeft) => moveLogLeft(logLeft));
  logRight.forEach((logRight) => moveLogRight(logRight));
  carsLeft.forEach((carLeft) => moveCarLeft(carLeft));
  carsRight.forEach((carRight) => moveCarRight(carRight));
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
      break;
    case logRight.classList.contains("l2"):
      logRight.classList.remove("l2");
      logRight.classList.add("l1");
      break;
    case logRight.classList.contains("l3"):
      logRight.classList.remove("l3");
      logRight.classList.add("l2");
      break;
    case logRight.classList.contains("l4"):
      logRight.classList.remove("l4");
      logRight.classList.add("l3");
      break;
    case logRight.classList.contains("l5"):
      logRight.classList.remove("l5");
      logRight.classList.add("l4");
      break;
  }
}

function moveCarLeft(carLeft) {
  switch (true) {
    case carLeft.classList.contains("c1"):
      carLeft.classList.remove("c1");
      carLeft.classList.add("c2");
      break;
    case carLeft.classList.contains("c2"):
      carLeft.classList.remove("c2");
      carLeft.classList.add("c3");
      break;
    case carLeft.classList.contains("c3"):
      carLeft.classList.remove("c3");
      carLeft.classList.add("c1");
      break;
  }
}
function moveCarRight(carRight) {
  switch (true) {
    case carRight.classList.contains("c1"):
      carRight.classList.remove("c1");
      carRight.classList.add("c3");
      break;
    case carRight.classList.contains("c2"):
      carRight.classList.remove("c2");
      carRight.classList.add("c1");
      break;
    case carRight.classList.contains("c3"):
      carRight.classList.remove("c3");
      carRight.classList.add("c2");
      break;
  }
}

setInterval(autoMoveElements, 1000);
