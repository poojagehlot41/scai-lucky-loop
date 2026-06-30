import { useWallet } from "../context/WalletContext";
import "../styles/profile.css";

function Profile() {

  const {

    walletAddress,
    isConnected,

  } = useWallet();

  return (

    <section className="profile-page container">

      <div className="profile-card">

        <div className="profile-avatar">
          PG
        </div>

        <h1>Pooja Gehlot</h1>

        <p className="wallet-address">

          {

            isConnected
              ? `${walletAddress.slice(0,8)}...${walletAddress.slice(-6)}`
              : "Wallet Not Connected"

          }

        </p>

        <div className="profile-stats">

          <div className="stat-box">

            <h2>0</h2>

            <span>Lottery Tickets</span>

          </div>

          <div className="stat-box">

            <h2>0 SCAI</h2>

            <span>Total Rewards</span>

          </div>

          <div className="stat-box">

            <h2>0</h2>

            <span>Referrals</span>

          </div>

        </div>

      </div>

    </section>

  );

}

export default Profile;