import "../css/Dialog.css";
import rulesImage from "../images/image-rules.svg";
import closeIcon from "../images/icon-close.svg";

function Footer({ closeClick }) {
  return (
    <div id="overlay">
      {/* dialog tag is used to display content on top of existing element */}
      <dialog className="dialog" styles={{ position: "absolute" }} open>
        <header id="dialog-header">
          <h2>RULES</h2>
          <img id="close-icon-desktop" src={closeIcon} onClick={closeClick} />
        </header>
        <img id="rules-image" src={rulesImage} />
        <img id="close-icon-mobile" src={closeIcon} onClick={closeClick} />
      </dialog>
    </div>
  );
}

export default Footer;
