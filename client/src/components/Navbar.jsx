import { NavLink } from "react-router-dom";
import { FaWallet } from "react-icons/fa";

import { useWallet } from "../context/WalletContext";

import "../styles/navbar.css";

function Navbar() {

  const {

    isConnected,
    walletAddress,
    disconnectWallet,

  } = useWallet();

  return (

    <nav className="navbar">

      <div className="nav-container">

        <div className="logo-area">

          <h2 className="logo">
            SCAI Lucky Loop
          </h2>

          <span className="brand-name">
            Powered by EtherAuthority
          </span>

        </div>

        <div className="nav-links">

          <NavLink to="/">
            Home
          </NavLink>

          <NavLink to="/lottery">
            Lottery
          </NavLink>

          <NavLink to="/wallet">
            Wallet
          </NavLink>

          <NavLink to="/referral">
            Referral
          </NavLink>

          <NavLink to="/profile">
            Profile
          </NavLink>

        </div>

        {

          isConnected && (

            <div className="wallet-info">

              <span>

                <FaWallet />

                {" "}

                {walletAddress.slice(0,6)}...
                {walletAddress.slice(-4)}

              </span>

              <button
                className="disconnect-btn"
                onClick={disconnectWallet}
              >

                Disconnect

              </button>

            </div>

          )

        }

      </div>

    </nav>

  );

}

export default Navbar;