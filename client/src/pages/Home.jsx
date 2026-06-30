import { useNavigate } from "react-router-dom";
import { useWallet } from "../context/WalletContext";

import hero from "../assets/hero.png";
import Button from "../components/Button";
import FeatureCard from "../components/FeatureCard";
import StatsSection from "../components/StatsSection";
import HowItWorks from "../components/HowItWorks";

import "../styles/home.css";

function Home() {

  const navigate = useNavigate();

  const { walletAddress, connectWallet } = useWallet();

  return (

    <>

      <section className="hero container">

        <div className="hero-left">

          <h1>SCAI Lucky Loop</h1>

          <h2>Telegram Web3 Lottery Platform</h2>

          <p>
            Participate in daily blockchain-powered lottery games,
            earn reward coins, invite friends, connect your wallet,
            and convert rewards into SecureChain AI Tokens.
          </p>

          <div className="hero-buttons">

            <Button
              text="Play Now"
              onClick={() => navigate("/lottery")}
            />

            <Button
              type="secondary"
              text={
                walletAddress
                  ? "Wallet Connected ✅"
                  : "Connect Wallet"
              }
              onClick={connectWallet}
            />

          </div>

        </div>

        <div className="hero-right">

          <img
            src={hero}
            alt="SCAI Lucky Loop Hero"
          />

        </div>

      </section>

      <FeatureCard />

      <StatsSection />

      <HowItWorks />

    </>

  );

}

export default Home;