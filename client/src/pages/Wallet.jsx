import toast from "react-hot-toast";

import Button from "../components/Button";
import { useWallet } from "../context/WalletContext";

import "../styles/wallet.css";

function Wallet() {

  const {
    walletAddress,
    walletBalance,
    isConnected,
    connectWallet,
    disconnectWallet,
  } = useWallet();

  function handleConnect() {

    connectWallet();

    setTimeout(() => {
      toast.success("Wallet Connected Successfully");
    }, 500);

  }

  function handleDisconnect() {

    disconnectWallet();

    toast.success("Wallet Disconnected");

  }

  return (

    <section className="wallet-page container">

      <div className="wallet-box">

        <span className="wallet-badge">
          Secure Wallet
        </span>

        <h1>Wallet Dashboard</h1>

        {

          isConnected ? (

            <>

              <p>

                <strong>Status:</strong>

                <br />

                🟢 Connected

              </p>

              <p>

                <strong>Wallet Address</strong>

                <br />

                {walletAddress.slice(0, 8)}...
                {walletAddress.slice(-6)}

              </p>

              <p>

                <strong>Network Balance</strong>

                <br />

                {walletBalance}

              </p>

              <Button
                text="Disconnect Wallet"
                type="secondary"
                onClick={handleDisconnect}
              />

            </>

          ) : (

            <>

              <p>

                Connect your MetaMask wallet to access
                SCAI Lucky Loop.

              </p>

              <Button
                text="Connect MetaMask"
                onClick={handleConnect}
              />

            </>

          )

        }

      </div>

    </section>

  );

}

export default Wallet;