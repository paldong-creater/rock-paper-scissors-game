import { useState } from "react";
import "../css/BattleGround.css";
// import bgImage from "../images/winner-bg.png";

const BattleGround = ({
  userChoice,
  computerChoice,
  handleBattleOff,
  getScore,
}) => {
  const [computerState, setComputerState] = useState(false);
  const userIcon = require(`../images/icon-${userChoice}.svg`);
  const computerIcon = require(`../images/icon-${computerChoice}.svg`);
  // const [holdResult, setResult] = useState("");

  let finalResult;

  // const getResult = () => {
  //   if ((userChoice === "rock") & (computerChoice === "scissors")) {
  //     return "YOU WON";
  //   } else if ((userChoice === "rock") & (computerChoice === "paper")) {
  //     return "YOU LOST";
  //   } else if ((userChoice === "rock") & (computerChoice === "rock")) {
  //     return "DRAW";
  //   } else if ((userChoice === "paper") & (computerChoice === "rock")) {
  //     return "YOU WON";
  //   } else if ((userChoice === "paper") & (computerChoice === "scissors")) {
  //     return "YOU LOST";
  //   } else if ((userChoice === "paper") & (computerChoice === "paper")) {
  //     return "DRAW";
  //   } else if ((userChoice === "scissors") & (computerChoice === "paper")) {
  //     return "YOU WON";
  //   } else if ((userChoice === "scissors") & (computerChoice === "rock")) {
  //     return "YOU LOST";
  //   } else if ((userChoice === "scissors") & (computerChoice === "scissors")) {
  //     return "DRAW";
  //   } else {
  //     return "DRAW";
  //   }
  // };



  if ((userChoice === "rock") & (computerChoice === "scissors")) {
    finalResult = "YOU WON";
  } else if ((userChoice === "rock") & (computerChoice === "paper")) {
    finalResult = "YOU LOST";
  } else if ((userChoice === "rock") & (computerChoice === "rock")) {
    finalResult = "DRAW";
  } else if ((userChoice === "paper") & (computerChoice === "rock")) {
    finalResult = "YOU WON";
  } else if ((userChoice === "paper") & (computerChoice === "scissors")) {
    finalResult = "YOU LOST";
  } else if ((userChoice === "paper") & (computerChoice === "paper")) {
    finalResult = "DRAW";
  } else if ((userChoice === "scissors") & (computerChoice === "paper")) {
    finalResult = "YOU WON";
  } else if ((userChoice === "scissors") & (computerChoice === "rock")) {
    finalResult = "YOU LOST";
  } else if ((userChoice === "scissors") & (computerChoice === "scissors")) {
    finalResult = "DRAW";
  } else {
    finalResult = "DRAW";
  }
  console.log(userChoice,computerChoice)
  console.log(finalResult)

  // useEffect(() => {
  //   setResult(getResult);
  //   console.log('hi')
  // }, [getResult]);
  
  const getComputerChoice = () => {
    setComputerState(true);
    getScore(finalResult)
  };

  // useEffect(() => {
  //   getScore(holdResult);
  // }, [holdResult]);

  return (
    <div id="battle-ground-container">
      <div id="battle-ground-header-desktop">
        <h2>YOU PICKED</h2>
        <h2>THE HOUSE PICKED</h2>
      </div>

      <div id="battle-ground-main">
        <div id="user">
          {/* <img  id="winner" src={bgImage} /> */}
          <div id={`select-${userChoice}`}>
            <img src={userIcon} alt="" />
          </div>
        </div>

        {computerState && (
          <div id="result-desktop">
            <h1>{finalResult}</h1>
            <button id="btn-play" onClick={handleBattleOff}>
              PLAY AGAIN
            </button>
          </div>
        )}

        {computerState ? (
          <div id="computer">
            <div id={`select-${computerChoice}`}>
              <img src={computerIcon} alt="" />
            </div>
          </div>
        ) : (
          <div id="placeholder" onClick={getComputerChoice} />
        )}
      </div>

      <div id="battle-ground-header-mobile">
        <h2>YOU PICKED</h2>
        <h2>THE HOUSE PICKED</h2>
      </div>

      {computerState && (
        <div id="result-mobile">
          <h1>{finalResult}</h1>
          <button id="btn-play" onClick={handleBattleOff}>
            PLAY AGAIN
          </button>
        </div>
      )}
    </div>
  );
};

export default BattleGround;
