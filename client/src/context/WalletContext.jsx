import { createContext, useContext, useState } from "react";
import { connectWallet } from "../services/wallet";

export const WalletContext = createContext();

function WalletProvider({ children }) {

  const [walletAddress, setWalletAddress] = useState("");

  const [walletBalance, setWalletBalance] = useState("");

  const [isConnected, setIsConnected] = useState(false);

  async function handleConnectWallet() {

    try {

      const wallet = await connectWallet();

      if (!wallet) return;

      setWalletAddress(wallet.address);

      setWalletBalance(wallet.balance);

      setIsConnected(true);

    } catch (error) {

      console.log(error);

    }

  }

  function disconnectWallet() {

    setWalletAddress("");

    setWalletBalance("");

    setIsConnected(false);

  }

  return (

    <WalletContext.Provider
      value={{
        walletAddress,
        walletBalance,
        isConnected,
        connectWallet: handleConnectWallet,
        disconnectWallet,
      }}
    >

      {children}

    </WalletContext.Provider>

  );

}

export function useWallet() {

  return useContext(WalletContext);

}

export default WalletProvider;