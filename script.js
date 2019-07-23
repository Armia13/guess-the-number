let playerNum = parseInt(document.querySelector("input").value);
let randomNum = parseInt(Math.random() * 10);
function checkResult(){
  if (playerNum == randomNum) {
    document.querySelector("#result").innerHTML = "Congratulations! You Won";
  } else {
    if (playerNum > randomNum) {
      document.querySelector("#hint").innerHTML = "Try a smaller value";
    } else if (playerNum < randomNum) {
      document.querySelector("#hint").innerHTML = "Try a bigger value";
    }
  }
} 
/*
let playerNum = parseInt(document.querySelector("input").value);
function easyLvl() {
  let randomNum = parseInt(Math.random() * 100);
  function checkResult() {
    if (playerNum == randomNum) {
      document.querySelector("#result").innerHTML = "Congratulations! You Won";
    } else {
      if (playerNum > randomNum) {
        document.querySelector("#hint").innerHTML = "Try a smaller value";
      } else if (playerNum < randomNum) {
        document.querySelector("#hint").innerHTML = "Try a bigger value";
      }
    }
  }
}

function medLvl() {
  let randomNum = parseInt(Math.random() * 500);
  if (playerNum == randomNum) {
    document.querySelector("#result").innerHTML = "Congratulations! You Won";
  } else {
    if (playerNum > randomNum) {
      document.querySelector("#hint").innerHTML = "Try a smaller value";
    } else if (playerNum < randomNum) {
      document.querySelector("#hint").innerHTML = "Try a bigger value";
    }
  }
}

function hardLvl() {
  let randomNum = parseInt(Math.random() * 1000);
  if (playerNum == randomNum) {
    document.querySelector("#result").innerHTML = "Congratulations! You Won";
  } else {
    if (playerNum > randomNum) {
      document.querySelector("#hint").innerHTML = "Try a smaller value";
    } else if (playerNum < randomNum) {
      document.querySelector("#hint").innerHTML = "Try a bigger value";
    }
  }
}
