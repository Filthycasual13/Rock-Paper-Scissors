let rock = document.querySelector(".rock");
let paper = document.querySelector(".paper");
let scissors = document.querySelector(".scissors");
let btn = document.querySelector("#play");
let rules = document.querySelector("#rules");
let close = document.querySelector("#close")
let score = 0;
let housePlay;
let userPlay;

rock.addEventListener("click", choiceRock);
paper.addEventListener("click", choicePaper);
scissors.addEventListener("click", choiceScissors);
rules.addEventListener("click", showRules);
close.addEventListener("click", closeRules);




function choiceRock() {
    document.querySelector("#choices").style.visibility = "hidden";
    document.querySelector("#selection").style.visibility = "visible";
    document.querySelector("#selection").innerHTML = 
    `<div id="player">
    <h2>YOU PICKED</h2>
    <div class="rock">
      <div class="cir">
        <img src="images/icon-rock.svg" alt="Rock"></div>
    </div>
  </div>`;

  houseChoice();
  userPlay = "Rock";
  gameR();
}

function choicePaper() {
    document.querySelector("#choices").style.visibility = "hidden";
    document.querySelector("#selection").style.visibility = "visible";
    document.querySelector("#selection").innerHTML = 
    `<div id="player">
    <h2>YOU PICKED</h2>
    <div class="paper">
      <div class="cir">
        <img src="images/icon-paper.svg" alt="Paper"></div>
    </div>
  </div>`;
  userPlay = "Paper";

  houseChoice();
  gameP();
}

function choiceScissors() {
    document.querySelector("#choices").style.visibility = "hidden";
    document.querySelector("#selection").style.visibility = "visible";
    document.querySelector("#selection").innerHTML = 
    `<div id="player">
    <h2>YOU PICKED</h2>
    <div class="scissors">
      <div class="cir">
        <img src="images/icon-scissors.svg" alt="Scissors"></div>
    </div>
  </div>`;

  userPlay = "Scissors";
  
  houseChoice();
  gameS();
}

function houseChoice() {

    let choice = Math.floor(Math.random()*10);
    
    if (choice > -1 && choice < 3) {
        housePlay = "Rock";
        document.querySelector("#player").insertAdjacentHTML("afterend",
        `<div id="house">
        <h2>HOUSE PICKED</h2>
        <div class="rock">
          <div class="cir">
            <img src="images/icon-rock.svg" alt="Rock"></div>
        </div>`)

    } else if (choice > 2 && choice < 7 ) {
        housePlay = "Paper";
        document.querySelector("#player").insertAdjacentHTML("afterend",
        `<div id="house">
        <h2>HOUSE PICKED</h2>
        <div class="paper">
          <div class="cir">
            <img src="images/icon-paper.svg" alt="Paper"></div>
        </div>`)

    } else if (choice > 6 && choice < 10 ) {
        housePlay = "Scissors";
        document.querySelector("#player").insertAdjacentHTML("afterend",
        `<div id="house">
        <h2>HOUSE PICKED</h2>
        <div class="scissors">
          <div class="cir">
            <img src="images/icon-scissors.svg" alt="Scissors"></div>
        </div>`)
    }

    return housePlay;
}

function compare(user, house) {

    if (user == house) {
        document.querySelector("#player").insertAdjacentHTML("afterend",
        `<div id="result">
        <h1>DRAW</h1>
        <div id="play" onclick="playAgain()">
          PLAY AGAIN
        </div>
      </div>`)

      document.querySelector("#result").style.visibility = "visible";
      
    } else if (user == "Rock" && house == "Scissors"){
        document.querySelector("#player").insertAdjacentHTML("afterend",
        `<div id="result">
        <h1>YOU WIN</h1>
        <div id="play" onclick="playAgain()">
          PLAY AGAIN
        </div>
      </div>`)

      document.querySelector("#result").style.visibility = "visible";
      score++;
      document.querySelector("#number").innerHTML = score;

    } else if (user == "Paper" && house == "Rock"){
        document.querySelector("#player").insertAdjacentHTML("afterend",
        `<div id="result">
        <h1>YOU WIN</h1>
        <div id="play" onclick="playAgain()">
          PLAY AGAIN
        </div>
      </div>`)

      document.querySelector("#result").style.visibility = "visible";
      score++;
      document.querySelector("#number").innerHTML = score;

    } else if (user == "Scissors" && house == "Paper"){
        document.querySelector("#player").insertAdjacentHTML("afterend",
        `<div id="result">
        <h1>YOU WIN</h1>
        <div id="play" onclick="playAgain()">
          PLAY AGAIN
        </div>
      </div>`)

      document.querySelector("#result").style.visibility = "visible";
      score++;
      document.querySelector("#number").innerHTML = score;

    } else if (user == "Scissors" && house == "Rock"){
        document.querySelector("#player").insertAdjacentHTML("afterend",
        `<div id="result">
        <h1>YOU LOSE</h1>
        <div id="play" onclick="playAgain()">
          PLAY AGAIN
        </div>
      </div>`)

      document.querySelector("#result").style.visibility = "visible";


    } else if (user == "Rock" && house == "Paper"){
        document.querySelector("#player").insertAdjacentHTML("afterend",
        `<div id="result">
        <h1>YOU LOSE</h1>
        <div id="play" onclick="playAgain()">
          PLAY AGAIN
        </div>
      </div>`)

      document.querySelector("#result").style.visibility = "visible";


    } else if (user == "Paper" && house == "Scissors"){
        document.querySelector("#player").insertAdjacentHTML("afterend",
        `<div id="result">
        <h1>YOU LOSE</h1>
        <div id="play" onclick="playAgain()">
          PLAY AGAIN
        </div>
      </div>`)

      document.querySelector("#result").style.visibility = "visible";
    }
}

function gameR() {
    compare(userPlay, housePlay)
}

function gameP() {
    compare(userPlay, housePlay)
}

function gameS() {
    compare(userPlay, housePlay)
}

function playAgain() {
    document.querySelector("#selection").style.visibility = "hidden";
    document.querySelector("#result").style.visibility = "hidden";
    document.querySelector("#choices").style.visibility = "visible";
}

function showRules() {
  document.querySelector("#rule-card").style.visibility = "visible";
}

function closeRules() {
  document.querySelector("#rule-card").style.visibility = "hidden";
}



