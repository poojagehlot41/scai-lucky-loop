import "../styles/footer.css";

function Footer() {

  return (

    <footer className="footer">

      <div className="footer-container">

        <h2>
          SCAI Lucky Loop
        </h2>

        <p className="footer-brand">
          Powered by <span>EtherAuthority</span> × <span>SecureChain AI</span>
        </p>

        <p className="footer-text">
          Telegram Web3 Lottery Platform developed with React, Node.js,
          Solidity and SecureChain AI technologies.
          Secure, transparent and decentralized.
        </p>

        <div className="footer-divider"></div>

        <p className="footer-author">
          Built  by <strong>Pooja Gehlot</strong>
        </p>

        <p className="footer-copy">
          © 2026 SCAI Lucky Loop. All Rights Reserved.
        </p>

      </div>

    </footer>

  );

}

export default Footer;