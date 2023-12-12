import "../css/Footer.css";

function Footer({ openClick }) {
  return (
    <div id="footer-container">
      <button id="rules" onClick={openClick}>
        RULES
      </button>
    </div>
  );
}

export default Footer;
