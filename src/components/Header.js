import "../css/Header.css"
import logo from "../images/logo.svg";
function Header({score}){
  return (
    <div id="header-container">
      <img src={logo}/>
      <div id="score-container">
        <h3>SCORE</h3>
        <span id="score">{score}</span>
      </div>
    </div>
  )
}

export default Header