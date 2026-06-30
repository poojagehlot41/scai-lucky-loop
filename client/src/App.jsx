import AppRoutes from "./routes/AppRoutes";
import WalletProvider from "./context/WalletContext";

function App() {

  return (

    <WalletProvider>

      <AppRoutes />

    </WalletProvider>

  );

}

export default App;