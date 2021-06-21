import React, { useState } from "react";
import "./styles.css";
import Item from "./Item";
import Score from "./Score";
// import ComputerSection from "./ComputerSection";

var weaponArray = ["Rock", "Paper", "Scissors"];

export default function App() {
  var [userScore, setUserScore] = useState(0);
  var [computerScore, setComputerScore] = useState(0);
  var [message, setMessage] = useState(
    "Please Press any of the buttons to start"
  );
  var [computerImage, setComputerImage] = useState("images/game.png");

  function handleClick(userChoice) {
    var index = Math.floor(Math.random() * 3);
    var computerChoice = weaponArray[index];
    setComputerImage("images/" + computerChoice.toLowerCase() + ".png");
    console.log(userChoice, computerChoice);

    if (
      (userChoice === "Rock" && computerChoice === "Scissors") ||
      (userChoice === "Paper" && computerChoice === "Rock") ||
      (userChoice === "Scissors" && computerChoice === "Paper")
    ) {
      setMessage("Hurray!! You won this round");
      setUserScore(userScore + 1);
    } else if (userChoice === computerChoice) {
      setMessage("It's a Draw");
    } else {
      setMessage("Oh No!! Computer won this round");
      setComputerScore(computerScore + 1);
    }

    setTimeout(() => {
      setMessage("Please Press any of the buttons to start");
      setComputerImage("images/game.png");
    }, 2000);
  }

  return (
    <div className="App">
      <h1>Rock Paper Scissors</h1>
      <h2>You</h2>
      <div className="You">
        <div>
          <Item
            name="Paper"
            image="images/paper.png"
            alt="Paper"
            onButtonClick={handleClick}></Item>
        </div>
        <div>
          <Item
            name="Rock"
            image="/images/rock.png"
            alt="Rock"
            onButtonClick={handleClick}></Item>
          {/* <button onClick={() => handleClick("Rock")}>Rock</button> */}
        </div>
        <div>
          <Item
            name="Scissors"
            image="/images/scissors.png"
            alt="Scissors"
            onButtonClick={handleClick}></Item>
          {/* <button onClick={() => handleClick("Scissors")}>Scissors</button> */}
        </div>
      </div>
      <Score
        message={message}
        userScore={userScore}
        computerScore={computerScore}
      />
      <div>
        <h2>Computer's Choice</h2>
        <img
          className="ComputerImage"
          src={computerImage}
          alt="computer's choice"
        />
        {/* <ComputerSection /> */}
      </div>
    </div>
  );
}

<div className=""></div>;
