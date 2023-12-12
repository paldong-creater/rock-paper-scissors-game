import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Dialog from "./components/Dialog";
import BattleGround from "./components/BattleGround";

import { useState, useEffect, useRef } from "react";
function App() {
  const [rules, setRules] = useState(false);
  const [battleGround, setBattleGround] = useState("off");
  const [userChoice, setUserChoice] = useState();
  const [score, setScore] = useState(0);

  const openClick = () => {
    setRules(true);
  };

  const closeClick = () => {
    setRules(false);
  };

  const handleBattleOn = (id) => {
    setBattleGround("on");
    setUserChoice(id);
  };

  const handleBattleOff = () => {
    setBattleGround("off");
  };

  // function to update score
  const getScore = (condition) => {
    if (condition == "YOU WON") {
      setScore(function (prevScore) {
        return prevScore + 1;
      });
    } else if (condition == "YOU LOST") {
      setScore(function (prevScore) {
        return prevScore - 1;
      });
    } else {
      setScore(function (prevScore) {
        return prevScore;
      });
    }
  };

  let winnerCircle;

  // with useRef we can store previous value of state.
  const prevScoreRef = useRef();

  // useEffect to check for any update on score state.
  useEffect(() => {
    prevScoreRef.current = score;
  }, [score]);

  const prevScore = prevScoreRef.current;

  if (score > prevScore) {
    winnerCircle = "user";
  } else if (score < prevScore) {
    winnerCircle = "computer";
  } else {
    winnerCircle = "";
  }

  // different steps tried to make winner effects with gradient background
  // id={winnerCircle=="user"?"winner-user":winnerCircle=="computer"?"winner-computer":""}

  return (
    <div className="App">
      <Header score={score} />
      {rules && <Dialog closeClick={closeClick} />}
      {battleGround == "on" ? (
        <BattleGround
          userChoice={userChoice}
          handleBattleOff={handleBattleOff}
          getScore={getScore}
        />
      ) : (
        <Main handleBattleOn={handleBattleOn} />
      )}
      <Footer openClick={openClick} />
    </div>
  );
}

export default App;
