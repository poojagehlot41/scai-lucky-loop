import { useContext } from "react";

import { WalletContext } from "../context/WalletContext";

function useWallet() {

  return useContext(WalletContext);

}

export default useWallet;