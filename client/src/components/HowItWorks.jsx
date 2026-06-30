import "../styles/howitworks.css";

function HowItWorks() {

  return (

    <section className="how-section container">

      <div className="section-heading">

        <span className="section-badge">
          Simple Process
        </span>

        <h2>
          How It Works
        </h2>

        <p>
          Join the blockchain lottery in just four easy steps.
          Everything is transparent, secure and powered by SecureChain AI.
        </p>

      </div>

      <div className="steps">

        <div className="step">

          <div className="step-number">
            1
          </div>

          <h3>
            Connect Wallet
          </h3>

          <p>
            Connect your MetaMask wallet securely and verify your account.
          </p>

        </div>

        <div className="step">

          <div className="step-number">
            2
          </div>

          <h3>
            Buy Ticket
          </h3>

          <p>
            Purchase lottery tickets using SCAI coins from your wallet.
          </p>

        </div>

        <div className="step">

          <div className="step-number">
            3
          </div>

          <h3>
            Daily Draw
          </h3>

          <p>
            Smart contracts automatically select winners with full transparency.
          </p>

        </div>

        <div className="step">

          <div className="step-number">
            4
          </div>

          <h3>
            Claim Rewards
          </h3>

          <p>
            Instantly receive your lottery rewards directly in your wallet.
          </p>

        </div>

      </div>

    </section>

  );

}

export default HowItWorks;