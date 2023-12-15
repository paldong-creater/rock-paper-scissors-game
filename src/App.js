import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Dialog from "./components/Dialog";
import BattleGround from "./components/BattleGround";

import { useState } from "react";
function App() {
  const [rules, setRules] = useState(false);
  const [battleGround, setBattleGround] = useState("off");
  const [userChoice, setUserChoice] = useState();
  const [computerChoice, setComputerChoice] = useState("close");
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
    const randomNum = Math.floor(1 + Math.random() * 3);
      if (randomNum === 1) {
        setComputerChoice("paper");
      } else if (randomNum === 2) {
        setComputerChoice("scissors");
      } else {
        setComputerChoice("rock");
      }
  };


  const handleBattleOff = () => {
    setBattleGround("off");
  };

 // function to update score
  const getScore = (condition) => {
    if (condition === "YOU WON") {
      setScore(function (prevScore) {
        return prevScore + 1;
      });
    } else if (condition === "YOU LOST") {
      setScore(function (prevScore) {
        return prevScore - 1;
      });
    } else {
      setScore(function (prevScore) {
        return prevScore;
      });
    }
  };


  // different steps tried to make winner effects with gradient background

  // let winnerCircle;

  // // with useRef we can store previous value of state.
  // const prevScoreRef = useRef();

  // // useEffect to check for any update on score state.
  // useEffect(() => {
  //   prevScoreRef.current = score;
  // }, [score]);

  // const prevScore = prevScoreRef.current;

  // if (score > prevScore) {
  //   winnerCircle = "user";
  // } else if (score < prevScore) {
  //   winnerCircle = "computer";
  // } else {
  //   winnerCircle = "";
  // }
  
  // id={winnerCircle=="user"?"winner-user":winnerCircle=="computer"?"winner-computer":""}

  return (
    <div className="App">
      <Header score={score} />
      {rules && <Dialog closeClick={closeClick} />}
      {battleGround === "on" ? (
        <BattleGround
          userChoice={userChoice} computerChoice={computerChoice}
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
