import "../css/Main.css";
import paper from "../images/icon-paper.svg";
import rock from "../images/icon-rock.svg";
import scissors from "../images/icon-scissors.svg";

function Main({ handleBattleOn }) {
  return (
    <div id="main-container">
      <div id="dummy">
        <div id="paper" onClick={() => handleBattleOn("paper")}>
          <img src={paper} alt="" />
        </div>
        <div id="scissors" onClick={() => handleBattleOn("scissors")}>
          <img src={scissors} alt="" />
        </div>
      </div>

      <div id="rock" onClick={() => handleBattleOn("rock")}>
        <img src={rock} alt="" />
      </div>
    </div>
  );
}

export default Main;
